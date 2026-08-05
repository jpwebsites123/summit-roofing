import { CreditCard, FileCheck2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function Financing() {
  return (
    <Section className="bg-slate-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-charcoal-dark p-10 text-white">
          <CreditCard className="h-8 w-8 text-brand-orange" />
          <h3 className="mt-5 text-2xl">Flexible Financing Available</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            A new roof shouldn&apos;t wait on your budget. We partner with
            trusted lenders to offer flexible monthly payment plans with
            approved credit.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10">
          <FileCheck2 className="h-8 w-8 text-brand-blue" />
          <h3 className="mt-5 text-2xl text-charcoal">
            Insurance Claims Assistance
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We help homeowners through the insurance process — from
            photo-documenting storm damage to working directly with your
            adjuster on the claim.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
