
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-40 max-w-[1400px] mx-auto scroll-mt-20 flex flex-col md:flex-row gap-20">
      <div className="md:w-1/2">
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-10 text-primary">Get in <br /> Touch</h2>
        <p className="text-xl text-primary/50 max-w-sm leading-relaxed">
          Whether that be for a SWE job or Volleyball
        </p>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-end items-start border-t border-primary/10 pt-10">
        <a 
          href="mailto:hello@portfolio.studio" 
          className="text-3xl md:text-5xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity mb-20 underline decoration-primary/20 underline-offset-8 text-primary"
        >
          haseebsayed960@gmail.com
        </a>
        
        <div className="grid grid-cols-2 gap-x-20 gap-y-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">
          <a href="https://www.linkedin.com/in/haseeb-sayed-045207292/" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/Ohhaseeb" className="hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
