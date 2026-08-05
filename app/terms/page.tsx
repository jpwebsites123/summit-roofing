import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Summit Roofing's terms of service.",
};

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl text-charcoal">Terms of Service</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          This is placeholder terms-of-service content for demo purposes.
          Replace this page with your company&apos;s actual terms governing
          use of this website and the services described on it.
        </p>
      </div>
    </Section>
  );
}
