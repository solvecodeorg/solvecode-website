import { SectionHeader } from "../ui/SectionHeader";
import { TechItem } from "../ui/TechItem";
import { techStack } from "../../data/techStack";

export function TechStack() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Tech Stack"
          subtitle="Modern technologies we work with"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <TechItem key={index} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
