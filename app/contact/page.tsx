import type { Metadata } from "next";
import { Phone, Mail, Clock, Siren, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import RoofDivider from "@/components/ui/RoofDivider";
import { Section } from "@/components/ui/Section";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Free Roof Inspection & Quote",
  description:
    "Request a free roof inspection or quote from Summit Roofing. Call, email, or fill out our contact form and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-charcoal-dark py-24 text-white">
        <div className="container-xl relative z-10 text-center">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">
            Request Your Free Roof Inspection
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Fill out the form below or give us a call — we typically respond
            within one business day.
          </p>
        </div>
        <RoofDivider fill="#FFFFFF" behind="transparent" className="absolute bottom-0 left-0" />
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="mb-5 text-lg font-semibold text-charcoal">
                Contact Details
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {company.phone}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {company.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {company.addressLine}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-charcoal">
                <Clock className="h-5 w-5 text-brand-blue" />
                Business Hours
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {company.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="font-medium text-charcoal">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-charcoal-dark p-8 text-white">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <Siren className="h-5 w-5 text-brand-orange" />
                Emergency Line
              </h3>
              <p className="text-sm text-slate-300">
                Active leak or storm damage? Call our 24/7 emergency line.
              </p>
              <a
                href={`tel:${company.emergencyPhone.replace(/[^\d]/g, "")}`}
                className="mt-4 inline-block rounded-lg bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
              >
                {company.emergencyPhone}
              </a>
            </div>

            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
              <div className="bg-roof-grid absolute inset-0" />
              <div className="relative z-10 flex flex-col items-center text-center text-slate-500">
                <MapPin className="h-8 w-8 text-brand-blue" />
                <p className="mt-3 text-sm">Google Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
