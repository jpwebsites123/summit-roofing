import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import RoofDivider from "@/components/ui/RoofDivider";

export const metadata: Metadata = {
  title: "Project Gallery | Roof Replacements, Repairs & Metal Roofing",
  description:
    "Browse Summit Roofing's project gallery — residential and commercial roof replacements, repairs, metal roofing, and shingle roofing projects.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative bg-charcoal-dark py-24 text-white">
        <div className="container-xl relative z-10 text-center">
          <span className="eyebrow">Our Work</span>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
            A Look at Recent Projects
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Filter by category to see the kind of work most relevant to your
            home or business.
          </p>
        </div>
        <RoofDivider fill="#FFFFFF" behind="transparent" className="absolute bottom-0 left-0" />
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <Gallery />
        </div>
      </section>

      <CTA
        eyebrow="Like What You See?"
        title="Let's Plan Your Project"
        subtitle="Get a free, no-obligation inspection and estimate for your home or business."
      />
    </>
  );
}
