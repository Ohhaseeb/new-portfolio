
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto scroll-mt-20 flex flex-col md:flex-row gap-10 sm:gap-12 md:gap-20">
      <div className="md:w-1/2">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter mb-6 sm:mb-8 md:mb-10 text-primary">Get in <br /> Touch</h2>
        <p className="text-lg sm:text-xl text-primary/50 max-w-sm leading-relaxed">
          Whether that be for a SWE job or Volleyball
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col justify-end items-start border-t border-primary/10 pt-10">
        <a
          href="mailto:haseebsayed960@gmail.com"
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter hover:opacity-70 transition-opacity mb-10 sm:mb-12 md:mb-20 underline decoration-primary/20 underline-offset-8 text-primary break-words"
        >
          haseebsayed960@gmail.com
        </a>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12 md:gap-x-20 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">
          <a href="https://www.linkedin.com/in/haseeb-sayed-045207292/" className="hover:text-primary transition-colors py-2">LinkedIn</a>
          <a href="https://github.com/Ohhaseeb" className="hover:text-primary transition-colors py-2">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
