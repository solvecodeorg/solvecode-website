import { ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export function Hero({ onContactClick, onServicesClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-300">
            Building the future of web
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Scalable Digital Solutions
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Built for Growth
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We build modern, secure, and scalable web applications that help
          startups and businesses achieve their goals with engineering
          excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 group"
          >
            Contact SolveCode
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onServicesClick}
            className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
    </section>
  );
}
