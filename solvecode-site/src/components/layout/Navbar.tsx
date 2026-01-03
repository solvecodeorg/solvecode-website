import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SolveCodeLogo } from "../ui/SolveCodeLogo";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export function Navbar({ onNavigate, onMenuToggle }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (open: boolean) => {
    setMobileMenuOpen(open);
    onMenuToggle?.(open); // Notifica o App.tsx sobre a mudança
  };

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    toggleMenu(false); // Fecha o menu após clicar
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          {/* 1. Lado Esquerdo: Logo */}
          <div className="flex items-center gap-2">
            <SolveCodeLogo className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">SolveCode</span>
          </div>

          {/* 2. Centro: Links (Apenas visível em Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <button
              onClick={() => onNavigate("about")}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
            >
              About
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all"
            >
              Projects
            </button>
          </div>

          {/* 3. Lado Direito: Botão Contacto + Menu Mobile */}
          <div className="flex justify-end items-center gap-4">
            {/* Botão Contact (sempre visível) */}
            <button
              onClick={() => handleNavigate("contact")}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Contact
            </button>

            {/* Botão Hamburguer (apenas mobile) */}
            <button
              onClick={() => toggleMenu(!mobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Lateral */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay escuro com blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-40"
              onClick={() => toggleMenu(false)}
            />

            {/* Menu lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0a] border-l border-white/10 md:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header do menu */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <SolveCodeLogo className="w-5 h-5" />
                    <span className="font-bold">Menu</span>
                  </div>
                  <button
                    onClick={() => toggleMenu(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links do menu */}
                <div className="flex flex-col gap-2 p-6">
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => handleNavigate("about")}
                    className="text-left px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    About
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    onClick={() => handleNavigate("services")}
                    className="text-left px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Services
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => handleNavigate("projects")}
                    className="text-left px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Projects
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    onClick={() => handleNavigate("contact")}
                    className="text-left px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all mt-4"
                  >
                    Contact Us
                  </motion.button>
                </div>

                {/* Footer do menu */}
                <div className="mt-auto p-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">© 2026 SolveCode</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
