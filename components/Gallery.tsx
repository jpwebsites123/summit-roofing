"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, GalleryItem } from "@/lib/data";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Repairs",
  "Replacements",
  "Metal Roofing",
  "Shingle Roofing",
] as const;

export default function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered: GalleryItem[] = (
    filter === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === filter)
  ).slice(0, limit ?? galleryItems.length);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === cat
                  ? "bg-brand-blue text-white"
                  : "bg-slate-100 text-charcoal hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs uppercase tracking-wide text-brand-orange">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
