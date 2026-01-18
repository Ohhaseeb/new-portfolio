
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center px-10 md:px-20 border-b border-primary/10">
      <div className="max-w-[1400px] mx-auto w-full pt-20">
        <h1 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase leading-[0.85] tracking-tight mb-20 animate-reveal text-primary">
          YOUR <span className="italic font-serif opacity-80">SOLUTION</span><br />
          STARTS HERE!
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6 flex flex-col justify-end">
             <div className="w-24 h-24 border-l-4 border-b-4 border-primary mb-10 flex items-end p-2 opacity-80 animate-reveal" style={{ animationDelay: '0.2s' }}>
                <span className="material-symbols-outlined text-6xl transform rotate-45 text-primary">south</span>
             </div>
          </div>
          
          <div className="md:col-span-6 border-l border-primary/10 pl-10 pb-10 animate-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-px h-10 bg-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50">My Services</span>
            </div>
            <p className="text-lg md:text-xl text-primary/80 leading-relaxed max-w-lg">
              Looking for a project that truly represents your brand and fuels growth? I prioritize understanding your unique needs to ensure you get the time, attention, and results you deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
