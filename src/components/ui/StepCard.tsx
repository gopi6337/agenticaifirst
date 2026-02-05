type StepCardProps = {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
};

export default function StepCard({
  number,
  title,
  description,
  isLast = false,
}: StepCardProps) {
  return (
    <div className="relative scroll-reveal">
      {!isLast && (
        <div className="hidden md:block step-line" />
      )}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-vivid to-blue-electric flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10">
          {number}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed max-w-[250px]">
          {description}
        </p>
      </div>
    </div>
  );
}
