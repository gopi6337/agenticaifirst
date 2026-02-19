type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 scroll-reveal">
      <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20 mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
