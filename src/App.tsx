
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import VitaminDeficiency from "./pages/diseases/VitaminDeficiency";
import Typhoid from "./pages/diseases/Typhoid";
import Diabetes from "./pages/diseases/Diabetes";
import Allergy from "./pages/diseases/Allergy";
import Kidney from "./pages/diseases/Kidney";
import Liver from "./pages/diseases/Liver";
import Pregnancy from "./pages/diseases/Pregnancy";
import Thyroid from "./pages/diseases/Thyroid";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/diseases/vitamin-deficiency" element={<VitaminDeficiency />} />
          <Route path="/diseases/typhoid" element={<Typhoid />} />
          <Route path="/diseases/diabetes" element={<Diabetes />} />
          <Route path="/diseases/allergy" element={<Allergy />} />
          <Route path="/diseases/kidney" element={<Kidney />} />
          <Route path="/diseases/liver" element={<Liver />} />
          <Route path="/diseases/pregnancy" element={<Pregnancy />} />
          <Route path="/diseases/thyroid" element={<Thyroid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
