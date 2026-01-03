interface TechItemProps {
  name: string;
}

export function TechItem({ name }: TechItemProps) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 transition-all text-center">
      <span className="text-gray-300">{name}</span>
    </div>
  );
}

export default TechItem;