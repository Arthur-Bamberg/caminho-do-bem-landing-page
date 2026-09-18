import { useEffect, useId, useState } from "react";

const links = [
  { href: "/#quem-somos", label: "Quem somos" },
  { href: "/#locais", label: "Locais" },
  { href: "/#jiu-jitsu", label: "Oficinas" },
  { href: "/#contatos", label: "Contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-cdb-purple-soft bg-cdb-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex min-h-11 items-center" aria-label="Caminho do Bem, página inicial">
          <img src="/logo.svg" alt="" width={210} height={74} className="h-11 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-cdb-ink hover:bg-cdb-purple-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contatos"
          className="hidden min-h-11 items-center rounded-full bg-cdb-yellow px-4 text-sm font-bold text-cdb-purple-deep lg:inline-flex"
        >
          Quero ajudar
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cdb-purple text-cdb-purple lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="border-t border-cdb-purple-soft bg-cdb-white px-4 py-4 lg:hidden"
          aria-label="Menu móvel"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center rounded-2xl bg-cdb-paper px-4 font-semibold text-cdb-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contatos"
                className="flex min-h-11 items-center justify-center rounded-2xl bg-cdb-yellow font-bold text-cdb-purple-deep"
                onClick={() => setOpen(false)}
              >
                Quero ajudar
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
