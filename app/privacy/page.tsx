import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Summit Roofing's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl text-charcoal">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          This is placeholder privacy policy content for demo purposes. Replace
          this page with your company&apos;s actual privacy policy, covering
          what information is collected through this site, how it is used,
          and how visitors can contact you with questions about their data.
        </p>
      </div>
    </Section>
  );
}
