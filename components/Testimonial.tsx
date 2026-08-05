"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonials } from "@/lib/data";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <Section className="bg-charcoal-dark">
      <SectionHeading
        eyebrow="Customer Reviews"
        title="Trusted by Homeowners Across the Region"
        light
      />
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-2xl bg-white/5 p-10 text-center">
          <Quote className="mx-auto h-8 w-8 text-brand-orange" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-slate-200">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-white">
                {current.name}
              </p>
              <p className="text-xs text-slate-400">{current.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-brand-orange" : "bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
