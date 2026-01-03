import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../../app/ImageWithFallback";


interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors group/btn">
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;