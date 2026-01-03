import {
  Monitor,
  Layers,
  Code2,
  Database,
  Wrench,
  LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Responsive Websites & Landing Pages",
    description:
      "Beautiful, fast-loading websites optimized for all devices and search engines.",
  },
  {
    icon: Layers,
    title: "SaaS MVP Development",
    description:
      "Full-stack SaaS applications from concept to launch, built for rapid iteration.",
  },
  {
    icon: Code2,
    title: "Internal Dashboards",
    description:
      "Custom admin panels and internal tools to streamline your business operations.",
  },
  {
    icon: Database,
    title: "APIs & Backend Development",
    description:
      "Robust, scalable backend systems and RESTful APIs built with modern frameworks.",
  },
  {
    icon: Wrench,
    title: "Maintenance & System Evolution",
    description:
      "Ongoing support, updates, and feature development to keep your systems current.",
  },
];
