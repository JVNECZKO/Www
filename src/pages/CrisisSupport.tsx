import React from 'react';
import { Phone, AlertTriangle, HeartHandshake, ExternalLink } from 'lucide-react';

const CrisisSupport = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HeartHandshake className="w-8 h-8 text-rose-600" />
        </div>
        <h1 className="text-3xl font-semibold text-slate-800">Wsparcie Kryzysowe</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Jeśli czujesz, że tracisz kontrolę, masz myśli samobójcze lub znajdujesz się w sytuacji zagrożenia życia – nie jesteś sam. Skorzystaj z bezpłatnej, anonimowej pomocy.
        </p>
      </div>

      {/* Emergency Alert */}
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
          <AlertTriangle className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-rose-900 mb-1">Bezpośrednie zagrożenie życia</h2>
          <p className="text-rose-700">Zadzwoń natychmiast na numer alarmowy. Działa 24/7.</p>
        </div>
        <a href="tel:112" className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-bold text-2xl shadow-sm transition-colors flex items-center gap-3">
          <Phone className="w-6 h-6" />
          112
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Contact Card 1 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:border-rose-100 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">Kryzysowy Telefon Zaufania</h3>
              <p className="text-sm text-slate-500 mt-1">Dla dorosłych w kryzysie emocjonalnym</p>
            </div>
            <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-lg">Codziennie 14:00-22:00</span>
          </div>
          <a href="tel:116123" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl hover:bg-rose-50 group transition-colors">
            <span className="text-2xl font-bold text-slate-700 group-hover:text-rose-600 transition-colors">116 123</span>
            <Phone className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
          </a>
        </div>

        {/* Contact Card 2 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:border-rose-100 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">Telefon Zaufania dla Dzieci i Młodzieży</h3>
              <p className="text-sm text-slate-500 mt-1">Fundacja Dajemy Dzieciom Siłę</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-lg">24/7</span>
          </div>
          <a href="tel:116111" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl hover:bg-rose-50 group transition-colors">
            <span className="text-2xl font-bold text-slate-700 group-hover:text-rose-600 transition-colors">116 111</span>
            <Phone className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
          </a>
        </div>

        {/* Contact Card 3 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:border-rose-100 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">Centrum Wsparcia dla Osób w Stanie Kryzysu</h3>
              <p className="text-sm text-slate-500 mt-1">Bezpłatna pomoc psychologiczna</p>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-lg">24/7</span>
          </div>
          <a href="tel:800702222" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl hover:bg-rose-50 group transition-colors">
            <span className="text-2xl font-bold text-slate-700 group-hover:text-rose-600 transition-colors">800 702 222</span>
            <Phone className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
          </a>
        </div>

        {/* Contact Card 4 */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hover:border-rose-100 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">ITAKA - Antydepresyjny Telefon Zaufania</h3>
              <p className="text-sm text-slate-500 mt-1">Wsparcie w depresji</p>
            </div>
            <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-lg">Wybrane dni</span>
          </div>
          <a href="tel:224848801" className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl hover:bg-rose-50 group transition-colors">
            <span className="text-2xl font-bold text-slate-700 group-hover:text-rose-600 transition-colors">22 484 88 01</span>
            <Phone className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
          </a>
        </div>
      </div>

      <div className="mt-8 p-6 bg-stone-100 rounded-3xl text-center">
        <p className="text-slate-600 mb-4">Wolisz napisać? Skorzystaj z czatu z psychologiem.</p>
        <button className="px-6 py-3 bg-white text-slate-800 rounded-xl font-medium shadow-sm hover:bg-stone-50 transition-colors inline-flex items-center gap-2">
          Przejdź do czatu wsparcia <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CrisisSupport;