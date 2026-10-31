// All page copy lives here so it can later be served from a database / CMS
// without touching the components.

import type { SocialIconName } from "@/components/SocialIcon";

export type IconName = "sheet" | "workspace" | "web" | "check";

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  points: string[];
};

export type Step = { title: string; description: string };

export type Package = {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  tag?: string;
};

export type Fact = { label: string; value: string; detail: string };

export type SocialLink = { label: string; href: string; icon: SocialIconName; color: string };

export const site = {
  name: "Fred Mugisha",
  avatar: "/fm.jpg",
  role: "Tech-Savvy Virtual Assistant",
  location: "Kigali, Rwanda",
  email: "fmugisha10@gmail.com",
  description:
    "Spreadsheet automation, Notion / Airtable / Trello workspaces, and custom web development by a computer-science-trained virtual assistant based in Kigali.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
];

export const heroBadges = [
  "ALX-certified VA",
  "BSc Computer Science",
  "Based in Kigali · works remote",
];

export const tools: { name: string; suffix?: string }[] = [
  { name: "Google Sheets", suffix: " & Excel" },
  { name: "Notion" },
  { name: "Airtable" },
  { name: "Trello" },
  { name: "Web development" },
];

export const services: Service[] = [
  {
    icon: "sheet",
    title: "Spreadsheet automation",
    description:
      "Formulas, dashboards, and auto-updating trackers that replace the manual work you dread.",
    points: [
      "Auto-calculating reports & dashboards",
      "Data cleanup and deduplication",
      "Templates your whole team can reuse",
    ],
  },
  {
    icon: "workspace",
    title: "Workspace setup",
    description:
      "Notion, Airtable, and Trello workspaces built around how you actually work, not a messy template dump.",
    points: [
      "Project & client management systems",
      "Databases, views, and relations",
      "Clear handover so you can run it yourself",
    ],
  },
  {
    icon: "web",
    title: "Custom web development",
    description:
      "Websites, web apps and e-commerce stores built from scratch in real code, just like the one you're reading.",
    points: [
      "Landing pages, portfolios & e-commerce",
      "Responsive, fast, and built to last",
      "Hand-coded, no bloated page builders",
    ],
  },
  {
    icon: "check",
    title: "General VA support",
    description:
      "Inbox and calendar order, data entry, research, and the recurring admin that eats your week.",
    points: [
      "Email & calendar management",
      "Research and data entry",
      "Reliable, fast turnaround",
    ],
  },
];

export const steps: Step[] = [
  {
    title: "Tell me the mess",
    description:
      "You describe the task or the workflow that's draining your time. A quick call or a few messages.",
  },
  {
    title: "I scope it",
    description:
      "You get a clear plan: what I'll build, what it costs, and when it's done. No surprises.",
  },
  {
    title: "I build it",
    description:
      "I set up the automation or workspace, test it, and keep you posted as it comes together.",
  },
  {
    title: "You own it",
    description:
      "Handover with a short walkthrough so it keeps working whether or not I'm around.",
  },
];

export const packages: Package[] = [
  {
    name: "Quick Task",
    price: "$20",
    unit: " / task",
    description:
      "A single automation, spreadsheet fix, or data cleanup. Great first project to test the fit.",
    features: ["One focused deliverable", "24–48h turnaround", "One round of revisions"],
    cta: "Book a task",
  },
  {
    name: "Workspace Build",
    price: "$120",
    unit: " starting",
    description:
      "A full Notion, Airtable, or Trello workspace set up around your real process, ready to use.",
    features: [
      "Custom workspace + databases",
      "Automation where it helps",
      "Walkthrough + handover doc",
    ],
    cta: "Start a build",
    featured: true,
    tag: "Most popular",
  },
  {
    name: "Ongoing Support",
    price: "$350",
    unit: " / month",
    description:
      "A set block of hours each month for the recurring admin, automation, and upkeep you don't want to touch.",
    features: ["Priority turnaround", "Monthly hour block", "Rolling, cancel anytime"],
    cta: "Discuss a retainer",
  },
];

export const aboutParagraphs = [
  "I'm Fred, a computer-science graduate (BSc) and ALX-certified virtual assistant based in Kigali. Most VAs can follow a template. Because I build software, I can look at your workflow and see where a formula, a database, or a few lines of automation will save you hours every week.",
  "I've also built real projects for clients, including e-commerce websites. So I know what delivering for a paying client looks like: real deadlines, real feedback, and a system that has to work properly once it's live.",
];

export const facts: Fact[] = [
  {
    label: "Certification",
    value: "Virtual Assistant, ALX Africa",
    detail: "Professional VA training, completed",
  },
  { label: "Education", value: "BSc Computer Science", detail: "Graduate · University of Kigali" },
  {
    label: "Recent work",
    value: "E-commerce websites",
    detail: "Online stores built for clients",
  },
  {
    label: "Works with",
    value: "Clients worldwide",
    detail: "Remote · flexible hours · fast replies",
  },
];

// `color` is the brand color shown on hover. Links with an empty href are hidden.
export const socials: SocialLink[] = [
  { label: "WhatsApp", icon: "whatsapp", color: "#25D366", href: "https://wa.me/250788461008" },
  { label: "Instagram", icon: "instagram", color: "#E4405F", href: "https://www.instagram.com/iamfredmugisha/" },
  { label: "LinkedIn", icon: "linkedin", color: "#0A66C2", href: "https://www.linkedin.com/in/mugishafred/" },
  { label: "TikTok", icon: "tiktok", color: "var(--fg)", href: "" },
  { label: "Pinterest", icon: "pinterest", color: "#E60023", href: "https://www.pinterest.com/fmugisha10/" },
  { label: "Upwork", icon: "upwork", color: "#14A800", href: "https://www.upwork.com/freelancers/~01772880203f50ed8c" },
  // TODO: swap for the public profile URL (fiverr.com/<username>).
  { label: "Fiverr", icon: "fiverr", color: "#1DBF73", href: "https://pro.fiverr.com/?source=top_nav" },
];
