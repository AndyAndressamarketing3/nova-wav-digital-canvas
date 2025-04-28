
import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-novawav-navy text-white">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              NovaWav<span className="text-novawav-emerald">Digital</span>
            </h2>
            <p className="text-gray-300 max-w-md">
              Transforming Digital Presence into Success Stories through innovative digital marketing strategies.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-novawav-emerald transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-novawav-emerald transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:contact@novawavdigital.com" className="hover:text-novawav-emerald transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+61400000000" className="hover:text-novawav-emerald transition-colors">
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-novawav-emerald transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-novawav-emerald transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-novawav-emerald transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-novawav-emerald transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-novawav-emerald transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-novawav-emerald transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-novawav-emerald transition-colors">Website Creation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-novawav-emerald transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-novawav-emerald transition-colors">Brand Storytelling</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-novawav-emerald transition-colors">Paid Traffic Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1" />
                <a href="mailto:contact@novawavdigital.com" className="text-gray-300 hover:text-novawav-emerald transition-colors">
                  contact@novawavdigital.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1" />
                <a href="tel:+61400000000" className="text-gray-300 hover:text-novawav-emerald transition-colors">
                  +61 400 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NovaWav Digital. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-novawav-emerald text-white p-3 rounded-full hover:bg-white hover:text-novawav-navy transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
