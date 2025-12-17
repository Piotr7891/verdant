import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

// Brand Concept: "Verdant"
// A biophilic design service that bridges the gap between sterile offices and nature. 
// The aesthetic is rooted in 'Quiet Luxury'—minimal, functional, but organic and warm.

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <Services />
          <Process />
          <Pricing />
          <Benefits />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;