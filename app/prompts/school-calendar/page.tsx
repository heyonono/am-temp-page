import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyPrompt } from "../../components/copy-prompt";

const PROMPT =
  "Here's my school's events page: <events page link>. Turn every event into an .ics calendar file I can import into Google Calendar. Use the exact dates and times from the page. If an event has no time listed, make it an all-day event. Don't guess a time. Before giving me the file, show me a table of every event (name, date, time) so I can check it against the page.";

export const metadata: Metadata = {
  title: "Put your school's calendar in yours | Attention Matters",
  description:
    "One copy-paste AI prompt that turns your school's events page into a calendar file, plus simple import steps for Google Calendar, iPhone and Mac.",
  alternates: { canonical: "/prompts/school-calendar" },
  openGraph: {
    title: "Put your school's calendar in yours: one prompt",
    description: "Turn your school's events page into a calendar file with one AI prompt.",
    url: "/prompts/school-calendar",
  },
};

export default function SchoolCalendarPrompt() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Attention Matters home">
          <Image src="/am-logo-mark.webp" alt="" width={900} height={533} priority />
          <span>Attention Matters</span>
        </Link>
        <span />
        <a className="header-cta" href="https://www.instagram.com/irenebuildsai/">
          <span className="header-cta-full">@IreneBuildsAI</span>
          <span className="header-cta-short">Instagram</span>
        </a>
      </header>

      <article className="prompt-page section-shell">
        <p className="section-label">Free prompt · Tested with free ChatGPT</p>
        <h1>Put your school&apos;s calendar in yours.</h1>
        <p className="prompt-deck">
          Your school posts its events on a website. Your family lives in your calendar. This
          prompt moves the dates across in about five minutes, and you still check every one
          before it lands in your calendar.
        </p>

        <section aria-labelledby="the-prompt">
          <h2 id="the-prompt">The prompt</h2>
          <p>
            Copy it, then replace <code>&lt;events page link&gt;</code> with your school&apos;s events
            page. Just paste the link. You don&apos;t need to copy any text.
          </p>
          <CopyPrompt text={PROMPT} />
          <p className="prompt-callout">
            <strong>Check the table against the page before you download the file.</strong> AI does
            the copying. You make the final call.
          </p>
        </section>

        <section aria-labelledby="step-1">
          <h2 id="step-1"><span>Step 1</span> Make a &ldquo;School&rdquo; calendar first</h2>
          <p>
            On a computer, open Google Calendar, then go to <strong>Other calendars → + → Create new
            calendar</strong> and name it &ldquo;School&rdquo;.
          </p>
          <p className="prompt-muted">
            Recommended: if a date turns out wrong, you can delete this one calendar without touching
            your family calendar. You can also give school events their own colour.
          </p>
        </section>

        <section aria-labelledby="step-2">
          <h2 id="step-2"><span>Step 2</span> Import the file</h2>
          <div className="import-grid">
            <div>
              <h3>Google Calendar</h3>
              <p className="prompt-muted">Use a computer; the phone app can&apos;t import files.</p>
              <ol>
                <li>Download the <code>.ics</code> file ChatGPT gives you.</li>
                <li>Go to <strong>calendar.google.com</strong>, then <strong>⚙️ Settings → Settings → Import &amp; export</strong>.</li>
                <li>Click <strong>Select file from your computer</strong> and choose the file.</li>
                <li>Under <strong>Add to calendar</strong>, pick <strong>School</strong>.</li>
                <li>Click <strong>Import</strong>. The events will show on your phone too.</li>
              </ol>
            </div>
            <div>
              <h3>iPhone</h3>
              <p>Tap the <code>.ics</code> file, then <strong>Add All</strong> and choose your calendar.</p>
              <h3>Mac</h3>
              <p>Double-click the file, or go to <strong>File → Import</strong> in Calendar.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="good-to-know">
          <h2 id="good-to-know">Good to know</h2>
          <ul className="know-list">
            <li><strong>It doesn&apos;t update itself.</strong> If the school changes a date, your calendar won&apos;t. Recheck the events page each month or term.</li>
            <li><strong>Import once.</strong> Importing the same file again creates duplicate events.</li>
            <li><strong>Spot-check one or two events</strong> after importing to make sure the times are right.</li>
            <li><strong>If ChatGPT can&apos;t open the link,</strong> copy the events text from the page and paste it in instead.</li>
          </ul>
        </section>

        <aside className="prompt-footer">
          <p>
            Made by <a href="https://www.instagram.com/irenebuildsai/">@IreneBuildsAI</a>: an AI
            engineer and mom putting AI to work on everyday family admin.
          </p>
          <Link className="quiet-link" href="/">About Attention Matters</Link>
        </aside>
      </article>
    </main>
  );
}
