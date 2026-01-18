
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 mt-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 border-t border-primary/10">
      <div>© 2026 PORTFOLIO</div>
      <div className="flex gap-6 sm:gap-8 md:gap-10 mt-4 md:mt-0">
        <span>California</span>
      </div>
    </footer>
  );
};

export default Footer;
