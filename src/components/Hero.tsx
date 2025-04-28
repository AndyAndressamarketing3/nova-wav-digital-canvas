
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    "Transforming Digital Presence into Success Stories",
    "Elevating Brands Through Strategic Digital Marketing",
    "Crafting Impactful Digital Experiences"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-novawav-lightGrey pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-novawav-emerald opacity-5"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-novawav-navy opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-1/2 mb-12 md:mb-0 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <p className="text-novawav-emerald font-medium mb-3 tracking-wider">WELCOME TO NOVAWAV DIGITAL</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-novawav-navy">
              <span className="block h-[120px] md:h-[150px]" key={currentPhraseIndex}>
                {phrases[currentPhraseIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Specializing in Front-end Development, Social Media Management, and Paid Traffic campaigns that drive real business results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center">
                Get Started 
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#portfolio" className="btn-secondary">View Portfolio</a>
            </div>
          </div>

          <div className={`md:w-1/2 opacity-0 ${isVisible ? 'animate-fade-in-up delay-300' : ''}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-novawav-navy to-novawav-emerald rounded-lg transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaCxsYXB0b3B8fHx8fHwxNjE1MjY0NjUw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="Digital Marketing and Web Development" 
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 animate-pulse-subtle">
                <span className="block text-novawav-navy font-bold">10+</span>
                <span className="text-sm text-gray-600">Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-novawav-navy flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-novawav-navy rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
