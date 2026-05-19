"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const locales = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // ✅ FIXED: preserve current route correctly
  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // remove current locale if present
    const pathWithoutLocale =
      segments[0] === "en" || segments[0] === "pt"
        ? "/" + segments.slice(1).join("/")
        : pathname;

    const newPath =
      pathWithoutLocale === "/"
        ? `/${newLocale}`
        : `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
    setIsLangOpen(false);
  };

  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  const currentLang = locales.find((l) => l.code === locale);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            href={getLocalizedPath("/")}
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/logo_mestria_completo.png"
              alt="Mestria"
              width={120}
              height={27}
              priority
              className="w-auto h-auto max-h-16"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-gray-700 hover:text-orange-600 transition-colors"
              href={getLocalizedPath("/")}
            >
              {t("nav.home")}
            </Link>
            <Link
              className="text-gray-700 hover:text-orange-600 transition-colors"
              href={getLocalizedPath("/team")}
            >
              {t("nav.team")}
            </Link>
            <Link
              className="text-gray-700 hover:text-orange-600 transition-colors"
              href={getLocalizedPath("/solutions")}
            >
              {t("nav.solutions")}
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* LANGUAGE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all text-sm font-medium"
              >
                <span className="text-orange-600 font-semibold uppercase">
                  {locale}
                </span>
                <span className="text-gray-600">{currentLang?.label}</span>

                <svg
                  className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-orange-50 transition-colors flex justify-between items-center ${
                        locale === l.code
                          ? "bg-orange-50 text-orange-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{l.label}</span>
                      <span className="text-xs uppercase opacity-60">
                        {l.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href={getLocalizedPath("/")} className="block px-3 py-2">
              {t("nav.home")}
            </Link>
            <Link href={getLocalizedPath("/team")} className="block px-3 py-2">
              {t("nav.team")}
            </Link>
            <Link
              href={getLocalizedPath("/solutions")}
              className="block px-3 py-2"
            >
              {t("nav.solutions")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
