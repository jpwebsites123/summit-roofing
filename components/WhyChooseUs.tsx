"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { whyChooseUs } from "@/lib/data";
import { iconMap } from "@/lib/icons";

export default function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Why Homeowners Choose Us"
        title="Roofing Done Right, Every Single Time"
        subtitle="From the first inspection to the final nail, every job is backed by our commitment to quality, safety, and honest service."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="lift rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
