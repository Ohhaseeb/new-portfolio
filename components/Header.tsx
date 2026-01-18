
import React from 'react';
import { Section } from '../types';

interface HeaderProps {
  onNavigate: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-primary text-brand-light h-10 flex items-center justify-between px-6 border-b border-primary/10">
      <div className="text-[10px] font-black uppercase tracking-[0.2em]">
        AVAILABLE FOR WORK 2025
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          <a href="#" className="hover:opacity-60 transition-opacity"><span className="material-symbols-outlined text-[16px]">link</span></a>
          <a href="#" className="hover:opacity-60 transition-opacity"><span className="material-symbols-outlined text-[16px]">alternate_email</span></a>
          <a href="#" className="hover:opacity-60 transition-opacity"><span className="material-symbols-outlined text-[16px]">terminal</span></a>
        </div>
        <div className="h-4 w-[1px] bg-brand-light/20 mx-2"></div>
        <nav className="flex gap-6">
          <button onClick={() => onNavigate(Section.WORK)} className="text-[10px] font-black uppercase tracking-widest hover:underline">Work</button>
          <button onClick={() => onNavigate(Section.ABOUT)} className="text-[10px] font-black uppercase tracking-widest hover:underline">About</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
