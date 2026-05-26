"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="max-w-[840px] mx-auto w-full pt-32 pb-24 px-6 relative z-10 text-ink">
      {/* Fil d'Ariane / Retour à l'accueil */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted hover:text-terrain transition-colors group"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          Retour à l’accueil
        </Link>
      </div>

      {/* En-tête de la page juridique */}
      <header className="mb-12 space-y-3 border-b border-line pb-8">
        <span className="inline-flex font-mono text-[11px] tracking-[0.18em] uppercase text-terrain font-semibold">
          Documentation Doortrack
        </span>
        <h1 className="text-[34px] sm:text-[46px] md:text-[52px] leading-[1.08] tracking-[-0.02em] font-bold text-ink text-balance">
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-[13px] text-muted-2">
            Dernière mise à jour : {lastUpdated}
          </p>
        )}
      </header>

      {/* Contenu de la documentation */}
      <article className="text-ink-soft text-[15.5px] sm:text-[16.5px] leading-[1.68] space-y-8">
        {children}
      </article>
      
      {/* CTA de bas de page */}
      <div className="mt-14 pt-10 border-t border-line text-center">
        <Link
          href="/#contact"
          className="btn-primary inline-flex"
        >
          Échanger sur Doortrack <span className="arrow font-mono font-medium ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
