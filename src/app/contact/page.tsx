export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Parlons de votre prospection terrain</h1>
          <p className="text-lg text-slate-600">
            Complétez le formulaire ci-dessous pour rejoindre la bêta ou poser vos questions.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="text-sm font-semibold text-slate-700">Prénom</label>
            <input type="text" id="firstname" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="text-sm font-semibold text-slate-700">Nom</label>
            <input type="text" id="lastname" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="company" className="text-sm font-semibold text-slate-700">Entreprise</label>
            <input type="text" id="company" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email professionnel</label>
            <input type="email" id="email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / besoin terrain</label>
            <textarea id="message" rows={4} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"></textarea>
          </div>
          
          <div className="md:col-span-2">
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
              Envoyer ma demande
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              Vos informations servent uniquement à vous recontacter au sujet de Doortrack.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
