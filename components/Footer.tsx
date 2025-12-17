import React from 'react';
import { Leaf, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf size={20} className="text-verdant-500" />
            <span className="text-2xl font-serif font-semibold text-stone-100 tracking-tight">
              Verdant.
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-verdant-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-verdant-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-verdant-400 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-stone-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Verdant Spaces Inc. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-200">{t.footer.privacy}</a>
            <a href="#" className="hover:text-stone-200">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;