import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800 flex flex-col">
      <header className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="text-2xl font-semibold tracking-tight text-teal-900">Aura</span>
        </div>
        <div className="flex gap-4">
          <Link to="/dashboard" className="px-5 py-2.5 text-slate-600 font-medium hover:text-slate-900 transition-colors">
            Zaloguj się
          </Link>
          <Link to="/dashboard" className="px-5 py-2.5 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 transition-colors shadow-sm">
            Rozpocznij
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Nowoczesna platforma dbania o umysł
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
          Twoja bezpieczna przestrzeń do <span className="text-teal-600">rozwoju</span> i spokoju.
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Kompleksowy ekosystem zdrowia psychicznego. Terapia online, spersonalizowane plany rozwoju wspierane przez AI oraz baza wiedzy w jednym miejscu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/dashboard" className="px-8 py-4 bg-teal-600 text-white rounded-2xl font-medium text-lg hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center gap-2">
            Przejdź do aplikacji <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Spersonalizowana opieka</h3>
            <p className="text-slate-500 text-sm">Algorytmy AI dopasowują treści i terapeutów idealnie do Twoich aktualnych potrzeb.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Bezpieczeństwo i dyskrecja</h3>
            <p className="text-slate-500 text-sm">Pełna anonimowość, szyfrowane połączenia wideo i zgodność z najwyższymi standardami RODO.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
            <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Holistyczne podejście</h3>
            <p className="text-slate-500 text-sm">Od prewencji i edukacji, przez codzienne nawyki, aż po profesjonalną psychoterapię.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;