import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import RegisterLogin from './components/RegisterLogin';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LoanBuddy from './components/LoanBuddy';
import RepaymentPlanAdvisor from './pages/RepaymentPlanAdvisor';
import PersonalFinanceTracker from './pages/PersonalFinanceTracker';
import LoanEligibility from './pages/LoanEligibility'; // ✅ NEW IMPORT

const queryClient = new QueryClient();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <WhatWeOffer />
                <RegisterLogin />
                <Testimonials />
                <FAQ />
                <AboutUs />
              </main>
            } />
            <Route path="/repayment-plan-advisor" element={<RepaymentPlanAdvisor />} />
            <Route path="/personal-finance-tracker" element={<PersonalFinanceTracker />} />
            <Route path="/loan-eligibility" element={<LoanEligibility />} /> {/* ✅ NEW ROUTE */}
          </Routes>

          <Footer />
          <LoanBuddy />

          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
