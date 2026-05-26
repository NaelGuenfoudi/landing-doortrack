import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata = {
  title: "Politique de confidentialité — Doortrack",
  description: "Informations sur la collecte, l’utilisation, la conservation et la protection des données personnelles traitées via le site Doortrack.",
};

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout title="Politique de confidentialité" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Responsable du traitement</h2>
          <p>Les données personnelles collectées via le site Doortrack sont traitées par :</p>
          <p className="font-semibold">
            [À COMPLÉTER — NOM LÉGAL DE L’ÉDITEUR]<br />
            [À COMPLÉTER — ADRESSE]<br />
            Email : [À COMPLÉTER — EMAIL DE CONTACT]
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Données collectées</h2>
          <p>Dans le cadre du site Doortrack, les données suivantes peuvent être collectées :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>nom et prénom ;</li>
            <li>adresse email ;</li>
            <li>entreprise ;</li>
            <li>fonction ;</li>
            <li>numéro de téléphone si demandé ou communiqué volontairement ;</li>
            <li>message transmis via le formulaire ;</li>
            <li>niveau d’intérêt ou de contribution sélectionné ;</li>
            <li>informations relatives au contexte terrain communiquées volontairement ;</li>
            <li>données techniques de navigation strictement nécessaires au fonctionnement du site ;</li>
            <li>données liées aux cookies ou traceurs, lorsque l’utilisateur y consent.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Données à ne pas transmettre</h2>
          <p>
            L’utilisateur est invité à ne pas transmettre de données sensibles, confidentielles ou inutiles dans les formulaires du site.
          </p>
          <p>Il est notamment recommandé de ne pas transmettre :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>données médicales ;</li>
            <li>données bancaires ;</li>
            <li>identifiants ou mots de passe ;</li>
            <li>données confidentielles d’un employeur sans autorisation ;</li>
            <li>fichiers ou informations concernant des tiers sans base légale ou autorisation.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Finalités du traitement</h2>
          <p>Les données sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>répondre aux demandes transmises via le formulaire ;</li>
            <li>échanger avec les personnes intéressées par Doortrack ;</li>
            <li>qualifier les demandes relatives à la bêta ou aux tests terrain ;</li>
            <li>organiser d’éventuels échanges commerciaux, exploratoires ou produit ;</li>
            <li>améliorer la compréhension des besoins terrain ;</li>
            <li>gérer une liste d’attente ou un accès prioritaire ;</li>
            <li>assurer le bon fonctionnement et la sécurité du site ;</li>
            <li>mesurer l’audience du site, si un outil analytics est utilisé et sous réserve des règles applicables aux cookies.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">5. Bases légales</h2>
          <p>Selon les cas, les traitements reposent sur :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>l’exécution de mesures précontractuelles lorsque l’utilisateur demande un échange, souhaite rejoindre la bêta ou manifeste un intérêt pour Doortrack ;</li>
            <li>l’intérêt légitime de Doortrack à répondre aux demandes, améliorer son produit et développer son activité ;</li>
            <li>le consentement de l’utilisateur pour certains cookies, traceurs ou communications non nécessaires ;</li>
            <li>le respect d’obligations légales lorsque cela s’applique.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">6. Destinataires des données</h2>
          <p>
            Les données sont destinées à Doortrack et aux personnes habilitées à traiter les demandes.
          </p>
          <p>Elles peuvent être transmises à des prestataires techniques intervenant pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>l’hébergement ;</li>
            <li>la maintenance ;</li>
            <li>l’envoi d’emails ;</li>
            <li>la gestion des formulaires ;</li>
            <li>l’analyse d’audience ;</li>
            <li>la sécurité du site.</li>
          </ul>
          <p>Doortrack ne vend pas les données personnelles collectées via le site.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">7. Transferts hors Union européenne</h2>
          <p>
            Les données sont hébergées et traitées dans <span className="font-semibold">[À COMPLÉTER — PAYS / ZONE D’HÉBERGEMENT]</span>.
          </p>
          <p>
            Si certains prestataires impliquent un transfert de données hors Union européenne, Doortrack s’engage à mettre en place les garanties appropriées prévues par la réglementation applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">8. Durées de conservation</h2>
          <p>
            Les données issues des formulaires de contact et des demandes liées à la bêta sont conservées pendant une durée maximale de 3 ans à compter du dernier contact actif avec la personne concernée, sauf obligation légale ou demande de suppression antérieure.
          </p>
          <p>
            Les données strictement nécessaires à la preuve, à la sécurité ou au respect d’obligations légales peuvent être conservées pendant la durée nécessaire à ces finalités.
          </p>
          <p>
            Les préférences cookies sont conservées pendant une durée conforme à la réglementation applicable et à la configuration technique retenue.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">9. Droits des personnes</h2>
          <p>Conformément à la réglementation applicable, les personnes concernées peuvent demander :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>l’accès à leurs données ;</li>
            <li>la rectification de leurs données ;</li>
            <li>l’effacement de leurs données ;</li>
            <li>la limitation du traitement ;</li>
            <li>l’opposition au traitement ;</li>
            <li>la portabilité des données, lorsque ce droit s’applique.</li>
          </ul>
          <p>Ces droits peuvent être exercés en contactant :</p>
          <p className="font-semibold text-terrain">[À COMPLÉTER — EMAIL DE CONTACT]</p>
          <p>Une réponse sera apportée dans les délais prévus par la réglementation applicable.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">10. Réclamation auprès de la CNIL</h2>
          <p>
            Si l’utilisateur estime que ses données ne sont pas traitées conformément à la réglementation, il peut introduire une réclamation auprès de la CNIL (Commission Nationale de l’Informatique et des Libertés).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">11. Sécurité</h2>
          <p>
            Doortrack met en œuvre des mesures de sécurité physiques, techniques et organisationnelles raisonnables pour protéger vos données personnelles contre la perte, l’accès non autorisé, la divulgation, l’altération ou la destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">12. Évolution de la politique</h2>
          <p>
            La présente politique peut être modifiée à tout moment pour tenir compte des évolutions techniques ou fonctionnelles du site, du lancement de nos futurs services ou des exigences réglementaires.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
