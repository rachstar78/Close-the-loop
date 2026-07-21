const cards = [
  {
    num: "1",
    title: "Key-person risk",
    body: "Everything about your biggest client lives with one account lead. When they're out — or they quit — you're exposed.",
  },
  {
    num: "2",
    title: "Endless rework",
    body: "Three teams rebuild the same deck, proposal, or process because nobody knew it already existed.",
  },
  {
    num: "3",
    title: "Slow onboarding",
    body: "New hires spend weeks asking “where's the…?” instead of doing billable work.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
          The problem
        </p>
        <h2 className="mb-4 max-w-2xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
          Knowledge is your product — and it&apos;s trapped in people&apos;s
          heads.
        </h2>
        <p className="max-w-[680px] text-lg text-muted">
          Agencies live or die on what they know. But that knowledge is
          scattered, undocumented, and walks out the door when someone
          leaves. You bill by the hour, so every minute spent hunting for
          context is margin you never get back.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.num}
              className="rounded-2xl border border-border bg-card p-[26px]"
            >
              <div className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-border bg-bg-soft font-bold text-accent">
                {card.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
