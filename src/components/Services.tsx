
import React, { useEffect, useRef } from 'react';
import { Globe, Users, MessageSquare, Briefcase } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Globe size={48} />,
      title: "Website Creation & Management",
      description: "Responsive, SEO-optimised, and conversion-focused websites that represent your brand professionally and drive business results.",
      features: ["Custom Design", "Mobile Optimization", "SEO-Friendly Structure", "Performance Focused"]
    },
    {
      icon: <Users size={48} />,
      title: "Social Media Management",
      description: "Strategic content creation, graphic design, video editing, scheduling, and growth strategies to build your online presence.",
      features: ["Content Strategy", "Community Building", "Visual Design", "Analytics & Reporting"]
    },
    {
      icon: <MessageSquare size={48} />,
      title: "Brand Storytelling",
      description: "Compelling narrative development for brands and products that resonates with your target audience and strengthens brand loyalty.",
      features: ["Brand Voice Development", "Copywriting", "Content Marketing", "Visual Storytelling"]
    },
    {
      icon: <Briefcase size={48} />,
      title: "Paid Traffic Management",
      description: "Strategic Meta Ads and Google Ads campaigns designed to maximize ROI and drive qualified leads to your business.",
      features: ["Campaign Strategy", "Audience Targeting", "A/B Testing", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-novawav-lightGrey" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12 animate-item opacity-0">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle mx-auto">Comprehensive digital solutions to help your business thrive online</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-item opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-novawav-navy bg-opacity-10 flex items-center justify-center mb-6 text-novawav-navy">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-novawav-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-novawav-emerald mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-item opacity-0 delay-500">
          <a href="#contact" className="btn-primary">
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
