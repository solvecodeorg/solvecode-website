export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "We start by deeply understanding your business needs and challenges.",
  },
  {
    number: "02",
    title: "Define Scope",
    description:
      "Clear project scope, timeline, and deliverables are established together.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Agile development with regular updates and iterative improvements.",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description:
      "Launch your product and provide ongoing maintenance and evolution.",
  },
];
