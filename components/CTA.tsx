import { PhoneCall, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import RoofDivider from "@/components/ui/RoofDivider";
import { company } from "@/lib/data";

export default function CTA({
  eyebrow = "Ready When You Are",
  title = "Need Roofing Services?",
  subtitle = "Get your free inspection today — no obligation, no pressure.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-brand-blue">
      <RoofDivider fill="#FFFFFF" behind="transparent" flip className="absolute -top-16 left-0" />
      <div className="container-xl flex flex-col items-center gap-8 py-20 text-center md:py-24">
        <div>
          <span className="eyebrow text-white/80">{eyebrow}</span>
          <h2 className="mt-3 text-3xl text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Request Quote
          </Button>
          <Button
            href={`tel:${company.phone.replace(/[^\d]/g, "")}`}
            variant="outline"
            size="lg"
            icon={<PhoneCall className="h-4 w-4" />}
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
