export default function Problem() {
  return (
    <section id="problem" className="py-[78px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.12em] text-accent-2">
          The problem
        </p>
        <h2 className="mb-3.5 max-w-2xl text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold tracking-[-.02em]">
          When it&apos;s not written down, people guess.
        </h2>
        <p className="max-w-[660px] text-lg text-muted">
          Half of what your agency knows lives in someone&apos;s head or buried
          in an old thread. So people guess, or they interrupt the one person
          who remembers — and when that person&apos;s off or gone, you&apos;re
          stuck.
        </p>

        <div className="mt-9 grid gap-[18px] md:grid-cols-2">
          {/* Today */}
          <div className="rounded-xl border border-border bg-card px-[22px] py-5">
            <div className="mb-2.5 text-[.78rem] text-danger">Today</div>
            <div className="text-sm text-muted">
              &ldquo;What exactly did we promise Acme at the last review?&rdquo;
            </div>
            <div className="my-2.5 text-[1.02rem]">
              Umm… a new media plan, I think? Ask Sarah — she ran that account.
            </div>
            <div className="text-[.78rem] text-muted">
              Stuck in a deck, a thread, or someone&apos;s head.
            </div>
          </div>

          {/* With Close the Loop */}
          <div className="rounded-xl border border-border bg-card px-[22px] py-5">
            <div className="mb-2.5 text-[.78rem] text-success">
              With Close the Loop
            </div>
            <div className="text-sm text-muted">
              &ldquo;What exactly did we promise Acme at the last review?&rdquo;
            </div>
            <div className="my-2.5 text-[1.02rem]">
              A revised media plan by Jul 10, plus two extra creative rounds —
              agreed by Sarah.
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-success/15 px-2.5 py-[3px] text-[.76rem] text-success">
                from the Acme review deck
              </span>
              <span className="rounded-full bg-success/15 px-2.5 py-[3px] text-[.76rem] text-success">
                and the #acme chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
