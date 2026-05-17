"use client";

import { Check, Clock, X, UserX, Send } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

/**
 * FlashScreen
 * -----------
 * Recomposition propre de l'écran "Prospection rapide" (cf. cahier §13).
 * UI React native pour garantir une netteté parfaite et le respect strict
 * des tokens DA (paper warm, terrain, success, danger, teal).
 */

type StatusKind = "interested" | "followup" | "refused" | "absent";

interface StatusAction {
  kind: StatusKind;
  label: string;
  icon: ComponentType<LucideProps>;
}

const ACTIONS: StatusAction[] = [
  { kind: "interested", label: "Intéressé", icon: Check },
  { kind: "followup", label: "Relance", icon: Clock },
  { kind: "refused", label: "Refus", icon: X },
  { kind: "absent", label: "Absent", icon: UserX },
];

const STATUS_STYLES: Record<StatusKind, { fg: string; bg: string; border: string }> = {
  interested: { fg: "text-success", bg: "bg-success/10", border: "border-success/25" },
  followup: { fg: "text-terrain-2", bg: "bg-terrain-soft", border: "border-terrain/25" },
  refused: { fg: "text-danger", bg: "bg-danger/10", border: "border-danger/25" },
  absent: { fg: "text-ink-soft", bg: "bg-canvas-2", border: "border-line-2" },
};

export default function FlashScreen() {
  return (
    <div className="absolute inset-0 bg-paper-2 text-ink flex flex-col px-4 pt-9 pb-4 select-none">
      {/* Status bar fake */}
      <div className="flex items-center justify-between font-mono text-[9px] text-muted tracking-wider mb-3 px-1">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-1.5 rounded-[1px] border border-ink-soft" />
        </span>
      </div>

      {/* En-tête */}
      <div className="space-y-1 mb-4">
        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-terrain font-semibold">
          § Mode flash
        </div>
        <h2 className="font-sans text-[15px] font-bold tracking-[-0.02em] text-ink leading-tight">
          Prospection rapide
        </h2>
        <div className="font-mono text-[8px] tracking-[0.14em] uppercase text-muted">
          Adresse détectée
        </div>
      </div>

      {/* Carte adresse */}
      <div className="rounded-[10px] border border-line bg-paper shadow-shadow-1 px-3 py-2.5 mb-4">
        <div className="text-[12px] font-bold text-ink leading-snug">
          25 Rue de la Libération
        </div>
        <div className="text-[10px] text-muted leading-snug mt-0.5">
          54460 Fouligny-sur-Moselle
        </div>
      </div>

      {/* Grille 2x2 actions */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {ACTIONS.map(({ kind, label, icon: Icon }) => {
          const s = STATUS_STYLES[kind];
          return (
            <div
              key={kind}
              className={`rounded-[10px] border ${s.border} ${s.bg} px-2.5 py-3 flex flex-col items-center justify-center gap-1.5 shadow-shadow-1`}
            >
              <Icon size={14} strokeWidth={2} className={s.fg} aria-hidden />
              <span className={`text-[10px] font-bold ${s.fg}`}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Bouton "Déjà envoyé" */}
      <div className="rounded-[10px] border border-teal/30 bg-teal-ink/40 px-3 py-2.5 mb-auto flex items-center justify-center gap-1.5">
        <Send size={11} strokeWidth={2} className="text-teal" aria-hidden />
        <span className="text-[10px] font-bold text-teal">Déjà envoyé</span>
      </div>

      {/* Pied de page : confirmation */}
      <div className="pt-3 mt-3 border-t border-line flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        <span className="font-mono text-[8px] tracking-[0.14em] uppercase text-muted">
          Enregistrement immédiat
        </span>
      </div>
    </div>
  );
}
