import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="py-10 text-bg">
      <div className="shell grid items-center gap-6 sm:grid-cols-3">
        <span className="eyebrow text-white/50">
          {new Date().getFullYear()} {site.name}. Зовите дизайнера
        </span>
        <a
          href="/"
         className="eyebrow cursor-pointer text-white/50 transition-colors hover:text-white sm:justify-self-center"
        >
          На главную
        </a>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-self-end">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
            className="eyebrow cursor-pointer text-white/50 transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
