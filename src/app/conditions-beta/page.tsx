import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Conditions de participation à la bêta — Doortrack",
  description: "Conditions de participation à la bêta, aux tests terrain et aux contributions produit Doortrack.",
};

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function ConditionsBetaPage() {
  return (
    <LegalPageLayout title="Conditions de participation à la bêta Doortrack" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Objet</h2>
          <p>
            La bêta Doortrack permet à certains utilisateurs volontaires, commerciaux, managers ou entreprises pilotes de tester, commenter et contribuer à l’amélioration du produit Doortrack avant son éventuel lancement commercial complet.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Accès à la bêta</h2>
          <p>
            L’accès à la bêta n’est pas garanti ni automatique. L’éditeur peut accepter ou rejeter une demande de participation selon ses propres critères, notamment :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>adéquation et pertinence du contexte de prospection terrain ;</li>
            <li>disponibilité opérationnelle de l’équipe Doortrack ;</li>
            <li>maturité du besoin et volume d’utilisateurs ;</li>
            <li>capacité du participant à fournir des retours d’usage constructifs.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Niveaux de contribution</h2>
          <p>Doortrack propose différents modes de participation :</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">Contributeur terrain</span> : partage ses usages, irritants et besoins, sans aucun engagement financier.
            </li>
            <li>
              <span className="font-semibold">Entreprise pilote</span> : teste Doortrack dans un contexte réel avec une équipe terrain identifiée et formalise ses retours.
            </li>
            <li>
              <span className="font-semibold">Early adopter</span> : sécurise un accès prioritaire aux premières versions et suit activement la roadmap du produit.
            </li>
            <li>
              <span className="font-semibold">Pilote accompagné</span> : définit un scénario de test sur-mesure et bénéficie d’un cadrage avec l’équipe produit.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Absence de garantie et risques</h2>
          <p>
            La version bêta est fournie en l’état, à titre expérimental. L’utilisateur reconnaît que l’application peut comporter des bugs, ralentissements, instabilités ou pertes de données temporaires.
          </p>
          <p>
            L’éditeur ne fournit aucune garantie de performance, de disponibilité de service ou de sécurité absolue, et ne saurait être tenu responsable d’un quelconque préjudice lié à l’utilisation de la version bêta.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">5. Propriété intellectuelle et retours utilisateurs</h2>
          <p>
            L’utilisateur accepte de transmettre des retours d’expérience, rapports de bugs, idées ou suggestions à Doortrack.
          </p>
          <p>
            Sauf accord contraire exprès et écrit, le participant cède à l’éditeur, à titre gratuit et exclusif, tous les droits de propriété intellectuelle sur les suggestions et retours formulés pour permettre l’amélioration continue de l’application Doortrack.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">6. Données de test et RGPD</h2>
          <p>
            Les participants s’engagent à ne pas charger de données hautement sensibles (données de santé, bancaires, etc.) dans l’application pendant la phase bêta.
          </p>
          <p>
            Si des données personnelles d’équipes de prospection réelles sont traitées, un accord spécifique de traitement de données (DPA) devra être signé entre Doortrack et l’entreprise pilote concernée.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">7. Confidentialité</h2>
          <p>
            Les informations partagées au cours de la bêta concernant la roadmap produit, les interfaces maquettées non publiques ou les futures fonctionnalités sont strictement confidentielles. Le participant s’engage à ne pas les divulguer à des tiers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">8. Suspension ou fin de participation</h2>
          <p>
            Doortrack peut suspendre ou révoquer l’accès d’un participant à la bêta à tout moment et sans préavis en cas d’inactivité prolongée, d’abus, de non-respect des présentes conditions ou de changement de phase dans le développement du projet.
          </p>
          <p>Pour mettre fin à sa participation volontairement, le participant peut écrire à :</p>
          <p className="font-semibold text-terrain">[À COMPLÉTER — EMAIL DE CONTACT]</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">9. Évolution des conditions de la bêta</h2>
          <p>
            Doortrack se réserve le droit de modifier les modalités de sa bêta (tarifs préférentiels potentiels, volumes d’accès, etc.) à tout moment. Les participants en seront informés par email.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
