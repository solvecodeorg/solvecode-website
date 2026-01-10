import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Services (contact for more)"
          subtitle="Comprehensive solutions for your digital needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}