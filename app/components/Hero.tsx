"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("home");
  const locale = useLocale();

  const isPT = locale === "pt";

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #e0701c 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #736356 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite 1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #e0701c 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* BADGE */}
        <div
          className="inline-block mb-8 px-6 py-2 rounded-full border border-orange-300 bg-orange-50 text-orange-700 text-sm font-semibold uppercase tracking-wider"
          style={{ animation: "fadeInDown 0.8s ease-out" }}
        >
          {t("hero.subtitle1")}
        </div>

        {/* HERO TITLE (FIXED) */}
        <h1
          className={`
    font-bold mb-6 tracking-tight text-balance
    ${
      isPT
        ? "text-4xl sm:text-5xl lg:text-6xl xl:text-6xl leading-[1.05]"
        : "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]"
    }
  `}
          style={{
            paddingBottom: "0.15em",
            backgroundImage:
              "linear-gradient(135deg, #e0701c 0%, #d4571a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeInUp 1s ease-out 0.2s both",
          }}
        >
          {t("hero.title")}
        </h1>

        {/* SUBTITLE */}
        <p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
        >
          {t("hero.subtitle2")}
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
        >
          <Link
            href={getLocalizedPath("/solutions")}
            className="px-10 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#e0701c" }}
          >
            {t("cta.learnMore")}
          </Link>

          <a
            href="mailto:mariajoao@mestria.io"
            className="px-10 py-4 rounded-lg font-semibold text-white text-lg border-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#736356",
              borderColor: "#736356",
            }}
          >
            {t("cta.getInTouch")}
          </a>
        </div>

        {/* SCROLL */}
        <div
          className="mt-16 sm:mt-20 flex justify-center opacity-60 hover:opacity-100 transition-opacity"
          style={{ animation: "fadeIn 1.5s ease-out 1s both" }}
        >
          <div style={{ animation: "bounce 2s ease-in-out infinite" }}>
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
