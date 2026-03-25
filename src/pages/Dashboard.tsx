import React from 'react';
import { Calendar, Clock, PlayCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-semibold mb-2">Dzień dobry, Anno</h1>
          <p className="text-teal-50 text-lg mb-6">Cieszymy się, że jesteś. Jak się dzisiaj czujesz?</p>
          
          <div className="flex gap-3">
            {['Świetnie', 'Dobrze', 'Neutralnie', 'Gorzej', 'Źle'].map((mood) => (
              <button key={mood} className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium transition-all border border-white/10">
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* AI Recommended Plan */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-500" />
                Twój dzisiejszy plan
              </h2>
              <button className="text-sm text-teal-600 font-medium hover:underline">Zobacz cały plan</button>
            </div>
            
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-teal-500" /></div>
                  <div>
                    <h3 className="font-medium text-slate-800">Poranna medytacja oddechu</h3>
                    <p className="text-sm text-slate-500 mt-1">10 minut • Redukcja stresu</p>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-white rounded-xl text-sm font-medium shadow-sm border border-stone-200 hover:bg-stone-50 transition-colors">
                    Zrobione
                  </button>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-stone-100 hover:border-teal-100 transition-colors cursor-pointer group">
                  <div className="mt-1"><PlayCircle className="w-6 h-6 text-slate-300 group-hover:text-teal-500 transition-colors" /></div>
                  <div>
                    <h3 className="font-medium text-slate-800">Artykuł: Jak radzić sobie z przebodźcowaniem</h3>
                    <p className="text-sm text-slate-500 mt-1">5 min czytania • Zalecone przez AI</p>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-medium shadow-sm hover:bg-teal-700 transition-colors">
                    Zacznij
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended Content */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Polecane dla Ciebie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Zrozumieć swoje emocje', type: 'Wideo', duration: '15 min', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=500&q=60' },
                { title: 'Trening asertywności w pracy', type: 'Podcast', duration: '45 min', img: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=500&q=60' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 group cursor-pointer">
                  <div className="h-32 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-700">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="space-y-6">
          {/* Upcoming Session */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <h3 className="font-semibold text-slate-800 mb-4">Najbliższa sesja</h3>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://i.pravatar.cc/150?img=47" alt="Therapist" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-medium text-slate-800">mgr Tomasz Wiśniewski</p>
                <p className="text-sm text-slate-500">Psychoterapeuta CBT</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 mb-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Czwartek, 24 Października</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>17:00 - 17:50 (Online)</span>
              </div>
            </div>
            <button className="w-full py-2.5 bg-teal-50 text-teal-700 rounded-xl font-medium hover:bg-teal-100 transition-colors">
              Dołącz do spotkania
            </button>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
            <h3 className="font-semibold text-slate-800 mb-4">Twój postęp w tym tygodniu</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600">Zrealizowane cele</span>
                  <span className="font-medium text-slate-800">4/5</span>
                </div>
                <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-600">Minuty uważności</span>
                  <span className="font-medium text-slate-800">45/60</span>
                </div>
                <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;