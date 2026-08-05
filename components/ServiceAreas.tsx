"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceAreas } from "@/lib/data";

export default function ServiceAreas() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        eyebrow="Where We Work"
        title="Proudly Serving Your Community"
        subtitle="Local crews, fast response times, and roofers who know the area's weather and building codes."
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-charcoal"
            >
              <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
              {area}
            </motion.div>
          ))}
        </div>

        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-charcoal-dark">
          <div className="bg-roof-grid absolute inset-0 opacity-40" />
          <div className="relative z-10 flex flex-col items-center text-center text-slate-400">
            <MapPin className="h-10 w-10 text-brand-orange" />
            <p className="mt-3 text-sm">Interactive service area map</p>
            <p className="text-xs text-slate-500">(Map embed placeholder)</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
