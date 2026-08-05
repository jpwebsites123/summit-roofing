"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        eyebrow="Our Process"
        title="A Clear Path From Inspection to Install"
        subtitle="No surprises, no pressure — just a straightforward process built around your schedule and your roof."
      />
      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal font-display text-sm text-white">
              {step.step}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-charcoal">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
