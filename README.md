# Summit Roofing — Marketing Website

A modern, multi-page Next.js 15 (App Router) marketing site for a roofing
company, built with TypeScript, Tailwind CSS, and Framer Motion. All
branding, copy, images, and contact details are placeholders meant to be
swapped for a real client.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## What's inside

- **Pages**: Home, Services, Gallery, About, Contact (`app/`), plus
  placeholder Privacy Policy and Terms pages.
- **Components**: Navbar, Footer, Hero, service cards, before/after gallery,
  testimonial slider, FAQ accordion, financing/insurance section, animated
  stat counters, and a filterable masonry gallery (`components/`).
- **Data**: all placeholder copy, services, testimonials, FAQs, service
  areas, and stats live in `lib/data.ts` — edit this one file to rebrand
  most of the content-driven parts of the site.
- **Design tokens**: brand colors are set in `tailwind.config.ts`
  (`charcoal`, `brand.blue`, `brand.orange`). The recurring "roofline"
  divider shape lives in `components/ui/RoofDivider.tsx`.

## Rebranding checklist

1. Update `company` info (name, phone numbers, email, address, hours) in
   `lib/data.ts`.
2. Replace the placeholder Unsplash images (`services`, `galleryItems`,
   `beforeAfter` arrays in `lib/data.ts`, plus the hero image in
   `components/Hero.tsx`) with real project photography.
3. Swap the logo mark in `components/Navbar.tsx` and `components/Footer.tsx`
   (currently a simple triangle icon standing in for a logo).
4. Update colors in `tailwind.config.ts` under the `charcoal` and `brand`
   keys if the client's palette differs.
5. Wire up `components/ContactForm.tsx` to a real backend or form service
   (e.g. an API route, Formspree, or a CRM webhook) — it currently
   simulates a submission.
6. Replace the map placeholders (`components/ServiceAreas.tsx` and
   `app/contact/page.tsx`) with a real embedded map.

## Notes

- Images are loaded from `images.unsplash.com` as placeholders; the allowed
  remote pattern is configured in `next.config.mjs`.
- Respect for `prefers-reduced-motion` and visible keyboard focus states are
  handled globally in `app/globals.css`.
