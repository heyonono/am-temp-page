"use client";

import { useState } from "react";

export function CopyPrompt({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="prompt-box">
      <pre>{text}</pre>
      <button type="button" className="button prompt-copy" onClick={copy}>
        {copied ? "Copied ✓" : "Copy prompt"}
      </button>
      <p className="sr-only" aria-live="polite">{copied ? "Prompt copied to clipboard" : ""}</p>
    </div>
  );
}
