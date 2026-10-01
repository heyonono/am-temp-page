import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROMPTS } from "./prompts";

export const metadata: Metadata = {
  title: "Free AI prompts for busy parents | Attention Matters",
  description:
    "Practical AI prompts for everyday family admin, each one tested before it's shared, with simple step-by-step instructions.",
  alternates: { canonical: "/prompts" },
  openGraph: {
    title: "Free AI prompts for busy parents",
    description: "Practical, tested prompts for everyday family admin.",
    url: "/prompts",
  },
};

export default function PromptsIndex() {
  const [latest, ...rest] = PROMPTS;

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

      <div className="prompt-page section-shell">
        <p className="section-label">Free prompts · Tested first</p>
        <h1>Practical AI for busy parents.</h1>
        <p className="prompt-deck">
          Copy-paste prompts for everyday family admin. I test every one myself before I share it,
          with simple steps so it works the first time.
        </p>

        {latest ? (
          <Link className="prompt-feature" href={`/prompts/${latest.slug}`}>
            <span className="prompt-feature-tag">Newest</span>
            <h2>{latest.title}</h2>
            <p>{latest.summary}</p>
            <span className="prompt-feature-meta">{latest.tool}</span>
            <span className="prompt-feature-go">Get the prompt →</span>
          </Link>
        ) : null}

        {rest.length > 0 ? (
          <ul className="prompt-list">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/prompts/${p.slug}`}>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span>{p.tool}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="prompt-muted prompt-more">New prompts are added as I test them.</p>
        )}

        <aside className="prompt-footer">
          <p>
            Follow <a href="https://www.instagram.com/irenebuildsai/">@IreneBuildsAI</a> for new
            prompts and how-tos.
          </p>
          <Link className="quiet-link" href="/">About Attention Matters</Link>
        </aside>
      </div>
    </main>
  );
}
