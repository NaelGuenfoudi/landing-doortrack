"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-30 bg-canvas border-t border-line px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-bold tracking-tight text-ink">Doortrack</span>
          <p className="text-xs text-muted">
            Fonctionnel. Terrain. Efficace.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link href="/mentions-legales" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
            Politique de confidentialité
          </Link>
          <Link href="/cgu" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
            CGU
          </Link>
          <Link href="/cgv" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
            CGV
          </Link>
          <Link href="/cookies" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
            Cookies
          </Link>
          <Link href="/contact" className="text-[11px] uppercase tracking-[0.08em] text-muted hover:text-terrain transition-colors">
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
