
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PortfolioChat from './components/PortfolioChat';
import { Section } from './types';

const App: React.FC = () => {
  const handleNavigate = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === Section.HERO) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background-main overflow-x-hidden flex flex-col">
      {/* Structural Grid Lines */}
      <div className="grid-line-v left-6 md:left-10"></div>
      <div className="grid-line-v right-6 md:right-10"></div>
      
      <Header onNavigate={handleNavigate} />
      
      <div className="flex-1 flex flex-col w-full">
        <Hero />
        
        <div id="work" className="w-full px-6 md:px-10 border-b border-primary/5">
           <WorkSection />
        </div>

        <div id="about" className="w-full px-6 md:px-10 border-b border-primary/5">
          <AboutSection />
        </div>
        
        <div id="contact" className="w-full px-6 md:px-10">
          <ContactSection />
        </div>
      </div>

      <Footer />
      <PortfolioChat />
    </div>
  );
};

export default App;
