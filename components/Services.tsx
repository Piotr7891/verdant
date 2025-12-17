import React from 'react';
import { 
  Droplets, 
  RefreshCw, 
  Sprout, 
  Leaf
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Sprout, Droplets, RefreshCw, Leaf];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-stone-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-verdant-900 mb-4">{t.services.title}</h2>
            <p className="text-stone-600 text-lg">{t.services.subtitle}</p>
          </div>
          <a 
            href="#pricing" 
            onClick={(e) => handleScroll(e, '#pricing')}
            className="hidden md:block text-verdant-700 font-medium hover:text-verdant-900 underline decoration-verdant-300 underline-offset-4"
          >
            {t.services.link}
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-verdant-50 rounded-lg flex items-center justify-center text-verdant-700 mb-6 group-hover:bg-verdant-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;