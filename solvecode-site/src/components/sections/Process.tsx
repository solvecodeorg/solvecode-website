import { SectionHeader } from "../ui/SectionHeader";
import { ProcessCard } from "../ui/ProcessCard";
import { processSteps } from "../../data/process";

export function Process() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Process"
          subtitle="A clear path from idea to delivery"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
