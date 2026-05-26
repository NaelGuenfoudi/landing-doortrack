import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Mentions légales — Doortrack",
  description: "Informations légales relatives à l’éditeur, l’hébergement, la propriété intellectuelle et l’utilisation du site Doortrack.",
};

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Éditeur du site</h2>
          <p>
            Le site Doortrack, accessible à l’adresse <span className="font-semibold">[À COMPLÉTER — URL DU SITE]</span>, est édité par :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nom / dénomination sociale : <span className="font-semibold">[À COMPLÉTER — NOM LÉGAL DE L’ÉDITEUR]</span></li>
            <li>Forme juridique : <span className="font-semibold">[À COMPLÉTER — EI / SASU / SAS / autre]</span></li>
            <li>Adresse du siège ou adresse professionnelle : <span className="font-semibold">[À COMPLÉTER]</span></li>
            <li>SIRET : <span className="font-semibold">[À COMPLÉTER]</span></li>
            <li>RCS / registre : <span className="font-semibold">[À COMPLÉTER si applicable]</span></li>
            <li>Capital social : <span className="font-semibold">[À COMPLÉTER si société]</span></li>
            <li>Numéro de TVA intracommunautaire : <span className="font-semibold">[À COMPLÉTER si applicable]</span></li>
            <li>Email : <span className="font-semibold">[À COMPLÉTER — EMAIL DE CONTACT]</span></li>
            <li>Téléphone : <span className="font-semibold">[À COMPLÉTER si souhaité]</span></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est : <span className="font-semibold">[À COMPLÉTER — NOM DU RESPONSABLE]</span>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hébergeur : <span className="font-semibold">[À COMPLÉTER — NOM DE L’HÉBERGEUR]</span></li>
            <li>Adresse : <span className="font-semibold">[À COMPLÉTER — ADRESSE DE L’HÉBERGEUR]</span></li>
            <li>Téléphone / contact : <span className="font-semibold">[À COMPLÉTER]</span></li>
            <li>Site internet : <span className="font-semibold">[À COMPLÉTER]</span></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Objet du site</h2>
          <p>
            Doortrack est un projet d’application destiné à aider les équipes commerciales terrain à visualiser, suivre et piloter leur prospection.
          </p>
          <p>
            Le site présente le projet, ses fonctionnalités envisagées, sa vision, ainsi que les modalités de contact, de contribution et de participation à une phase bêta.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">5. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur le site, notamment les textes, visuels, interfaces, maquettes, logos, éléments graphiques, animations, noms, marques, concepts de présentation et contenus de démonstration, sont protégés par le droit de la propriété intellectuelle.
          </p>
          <p>
            Sauf autorisation écrite préalable, toute reproduction, représentation, modification, adaptation, diffusion ou exploitation totale ou partielle des contenus du site est interdite.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">6. Responsabilité</h2>
          <p>
            L’éditeur s’efforce de fournir des informations exactes et à jour. Toutefois, le site peut contenir des erreurs, omissions ou informations en cours d’évolution, notamment dans le cadre d’un projet en phase de développement, de pré-lancement ou de bêta.
          </p>
          <p>
            L’éditeur ne saurait être tenu responsable d’un dommage direct ou indirect résultant de l’utilisation du site, de l’impossibilité d’y accéder, ou de l’utilisation des informations qui y sont présentées.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">7. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Doortrack n’exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leurs contenus, pratiques ou politiques de confidentialité.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">8. Signalement et contact</h2>
          <p>
            Pour toute question, demande ou signalement concernant le site, l’utilisateur peut contacter l’éditeur à l’adresse suivante :
          </p>
          <p className="font-semibold text-terrain">
            [À COMPLÉTER — EMAIL DE CONTACT]
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
