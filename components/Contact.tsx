import React, { useMemo, useState } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

type Status = "idle" | "submitting" | "success" | "error";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    plan: "",
    website: "", // honeypot (should stay empty)
  });

  // Your options are localized, so we’ll send the *label* unless you add stable IDs.
  const planOptions = useMemo(
    () => [
      t.contact.form.options.starter,
      t.contact.form.options.business,
      t.contact.form.options.corporate,
      t.contact.form.options.wondering,
    ],
    [t]
  );

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({
      name: "",
      company: "",
      email: "",
      plan: planOptions[0] ?? "",
      website: "",
    });
  };

  // Ensure default plan is set once options load
  React.useEffect(() => {
    setForm((prev) => (prev.plan ? prev : { ...prev, plan: planOptions[0] ?? "" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planOptions.join("|")]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          companyName: form.company,
          email: form.email,
          plan: form.plan,
          website: form.website, // honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-100 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="bg-verdant-800 p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-6">{t.contact.title}</h3>
              <p className="text-verdant-200 mb-8">{t.contact.subtitle}</p>
            </div>
            <div className="space-y-4 text-sm text-verdant-300">
              <p>{t.contact.details.email}</p>
              <p>{t.contact.details.phone}</p>
              <p>{t.contact.details.area}</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-serif text-verdant-900">{t.contact.form.successTitle}</h4>
                <p className="text-stone-500">{t.contact.form.successMsg}</p>
                <button onClick={reset} className="text-verdant-700 underline mt-4">
                  {t.contact.form.reset}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.contact.form.company}
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.company}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.contact.form.plan}
                  </label>
                  <select
                    id="plan"
                    value={form.plan}
                    onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-verdant-500 focus:ring-2 focus:ring-verdant-200 outline-none transition-all text-stone-600"
                  >
                    {planOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 flex gap-2 items-start">
                    <AlertTriangle size={18} className="mt-0.5" />
                    <div>
                      <div className="font-medium">Couldn’t send your request</div>
                      <div className="opacity-90">{errorMsg}</div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-verdant-800 text-white rounded-lg font-medium hover:bg-verdant-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : t.contact.form.cta}
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
