"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12_000);

    setStatus("submitting");
    setStatusMessage("Sending your inquiry…");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          organization: form.get("organization"),
          inquiry: form.get("inquiry"),
          problem: form.get("problem"),
          website: form.get("website"),
          submissionId: crypto.randomUUID(),
        }),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "Your inquiry could not be sent. Please try again.");
      }

      formElement.reset();
      setStatus("success");
      setStatusMessage("Thanks—your inquiry has been sent. I’ll review it and reply by email.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "Sending took too long. Please check your connection and try again."
          : error instanceof Error
            ? error.message
            : "Your inquiry could not be sent. Please try again.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Organization <span>(optional)</span>
        <input name="organization" autoComplete="organization" maxLength={140} />
      </label>
      <label>
        What are you interested in?
        <select name="inquiry" defaultValue="AI Opportunity Map" required>
          <option>AI Opportunity Map</option>
          <option>Pilot project</option>
          <option>Workshop or speaking</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        What is taking more attention than it should?
        <textarea name="problem" rows={5} maxLength={4000} required />
      </label>
      <div className="form-trap" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="button form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send your inquiry"}
        <svg aria-hidden="true" viewBox="0 0 18 18" width="16" height="16">
          <path d="M4 14L14 4M7 4h7v7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="form-help">
        Your message goes directly to Irene. No mailing list and no automated sales sequence.
      </p>
      {statusMessage ? (
        <p className="form-status" data-state={status} role={status === "error" ? "alert" : "status"} aria-live="polite">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
