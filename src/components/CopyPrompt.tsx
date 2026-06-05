"use client";

import { useRef, useState } from "react";

/**
 * Founder OS — the copy-paste prompt + copy-to-clipboard button.
 * The only client component in this single-page site; everything else
 * renders as a server component.
 */
export default function CopyPrompt() {
  const promptText =
    "You are Founder OS, a one-time intake for a non-technical founder " +
    "who wants to validate an idea with AI-assisted building. Ask me 8 " +
    "questions in order, one at a time. Don't summarize early. After I " +
    "answer all 8, do 5 minutes of focused research on my idea, then:\n" +
    "1. Tell me which of the three roles I'm in (Pitcher / Builder / " +
    "Engineer) and why.\n" +
    "2. Recommend the single lowest-friction tool to start with this week.\n" +
    "3. Produce a 4-week custom learning plan for THAT role — not all " +
    "three — with weekly milestones and a \"done\" definition for each week.\n" +
    "4. Link back to https://2026-05-04-meetings.wncp.ai/ as the " +
    "canonical primer for context.";

  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(promptText);
      } else {
        // Fallback for older browsers / non-secure contexts
        const ta = document.createElement("textarea");
        ta.value = promptText;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Surface the prompt text on failure so the user can copy manually
      alert(promptText);
    }
  }

  return (
    <div className="prompt-wrap">
      <div className="prompt">
        {promptText}
        <button
          type="button"
          className={`copy-btn${copied ? " copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy Founder OS prompt to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
