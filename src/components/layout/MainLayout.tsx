import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Video, 
  Map, 
  Users, 
  PhoneCall, 
  Settings, 
  LogOut,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Pulpit', path: '/dashboard' },
    { icon: Map, label: 'Mój Plan', path: '/plan' },
    { icon: BookOpen, label: 'Baza Wiedzy', path: '/knowledge' },
    { icon: Video, label: 'Webinary', path: '/webinars' },
    { icon: Users, label: 'Terapeuci', path: '/therapists' },
    { icon: Heart, label: 'Zapisane', path: '/saved' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col fixed h-full z-10">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-xl font-semibold tracking-tight text-teal-900">Aura</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-medium text-stone-400 mb-4 px-2 uppercase tracking-wider">Menu Główne</div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-teal-50 text-teal-700 font-medium" 
                    : "text-slate-500 hover:bg-stone-100 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-teal-600" : "text-slate-400 group-hover:text-slate-600")} />
                {item.label}
              </Link>
            );
          })}

          <div className="mt-8 mb-4">
            <div className="text-xs font-medium text-stone-400 mb-4 px-2 uppercase tracking-wider">Pomoc</div>
            <Link
              to="/crisis"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                location.pathname === '/crisis'
                  ? "bg-rose-50 text-rose-700 font-medium"
                  : "text-rose-600 hover:bg-rose-50"
              )}
            >
              <PhoneCall className="w-5 h-5" />
              Wsparcie Kryzysowe
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-stone-100">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-slate-500 hover:bg-stone-100 transition-colors">
            <Settings className="w-5 h-5 text-slate-400" />
            Ustawienia
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-slate-500 hover:bg-stone-100 transition-colors mt-1">
            <LogOut className="w-5 h-5 text-slate-400" />
            Wyloguj się
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 max-w-7xl mx-auto w-full">
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <input 
              type="text" 
              placeholder="Szukaj artykułów, terapeutów, webinarów..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500/20 outline-none text-sm"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-teal-600 transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-700">Anna Kowalska</p>
                <p className="text-xs text-slate-500">Plan Premium</p>
              </div>
            </div>
          </div>
        </header>
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;