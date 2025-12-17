import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-verdant-800 text-white p-1.5 rounded-lg group-hover:bg-verdant-700 transition-colors">
            <Leaf size={20} />
          </div>
          <span className={`text-2xl font-serif font-semibold tracking-tight ${isScrolled ? 'text-verdant-900' : 'text-verdant-900'}`}>
            Verdant.
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a 
              key={item.key} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-stone-600 hover:text-verdant-800 font-medium text-sm tracking-wide transition-colors"
            >
              {/* @ts-ignore */}
              {t.nav[item.key]}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-stone-600 hover:text-verdant-800 font-medium text-sm border border-stone-300 px-3 py-1.5 rounded-full transition-colors hover:border-verdant-500"
          >
            <Globe size={14} />
            <span className="uppercase">{language}</span>
          </button>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2.5 bg-verdant-800 text-white rounded-full text-sm font-medium hover:bg-verdant-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t.nav.quote}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-stone-600 font-medium text-sm border border-stone-300 px-3 py-1.5 rounded-full"
          >
             <span className="uppercase">{language}</span>
          </button>
          <button 
            className="text-stone-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-50 border-t border-stone-100 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((item) => (
            <a 
              key={item.key} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-stone-600 text-lg font-medium"
            >
              {/* @ts-ignore */}
              {t.nav[item.key]}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center py-3 bg-verdant-800 text-white rounded-lg mt-2"
          >
            {t.nav.quote}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;