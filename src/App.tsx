
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Tasks from "./pages/Tasks";
import AssetManager from "./pages/AssetManager";
import TrainModel from "./pages/TrainModel";
import FineTuneModel from "./pages/FineTuneModel";
import Themes from "./pages/Themes";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-slate-950">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/asset-manager" element={<AssetManager />} />
                <Route path="/train-model" element={<TrainModel />} />
                <Route path="/fine-tune-model" element={<FineTuneModel />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
