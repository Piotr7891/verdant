import React from 'react';
import { Wind, Zap, Smile, CreditCard } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ICONS = [Wind, Zap, Smile, CreditCard];

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-24 bg-verdant-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-verdant-600 font-semibold tracking-wide uppercase text-sm">{t.benefits.badge}</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-verdant-900 mt-3">{t.benefits.title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-verdant-100">
                <div className="w-12 h-12 bg-verdant-100 rounded-xl flex items-center justify-center text-verdant-600 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-stone-800 mb-3">{benefit.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;