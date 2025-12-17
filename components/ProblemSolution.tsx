import React from 'react';
import { Frown, Smile, XCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ProblemSolution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif text-verdant-900 mb-4">{t.problemSolution.title}</h2>
            <p className="text-stone-600">{t.problemSolution.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* The Old Way */}
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative group">
                <div className="absolute -top-6 left-8 bg-red-100 text-red-700 p-3 rounded-full">
                    <Frown size={24} />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mt-4 mb-6">{t.problemSolution.oldWay.title}</h3>
                <ul className="space-y-4">
                    {t.problemSolution.oldWay.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-stone-500">
                          <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                      </li>
                    ))}
                </ul>
            </div>

            {/* The Verdant Way */}
            <div className="bg-verdant-50 p-8 rounded-2xl border border-verdant-100 relative shadow-lg scale-105 transform">
                <div className="absolute -top-6 left-8 bg-verdant-200 text-verdant-800 p-3 rounded-full">
                    <Smile size={24} />
                </div>
                <h3 className="text-xl font-semibold text-verdant-900 mt-4 mb-6">{t.problemSolution.newWay.title}</h3>
                <ul className="space-y-4">
                    {t.problemSolution.newWay.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-verdant-800">
                          <CheckCircle size={20} className="text-verdant-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                      </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;