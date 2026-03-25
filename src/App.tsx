import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import CrisisSupport from "./pages/CrisisSupport";
import Therapists from "./pages/Therapists";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<Index />} />
          
          {/* App Routes wrapped in MainLayout */}
          <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/crisis" element={<MainLayout><CrisisSupport /></MainLayout>} />
          <Route path="/therapists" element={<MainLayout><Therapists /></MainLayout>} />
          
          {/* Placeholders for other routes to prevent 404s while navigating */}
          <Route path="/plan" element={<MainLayout><div className="p-8 text-center text-slate-500">Moduł "Mój Plan" w budowie...</div></MainLayout>} />
          <Route path="/knowledge" element={<MainLayout><div className="p-8 text-center text-slate-500">Moduł "Baza Wiedzy" w budowie...</div></MainLayout>} />
          <Route path="/webinars" element={<MainLayout><div className="p-8 text-center text-slate-500">Moduł "Webinary" w budowie...</div></MainLayout>} />
          <Route path="/saved" element={<MainLayout><div className="p-8 text-center text-slate-500">Moduł "Zapisane" w budowie...</div></MainLayout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;