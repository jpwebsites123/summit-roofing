"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import RoofDivider from "@/components/ui/RoofDivider";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal-dark">
      <Image
        src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2000&auto=format&fit=crop"
        alt="Professional roofing crew installing new architectural shingles on a residential home"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/70 to-charcoal-dark/40" />

      <div className="container-xl relative z-10 py-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          Licensed &amp; Insured · Serving the region since 2003
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          Protecting Homes With Quality Roofing You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          Residential and commercial roofing services including repairs,
          replacements, inspections, emergency service, and new roof
          installations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Get Free Quote
          </Button>
          <Button href="/contact" variant="outline" size="lg" icon={<PhoneCall className="h-4 w-4" />}>
            Schedule Inspection
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <RoofDivider fill="#FFFFFF" behind="transparent" />
      </div>
    </section>
  );
}
