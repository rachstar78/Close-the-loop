import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Pricing — Close the Loop",
  description: "Plans for agencies of every size.",
};

// PLACEHOLDER PRICING — replace tiers, prices, and feature lists with real numbers before launch.
const tiers = [
  {
    name: "Starter",
    price: "$—/mo",
    blurb: "For small agencies getting their knowledge base off the ground.",
    features: [
      "Up to 15 seats",
      "3 connected tools",
      "Weekly Agency Brain report",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$—/mo",
    blurb: "For agencies scaling across multiple teams and clients.",
    features: [
      "Up to 75 seats",
      "Unlimited connected tools",
      "Weekly Agency Brain report",
      "MCP access for Claude, ChatGPT, Cursor",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    blurb: "For larger agencies and holding companies with custom needs.",
    features: [
      "Unlimited seats",
      "SSO & advanced permissions",
      "Custom data retention & security review",
      "Dedicated onboarding",
      "White-glove support",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-16 pt-[90px] text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 70% -10%, rgba(94,234,212,.14), transparent), radial-gradient(500px 300px at 10% 20%, rgba(124,156,255,.10), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1080px] px-6">
          <span className="mb-[22px] inline-block rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs uppercase tracking-[.12em] text-accent">
            Pricing
          </span>
          <h1 className="mx-auto mb-5 max-w-2xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-.03em]">
            Simple plans, <span className="text-gradient">real margin</span>{" "}
            back.
          </h1>
          <p className="mx-auto max-w-[620px] text-lg text-muted sm:text-xl">
            Founding design partners get white-glove setup and locked-in
            early pricing. Final tiers below are illustrative — talk to us
            for founding-partner rates.
          </p>
        </div>
      </header>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-[26px] ${
                  tier.highlight
                    ? "border-accent bg-card ring-1 ring-accent/40"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-[#06231f]">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="my-3 text-3xl font-extrabold tracking-[-.02em] text-accent">
                  {tier.price}
                </div>
                <p className="mb-5 text-sm text-muted">{tier.blurb}</p>
                <ul className="mb-6 flex-1 space-y-2.5 text-sm text-muted">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#get"
                  className="rounded-[10px] border border-border px-[18px] py-[11px] text-center text-sm font-semibold text-text transition hover:border-accent"
                >
                  Get early access
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get" className="py-[90px] text-center">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
            Founding design partners
          </p>
          <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
            Get founding-partner pricing.
          </h2>
          <p className="mx-auto max-w-[680px] text-lg text-muted">
            We&apos;re onboarding a small group of founding agencies at
            locked-in early rates.
          </p>
          <div className="mt-6">
            <LeadForm id="pricing" buttonLabel="Claim your free report" align="center" />
          </div>
          <p className="mt-3 text-sm text-muted">
            No credit card · read-only access · cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
