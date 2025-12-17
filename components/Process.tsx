import React from 'react';
import { useLanguage } from '../LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-24 bg-verdant-900 text-white overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-verdant-600 rounded-full blur-3xl opacity-30"></div>
             <img 
               src="https://picsum.photos/seed/plantsetup/600/700" 
               alt="Plant installation" 
               className="rounded-lg shadow-2xl opacity-90 relative z-10"
             />
             {/* Decorative lines */}
             <div className="absolute bottom-10 -right-10 w-full h-full border border-verdant-700 rounded-lg -z-0"></div>
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-12">{t.process.title}</h2>
            
            <div className="space-y-12">
              {t.process.steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-verdant-700 flex items-center justify-center text-xl font-serif text-verdant-300 group-hover:bg-verdant-800 group-hover:border-verdant-500 transition-all">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-verdant-50">{step.title}</h3>
                    <p className="text-verdant-200/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-verdant-300 border-b border-verdant-300 pb-1 hover:text-white hover:border-white transition-colors"
                >
                  {t.process.cta}
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;