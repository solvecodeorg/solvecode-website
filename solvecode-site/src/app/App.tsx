import { useState } from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../components/sections/About";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { TechStack } from "../components/sections/TechStack";


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar onNavigate={scrollToSection} onMenuToggle={setMobileMenuOpen} />

      {/* Conteúdo do site com blur condicional */}
      <div
        className={`transition-all duration-300 ${
          mobileMenuOpen ? "blur-sm md:blur-none" : ""
        }`}
      >
        <Hero
          onContactClick={() => scrollToSection("contact")}
          onServicesClick={() => scrollToSection("services")}
        />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
}
