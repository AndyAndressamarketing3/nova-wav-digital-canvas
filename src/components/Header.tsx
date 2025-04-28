
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-novawav-navy">
            NovaWav<span className="text-novawav-emerald">Digital</span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-novawav-navy"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a href="#home" className="text-xl nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-xl nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" className="text-xl nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="text-xl nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#testimonials" className="text-xl nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="btn-primary text-xl" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
