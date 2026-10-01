import Image from "next/image";
import { InquiryForm } from "./components/inquiry-form";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18" width="16" height="16">
    <path d="M4 14L14 4M7 4h7v7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Attention Matters home">
          <Image src="/am-logo-mark.webp" alt="" width={900} height={533} priority />
          <span>Attention Matters</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">Approach</a>
          <a href="#offer">Work together</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">
          <span className="header-cta-full">Start a conversation</span>
          <span className="header-cta-short">Contact</span>
          <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <h1>Put AI to work on the right problem.</h1>
          <p className="hero-deck">
            I help owner-led businesses move from AI curiosity to a practical next step—finding
            the highest-value opportunity, shaping a clear plan, and building a small pilot when
            it makes sense.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">Map your first opportunity <Arrow /></a>
            <a className="quiet-link" href="#approach">How I work</a>
          </div>
        </div>

        <aside className="hero-side" aria-label="A practical path from business friction to a focused pilot">
          <p className="hero-side-intro">Start with the work already asking for attention.</p>
          <div className="working-path">
            <div>
              <strong>Notice</strong>
              <span>Where work repeats, stalls, or quietly falls through.</span>
            </div>
            <div>
              <strong>Decide</strong>
              <span>Whether AI is useful, feasible, and responsible here.</span>
            </div>
            <div>
              <strong>Test</strong>
              <span>The smallest useful version before investing further.</span>
            </div>
          </div>
          <p className="hero-side-note">Small enough to test. Useful enough to matter.</p>
        </aside>
      </section>

      <section className="credibility section-shell" aria-label="Selected experience">
        <p>Nearly 20 years building digital products</p>
        <div className="company-list">
          <span>Samsung</span><span>Nokia</span><span>TELUS</span><span>Yellow Pages</span>
        </div>
      </section>

      <section className="approach section-shell" id="approach">
        <div className="section-intro">
          <h2>Less AI theatre.<br />More practical leverage.</h2>
          <p>
            The goal is not to add AI everywhere. It is to identify one problem worth solving and
            make the first decision with enough clarity to avoid wasted tools, time, and momentum.
          </p>
        </div>
        <div className="principles">
          <article>
            <h3>Find the signal</h3>
            <p>We look for the work that is repetitive, slow, inconsistent, or quietly costing you opportunities.</p>
          </article>
          <article>
            <h3>Choose with care</h3>
            <p>Not every problem needs AI. We weigh business value, effort, data, risk, and the people who will use the result.</p>
          </article>
          <article>
            <h3>Make it tangible</h3>
            <p>You leave with a clear first step—not a cloud of tools, jargon, or an open-ended transformation project.</p>
          </article>
        </div>
      </section>

      <section className="offer" id="offer">
        <div className="section-shell">
          <div className="offer-grid">
            <div className="offer-summary">
              <h2>One bottleneck.<br />One clear opportunity map.</h2>
              <div className="price-lockup">
                <span>Founding-client rate · 3 places</span>
                <strong><small>CAD</small> $250</strong>
              </div>
            </div>
            <div className="offer-detail">
              <p className="offer-lead">
                A focused working session for an owner who knows something could work better—but
                does not need another generic list of AI tools.
              </p>
              <ul>
                <li>Short pre-session questionnaire</li>
                <li>75-minute Zoom working session</li>
                <li>One business bottleneck examined in depth</li>
                <li>A concise, prioritized action map</li>
                <li>A clear recommendation: act, test, or leave it alone</li>
              </ul>
              <a className="button button-light" href="#contact">Request a founding place <Arrow /></a>
            </div>
          </div>

          <div className="scope-note">
            <h3>Advice first. Implementation only when it is truly bounded.</h3>
            <div>
              <p>
                The Opportunity Map is a complete engagement. If a small build is the right next
                move, a separate Pilot Sprint can cover one workflow, up to six hours, one revision,
                and a recorded handoff.
              </p>
              <p className="scope-exclusion">No open-ended support, surprise integrations, or “while we’re here” extras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="evidence section-shell">
        <div className="section-label">Selected community work</div>
        <div>
          <h2>Technology that people can actually use.</h2>
          <p>
            For a volunteer-led community organization, I modernized everyday operations across
            payments, sign-ups, event planning, communications, and a new public website—making
            it easier for volunteers to do good work without wrestling with the tools.
          </p>
          <ul className="evidence-list" aria-label="Project outcomes">
            <li>Digital payments</li><li>Forms and sign-ups</li><li>Event operations</li><li>Web presence</li>
          </ul>
        </div>
      </section>

      <section className="workshops">
        <div className="section-shell workshop-grid">
          <div className="section-label">Workshops by inquiry</div>
          <div>
            <h2>Help people build good judgment around AI.</h2>
            <p>
              I&apos;m exploring practical workshops for educators, parent communities, and small teams—clear,
              grounded, and designed for people who do not live inside technology.
            </p>
            <a className="quiet-link" href="#contact">Ask about a workshop</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-shell about-grid">
          <div className="about-copy">
            <div className="about-heading-row">
              <h2>I&apos;m Irene—an AI Systems Advisor &amp; Software Engineer.</h2>
              <div className="about-portrait">
                <Image
                  src="/irene-portrait-tight.webp"
                  alt="Irene, founder of Attention Matters"
                  width={400}
                  height={500}
                  sizes="(max-width: 680px) 88px, 190px"
                />
              </div>
            </div>
            <p className="about-lead">
              I have spent nearly two decades building digital products and leading technical work.
              Today, I design AI-native workflows that turn ambiguous ideas into clear specifications,
              high-fidelity prototypes, and buildable systems.
            </p>
            <p>
              The thread through all of it is simple: understand the real problem, make the technology
              legible, and build only what will be useful. My experience includes work with global
              technology companies such as Samsung, Nokia, and TELUS.
            </p>
            <p>
              I share practical AI experiments as{" "}
              <a className="inline-link" href="https://www.instagram.com/irenebuildsai/">@IreneBuildsAI</a> on Instagram.
            </p>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy">
          <h2>What is taking more attention than it should?</h2>
          <p>
            Tell me where work gets repetitive, stuck, or dropped. I&apos;ll review it before suggesting
            a conversation—so neither of us spends time on a call that is not a fit.
          </p>
          <p className="contact-note">
            <strong>No free consulting call required.</strong> If there is a fit, we start with a short
            project check—not an hour of vague discovery.
          </p>
        </div>
        <InquiryForm />
      </section>

      <footer className="section-shell">
        <a className="brand footer-brand" href="#top">
          <Image src="/am-logo-mark.webp" alt="" width={900} height={533} />
          <span>Attention Matters</span>
        </a>
        <p>Practical AI, automation, and digital systems.</p>
        <div className="footer-links">
          <span>© 2026 Attention Matters</span>
          <a href="https://www.instagram.com/irenebuildsai/">Instagram · @IreneBuildsAI</a>
          <a href="#contact">Get in touch</a>
        </div>
      </footer>
    </main>
  );
}
