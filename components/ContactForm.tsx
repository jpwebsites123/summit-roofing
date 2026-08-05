"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Roof Replacement",
  "Roof Repair",
  "Roof Inspection",
  "Storm Damage Repair",
  "Emergency Roofing",
  "Commercial Roofing",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submit handler — wire up to your backend or form service.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-12 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-brand-blue" />
        <h3 className="mt-5 text-xl font-semibold text-charcoal">
          Request Received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Thanks for reaching out. A member of our team will contact you
          within one business day to schedule your free inspection.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="Jordan Rivera"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="jordan@email.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="address" className="mb-2 block text-sm font-semibold text-charcoal">
            Property Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="123 Ridgeline Ave"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-charcoal">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue"
            placeholder="Tell us a bit about what's going on with your roof..."
          />
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="mb-2 block text-sm font-semibold text-charcoal">
            Preferred Contact Method
          </legend>
          <div className="flex flex-wrap gap-4">
            {["Phone", "Email", "Text"].map((method, i) => (
              <label
                key={method}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  defaultChecked={i === 0}
                  className="h-4 w-4 accent-brand-blue"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : "Request Free Quote"}
        {!submitting && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
