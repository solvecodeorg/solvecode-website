import { Github, Linkedin, Mail } from "lucide-react";
import { SolveCodeLogo } from "../ui/SolveCodeLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <SolveCodeLogo className="w-6 h-6" />
            <span className="text-xl">SolveCode</span>
          </div>

          <div className="text-gray-400 text-sm">
            © 2026 SolveCode. Building the future, one line at a time.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/solvecodeorg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/solvecode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:solvecodeorg@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
