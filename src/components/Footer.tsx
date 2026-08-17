import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="py-10 text-bg">
      <div className="shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <span className="eyebrow text-white/50">
            {new Date().getFullYear()} {site.name}, built with intent
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="eyebrow text-white/50 transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
