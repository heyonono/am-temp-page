import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyPrompt } from "../../components/copy-prompt";

const PROMPTS = [
  {
    label: "Prompt 1",
    title: "Start with what they know",
    text: "I’m learning [topic]. Ask me 3 questions to find out what I already understand. Don’t explain it yet.",
    note: "This makes the learner retrieve and predict before AI starts explaining.",
  },
  {
    label: "Prompt 2",
    title: "Make them explain it back",
    text: "Explain [topic] for a [grade/age] learner. Start simple. After each part, ask me to explain it back in my own words.",
    note: "An explanation can feel clear without being understood. Explaining it back exposes the gap.",
  },
  {
    label: "Prompt 3",
    title: "Quiz one question at a time",
    text: "Wait for my answer. If I’m wrong, give me one hint before you explain. Adjust the next question based on my answer.",
    note: "Keep this in the same conversation so ChatGPT can respond to the learner’s earlier answers.",
  },
  {
    label: "Prompt 4",
    title: "Use the mistake",
    text: "Based on my answers, name one misconception I may have. Give me a similar problem so I can try again.",
    note: "The correction is not the finish line. The learner gets another attempt with the same underlying idea.",
  },
  {
    label: "Prompt 5",
    title: "Bring difficult ideas back later",
    text: "Make a 7-day practice plan with short sessions. Bring back the ideas I missed more often, and quiz me before reviewing them.",
    note: "Short retrieval sessions are more useful than asking AI to repeat the same explanation immediately.",
  },
];

export const metadata: Metadata = {
  title: "Make ChatGPT a thinking coach: 5 prompts | Attention Matters",
  description:
    "Five copy-paste prompts that help ChatGPT question, hint and adapt without doing the learning for your child.",
  alternates: { canonical: "/prompts/thinking-coach" },
  openGraph: {
    title: "Make ChatGPT a thinking coach: 5 prompts",
    description: "Use AI to support the learner’s thinking—not replace it.",
    url: "/prompts/thinking-coach",
  },
};

export default function ThinkingCoachPrompts() {
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
        <p className="section-label">Five learning prompts · For parents</p>
        <h1>Make ChatGPT a thinking coach.</h1>
        <p className="prompt-deck">
          The goal is not a faster answer. These prompts make AI ask, wait, hint, adapt and bring
          difficult ideas back—while the learner still predicts, answers, checks and revises.
        </p>

        <p className="prompt-callout">
          <strong>Start in ChatGPT Study mode when it is available.</strong> Keep the prompts in one
          conversation and provide the real class materials when accuracy matters. AI can still make
          mistakes, so check important information against those materials or another reliable source.
        </p>

        {PROMPTS.map((prompt) => (
          <section key={prompt.label} aria-labelledby={prompt.label.toLowerCase().replace(" ", "-")}>
            <h2 id={prompt.label.toLowerCase().replace(" ", "-")}>
              <span>{prompt.label}</span>
              {prompt.title}
            </h2>
            <CopyPrompt text={prompt.text} />
            <p className="prompt-muted">{prompt.note}</p>
          </section>
        ))}

        <section aria-labelledby="parent-rule">
          <h2 id="parent-rule">The parent rule</h2>
          <p>
            <strong>AI can explain, question and adapt. The learner still thinks.</strong> For a child
            under 13, an adult conducts the ChatGPT interaction. Users ages 13–18 require parental
            consent.
          </p>
        </section>

        <aside className="prompt-footer">
          <p>
            Made by <a href="https://www.instagram.com/irenebuildsai/">@IreneBuildsAI</a>: practical
            ways to use AI for family learning and making.
          </p>
          <Link className="quiet-link" href="/prompts">← All prompts</Link>
        </aside>
      </article>
    </main>
  );
}
