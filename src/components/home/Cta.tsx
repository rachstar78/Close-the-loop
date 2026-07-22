import LeadForm from "@/components/LeadForm";

export default function Cta() {
  return (
    <section id="get" className="py-[88px] text-center">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.12em] text-accent-2">
          Founding agencies
        </p>
        <h2 className="mx-auto mb-3.5 max-w-xl text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold tracking-[-.02em]">
          Be one of the first agencies on it.
        </h2>
        <p className="mx-auto max-w-[660px] text-lg text-muted">
          We&apos;re setting up a small group of founding agencies. You get a
          free rundown, hands-on setup, and a direct line to shape what we
          build.
        </p>
        <div className="mt-6">
          <LeadForm id="bottom" buttonLabel="Get my free rundown" align="center" />
        </div>
        <p className="mt-3 text-sm text-muted">
          No credit card · read-only access · cancel anytime
        </p>
      </div>
    </section>
  );
}
