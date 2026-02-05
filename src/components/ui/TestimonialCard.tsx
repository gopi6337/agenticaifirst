type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="gradient-border card-glow p-6 rounded-2xl scroll-reveal flex flex-col">
      <svg
        className="w-8 h-8 text-purple-vivid/40 mb-4 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
      </svg>
      <p className="text-slate-300 leading-relaxed italic mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-slate-800 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
