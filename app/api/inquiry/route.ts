const CONTACT_EMAIL = "irenebuildsai@gmail.com";
const ALLOWED_INQUIRIES = new Set([
  "AI Opportunity Map",
  "Pilot project",
  "Workshop or speaking",
  "Something else",
]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_ID_PATTERN = /^[0-9a-f-]{36}$/i;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  inquiry?: unknown;
  problem?: unknown;
  website?: unknown;
  submissionId?: unknown;
};

const globalRateLimit = globalThis as typeof globalThis & {
  inquiryAttempts?: Map<string, number[]>;
};

const inquiryAttempts = globalRateLimit.inquiryAttempts ?? new Map<string, number[]>();
globalRateLimit.inquiryAttempts = inquiryAttempts;

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentAttempts = (inquiryAttempts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentAttempts.length >= RATE_LIMIT_MAX) {
    inquiryAttempts.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  inquiryAttempts.set(ip, recentAttempts);
  return false;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ error: "That message is too long to send." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return Response.json({ error: "This form can only be sent from this website." }, { status: 403 });
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const website = cleanString(payload.website, 200);
  if (website) {
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many messages were sent from this connection. Please try again in 15 minutes." },
      { status: 429 },
    );
  }

  const name = cleanString(payload.name, 100);
  const email = cleanString(payload.email, 254).toLowerCase();
  const organization = cleanString(payload.organization, 140);
  const inquiry = cleanString(payload.inquiry, 80);
  const problem = cleanString(payload.problem, 4_000);
  const submissionId = cleanString(payload.submissionId, 36);

  if (!name || !EMAIL_PATTERN.test(email) || !ALLOWED_INQUIRIES.has(inquiry) || !problem) {
    return Response.json(
      { error: "Please complete your name, email, interest, and message before sending." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Inquiry email is unavailable because RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "Email is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const message = [
    "New Attention Matters inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "Not provided"}`,
    `Interest: ${inquiry}`,
    "",
    "What is taking more attention than it should?",
    problem,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        ...(SUBMISSION_ID_PATTERN.test(submissionId)
          ? { "Idempotency-Key": `inquiry-${submissionId}` }
          : {}),
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "Attention Matters <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL],
        reply_to: email,
        subject: `Attention Matters inquiry: ${inquiry}`,
        text: message,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected an inquiry email.", {
        status: resendResponse.status,
        requestId: resendResponse.headers.get("x-request-id"),
      });
      return Response.json(
        { error: "Your message could not be sent right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Inquiry email request failed.", error instanceof Error ? error.message : "Unknown error");
    return Response.json(
      { error: "Your message could not be sent right now. Please check your connection and try again." },
      { status: 502 },
    );
  }
}
