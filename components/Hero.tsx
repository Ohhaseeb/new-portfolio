
import React from 'react';
import Snowfall from 'react-snowfall';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20 border-b border-primary/10">
      {/* Snowfall Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Snowfall
          color="#2D336B"
          snowflakeCount={100}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full pt-16 sm:pt-20 relative z-20">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tight mb-8 sm:mb-12 md:mb-20 text-primary animate-[slideInLeft_1s_ease-out]">
          HASEEB SAYED<br />

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-12 animate-[slideInRight_1s_ease-out]" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <p className="text-lg md:text-xl text-primary/80 leading-relaxed max-w-2xl">
              Passionate software engineer dedicated to crafting elegant solutions and building innovative applications that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
