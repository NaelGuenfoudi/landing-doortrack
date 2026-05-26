"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import Link from "next/link";

// TODO LEGAL: remplacer les placeholders juridiques avant mise en production publique.
export default function CookiesPage() {
  const handleOpenPreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  return (
    <LegalPageLayout title="Politique relative aux cookies" lastUpdated="[À COMPLÉTER — DATE]">
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">1. Qu’est-ce qu’un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé et stocké sur le terminal (ordinateur, tablette, smartphone) de l’utilisateur lors de la consultation d’un site internet.
          </p>
          <p>
            Il peut permettre au site de fonctionner correctement, de mesurer son audience anonymement, de mémoriser certaines préférences ou de proposer certaines fonctionnalités interactives.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">2. Cookies utilisés sur Doortrack</h2>
          <p>Le site Doortrack peut utiliser les catégories de cookies suivantes :</p>
          
          <div className="space-y-4 pt-2">
            <div className="p-5 bg-canvas/30 border border-line rounded-2xl">
              <h3 className="font-bold text-[16px] text-ink mb-2">Cookies strictement nécessaires</h3>
              <p className="text-[14.5px] leading-relaxed">
                Ces cookies sont indispensables au fonctionnement technique du site et ne requièrent pas votre consentement préalable. Ils permettent par exemple l’affichage sécurisé du site et la mémorisation de vos choix de consentement en matière de traceurs.
              </p>
            </div>

            <div className="p-5 bg-white border border-line rounded-2xl">
              <h3 className="font-bold text-[16px] text-ink mb-2">Cookies de mesure d’audience</h3>
              <p className="text-[14.5px] leading-relaxed">
                Ces cookies permettent d’analyser les statistiques de visite et d’audience (pages vues, temps passé, provenance) de manière agrégée et anonyme pour améliorer l’ergonomie générale du produit.<br />
                Outil d’analyse d’audience envisagé ou utilisé : <span className="font-semibold">[À COMPLÉTER — aucun / Plausible / Matomo / Google Analytics / autre]</span>.
              </p>
            </div>

            <div className="p-5 bg-white border border-line rounded-2xl">
              <h3 className="font-bold text-[16px] text-ink mb-2">Cookies marketing ou publicitaires</h3>
              <p className="text-[14.5px] leading-relaxed">
                À ce stade, le site Doortrack <span className="font-semibold">[À COMPLÉTER — n’utilise pas / utilise]</span> des cookies marketing ou publicitaires pour suivre le comportement des utilisateurs ou proposer des publicités ciblées. Ils sont désactivés par défaut et requièrent votre accord exprès.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">3. Gestion du consentement</h2>
          <p>
            Lors de votre première visite sur le site, un bandeau d’information s’affiche pour vous permettre d’accepter, de refuser ou de paramétrer le dépôt des cookies optionnels.
          </p>
          <p>
            Conformément aux recommandations de la CNIL, le refus des cookies optionnels doit être aussi simple que leur acceptation. Vous pouvez modifier vos préférences ou retirer votre consentement à tout moment en cliquant sur le bouton ci-dessous :
          </p>
          <div className="pt-2 text-center sm:text-left">
            <button
              type="button"
              onClick={handleOpenPreferences}
              className="px-6 py-3 rounded-xl bg-terrain text-paper-2 font-bold hover:bg-terrain-2 transition-all shadow-shadow-2 cursor-pointer inline-flex items-center gap-2"
            >
              Gérer mes préférences cookies
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">4. Durée de conservation des choix</h2>
          <p>
            Vos préférences concernant le dépôt des cookies (acceptation ou refus) sont enregistrées et conservées pendant une durée de <span className="font-semibold">[À COMPLÉTER — durée retenue, ex: 6 mois]</span>. Passé ce délai, le bandeau de consentement vous sera de nouveau proposé.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-[20px] font-bold text-ink">5. En savoir plus</h2>
          <p>
            Pour toute question relative aux cookies ou pour exercer vos droits d’accès et de rectification sur vos données personnelles, veuillez consulter notre{" "}
            <Link href="/politique-confidentialite" className="text-terrain hover:underline font-semibold">
              Politique de confidentialité
            </Link>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
