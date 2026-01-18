
import React from 'react';

const WorkSection: React.FC = () => {
  return (
    <section className="w-full py-32 max-w-[1400px] mx-auto scroll-mt-20">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-primary">Case Studies</h2>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 pb-4 text-primary">Scroll to explore</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="group bg-background-main p-10 cursor-pointer transition-colors hover:bg-primary/5">
            <div className="aspect-[16/9] overflow-hidden mb-10 border border-primary/10 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src={`https://images.unsplash.com/photo-${[
                  '1550745165-9bc0b252726f',
                  '1531297484001-80022131f5a1',
                  '1526374965328-7f61d4dc18c5',
                  '1518770660439-4636190af475'
                ][i-1]}?auto=format&fit=crop&q=80&w=800`} 
                alt={`Project 0${i}`} 
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mb-2 block">0{i} / Digital Design</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Project Title</h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-brand-light transition-all">
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
