import LeadForm from "@/components/LeadForm";

const tools = [
  "Google Drive",
  "Slack",
  "Notion",
  "Asana",
  "Your meeting notes",
  "Gmail",
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-[54px] pt-[84px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 72% -10%, rgba(94,234,212,.13), transparent), radial-gradient(500px 300px at 8% 20%, rgba(124,156,255,.10), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1080px] px-6">
        <span className="mb-[22px] inline-block rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs tracking-[.06em] text-accent">
          Close the Loop · built for agencies
        </span>
        <h1 className="mb-5 max-w-3xl text-[clamp(2.3rem,6vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-.03em]">
          Everything your agency
          <br className="hidden sm:block" /> knows, in one place.
        </h1>
        <p className="mb-8 max-w-[600px] text-lg text-muted">
          Client history, project decisions, the way you do things — it&apos;s
          scattered across Drive, Slack, Notion and meeting notes, and it walks
          out the door when people do. Close the Loop pulls it together so
          anyone gets a straight answer in seconds — and every week it shows
          you where work is stuck and which clients need a nudge.
        </p>

        <LeadForm id="top" buttonLabel="See what's slipping — free" />
        <p className="mt-3 text-sm text-muted">
          Founding agencies only · no credit card
        </p>
      </div>

      <div className="relative mt-[52px] border-t border-b border-border py-[30px]">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="mb-3 text-xs uppercase tracking-[.08em] text-muted">
            Plugs into the tools you already use
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-bg-soft px-[15px] py-2 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
