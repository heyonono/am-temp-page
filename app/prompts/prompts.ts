// Prompt library index. Add new prompts to the TOP of this list (newest first).
export type PromptEntry = {
  slug: string;
  title: string;
  summary: string;
  tool: string;
  added: string; // YYYY-MM-DD
};

export const PROMPTS: PromptEntry[] = [
  {
    slug: "school-calendar",
    title: "Put your school's calendar in yours",
    summary:
      "Turn your school's events page into a calendar file in about five minutes, then check every date before you import it.",
    tool: "Tested with free ChatGPT",
    added: "2026-09-30",
  },
];
