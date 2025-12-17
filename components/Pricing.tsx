import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden scroll-mt-28">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-stone-50 rounded-[100%] blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-verdant-600 font-semibold tracking-wide uppercase text-sm">{t.pricing.badge}</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-verdant-900 mt-3 mb-6">{t.pricing.title}</h2>
          <p className="text-stone-600 text-lg">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {t.pricing.tiers.map((tier, index) => {
            // Re-apply "recommended" logic based on index since we are mapping from translation array now
            // Assuming index 1 (Business) is recommended
            const isRecommended = index === 1;

            return (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  isRecommended 
                    ? 'bg-verdant-900 text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white text-stone-800 border border-stone-100 hover:border-verdant-200 shadow-lg'
                }`}
              >
                {isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terra-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {t.pricing.popular}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xl font-medium mb-2 ${isRecommended ? 'text-verdant-100' : 'text-stone-500'}`}>{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-serif font-semibold">{tier.price}</span>
                    <span className={`ml-2 text-sm ${isRecommended ? 'text-verdant-200' : 'text-stone-400'}`}>{tier.period}</span>
                  </div>
                  <p className={`mt-4 text-sm ${isRecommended ? 'text-verdant-100' : 'text-stone-500'}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${isRecommended ? 'bg-verdant-700 text-verdant-300' : 'bg-verdant-100 text-verdant-600'}`}>
                        <Check size={12} />
                      </div>
                      <span className={`text-sm ${isRecommended ? 'text-verdant-50' : 'text-stone-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className={`block w-full py-4 rounded-xl text-center font-medium transition-colors ${
                    isRecommended
                      ? 'bg-white text-verdant-900 hover:bg-verdant-50'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;