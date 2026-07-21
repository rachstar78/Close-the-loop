const steps = [
  {
    title: "Connect your tools",
    body: "Read-only access to Drive, Slack, Notion, your PM tool and meeting notes. No new process to adopt.",
  },
  {
    title: "Ask anything, cited",
    body: "“What did we promise Acme? Where's the winning pitch? How do we run kickoffs?” — answered in Slack or the web, with sources. Same context flows into Claude, ChatGPT and Cursor via MCP.",
  },
  {
    title: "Get the weekly read",
    body: "Your Agency Brain report: where knowledge is concentrated, where work is being duplicated, and what it's costing you.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border bg-bg-soft py-20"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
          How it works
        </p>
        <h2 className="mb-4 max-w-2xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
          One knowledge layer. Every tool your team already uses.
        </h2>
        <p className="max-w-[680px] text-lg text-muted">
          Connect your stack once. Close the Loop builds a living map of how
          your agency actually works — and puts it wherever your team and
          your AI tools need it.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-card p-[26px]"
            >
              <div className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border bg-bg-soft font-bold text-accent">
                →
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
