const stats = [
  { label: "Work stuck in approvals", value: "4 accounts waiting", red: true },
  { label: "Clients going quiet", value: "2 need a nudge", red: true },
  { label: "Time you could win back", value: "~168 hrs a month", red: false },
];

export default function Rundown() {
  return (
    <section
      id="rundown"
      className="border-y border-border bg-bg-soft py-[78px]"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.12em] text-accent-2">
          The part no one else does
        </p>
        <h2 className="mb-3.5 max-w-2xl text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold tracking-[-.02em]">
          Every Monday, a plain-English rundown of what needs your attention.
        </h2>
        <p className="max-w-[660px] text-lg text-muted">
          It&apos;s not just a search box. Close the Loop watches how work
          actually flows and flags what you can&apos;t see from a dashboard —
          in hours and clients, not charts.
        </p>

        <div className="mt-[34px] grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card px-5 py-[18px]"
            >
              <div className="text-[.85rem] text-muted">{stat.label}</div>
              <div
                className={`mt-1 text-2xl font-extrabold ${
                  stat.red ? "text-danger" : ""
                }`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
