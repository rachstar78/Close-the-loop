import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <Image src="/brand/ctl-icon.svg" alt="" width={22} height={22} priority />
          Close&nbsp;the&nbsp;Loop
        </Link>
        <div className="flex items-center gap-7">
          <Link href="/#problem" className="hidden text-sm text-muted hover:text-text sm:inline">
            The problem
          </Link>
          <Link href="/#how" className="hidden text-sm text-muted hover:text-text sm:inline">
            How it works
          </Link>
          <Link href="/#loop" className="hidden text-sm text-muted hover:text-text sm:inline">
            The loop
          </Link>
          <Link href="/about" className="hidden text-sm text-muted hover:text-text sm:inline">
            About
          </Link>
          <Link href="/pricing" className="hidden text-sm text-muted hover:text-text sm:inline">
            Pricing
          </Link>
          <Link
            href="/#get"
            className="rounded-[10px] bg-accent px-[18px] py-[11px] text-sm font-semibold text-[#06231f] transition hover:brightness-105"
          >
            Get early access
          </Link>
        </div>
      </div>
    </nav>
  );
}
