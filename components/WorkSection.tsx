
import React from 'react';

const WorkSection: React.FC = () => {
  const projects = [
    {
      img: '/images/VDP.png',
      title: 'VDP',
      subtitle: 'A SaaS application where coaches can create and assign specific day to day training to their clients',
      why: 'Vertical jump training is a crucial aspect of athletic development, however many programs are not tailored to the individual athlete and very overpriced. I was victim to this paying $100 a month for a program so I came up with VDP using my knowledge of software development and physical training to create a platform that is affordable and effective.',
      what: 'I developed a SaaS platform that streamlines the training management workflow with features for program creation, assignment, progress tracking, and performance analytics. I can track my clients progress and make adjustments to their program as needed without having to pay for another companies product',
      results: 'Serving 20+ active users with personalized week to week training programs, resulting in measurable vertical jump performance improvements for users upwards of 4+ inches. Generating $200+ in monthly recurring revenue through tiered subscription model, with 85% user retention rate. Makes my coaching job easier to keep track of all my clients and their workouts/progress',
      tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://vertical-performance-development.vercel.app/',
      codeUrl: 'https://github.com/Ohhaseeb/vertical-performance-development'
    },

    {
      img: '/images/Analytics.png',
      title: 'Energy Consumption Dashboard',
      subtitle: 'A full stack web application to visualize energy data, routing engineered from multiple APIs such as PG&E, EnergyStar, and AccuEnergy (Disclaimer: this is a project done for work not personal)',
      why: 'Energy consumption insights are crucial for businesses to reduce costs and environmental impact. This project aimed to solve the problem of fragmented energy data across multiple sources. Dena Energy inc is a startup that provides energy consumption insights to businesses and they reached out to me and my team to develop this product for them.',
      what: 'Developed a centralized dashboard that aggregates data from various energy providers and sensors, providing a unified view of consumption patterns and actionable insights.',
      results: 'The solution enabled businesses to identify wasteful patterns, implement targeted efficiency measures, and achieve an average of 15% reduction in energy costs.',
      tech: ['Next.js', 'Typescript', 'MySQL', 'Tailwind CSS', 'Digital Ocean'],
      liveUrl: 'https://energydian.com/',
      codeUrl: 'https://github.com/Ohhaseeb/dena-energy-dashboard'
    },
    {
      img: '/images/employerEval.png',
      title: 'EmployerEval',
      subtitle: 'A platform for students to rate and review their employers and internship experiences',
      why: 'Job seekers often lack reliable information about workplace culture and management practices before accepting positions. This creates an information asymmetry in the job market.',
      what: 'Built a platform that allows employees to anonymously share their experiences, rate employers, and provide detailed feedback on various aspects of the workplace environment.',
      results: 'The platform has helped job seekers make more informed decisions and has encouraged employers to improve their workplace practices to attract top talent.',
      tech: ['React', 'Firebase', 'Javascript', 'TailwindC SS'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section className="w-full py-32 max-w-[1400px] mx-auto scroll-mt-20">
      <div className="text-left mb-16">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-primary mb-4">Projects</h2>
        <p className="text-lg text-primary/70">Showcase of my latest work and side projects</p>
      </div>

      <div className="space-y-20">
        {projects.map((project, i) => (
          <div key={i} className="bg-brand-light border border-primary/10 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12">
              {/* Image Section */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] overflow-hidden border border-primary/10 rounded-sm">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech Stack & Buttons */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.liveUrl} className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-sm text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-brand-light transition-colors">
                      <span className="material-symbols-outlined text-sm">language</span>
                      Live Website
                    </a>
                    <a href={project.codeUrl} className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-sm text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-brand-light transition-colors">
                      <span className="material-symbols-outlined text-sm">code</span>
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary mb-2">{project.title}</h3>
                  <p className="text-primary/70">{project.subtitle}</p>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The Why</h4>
                  <p className="text-primary/70 leading-relaxed">{project.why}</p>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The What</h4>
                  <p className="text-primary/70 leading-relaxed">{project.what}</p>
                </div>

                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">The Results</h4>
                  <p className="text-primary/70 leading-relaxed">{project.results}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
