export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2.5 font-bold tracking-tight text-text">
          <span className="inline-block h-[22px] w-[22px] -rotate-45 rounded-full border-[3px] border-accent border-r-transparent" />
          Close the Loop
        </div>
        <div>© 2026 Close the Loop · The org brain for agencies</div>
      </div>
    </footer>
  );
}
