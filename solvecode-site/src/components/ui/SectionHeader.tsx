interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center mb-16" : "mb-16"}>
      <h2 className="text-4xl md:text-5xl mb-6">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;