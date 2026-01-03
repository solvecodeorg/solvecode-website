import { ChevronRight } from "lucide-react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  isLast: boolean;
}

export function ProcessCard({
  number,
  title,
  description,
  isLast,
}: ProcessCardProps) {
  return (
    <div className="relative">
      <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:bg-white/10 transition-all">
        <div className="text-5xl mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {number}
        </div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      {!isLast && (
        <ChevronRight className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-blue-500/30 w-6 h-6" />
      )}
    </div>
  );
}
