"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-[32px] border border-line p-8 md:p-12 shadow-shadow-3">
        <div className="text-center mb-12 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-ink">Échangeons sur votre réalité terrain.</h3>
          <p className="text-lead">
            Expliquez-nous brièvement votre organisation, votre équipe et vos besoins. Nous reviendrons vers vous pour identifier le niveau d’échange ou de bêta le plus adapté.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Nom / Prénom</label>
            <input 
              type="text" 
              placeholder="Jean Dupont"
              className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Entreprise</label>
            <input 
              type="text" 
              placeholder="Votre société"
              className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Fonction</label>
            <input 
              type="text" 
              placeholder="Manager Commercial"
              className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Email professionnel</label>
            <input 
              type="email" 
              placeholder="jean@entreprise.com"
              className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Téléphone</label>
            <input 
              type="tel" 
              placeholder="06 12 34 56 78"
              className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Nombre de commerciaux terrain</label>
            <select className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23786E5E%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat">
              <option>1 à 5</option>
              <option>6 à 15</option>
              <option>16 à 50</option>
              <option>Plus de 50</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Niveau d’intérêt</label>
            <select className="w-full h-14 px-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23786E5E%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat">
              <option>Je veux simplement échanger</option>
              <option>Je souhaite devenir contributeur terrain</option>
              <option>Je souhaite candidater comme entreprise pilote</option>
              <option>Je souhaite devenir Early Adopter</option>
              <option>Je souhaite étudier un pilote terrain encadré</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[13px] font-bold text-ink ml-1">Message libre</label>
            <textarea 
              rows={4}
              placeholder="Parlez-nous de vos besoins..."
              className="w-full p-5 rounded-xl border border-line bg-paper focus:outline-none focus:border-terrain focus:ring-4 focus:ring-terrain/10 transition-all resize-none"
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button className="w-full h-16 rounded-2xl bg-terrain text-white font-bold text-lg hover:bg-terrain-2 transition-all shadow-shadow-2">
              Envoyer ma demande →
            </button>
            <p className="text-[11px] text-muted text-center mt-4 px-8">
              Vos informations sont utilisées uniquement pour répondre à votre demande et échanger avec vous au sujet de Doortrack.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
