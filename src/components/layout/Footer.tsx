import { FOOTER_LINKS } from "@/lib/constants";

const footerSections = [
  { title: "Product", links: FOOTER_LINKS.product },
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Resources", links: FOOTER_LINKS.resources },
  { title: "Legal", links: FOOTER_LINKS.legal },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-0 mb-4">
              <img
                src="/new_logo.png"
                alt="Agentic AI First Logo"
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-col mt-3 -ml-2">
                <span className="text-lg font-bold text-white">Agentic AI First</span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase bg-gradient-to-r from-purple-vivid to-pink-hot bg-clip-text text-transparent">AI as a Service</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 mb-6">
              Building autonomous AI solutions that think, plan, and execute for your business.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2026 Agentic AI First. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with intelligence. Powered by purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
