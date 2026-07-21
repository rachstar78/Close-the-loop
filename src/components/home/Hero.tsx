import LeadForm from "@/components/LeadForm";

const tools = [
  "Google Drive",
  "Slack",
  "Notion",
  "Asana / Monday",
  "Granola / Fireflies",
  "Gmail",
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-[60px] pt-[90px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 70% -10%, rgba(94,234,212,.14), transparent), radial-gradient(500px 300px at 10% 20%, rgba(124,156,255,.10), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1080px] px-6">
        <span className="mb-[22px] inline-block rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs uppercase tracking-[.12em] text-accent">
          The org brain for agencies
        </span>
        <h1 className="mb-5 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-.03em]">
          Your agency&apos;s knowledge is{" "}
          <span className="text-gradient">scattered everywhere</span>. So is
          your margin.
        </h1>
        <p className="mb-8 max-w-[620px] text-lg text-muted sm:text-xl">
          Every client, project, and decision your team has ever made lives
          across Drive, Slack, Notion, your PM tool and meeting notes — not
          in one tidy place. Close the Loop indexes all of it, makes it
          instantly usable by your people and your AI tools, and tells you
          each week where lost knowledge is costing you billable hours.
        </p>

        <LeadForm id="top" buttonLabel="Get a free Agency Brain report" />
        <p className="mt-3 text-sm text-muted">
          Founding design-partner program · limited spots · no credit card
        </p>
      </div>

      <div className="relative mt-14 border-t border-b border-border py-[34px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="mb-3.5 text-xs uppercase tracking-[.1em] text-muted">
            Built for the tools agencies actually run on
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-bg-soft px-4 py-2 text-sm"
              >
                {tool}
              </span>
            ))}
            <span className="rounded-full border border-border bg-bg-soft px-4 py-2 text-sm text-muted">
              + any MCP-compatible AI tool
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
