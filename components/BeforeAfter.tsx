"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { beforeAfter } from "@/lib/data";

function BeforeAfterCard({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-sm"
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter((s) => !s)}
    >
      <Image
        src={before}
        alt={`${title} — before roofing work`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: showAfter ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={after}
          alt={`${title} — after roofing work`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-dark/90 to-transparent p-5 pt-12">
        <p className="text-sm font-semibold text-white">{title}</p>
      </div>

      <span
        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
          showAfter ? "bg-brand-orange text-white" : "bg-white/90 text-charcoal"
        }`}
      >
        {showAfter ? "After" : "Before"}
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Real Transformations"
        title="Before &amp; After Roof Transformations"
        subtitle="Hover (or tap) any project to see the finished result."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beforeAfter.map((item) => (
          <BeforeAfterCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
