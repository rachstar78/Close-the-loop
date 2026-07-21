const insights = [
  {
    tag: "Key-person risk",
    body: (
      <>
        <strong className="text-text">
          68% of everything you know about Client Acme sits with one person.
        </strong>{" "}
        Document it now, before a resignation becomes a crisis.
      </>
    ),
  },
  {
    tag: "Rework detected",
    body: (
      <>
        <strong className="text-text">
          Three teams produced near-identical onboarding decks this quarter.
        </strong>{" "}
        Reuse the best one — roughly 40 hours a quarter back to billable
        work.
      </>
    ),
  },
  {
    tag: "Coming soon · margin",
    body: (
      <>
        <strong className="text-text">
          Client X drove 40% more revisions than scoped.
        </strong>{" "}
        Connect time tracking and see scope creep before it eats the
        retainer.
      </>
    ),
  },
];

export default function Loop() {
  return (
    <section
      id="loop"
      className="border-y border-border bg-gradient-to-b from-bg-soft to-bg py-20"
    >
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
          What makes us different
        </p>
        <h2 className="mb-4 max-w-2xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
          We don&apos;t just find your knowledge. We close the loop.
        </h2>
        <p className="max-w-[680px] text-lg text-muted">
          A search box tells you what exists. Close the Loop tells you what
          to <em>do</em> about it — the insight a plain context tool never
          surfaces.
        </p>
        <div className="mt-9 max-w-[760px]">
          {insights.map((insight) => (
            <div
              key={insight.tag}
              className="mb-4 rounded-r-xl border-l-[3px] border-accent bg-card p-5"
            >
              <span className="mb-1.5 block text-xs uppercase tracking-[.1em] text-warn">
                {insight.tag}
              </span>
              <p className="text-sm text-muted">{insight.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
