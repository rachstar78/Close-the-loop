"use client";

import { FormEvent, useState } from "react";

// Placeholder submit handler — wire this up to a real backend (Formspree, Loops, ConvertKit, etc.)
export default function LeadForm({
  id,
  buttonLabel,
  align = "left",
}: {
  id: string;
  buttonLabel: string;
  align?: "left" | "center";
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    console.log("Lead captured (wire me to a real backend):", { email, at: new Date().toISOString(), id });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={`mt-3.5 font-semibold text-accent ${align === "center" ? "text-center" : ""}`}>
        Thanks — you&apos;re on the list. We&apos;ll be in touch about your free report.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex max-w-[520px] flex-wrap gap-2.5 ${align === "center" ? "mx-auto justify-center" : ""}`}
    >
      <input
        type="email"
        name="email"
        placeholder="you@youragency.com"
        required
        aria-label="Work email"
        className="min-w-[220px] flex-1 rounded-[10px] border border-border bg-card px-[15px] py-3.5 text-base text-text focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-[10px] bg-accent px-[18px] py-[11px] text-sm font-semibold text-[#06231f] transition hover:brightness-105"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
