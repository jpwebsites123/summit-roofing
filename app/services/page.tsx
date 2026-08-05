import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import CTA from "@/components/CTA";
import RoofDivider from "@/components/ui/RoofDivider";
import { services } from "@/lib/data";
import { iconMap } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Roofing Services | Replacement, Repair & Inspections",
  description:
    "Explore Summit Roofing's full range of residential and commercial services: roof replacement, repairs, inspections, emergency roofing, metal, shingle, and flat roofing.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-charcoal-dark py-24 text-white">
        <div className="container-xl relative z-10 text-center">
          <span className="eyebrow">What We Do</span>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
            Roofing Services Built to Last
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Every service below is backed by licensed, insured crews and a
            workmanship warranty — from a single shingle repair to a full
            commercial reroof.
          </p>
        </div>
        <RoofDivider fill="#FFFFFF" behind="transparent" className="absolute bottom-0 left-0" />
      </section>

      {services.map((service, i) => {
        const Icon = iconMap[service.icon];
        const reversed = i % 2 === 1;
        return (
          <Section
            key={service.slug}
            id={service.slug}
            className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
          >
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h2 className="mt-5 text-3xl text-charcoal">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.short} Our crews are trained specifically on{" "}
                  {service.title.toLowerCase()}, so you get a job that&apos;s
                  done right the first time — properly ventilated, correctly
                  flashed, and built to manufacturer specification.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-blue">
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                      Common Issues
                    </h3>
                    <ul className="space-y-2">
                      {service.issues.map((issue) => (
                        <li key={issue} className="flex items-start gap-2 text-sm text-slate-600">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  href="/contact"
                  className="mt-8"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </Section>
        );
      })}

      <CTA />
    </>
  );
}
