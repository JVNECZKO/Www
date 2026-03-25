import React from 'react';
import { Star, Calendar, Video, Filter, Search } from 'lucide-react';

const Therapists = () => {
  const therapists = [
    {
      id: 1,
      name: 'mgr Tomasz Wiśniewski',
      title: 'Psychoterapeuta CBT, Psycholog',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 4.9,
      reviews: 124,
      price: '180 PLN',
      tags: ['Lęki', 'Depresja', 'Stres zawodowy'],
      nextAvailable: 'Jutro, 14:00'
    },
    {
      id: 2,
      name: 'mgr Karolina Nowak',
      title: 'Psychoterapeutka Gestalt',
      image: 'https://i.pravatar.cc/150?img=35',
      rating: 5.0,
      reviews: 89,
      price: '200 PLN',
      tags: ['Relacje', 'Rozwój osobisty', 'Trauma'],
      nextAvailable: 'Środa, 10:00'
    },
    {
      id: 3,
      name: 'dr Michał Kowalczyk',
      title: 'Psychiatra, Psychoterapeuta',
      image: 'https://i.pravatar.cc/150?img=11',
      rating: 4.8,
      reviews: 210,
      price: '250 PLN',
      tags: ['Zaburzenia nastroju', 'ADHD', 'Bezsenność'],
      nextAvailable: 'Czwartek, 16:30'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-800">Znajdź Terapeutę</h1>
          <p className="text-slate-500 mt-2">Wybierz specjalistę, który najlepiej odpowiada Twoim potrzebom.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-stone-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" />
            Filtruj
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-teal-600 text-white rounded-xl text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm">
            <Search className="w-4 h-4" />
            Dopasuj przez AI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="shrink-0">
              <img src={therapist.image} alt={therapist.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">{therapist.name}</h2>
                  <p className="text-slate-500">{therapist.title}</p>
                </div>
                <div className="flex items-center gap-1 bg-stone-50 px-3 py-1.5 rounded-lg">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-medium text-slate-700">{therapist.rating}</span>
                  <span className="text-slate-400 text-sm">({therapist.reviews})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {therapist.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Video className="w-4 h-4 text-slate-400" />
                  Sesje online
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Najbliższy termin: <span className="font-medium text-slate-800">{therapist.nextAvailable}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-100 pt-4 md:pt-0 md:pl-6">
              <div className="text-center md:text-right mb-4 md:mb-0">
                <p className="text-sm text-slate-500">Cena za sesję (50 min)</p>
                <p className="text-2xl font-semibold text-slate-800">{therapist.price}</p>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-900 transition-colors shadow-sm">
                Umów wizytę
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;