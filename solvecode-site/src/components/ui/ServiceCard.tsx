import { LucideIcon } from "lucide-react";
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
      <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
export default ServiceCard;
