
import React from 'react';
import { Section } from '../types';

interface HeaderProps {
  onNavigate: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-primary text-brand-light min-h-10 h-auto py-2 flex items-center justify-between px-4 sm:px-6 md:px-10 border-b border-primary/10">
      <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis max-w-[40vw] sm:max-w-none">
        OPEN TO OPPORTUNITES IN THE BAY AREA
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-3 sm:gap-4">
          <a href="#" className="hover:opacity-60 transition-opacity p-2"><span className="material-symbols-outlined text-[16px]">link</span></a>
          <a href="#" className="hover:opacity-60 transition-opacity p-2"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
          <a href="#" className="hover:opacity-60 transition-opacity p-2"><span className="material-symbols-outlined text-[16px]">terminal</span></a>
        </div>
        <div className="h-4 w-[1px] bg-brand-light/20 mx-2"></div>
        <nav className="flex gap-2 sm:gap-3 md:gap-6">
          <button onClick={() => onNavigate(Section.WORK)} className="text-[10px] font-black uppercase tracking-widest hover:underline px-2 py-2 min-h-[44px] flex items-center">Work</button>
          <button onClick={() => onNavigate(Section.ABOUT)} className="text-[10px] font-black uppercase tracking-widest hover:underline px-2 py-2 min-h-[44px] flex items-center">About</button>
          <button onClick={() => onNavigate(Section.CONTACT)} className="text-[10px] font-black uppercase tracking-widest hover:underline px-2 py-2 min-h-[44px] flex items-center">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
