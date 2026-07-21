import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "About — Close the Loop",
  description: "The story and team behind Close the Loop.",
};

// PLACEHOLDER CONTENT — swap in real founder bios, mission copy, and photos.
const team = [
  {
    name: "Founder Name",
    role: "Co-Founder & CEO",
    bio: "A line or two on background — prior company, relevant domain expertise, why this problem.",
  },
  {
    name: "Founder Name",
    role: "Co-Founder & CTO",
    bio: "A line or two on background — prior company, relevant domain expertise, why this problem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-16 pt-[90px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 300px at 70% -10%, rgba(94,234,212,.14), transparent), radial-gradient(500px 300px at 10% 20%, rgba(124,156,255,.10), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1080px] px-6">
          <span className="mb-[22px] inline-block rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs uppercase tracking-[.12em] text-accent">
            About us
          </span>
          <h1 className="mb-5 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-.03em]">
            We&apos;re building the{" "}
            <span className="text-gradient">memory layer</span> agencies
            never had.
          </h1>
          <p className="max-w-[620px] text-lg text-muted sm:text-xl">
            {/* PLACEHOLDER — replace with the real origin story: what you saw at an agency, why existing tools (search, wikis, PM tools) fall short. */}
            Close the Loop started from a simple observation: agencies sell
            knowledge, but that knowledge lives in scattered docs, chat
            threads, and people&apos;s heads — not in a system anyone can
            actually use. We&apos;re building the tool we wished existed.
          </p>
        </div>
      </header>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
            Our mission
          </p>
          <h2 className="mb-4 max-w-2xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
            Every agency should be able to act on everything it knows.
          </h2>
          <p className="max-w-[680px] text-lg text-muted">
            {/* PLACEHOLDER — replace with real mission statement / values. */}
            We believe institutional knowledge shouldn&apos;t depend on
            tenure. Our job is to make what your best people know instantly
            available to everyone on your team — and to your AI tools —
            without adding another place to check.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-bg-soft py-20">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
            The team
          </p>
          <h2 className="mb-10 max-w-2xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
            Built by people who&apos;ve lived this problem.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-card p-[26px]"
              >
                <div className="mb-4 h-14 w-14 rounded-full border border-border bg-bg" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mb-2 text-sm text-accent">{member.role}</p>
                <p className="text-sm text-muted">{member.bio}</p>
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
            Want to help shape the product?
          </h2>
          <p className="mx-auto max-w-[680px] text-lg text-muted">
            We&apos;re onboarding a small group of founding agencies. Get in
            touch and get a free Agency Brain report.
          </p>
          <div className="mt-6">
            <LeadForm id="about" buttonLabel="Get in touch" align="center" />
          </div>
        </div>
      </section>
    </>
  );
}
