import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonial from "@/components/Testimonial";
import ServiceAreas from "@/components/ServiceAreas";
import Financing from "@/components/Financing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services, stats } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Summit Roofing | Trusted Residential & Commercial Roofers",
  description:
    "Free roof inspections, expert repairs, and full replacements. Licensed, insured, and available 24/7 for emergencies. Get your free quote today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Roofing Solutions"
          subtitle="From a single repair to a full commercial reroof, our licensed crews handle every job with the same attention to detail."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard service={service} index={i} key={service.slug} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
            View All Services
          </Button>
        </div>
      </Section>

      <Process />

      <section className="bg-charcoal-dark py-16 text-white">
        <div className="container-xl grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-brand-orange md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-400 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BeforeAfter />
      <Testimonial />
      <ServiceAreas />
      <Financing />
      <FAQ />
      <CTA />
    </>
  );
}
