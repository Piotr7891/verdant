import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-verdant-100 rounded-full blur-3xl opacity-50 -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-stone-200 rounded-full blur-3xl opacity-50 -z-10 mix-blend-multiply"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-verdant-100 text-verdant-800 text-xs font-bold tracking-widest uppercase mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-verdant-900 leading-[1.1] mb-6">
              {t.hero.title} <span className="italic text-verdant-600">{t.hero.titleAccent}</span>{t.hero.titleEnd}
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-verdant-800 text-white rounded-full font-medium transition-all hover:bg-verdant-900 hover:shadow-lg hover:-translate-y-1 group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, '#pricing')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-verdant-800 text-verdant-800 rounded-full font-medium transition-all hover:bg-verdant-50"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>{t.hero.trusted}</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative fade-in-up delay-200">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/officeplants9/800/1000" 
                alt="Modern office with plants" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full text-green-700">
                    <ArrowRight size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">{t.hero.maintenanceBadge.title}</p>
                    <p className="font-serif text-verdant-900">{t.hero.maintenanceBadge.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-verdant-200 rounded-[2rem]"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;