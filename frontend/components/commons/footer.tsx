export default function Footer() {
  return (
    <div id="footer" className="bg-white px-4 py-2 shadow backdrop-blur-[24px] border border-white/20 rounded-ful">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <span className="font-headline text-lg font-black text-[#272e42]">
            TasteUI
          </span>
          <p className="font-['Inter'] text-sm leading-relaxed text-[#272e42]/50">
            © 2026 TasteUI. Built for curators.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Inter'] text-sm text-[#272e42]/50 transition-colors hover:text-[#272e42]"
            href="#"
          >
            Privacy
          </a>
          <a
            className="font-['Inter'] text-sm text-[#272e42]/50 transition-colors hover:text-[#272e42]"
            href="#"
          >
            Terms
          </a>
          <a
            className="font-['Inter'] text-sm text-[#272e42]/50 transition-colors hover:text-[#272e42]"
            href="#"
          >
            Changelog
          </a>
          <a
            className="font-['Inter'] text-sm text-[#272e42]/50 transition-colors hover:text-[#272e42]"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-['Inter'] text-sm text-[#272e42]/50 transition-colors hover:text-[#272e42]"
            href="#"
          >
            Status
          </a>
        </div>
      </div>
    </div>
  );
}
