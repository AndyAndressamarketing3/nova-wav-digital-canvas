
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "Working with NovaWav Digital helped us triple our digital presence within months. A truly excellent partnership!",
      author: "Sarah Johnson",
      position: "Marketing Director, TechSolutions Inc.",
      rating: 5
    },
    {
      quote: "The social media and paid advertising strategies delivered outstanding results. Highly recommended!",
      author: "Michael Chen",
      position: "CEO, GrowthMatters",
      rating: 5
    },
    {
      quote: "The attention to detail and strategic insight during our website project made a significant difference to our success.",
      author: "Laura Martinez",
      position: "Founder, EcoStyle",
      rating: 5
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

  return (
    <section id="testimonials" className="section-padding bg-novawav-navy text-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12 animate-item opacity-0">
          <h2 className="section-title text-white">Client Testimonials</h2>
          <p className="section-subtitle text-gray-300 mx-auto">What clients say about working with NovaWav Digital</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:bg-opacity-15 transition-all duration-300 animate-item opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-lg font-medium italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-novawav-emerald to-novawav-navy flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-item opacity-0 delay-300">
          <p className="text-xl font-medium mb-6">Ready to transform your digital presence?</p>
          <a href="#contact" className="bg-white text-novawav-navy hover:bg-novawav-emerald hover:text-white transition-colors px-8 py-3 rounded-md font-medium">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
