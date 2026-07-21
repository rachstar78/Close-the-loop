import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2.5 font-bold tracking-tight text-text">
          <Image src="/brand/ctl-icon.svg" alt="" width={22} height={22} />
          Close the Loop
        </div>
        <div>© 2026 Close the Loop · The org brain for agencies</div>
      </div>
    </footer>
  );
}
