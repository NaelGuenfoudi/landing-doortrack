"use client";

/**
 * ContactForm — Sprint 3
 * Layout desktop : texte à gauche, formulaire à droite.
 * Champs (cahier §3.5) : Nom / Entreprise / Fonction / Email / Message.
 * Bouton : "Échanger sur DoorTrack →".
 */
export default function ContactForm() {
  const fieldClass =
    "w-full h-13 px-5 rounded-xl border border-line bg-paper text-ink placeholder:text-muted-2 focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-colors";

  return (
    <div className="max-w-[1180px] mx-auto px-6">
      <div className="bg-white rounded-[32px] border border-line shadow-shadow-3 p-8 md:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,38%)_1fr] gap-10 lg:gap-16">
          {/* Texte à gauche */}
          <div className="space-y-5">
            <h3
              className="text-ink font-bold tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.15 }}
            >
              Échangeons sur votre réalité terrain
            </h3>
            <p className="text-lead">
              Vous managez une équipe terrain ou vous pratiquez la prospection
              porte-à-porte ? Parlons de vos besoins, de vos contraintes et de
              ce que DoorTrack peut vous apporter.
            </p>
          </div>

          {/* Formulaire à droite */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="contact-nom" className="text-[13px] font-semibold text-ink ml-1">
                Nom
              </label>
              <input
                id="contact-nom"
                type="text"
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
                type="email"
                placeholder="jean@entreprise.com"
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
                rows={5}
                placeholder="Décrivez brièvement votre contexte terrain."
                className="w-full p-5 rounded-xl border border-line bg-paper text-ink placeholder:text-muted-2 focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button type="submit" className="btn-primary">
                Échanger sur DoorTrack{" "}
                <span className="arrow font-mono font-medium">→</span>
              </button>
              <p className="text-[11px] text-muted mt-4">
                Vos informations sont utilisées uniquement pour répondre à votre
                demande.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
