export default function Footer() {
  const menus = ["Privacy", "Terms", "Changelog", "GitHub", "Status"];
  return (
    <div id="footer" className="w-full bg-background py-10">
      <div className="container mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-headline text-lg font-black tracking-tighter text-foreground">
            TasteUI
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            © 2026 TasteUI. Built for curators.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {menus.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
