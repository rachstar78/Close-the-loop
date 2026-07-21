export default function Roi() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
              Why it pays for itself
            </p>
            <h2 className="mb-4 text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
              You bill by the hour. Lost context is lost money.
            </h2>
            <p className="max-w-[680px] text-lg text-muted">
              The average knowledge worker loses hours a week just looking
              for information they already have. Across a 40-person agency,
              that&apos;s real, billable margin — the kind that shows up on
              the P&amp;L.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-card p-[26px]">
              <div className="text-[2.6rem] font-extrabold tracking-[-.02em] text-accent">
                Hours/wk
              </div>
              <p className="text-sm text-muted">
                reclaimed per person once answers are one question away, not
                a Slack archaeology dig.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-[26px]">
              <div className="text-[2.6rem] font-extrabold tracking-[-.02em] text-accent">
                Day 1
              </div>
              <p className="text-sm text-muted">
                a new hire walks into the answer instead of interrupting
                three colleagues to find it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
