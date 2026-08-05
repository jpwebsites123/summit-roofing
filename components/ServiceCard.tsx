"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconMap } from "@/lib/icons";
import { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = iconMap[service.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="lift group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
        <Icon className="h-6 w-6 text-brand-orange" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-charcoal">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {service.short}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-transform group-hover:gap-2.5"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
