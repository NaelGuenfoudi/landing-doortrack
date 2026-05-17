"use client";

import { useState, type FormEvent } from "react";

const TEAM_SIZES = [
  "1 à 3 commerciaux",
  "4 à 10 commerciaux",
  "11 à 30 commerciaux",
  "Plus de 30 commerciaux",
];

const INPUT_BASE =
  "w-full h-[50px] rounded-[10px] border border-line bg-paper-2 text-ink px-4 font-sans text-[14px] placeholder:text-muted-2 transition-[border-color,box-shadow] outline-none focus:border-terrain focus:shadow-[0_0_0_4px_rgba(226,91,20,0.10)]";

const LABEL_BASE =
  "font-mono text-[10px] tracking-[0.14em] uppercase text-muted font-semibold";

/**
 * DemoForm
 * --------
 * Formulaire de conversion footer (cf. cahier §17). Soumission via mailto:
 * temporaire — un endpoint serveur prendra le relais plus tard.
 */
export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Demande de démo DoorTrack — ${get("company") || get("lastname")}`;
    const body = [
      `Prénom : ${get("firstname")}`,
      `Nom : ${get("lastname")}`,
      `Email pro : ${get("email")}`,
      `Téléphone : ${get("phone")}`,
      `Société : ${get("company")}`,
      `Fonction : ${get("role")}`,
      `Taille équipe commerciale : ${get("teamSize")}`,
      "",
      "Message :",
      get("message"),
    ].join("\n");

    const href = `mailto:contact@doortrack.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    // Re-armer le bouton après la bascule mail client.
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <section className="relative z-30 px-[clamp(24px,6vw,96px)] py-[120px] bg-canvas overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(60,40,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(60,40,20,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[920px] mx-auto p-[clamp(28px,4vw,48px)] rounded-[28px] bg-paper border border-line shadow-shadow-3">
        <header className="space-y-3 mb-4">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-terrain font-semibold">
            § 06 — DEMANDE DE DÉMO
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.025em] font-bold text-ink text-balance">
            Demandez une démo DoorTrack
          </h2>
          <p className="text-[15px] leading-[1.6] text-ink-soft max-w-[62ch]">
            Expliquez-nous votre organisation terrain. Nous vous recontactons pour
            vous montrer comment DoorTrack peut s’adapter à votre équipe.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstname" className={LABEL_BASE}>Prénom</label>
            <input id="firstname" name="firstname" type="text" required autoComplete="given-name" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastname" className={LABEL_BASE}>Nom</label>
            <input id="lastname" name="lastname" type="text" required autoComplete="family-name" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={LABEL_BASE}>Email professionnel</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={LABEL_BASE}>Téléphone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className={LABEL_BASE}>Société</label>
            <input id="company" name="company" type="text" required autoComplete="organization" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="role" className={LABEL_BASE}>Fonction</label>
            <input id="role" name="role" type="text" autoComplete="organization-title" className={INPUT_BASE} />
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="teamSize" className={LABEL_BASE}>Taille de l’équipe commerciale</label>
            <select
              id="teamSize"
              name="teamSize"
              required
              defaultValue=""
              className={`${INPUT_BASE} appearance-none bg-no-repeat bg-[right_16px_center] bg-[length:12px] pr-10`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'><path fill='none' stroke='%231F2A2E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M1 1l5 5 5-5'/></svg>\")",
              }}
            >
              <option value="" disabled>Choisir une taille…</option>
              {TEAM_SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label htmlFor="message" className={LABEL_BASE}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Décrivez en quelques mots votre organisation terrain, vos objectifs et vos contraintes."
              className={`${INPUT_BASE} h-auto min-h-[120px] py-[14px] resize-y`}
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 mt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-terrain text-white shadow-shadow-2 transition-[transform,box-shadow,background-color] hover:bg-terrain-2 hover:-translate-y-px hover:shadow-shadow-3 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(226,91,20,0.12),0_6px_24px_-8px_rgba(31,42,46,0.10)] disabled:opacity-60 disabled:cursor-progress"
              >
                {submitting ? "Préparation du mail…" : "Réserver une démo"}
                {!submitting && <span className="font-mono font-medium">→</span>}
              </button>
              <a
                href="mailto:contact@doortrack.fr"
                className="inline-flex items-center justify-center gap-2 h-[54px] px-6 rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-teal text-paper-2 shadow-shadow-1 transition-colors hover:bg-teal-2"
              >
                Prendre contact
              </a>
            </div>

            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
              Démo en 15 min · sans engagement · réponse sous 24 à 48h
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
