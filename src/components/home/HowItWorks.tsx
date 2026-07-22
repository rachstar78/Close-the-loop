export default function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-border bg-bg-soft py-[78px]"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.12em] text-accent-2">
          How it works
        </p>
        <h2 className="mb-3.5 max-w-2xl text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold tracking-[-.02em]">
          Your tools go in. Answers and a weekly rundown come out.
        </h2>
        <p className="max-w-[660px] text-lg text-muted">
          Connect the tools you already use — it takes minutes and only needs
          read access. Then anyone can ask, and every Monday you get a
          rundown.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          {/* Inputs */}
          <div className="min-w-[150px] flex-1 rounded-xl border border-border bg-card px-[18px] py-4">
            <div className="mb-1.5 text-xs text-muted">
              The tools you already use
            </div>
            <div className="text-sm leading-[1.9] text-muted">
              Drive · Slack · Notion
              <br />
              Asana · email · meetings
            </div>
          </div>

          <div className="text-2xl text-muted">→</div>

          {/* Hub */}
          <div className="min-w-[150px] flex-none rounded-xl border border-accent/30 bg-accent/10 px-[18px] py-4 text-center font-semibold text-accent">
            Close the Loop
            <small className="mt-0.5 block font-normal text-muted">
              remembers it all
            </small>
          </div>

          <div className="text-2xl text-muted">→</div>

          {/* Outputs */}
          <div className="flex min-w-[180px] flex-1 flex-col gap-2.5">
            <div className="rounded-xl border border-border bg-card px-3.5 py-3">
              <div className="text-[.95rem] font-semibold">Ask anything</div>
              <div className="text-[.82rem] text-muted">
                your team, in chat or their AI tools
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card px-3.5 py-3">
              <div className="text-[.95rem] font-semibold">
                Your weekly rundown
              </div>
              <div className="text-[.82rem] text-muted">for you, the owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
