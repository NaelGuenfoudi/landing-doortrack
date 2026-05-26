"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const LOCAL_STORAGE_KEY = "doortrack_cookie_preferences";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Valeurs temporaires dans la modal
  const [tempAnalytics, setTempAnalytics] = useState(false);
  const [tempMarketing, setTempMarketing] = useState(false);

  useEffect(() => {
    // Lecture des préférences existantes
    const checkPreferences = () => {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;
          setTempAnalytics(parsed.analytics);
          setTempMarketing(parsed.marketing);
        } catch {
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    };

    const timer = setTimeout(checkPreferences, 0);

    // Écouteur d’événement global pour ouvrir la modal de gestion
    const handleOpenPreferences = () => {
      setIsModalOpen(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPrefs));
    setTempAnalytics(analytics);
    setTempMarketing(marketing);
    setShowBanner(false);
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleDeclineAll = () => {
    savePreferences(false, false);
  };

  const handleSaveCustom = () => {
    savePreferences(tempAnalytics, tempMarketing);
  };

  return (
    <>
      {/* 1. BANNIÈRE COOKIES */}
      <AnimatePresence>
        {showBanner && !isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-paper/95 backdrop-blur-md border-t border-line text-ink"
            style={{ paddingBottom: "calc(16px + env(safe-area-inset-bottom))" }}
          >
            <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
              <p className="text-[14px] leading-relaxed text-ink-soft text-center lg:text-left max-w-3xl">
                Nous utilisons des cookies pour assurer le bon fonctionnement du site et, si vous l’acceptez, mesurer son audience afin d’améliorer Doortrack.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 justify-center lg:justify-end">
                <button
                  type="button"
                  onClick={handleDeclineAll}
                  className="px-5 py-2.5 rounded-full border border-line hover:bg-canvas hover:border-line-2 text-[13.5px] font-semibold transition-colors w-full sm:w-auto text-center cursor-pointer"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2.5 rounded-full border border-line hover:bg-canvas hover:border-line-2 text-[13.5px] font-semibold transition-colors w-full sm:w-auto text-center cursor-pointer"
                >
                  Personnaliser
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-full bg-terrain hover:bg-terrain-2 text-paper-2 text-[13.5px] font-semibold transition-colors w-full sm:w-auto text-center cursor-pointer"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MODAL DE PRÉFÉRENCES */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Overlay d'arrière-plan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
            />

            {/* Fenêtre modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-full max-w-lg bg-white rounded-3xl border border-line shadow-shadow-3 p-6 sm:p-8 text-ink overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
                <h3 className="text-[20px] font-bold tracking-tight">Préférences cookies</h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-canvas hover:text-terrain transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Catégories de cookies scrollables */}
              <div className="space-y-6 overflow-y-auto flex-1 pr-1 pb-4">
                {/* 1. Cookies Nécessaires */}
                <div className="flex items-start justify-between gap-4 p-4 bg-canvas/30 rounded-2xl border border-line">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[15px] font-bold">Cookies nécessaires</h4>
                      <span className="text-[10px] tracking-[0.1em] font-mono uppercase bg-terrain-soft text-terrain-2 px-1.5 py-0.5 rounded font-semibold">
                        Toujours actifs
                      </span>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">
                      Ces cookies sont indispensables pour l’affichage correct du site, la sécurité des connexions et la gestion de vos préférences de consentement.
                    </p>
                  </div>
                </div>

                {/* 2. Mesure d'audience */}
                <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-2xl border border-line">
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold">Mesure d’audience</h4>
                    <p className="text-[13px] text-muted leading-relaxed">
                      Permet d’analyser les statistiques de visites de manière anonyme afin d’améliorer l’ergonomie générale, le contenu et l’efficacité de Doortrack.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTempAnalytics(!tempAnalytics)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      tempAnalytics ? "bg-terrain" : "bg-line-2"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-shadow-1 ring-0 transition duration-200 ease-in-out ${
                        tempAnalytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* 3. Marketing */}
                <div className="flex items-start justify-between gap-4 p-4 bg-white rounded-2xl border border-line">
                  <div className="space-y-1">
                    <h4 className="text-[15px] font-bold">Marketing</h4>
                    <p className="text-[13px] text-muted leading-relaxed">
                      Permettrait de mesurer ou de personnaliser certaines de nos communications produit ou invitations. Désactivé par défaut.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTempMarketing(!tempMarketing)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      tempMarketing ? "bg-terrain" : "bg-line-2"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-shadow-1 ring-0 transition duration-200 ease-in-out ${
                        tempMarketing ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Pied de la modal avec boutons */}
              <div className="border-t border-line pt-6 mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDeclineAll}
                  className="flex-1 px-4 py-3 rounded-xl border border-line hover:bg-canvas hover:border-line-2 text-[14px] font-bold text-center transition-colors cursor-pointer"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 px-4 py-3 rounded-xl border border-line hover:bg-canvas hover:border-line-2 text-[14px] font-bold text-center transition-colors cursor-pointer"
                >
                  Enregistrer mes choix
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-3 bg-terrain hover:bg-terrain-2 text-paper-2 text-[14px] font-bold text-center transition-colors cursor-pointer"
                >
                  Tout accepter
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
