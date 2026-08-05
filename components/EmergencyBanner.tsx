import Link from "next/link";
import { Siren } from "lucide-react";
import { company } from "@/lib/data";

export default function EmergencyBanner() {
  return (
    <div className="bg-charcoal text-white">
      <div className="container-xl flex flex-col items-center justify-center gap-2 py-2.5 text-center text-xs font-semibold sm:flex-row sm:gap-3 sm:text-sm">
        <span className="flex items-center gap-2">
          <Siren className="h-4 w-4 text-brand-orange" />
          24/7 Emergency Roofing Services
        </span>
        <Link
          href={`tel:${company.emergencyPhone.replace(/[^\d]/g, "")}`}
          className="rounded-full bg-brand-orange px-3 py-1 text-white transition-colors hover:bg-brand-orange-dark"
        >
          Call {company.emergencyPhone}
        </Link>
      </div>
    </div>
  );
}
