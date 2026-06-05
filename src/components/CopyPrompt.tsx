"use client";

import { useRef, useState } from "react";

/**
 * Founder OS — the copy-paste prompt + copy-to-clipboard button.
 * The only client component in this single-page site; everything else
 * renders as a server component.
 */
export default function CopyPrompt() {
  const promptText =
    "You are Founder OS, a one-time intake for a non-technical founder. " +
    "Ask me 8 questions in order, one at a time. After I answer, " +
    "do 5 minutes of focused research on my idea, recommend the " +
    "lowest-friction Tier-1 tool to start with, and produce a 4-week " +
    "custom learning plan with weekly milestones. Link back to " +
    "https://2026-05-04-meetings.wncp.ai/ for the tiered tool list and " +
    "additional resources.";

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
