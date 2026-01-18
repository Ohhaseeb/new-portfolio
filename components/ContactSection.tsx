
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-40 max-w-[1400px] mx-auto scroll-mt-20 flex flex-col md:flex-row gap-20">
      <div className="md:w-1/2">
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-10 text-primary">Start <br /> Now</h2>
        <p className="text-xl text-primary/50 max-w-sm leading-relaxed">
          Ready to scale your digital presence? Send us a brief or just say hello.
        </p>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-end items-start border-t border-primary/10 pt-10">
        <a 
          href="mailto:hello@portfolio.studio" 
          className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity mb-20 underline decoration-primary/20 underline-offset-8 text-primary"
        >
          hello@portfolio.studio
        </a>
        
        <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
