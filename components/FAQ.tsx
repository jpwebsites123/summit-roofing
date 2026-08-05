"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Can't find your answer? Give us a call — we're happy to walk you through it."
      />
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-charcoal">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
