
import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-item');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12 animate-item opacity-0">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">Get to know the person behind NovaWav Digital</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 animate-item opacity-0">
            <div className="relative">
              <div className="absolute inset-0 bg-novawav-emerald rounded-lg transform -rotate-3 opacity-10"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <div className="w-20 h-20 bg-novawav-lightGrey rounded-full flex items-center justify-center mb-6 mx-auto">
                  <User size={36} className="text-novawav-navy" />
                </div>
                <h3 className="text-2xl font-bold text-novawav-navy text-center mb-2">Andressa Oliveira</h3>
                <p className="text-novawav-emerald font-medium text-center mb-6">Digital Marketing Strategist</p>
                <div className="flex justify-center space-x-4 mb-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-novawav-navy text-white flex items-center justify-center hover:bg-novawav-emerald transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-novawav-navy text-white flex items-center justify-center hover:bg-novawav-emerald transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="#" className="text-novawav-navy hover:text-novawav-emerald transition-colors flex items-center">
                    <span className="mr-2">Download CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 animate-item opacity-0 delay-200">
            <div className="prose max-w-none">
              <p className="mb-4 text-lg">
                Hi, I'm <strong className="text-novawav-navy">Andressa Oliveira</strong>, a passionate digital marketing strategist originally from Brazil, now based in Australia. With a strong international background and a commitment to excellence, I have built my career by helping businesses grow through smart digital strategies, impactful storytelling, and performance-driven campaigns.
              </p>
              <p className="mb-4 text-lg">
                I have experience working in Australia as a marketing and sales strategist, delivering successful results in paid traffic management (Meta Ads and Google Ads), social media growth, and content creation. I also specialise in developing responsive, SEO-optimised websites that drive real business results.
              </p>
              <p className="mb-6 text-lg">
                Today, I am building <strong className="text-novawav-emerald">NovaWav Digital</strong> to empower companies and entrepreneurs with innovative digital solutions and inspire them to reach their full potential in the online world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-novawav-lightGrey p-4 rounded-lg">
                  <h4 className="font-bold text-novawav-navy mb-2">Front-End Development</h4>
                  <p className="text-gray-600">Creating responsive, user-friendly websites</p>
                </div>
                <div className="bg-novawav-lightGrey p-4 rounded-lg">
                  <h4 className="font-bold text-novawav-navy mb-2">Social Media Management</h4>
                  <p className="text-gray-600">Strategic content creation and growth</p>
                </div>
                <div className="bg-novawav-lightGrey p-4 rounded-lg">
                  <h4 className="font-bold text-novawav-navy mb-2">Paid Traffic Management</h4>
                  <p className="text-gray-600">Google Ads and Meta campaigns that convert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
