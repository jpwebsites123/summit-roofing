export const company = {
  name: "Summit Roofing",
  phone: "(555) 812-4400",
  emergencyPhone: "(555) 812-4499",
  email: "info@summitroofing-demo.com",
  addressLine: "482 Ridgeline Ave, Suite 200, Maple Grove, ST 55311",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed (Emergency line open 24/7)" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  image: string;
  benefits: string[];
  issues: string[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    icon: "Home",
    short: "Full tear-off and replacement with premium materials built to last decades.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Increased home value and curb appeal",
      "Manufacturer-backed material warranties",
      "Improved energy efficiency and ventilation",
      "Full cleanup and job-site protection",
    ],
    issues: [
      "Curling, cracked, or missing shingles",
      "Granule loss and visible aging",
      "Sagging deck or repeated leaks",
      "Roof approaching or past its lifespan",
    ],
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    icon: "Hammer",
    short: "Fast, precise repairs for leaks, wind damage, and worn flashing.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Stops leaks before they cause interior damage",
      "Extends the life of your existing roof",
      "Matched materials for a seamless repair",
      "Same-week scheduling in most cases",
    ],
    issues: [
      "Active leaks or water stains on ceilings",
      "Damaged or lifted flashing",
      "Isolated storm or impact damage",
      "Loose, cracked, or missing shingles",
    ],
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    icon: "Search",
    short: "Comprehensive, no-obligation inspections with a detailed condition report.",
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Free, no-pressure assessment",
      "Photo-documented condition report",
      "Early detection prevents costly repairs",
      "Great for home purchases and insurance",
    ],
    issues: [
      "Unknown roof age or history",
      "Preparing to list or purchase a home",
      "Recent storm in your area",
      "Upcoming insurance renewal",
    ],
  },
  {
    slug: "storm-damage-repair",
    title: "Storm Damage Repair",
    icon: "CloudLightning",
    short: "Rapid response for hail, wind, and fallen-debris damage, insurance-ready.",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Emergency tarping to prevent further damage",
      "Insurance-ready documentation and photos",
      "We work directly with your adjuster",
      "Priority scheduling after major storms",
    ],
    issues: [
      "Hail bruising or granule displacement",
      "Wind-lifted or torn-off shingles",
      "Fallen branches or debris impact",
      "Visible dents on vents and flashing",
    ],
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing",
    icon: "AlarmClock",
    short: "24/7 emergency response to secure your roof and stop active leaks.",
    image:
      "https://images.unsplash.com/photo-1606274741559-1d6a3b12b7c9?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "24/7/365 phone line, real person every time",
      "Rapid on-site response times",
      "Temporary tarping and leak mitigation",
      "Follow-up permanent repair scheduled fast",
    ],
    issues: [
      "Active leak during a storm",
      "Tree or debris impact",
      "Partially detached roofing sections",
      "Any roof emergency, day or night",
    ],
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing",
    icon: "Layers",
    short: "Durable standing-seam and metal shingle systems for a modern, lasting roof.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "50+ year lifespan with minimal maintenance",
      "Excellent wind, fire, and impact resistance",
      "Reflective finishes reduce cooling costs",
      "Wide range of colors and profiles",
    ],
    issues: [
      "Want a long-term, low-maintenance roof",
      "Replacing an aging metal or shingle roof",
      "Building in a high wind or wildfire zone",
      "Looking for a modern architectural look",
    ],
  },
  {
    slug: "shingle-roofing",
    title: "Shingle Roofing",
    icon: "Grid3x3",
    short: "Architectural and three-tab asphalt shingle systems in a range of styles.",
    image:
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Affordable, proven, and widely available",
      "Broad color and style selection",
      "Class 3/4 impact-resistant options",
      "Quick installation timelines",
    ],
    issues: [
      "Most common residential roofing need",
      "Budget-friendly replacement or repair",
      "Matching existing shingle style and color",
      "Upgrading to impact-resistant shingles",
    ],
  },
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    icon: "Square",
    short: "TPO, EPDM, and modified bitumen systems for commercial and low-slope roofs.",
    image:
      "https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=1600&auto=format&fit=crop",
    benefits: [
      "Specialized commercial low-slope expertise",
      "Seamless, watertight membrane systems",
      "Energy-efficient reflective options",
      "Preventive maintenance programs available",
    ],
    issues: [
      "Ponding water or drainage issues",
      "Membrane seams lifting or cracking",
      "Aging built-up or modified bitumen roof",
      "Commercial property roof maintenance",
    ],
  },
];

