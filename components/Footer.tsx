import Link from "next/link";
import { Triangle, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { company, navLinks, services, serviceAreas } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-slate-300">
      <div className="container-xl grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-orange">
              <Triangle className="h-4 w-4 fill-white text-white" />
            </span>
            <span className="font-display text-lg tracking-tight text-white">
              SUMMIT<span className="text-brand-blue"> ROOFING</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Protecting homes and businesses with quality roofing since day one.
            Licensed, insured, and ready when you need us.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-slate-300 transition-colors hover:bg-brand-blue hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-orange">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-brand-orange">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              {company.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              {company.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              {company.addressLine}
            </li>
          </ul>
          <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
            Service Areas
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {serviceAreas.slice(0, 8).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
