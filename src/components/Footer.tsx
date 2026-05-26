"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-30 bg-canvas/92 backdrop-blur-[1px] border-t border-line px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-bold tracking-tight text-ink">Doortrack</span>
          <p className="text-xs text-ink-soft font-medium">
            Fonctionnel. Clair. Efficace.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-center md:flex md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-3 md:text-left">
          <Link href="/mentions-legales" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            Politique de confidentialité
          </Link>
          <Link 
            href="/cookies" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-cookie-preferences"));
            }}
            className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0"
          >
            Cookies
          </Link>
          <Link href="/conditions-utilisation" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            CGU
          </Link>
          <Link href="/conditions-beta" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            Conditions bêta
          </Link>
          <Link href="/conditions-generales-vente" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            CGV
          </Link>
          <Link href="/#contact" className="text-[12px] md:text-[11px] uppercase tracking-[0.08em] text-ink-soft hover:text-terrain font-medium transition-colors py-1.5 md:py-0">
            Contact
          </Link>
        </nav>

        <div className="text-[11px] text-muted-2">
          © {new Date().getFullYear()} Doortrack. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