export const whyChooseUs = [
  { icon: "ShieldCheck", title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your total peace of mind." },
  { icon: "ClipboardCheck", title: "Free Estimates", desc: "No-obligation, no-pressure estimates on every project, every time." },
  { icon: "HardHat", title: "Experienced Roofers", desc: "Decades of combined field experience across every roof type." },
  { icon: "Award", title: "Quality Materials", desc: "We install only manufacturer-certified, industry-leading materials." },
  { icon: "Siren", title: "Emergency Repairs", desc: "24/7 emergency response when your roof can't wait." },
  { icon: "BadgeCheck", title: "Warranty Included", desc: "Workmanship and manufacturer warranties on every installation." },
];

export const processSteps = [
  { step: "01", title: "Free Inspection", desc: "We assess your roof thoroughly and document every finding with photos." },
  { step: "02", title: "Detailed Estimate", desc: "A transparent, itemized quote with material options and clear pricing." },
  { step: "03", title: "Professional Installation", desc: "Our certified crews complete the work on schedule, on budget." },
  { step: "04", title: "Final Walkthrough", desc: "We walk the finished roof with you and confirm every detail." },
];

export const testimonials = [
  {
    name: "Karen Whitfield",
    location: "Maple Grove, ST",
    quote:
      "The crew was on time, professional, and left the property spotless. Our new roof looks incredible and the whole process was stress-free.",
    rating: 5,
  },
  {
    name: "Daniel Osei",
    location: "Fairview Heights, ST",
    quote:
      "Summit handled our storm damage claim from start to finish and dealt with the insurance company directly. Couldn't have asked for more.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    location: "Brookhaven, ST",
    quote:
      "Called about a leak on a Sunday night and someone actually answered. They tarped the roof within two hours. Genuinely impressed.",
    rating: 5,
  },
  {
    name: "Marcus Ferreira",
    location: "Lakeside, ST",
    quote:
      "Got three quotes and Summit was the most thorough by far — detailed report, clear pricing, no upselling. Easy choice.",
    rating: 5,
  },
];

export const serviceAreas = [
  "Maple Grove",
  "Fairview Heights",
  "Brookhaven",
  "Lakeside",
  "Cedar Falls",
  "Riverside Park",
  "Highland Terrace",
  "Northgate",
  "Elm Crossing",
  "Sunset Valley",
  "Millbrook",
  "Pinehurst",
];

export const faqs = [
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in one to three days, depending on the size, pitch, and material chosen. Commercial and larger projects are scoped individually and we'll give you a firm timeline before work begins.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes. We regularly work directly with homeowners' insurance adjusters, provide photo documentation of storm damage, and help guide you through the claims process from start to finish.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes, we offer flexible financing options with approved credit, including low monthly payment plans so a new roof fits your budget.",
  },
  {
    q: "What roofing materials do you recommend?",
    a: "It depends on your home, climate, and budget. Architectural asphalt shingles are the most popular choice for value and durability, while metal roofing offers the longest lifespan. We'll walk you through the options during your free inspection.",
  },
  {
    q: "How often should my roof be inspected?",
    a: "We recommend a professional inspection at least once a year, and after any major storm. Regular inspections catch small issues before they become expensive repairs.",
  },
];

export const stats = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 8400, suffix: "+", label: "Projects Completed" },
  { value: 96, suffix: "%", label: "Happy Customers" },
  { value: 60, suffix: " min", label: "Emergency Response" },
];

export type GalleryItem = {
  id: number;
  title: string;
  category: "Residential" | "Commercial" | "Repairs" | "Replacements" | "Metal Roofing" | "Shingle Roofing";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Colonial Shingle Replacement", category: "Replacements", image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "Downtown Office Flat Roof", category: "Commercial", image: "https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "Standing Seam Metal Install", category: "Metal Roofing", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Storm Damage Restoration", category: "Repairs", image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, title: "Modern Farmhouse Reroof", category: "Residential", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, title: "Architectural Shingle Upgrade", category: "Shingle Roofing", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, title: "Retail Plaza Roof Renewal", category: "Commercial", image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, title: "Ranch Home Full Replacement", category: "Residential", image: "https://images.unsplash.com/photo-1606274741559-1d6a3b12b7c9?q=80&w=1200&auto=format&fit=crop" },
  { id: 9, title: "Metal Accent Roof Detail", category: "Metal Roofing", image: "https://images.unsplash.com/photo-1580216253962-64d2224d4fea?q=80&w=1200&auto=format&fit=crop" },
];

export const beforeAfter = [
  {
    title: "Split-Level Full Reroof",
    before: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Storm-Damaged Shingle Roof",
    before: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aging Metal Roof Upgrade",
    before: "https://images.unsplash.com/photo-1600566752229-450a5480d2ea?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  },
];
