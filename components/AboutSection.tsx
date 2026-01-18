
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-32 max-w-[1400px] mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-12 tracking-tighter text-primary">About the Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-lg leading-relaxed text-primary/70">
              Based in London, we operate at the intersection of architecture and digital design. Our approach is technical, precise, and emotionally resonant.
            </p>
            <p className="text-lg leading-relaxed text-primary/70">
              Every project starts with a conversation about goals, not just features. We believe code should be as beautiful as the interface it powers.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] bg-primary/5 rounded-sm overflow-hidden relative border border-primary/10">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
            alt="Minimalist Architecture" 
            className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] bg-primary/80 backdrop-blur-md px-3 py-2 border border-primary/10 text-brand-light">
            EST. 2021
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
