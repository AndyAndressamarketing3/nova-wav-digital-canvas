
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxVisibleItems = 3;
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Kind Access Website",
      type: "Website Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2ViLGRldmVsb3BtZW50fHx8fHwxNjE1MjY0NjUw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      description: "A responsive website design and development project for Kind Access, featuring e-commerce functionality and optimized user journeys.",
      link: "https://kindaccess.com.au",
      tags: ["Web Development", "UI/UX Design", "SEO"]
    },
    {
      title: "Fitness Brand Social Media",
      type: "Social Media Management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsLG1lZGlhfHx8fHwxNjE1MjY0NjUw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      description: "Comprehensive social media strategy and content creation for a fitness brand, resulting in 200% growth in engagement and followers.",
      link: "#",
      tags: ["Social Media", "Content Creation", "Strategy"]
    },
    {
      title: "E-Commerce Ad Campaign",
      type: "Paid Traffic Management",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbCxhZHN8fHx8fDE2MTUyNjQ2NTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      description: "Strategic Meta and Google Ad campaigns for an e-commerce client, achieving a 320% ROAS and significant increase in qualified traffic.",
      link: "#",
      tags: ["Paid Ads", "Conversion Rate", "Analytics"]
    },
    {
      title: "Restaurant Website Redesign",
      type: "Website Development",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZSx3ZWJzaXRlfHx8fHwxNjE1MjY0NjUw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      description: "Complete redesign of a restaurant website with online ordering system, resulting in 45% increase in online orders.",
      link: "#",
      tags: ["Web Design", "UX/UI", "E-commerce"]
    }
  ];

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

  const handlePrev = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? projects.length - maxVisibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => 
      prevIndex + maxVisibleItems >= projects.length ? 0 : prevIndex + 1
    );
  };

  const visibleProjects = () => {
    const result = [];
    for (let i = 0; i < maxVisibleItems; i++) {
      const index = (activeIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <section id="portfolio" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12 animate-item opacity-0">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle mx-auto">Featured projects and success stories</p>
        </div>
        
        <div className="mb-12">
          <div className="relative">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * (100 / maxVisibleItems)}%)` }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4 animate-item opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-novawav-navy text-white px-4 py-1 text-sm">
                          {project.type}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-novawav-navy mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tidx) => (
                            <span key={tidx} className="bg-novawav-lightGrey text-novawav-navy px-3 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-novawav-emerald hover:text-novawav-navy transition-colors"
                        >
                          Visit Project <ExternalLink size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-novawav-navy hover:bg-novawav-navy hover:text-white transition-colors z-10"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-novawav-navy hover:bg-novawav-navy hover:text-white transition-colors z-10"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="mt-16 animate-item opacity-0 delay-300">
          <h3 className="text-3xl font-bold text-novawav-navy mb-8 text-center">Success Stories</h3>
          
          <div className="bg-novawav-lightGrey rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h4 className="text-2xl font-bold text-novawav-navy mb-4">Kind Access</h4>
                <p className="mb-4">A complete digital transformation for Kind Access, including website development, social media strategy, and paid traffic campaigns.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-novawav-emerald mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>250% increase in organic website traffic</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-novawav-emerald mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>180% growth in social media engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-novawav-emerald mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>320% Return on Ad Spend for e-commerce campaigns</span>
                  </li>
                </ul>
                <a 
                  href="https://kindaccess.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-novawav-emerald hover:text-novawav-navy transition-colors"
                >
                  Visit Website <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VjY2Vzcyxncm93dGh8fHx8fDE2MTUyNjQ2NTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                  alt="Kind Access Success Story" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
