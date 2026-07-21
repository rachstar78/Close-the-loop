import LeadForm from "@/components/LeadForm";

export default function Cta() {
  return (
    <section id="get" className="py-[90px] text-center">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="mb-3 text-xs uppercase tracking-[.14em] text-accent-2">
          Founding design partners
        </p>
        <h2 className="mx-auto mb-4 max-w-xl text-[clamp(1.7rem,3.5vw,2.4rem)] font-extrabold tracking-[-.02em]">
          Be one of the first agencies to close the loop.
        </h2>
        <p className="mx-auto max-w-[680px] text-lg text-muted">
          We&apos;re onboarding a small group of founding agencies. You get a
          free Agency Brain report, white-glove setup, and a direct line to
          shape the product.
        </p>
        <div className="mt-6">
          <LeadForm id="bottom" buttonLabel="Claim your free report" align="center" />
        </div>
        <p className="mt-3 text-sm text-muted">
          No credit card · read-only access · cancel anytime
        </p>
      </div>
    </section>
  );
}
