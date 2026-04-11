type SectionHeaderProps = {
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  tag,
  tagBg,
  tagColor,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span
        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ backgroundColor: tagBg, color: tagColor }}
      >
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#001d3a] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
