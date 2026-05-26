"use client";

import { useState } from "react";
import Link from "next/link";

export type ContactIntentId =
  | "contributeur-terrain"
  | "entreprise-pilote"
  | "early-adopter"
  | "pilote-accompagne"
  | "contact-general";

export interface ContactIntent {
  label: string;
  formTitle: string;
  formDescription: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export const contactIntentConfig: Record<ContactIntentId, ContactIntent> = {
  "contributeur-terrain": {
    label: "Contributeur",
    formTitle: "Contribuer à la construction de Doortrack",
    formDescription:
      "Partagez vos retours d'usage, vos pratiques et les difficultés que vous rencontrez en prospection. Vos retours nous aident à construire un outil utile.",
    messagePlaceholder:
      "Décrivez vos retours d’usage, vos outils actuels ou les situations que Doortrack devrait mieux résoudre.",
    submitLabel: "Envoyer mes retours",
  },
  "entreprise-pilote": {
    label: "Entreprise pilote",
    formTitle: "Tester Doortrack dans un contexte réel",
    formDescription:
      "Présentez rapidement votre organisation, le nombre de commerciaux concernés et les zones que vous souhaitez suivre ou piloter avec Doortrack.",
    messagePlaceholder:
      "Indiquez votre contexte : taille de l'équipe, type de prospection, secteurs couverts, outils utilisés aujourd'hui et objectifs du test pilote.",
    submitLabel: "Demander un test pilote",
  },
  "early-adopter": {
    label: "Early adopter",
    formTitle: "Accéder aux premières versions de Doortrack",
    formDescription:
      "Laissez vos coordonnées pour être informé en priorité des prochaines ouvertures de test et des évolutions de Doortrack.",
    messagePlaceholder:
      "Présentez brièvement votre profil, votre activité et ce qui vous intéresse dans Doortrack.",
    submitLabel: "Demander un accès prioritaire",
  },
  "pilote-accompagne": {
    label: "Pilote accompagné",
    formTitle: "Cadrer un test sur-mesure",
    formDescription:
      "Précisez votre besoin : accompagnement méthodologique, intégration de vos données, formation des équipes ou objectifs stratégiques.",
    messagePlaceholder:
      "Précisez votre besoin : accompagnement méthodologique, intégration de vos données, formation des équipes ou objectifs stratégiques.",
    submitLabel: "Planifier un cadrage",
  },
  "contact-general": {
    label: "Contact général",
    formTitle: "Échangeons sur votre organisation commerciale",
    formDescription:
      "Vous managez une équipe commerciale ou vous pratiquez la prospection ? Parlons de vos besoins, de vos contraintes et de ce que Doortrack peut vous apporter.",
    messagePlaceholder: "Décrivez brièvement votre contexte commercial.",
    submitLabel: "Envoyer ma demande",
  },
};

interface ContactFormProps {
  selectedIntent?: ContactIntentId;
  onSelectIntent?: (intent: ContactIntentId) => void;
}

export default function ContactForm({
  selectedIntent = "contact-general",
  onSelectIntent,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletter, setNewsletter] = useState(false);
  const config = contactIntentConfig[selectedIntent] || contactIntentConfig["contact-general"];
  
  const fieldClass =
    "w-full h-13 px-5 rounded-xl border border-line bg-paper text-ink placeholder:text-muted-2 focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/20 transition-all duration-150";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Simulation d'un envoi réseau
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      e.currentTarget.reset();
      setNewsletter(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="max-w-[1180px] mx-auto px-6 py-24 md:py-32 scroll-mt-10">
      <div className="bg-white/82 backdrop-blur-xl border border-white/55 shadow-shadow-3 rounded-[32px] p-8 md:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,38%)_1fr] gap-10 lg:gap-16">
          {/* Texte à gauche */}
          <div className="space-y-5">
            {selectedIntent !== "contact-general" && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-terrain-soft text-terrain-2 text-[12.5px] font-semibold rounded-full">
                <span>Rôle : {config.label}</span>
                <button
                  type="button"
                  onClick={() => onSelectIntent?.("contact-general")}
                  className="hover:text-terrain transition-colors font-bold text-[14px] ml-1"
                  title="Réinitialiser le choix"
                >
                  ×
                </button>
              </div>
            )}
            
            <h3
              className="text-ink font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.15 }}
            >
              {config.formTitle}
            </h3>
            <p className="text-lead">
              {config.formDescription}
            </p>
            <div className="pt-4 border-t border-line/60">
              <p className="text-[13px] text-muted-2 italic leading-relaxed">
                L’échange sert à identifier si Doortrack peut réellement répondre à vos usages, pas à vous vendre une solution générique.
              </p>
            </div>
          </div>

          {/* Formulaire à droite */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={handleSubmit}
          >
            {/* Champ caché pour transmettre l'intention */}
            <input type="hidden" name="intent" value={selectedIntent} />
            
            <div className="space-y-2">
              <label htmlFor="contact-nom" className="text-[13px] font-semibold text-ink ml-1">
                Nom
              </label>
              <input
                id="contact-nom"
                name="nom"
                type="text"
                required
                placeholder="Jean Dupont"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-entreprise" className="text-[13px] font-semibold text-ink ml-1">
                Entreprise
              </label>
              <input
                id="contact-entreprise"
                name="entreprise"
                type="text"
                placeholder="Votre société"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-fonction" className="text-[13px] font-semibold text-ink ml-1">
                Fonction
              </label>
              <input
                id="contact-fonction"
                name="fonction"
                type="text"
                placeholder="Manager commercial"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-[13px] font-semibold text-ink ml-1">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="jean@entreprise.com"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-taille-equipe" className="text-[13px] font-semibold text-ink ml-1">
                Taille de l’équipe
              </label>
              <input
                id="contact-taille-equipe"
                name="taille_equipe"
                type="text"
                placeholder="Ex: 5 commerciaux"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-type-prospection" className="text-[13px] font-semibold text-ink ml-1">
                Type de prospection
              </label>
              <input
                id="contact-type-prospection"
                name="type_prospection"
                type="text"
                placeholder="Ex: Porte-à-porte, B2B"
                className={fieldClass}
                style={{ height: 52 }}
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="contact-message" className="text-[13px] font-semibold text-ink ml-1">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder={config.messagePlaceholder}
                className="w-full p-5 rounded-xl border border-line bg-paper text-ink placeholder:text-muted-2 focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/20 transition-all duration-150 resize-none"
              />
            </div>

            {/* Case newsletter optionnelle */}
            <div className="md:col-span-2 flex items-start gap-3 mt-1">
              <input
                id="contact-newsletter"
                name="newsletter"
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-line text-terrain focus:ring-terrain/10 cursor-pointer accent-terrain"
              />
              <label
                htmlFor="contact-newsletter"
                className="text-[13px] text-ink-soft cursor-pointer select-none leading-snug font-medium"
              >
                J’accepte de recevoir des informations sur les évolutions de Doortrack.
              </label>
            </div>

            {/* Alertes de statut */}
            {status === "success" && (
              <div className="md:col-span-2 p-4 rounded-xl bg-[rgba(46,148,97,0.08)] border border-[rgba(46,148,97,0.2)] text-success text-[13.5px] leading-relaxed flex items-start gap-2.5">
                <span className="font-semibold text-base mt-0.5">✓</span>
                <div>
                  <strong className="block font-semibold">Message envoyé !</strong>
                  Merci, votre demande a bien été envoyée. Nous reviendrons vers vous rapidement.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="md:col-span-2 p-4 rounded-xl bg-[rgba(184,48,32,0.08)] border border-[rgba(184,48,32,0.2)] text-danger text-[13.5px] leading-relaxed flex items-start gap-2.5">
                <span className="font-semibold text-base mt-0.5">⚠️</span>
                <div>
                  <strong className="block font-semibold">Erreur lors de l&apos;envoi</strong>
                  Une erreur est survenue lors de l’envoi. Veuillez réessayer.
                </div>
              </div>
            )}

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Envoi en cours..." : config.submitLabel}{" "}
                {status !== "submitting" && <span className="arrow font-mono font-medium">→</span>}
              </button>
              <p className="text-[11px] text-muted mt-4 text-center md:text-left leading-relaxed">
                Les informations transmises sont utilisées uniquement pour répondre à votre demande. Pour en savoir plus sur la gestion de vos données et vos droits, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="underline hover:text-terrain transition-colors font-medium"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
