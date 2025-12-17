import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-100 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-verdant-800 p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-6">{t.contact.title}</h3>
              <p className="text-verdant-200 mb-8">
                {t.contact.subtitle}
              </p>
            </div>
            <div className="space-y-4 text-sm text-verdant-300">
              <p>{t.contact.details.email}</p>
              <p>{t.contact.details.phone}</p>
              <p>{t.contact.details.area}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-serif text-verdant-900">{t.contact.form.successTitle}</h4>
                <p className="text-stone-500">{t.contact.form.successMsg}</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-verdant-700 underline mt-4"
                >
                  {t.contact.form.reset}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">{t.contact.form.name}</label>
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1">{t.contact.form.company}</label>
                  <input 
                    required 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.company}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">{t.contact.form.email}</label>
                  <input 
                    required 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-stone-700 mb-1">{t.contact.form.plan}</label>
                  <select 
                    id="plan" 
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all text-stone-600"
                  >
                    <option>{t.contact.form.options.starter}</option>
                    <option>{t.contact.form.options.business}</option>
                    <option>{t.contact.form.options.corporate}</option>
                    <option>{t.contact.form.options.wondering}</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-verdant-800 text-white rounded-lg font-medium hover:bg-verdant-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {t.contact.form.cta}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;