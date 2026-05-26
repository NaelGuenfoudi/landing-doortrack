import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Conditions générales de vente — Doortrack",
  description: "Informations relatives aux conditions commerciales de Doortrack en phase de pré-lancement.",
};

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function ConditionsVentePage() {
  return (
    <LegalPageLayout title="Conditions générales de vente" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Stade actuel du projet</h2>
          <p>
            À ce jour, le projet Doortrack est présenté dans le cadre d’une phase active de co-construction, de pré-lancement ou de test bêta.
          </p>
          <p>
            En conséquence, <span className="font-semibold">aucune offre commerciale payante standardisée</span> n’est commercialisée directement en ligne sur ce site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Absence de vente directe sur le site</h2>
          <p>
            Le site internet Doortrack ne permet pas la souscription automatique d’abonnements payants, l’achat en ligne direct ou la passation de commandes transactionnelles de services SaaS.
          </p>
          <p>
            Les formulaires présents sur la landing page ont pour unique but de recueillir des marques d’intérêt, de qualifier des besoins de prospection terrain et de soumettre des candidatures de contribution ou de participation à la bêta.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Accords spécifiques et contrats cadres</h2>
          <p>
            Les conditions commerciales et financières relatives à un éventuel déploiement pilote payant, un abonnement anticipé ou un test accompagné d’équipes de prospection feront systématiquement l’objet de contrats, de bons de commande et d’accords de niveau de service (SLA) signés de gré à gré entre l’éditeur et l’entreprise cliente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Publication future de CGV complètes</h2>
          <p>
            Lorsqu’une offre commerciale SaaS standardisée et des abonnements automatisés seront disponibles directement sur le site internet, des Conditions Générales de Vente complètes et conformes aux obligations légales seront publiées sur cette page.
          </p>
          <p>Ces futures conditions définiront notamment :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>les modalités de facturation, les tarifs et les moyens de paiement ;</li>
            <li>les conditions de résiliation et les durées d’engagement ;</li>
            <li>les niveaux de support client et de maintenance applicative ;</li>
            <li>les conditions de réversibilité des données de prospection terrain ;</li>
            <li>le détail du traitement des données par Doortrack en tant que sous-traitant (DPA).</li>
          </ul>
        </section>
      </div>
    </LegalPageLayout>
  );
}
