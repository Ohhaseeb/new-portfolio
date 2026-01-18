
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-32 max-w-[1400px] mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-12 tracking-tighter text-primary">About Me</h2>
          <div className="grid grid-cols-1  gap-10">
            <div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-lg text-primary/70">
                  <span className="text-primary text-3xl font-black leading-none">•</span>
                  <span>Software Engineer who is an expert in the SaaS domain working with agentic AI</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-primary/70">
                  <span className="text-primary text-3xl font-black leading-none">•</span>
                  <span>Head volleyball coach and former college volleyball player</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-primary/70">
                  <span className="text-primary text-3xl font-black leading-none">•</span>
                  <span>Masters of Computer Science student at Georgia Tech</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-primary/70">
                  <span className="text-primary text-3xl font-black leading-none">•</span>
                  <span>Goated gamer (Top 500 if you know what I mean)</span>
                </li>
                <li className="flex items-start gap-3 text-lg text-primary/70">
                  <span className="text-primary text-3xl font-black leading-none">•</span>
                  <span>The next Viktor Axelsen of Badminton</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] bg-primary/5 rounded-sm overflow-hidden relative border border-primary/10">
          <img
            src="/Haseeb.jpeg"
            alt="Haseeb Sayed"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
