import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Conditions générales d’utilisation — Doortrack",
  description: "Conditions d’accès et d’utilisation du site Doortrack et de ses services de pré-lancement.",
};

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function ConditionsUtilisationPage() {
  return (
    <LegalPageLayout title="Conditions générales d’utilisation" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Objet</h2>
          <p>
            Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les modalités d’accès et d’utilisation du site internet Doortrack.
          </p>
          <p>
            Doortrack est un projet d’application destiné aux équipes de prospection terrain, aux commerciaux et aux managers souhaitant mieux visualiser, suivre et piloter leur activité commerciale terrain.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Accès au site</h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d’un accès internet. L’éditeur s’efforce d’assurer un accès de qualité, mais ne s’engage à aucune obligation de résultat de disponibilité permanente du site.
          </p>
          <p>
            L’éditeur peut suspendre, limiter ou interrompre l’accès au site pour des raisons de maintenance, de sécurité, d’évolution technique ou de force majeure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Informations présentées</h2>
          <p>
            Les informations présentées sur le site ont une finalité informative, commerciale et exploratoire.
          </p>
          <p>
            Certaines fonctionnalités décrites peuvent être en cours de conception, de test ou d’évolution. Les visuels, maquettes, écrans et descriptions ne constituent pas un engagement ferme de disponibilité, de performance ou de commercialisation ultérieure de l’application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Formulaires et demandes</h2>
          <p>
            Le site permet à l’utilisateur de transmettre une demande de contact, de démo ou de participation à la bêta via différents formulaires.
          </p>
          <p>
            L’utilisateur s’engage à fournir des informations exactes, loyales, complètes et à jour. L’envoi d’un formulaire ne crée pas automatiquement un contrat, un droit d’utilisation exclusif du produit ou une relation commerciale engageante.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">5. Participation à la bêta</h2>
          <p>
            L’utilisateur peut manifester son intérêt pour contribuer au produit Doortrack, rejoindre une bêta, devenir entreprise pilote ou demander un test terrain accompagné.
          </p>
          <p>
            L’envoi d’un formulaire ne garantit pas l’accès automatique à ces programmes. L’éditeur se réserve le droit de sélectionner les participants selon la pertinence de leur profil, leur secteur, les contraintes techniques et la phase d’avancement du projet.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">6. Obligations de l’utilisateur</h2>
          <p>L’utilisateur s’engage à :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>fournir des informations réelles et exactes dans les formulaires ;</li>
            <li>ne pas utiliser le site ou ses formulaires à des fins frauduleuses, malveillantes ou illicites ;</li>
            <li>ne pas tenter de perturber ou de pirater le bon fonctionnement technique du site ;</li>
            <li>ne pas porter atteinte aux droits de propriété intellectuelle de Doortrack ;</li>
            <li>ne pas transmettre de contenu injurieux, diffamatoire ou confidentiel sans autorisation écrite préalable.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">7. Propriété intellectuelle</h2>
          <p>
            Les contenus du site (textes, visuels, maquettes, interfaces, logos, graphismes, animations et éléments de présentation) sont protégés par le droit d’auteur.
          </p>
          <p>
            Toute reproduction, représentation, adaptation ou exploitation non autorisée écrite de tout ou partie du site est interdite et constitutive de contrefaçon.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">8. Responsabilité</h2>
          <p>
            Doortrack ne peut être tenu responsable des erreurs, interruptions temporaires de service, pertes de données, incompatibilités techniques ou dommages indirects découlant de l’utilisation ou de l’accès au site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">9. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Doortrack n’exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leurs contenus ou de leurs politiques de protection des données.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">10. Données personnelles</h2>
          <p>
            Les traitements de données personnelles réalisés via le site sont décrits dans la Politique de confidentialité.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">11. Modification des CGU</h2>
          <p>
            Doortrack peut modifier les présentes CGU à tout moment afin de tenir compte de l’évolution du site, des services ou de la réglementation en vigueur.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">12. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, et après échec de toute tentative de médiation amiable, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
