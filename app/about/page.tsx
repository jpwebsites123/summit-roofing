import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, HardHat, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import CTA from "@/components/CTA";
import RoofDivider from "@/components/ui/RoofDivider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Summit Roofing",
  description:
    "Learn about Summit Roofing's story, mission, values, and commitment to safety. Licensed, certified, and trusted by homeowners for over two decades.",
};

const values = [
  { icon: HeartHandshake, title: "Integrity First", desc: "We tell you exactly what your roof needs — nothing more, nothing less." },
  { icon: ShieldCheck, title: "Safety Above All", desc: "Every crew follows strict OSHA-aligned safety protocols on every job site." },
  { icon: HardHat, title: "Craftsmanship", desc: "We treat every roof like it's protecting our own family." },
  { icon: Target, title: "Accountability", desc: "If something isn't right, we make it right — no questions asked." },
];

const certifications = [
  "GAF Certified Contractor",
  "CertainTeed SELECT ShingleMaster",
  "OSHA 30-Hour Certified Crews",
  "State Licensed & Fully Bonded",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-charcoal-dark py-24 text-white">
        <div className="container-xl relative z-10 text-center">
          <span className="eyebrow">About Summit Roofing</span>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
            Built on Quality. Backed by Experience.
          </h1>
        </div>
        <RoofDivider fill="#FFFFFF" behind="transparent" className="absolute bottom-0 left-0" />
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?q=80&w=1600&auto=format&fit=crop"
              alt="Summit Roofing crew reviewing plans on a job site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-3xl text-charcoal">
              A Local Roofing Company, Built by Roofers
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Summit Roofing started with a single truck and a simple idea:
              treat every roof like it&apos;s protecting your own family.
              Over two decades later, we&apos;ve grown into a full-service
              residential and commercial roofing company — but that same
              standard still guides every job we take on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our mission is straightforward: deliver honest assessments,
              quality materials, and workmanship that holds up, backed by
              crews who show up on time and clean up when they&apos;re done.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="What Guides Us"
          title="Our Values"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="lift rounded-2xl border border-slate-100 bg-white p-8">
              <v.icon className="h-8 w-8 text-brand-blue" />
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Safety Commitment</span>
            <h2 className="mt-3 text-3xl text-charcoal">
              Every Job Site, Every Time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Roofing is dangerous work, and we take that seriously. Every
              crew member is trained on fall protection, ladder safety, and
              proper equipment handling before they ever step on a roof, and
              every job site is inspected daily.
            </p>
          </div>
          <div>
            <span className="eyebrow">Certifications</span>
            <h2 className="mt-3 text-3xl text-charcoal">
              Professional Certifications
            </h2>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-charcoal"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand-blue" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-charcoal-dark py-20 text-white">
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

      <CTA />
    </>
  );
}
