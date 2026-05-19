"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  const socialLinks = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: (
        <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v6.98A10 10 0 0 0 22 12z" />
      ),
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: (
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zm5.8-2.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      ),
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: (
        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0V8zm7.5 0H12v2.4h.1c.6-1.2 2.1-2.4 4.3-2.4C20 8 22 10 22 14v10h-5v-8.5c0-2-.7-3.4-2.5-3.4-1.9 0-2.7 1.3-2.7 3.3V24h-5V8z" />
      ),
    },
  ];

  return (
    <footer className="relative bg-[#e8c09b] border-t border-white/20 overflow-hidden">
      {/* background accents */}
      <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-white/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 right-0 w-[300px] h-[300px] bg-orange-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* BRAND */}
          <div className="md:col-span-5">
            <img
              src="/logo_mestria_completo1.png"
              alt="Mestria"
              className="w-[190px] mb-6"
            />

            <p className="text-slate-800 text-sm leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* NAV */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">
              Navigation
            </h4>

            <ul className="space-y-3">
              {[
                { label: t("nav.home"), path: "/" },
                { label: t("nav.team"), path: "/team" },
                { label: t("nav.solutions"), path: "/solutions" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={getLocalizedPath(item.path)}
                    className="text-sm text-slate-700 hover:text-slate-900 transition hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div className="md:col-span-4 space-y-8">
            {/* contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">
                {t("footer.contact")}
              </h4>

              <a
                href="mailto:mariajoao@mestria.io"
                className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition"
              >
                <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="text-sm">{t("footer.email")}</span>
              </a>
            </div>

            {/* socials */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-900 mb-6">
                Follow
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group w-11 h-11 rounded-full bg-white/40 hover:bg-white/80 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    <svg
                      className="h-4 w-4 text-slate-700 group-hover:text-slate-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-slate-700">
            © 2024 MESTRIA. {t("footer.rights")}
          </p>

          <p className="text-xs text-slate-700 max-w-xl">
            {t("footer.bottomTagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
