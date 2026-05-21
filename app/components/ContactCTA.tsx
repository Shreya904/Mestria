"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactCTA() {
  const t = useTranslations("home");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* CARD */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#565952]/15 bg-[#faf7f5] shadow-sm hover:shadow-2xl transition-all duration-300">
          {/* subtle accent line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-[#565952]" />

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-10 md:p-14">
            {/* LEFT: SVG */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[260px] sm:h-[320px] md:h-[380px]">
                <Image
                  src="/Contact us.svg"
                  alt="Contact illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: CONTENT */}
            <div className="text-center md:text-left">
              <h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: "#565952" }}
              >
                {t("contact.title")}
              </h2>

              <p className="text-gray-600 text-lg mb-10 max-w-md">
                {t("contact.subtitle")}
              </p>

              {/* BUTTON */}
              <a
                href="mailto:mariajoao@mestria.io"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: "#565952" }}
              >
                ✉️ {t("contact.sendEmail")}
              </a>

              {/* SOCIALS */}

              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                {/* Facebook */}
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-[#565952]/10 hover:bg-[#565952]/20 flex items-center justify-center transition"
                >
                  <svg
                    className="w-5 h-5 text-[#565952]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v6.98A10 10 0 0 0 22 12z" />
                  </svg>
                </a> */}

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mestria.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-[#565952]/10 hover:bg-[#565952]/20 flex items-center justify-center transition"
                >
                  <svg
                    className="w-5 h-5 text-[#565952]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                </a>

                {/* LinkedIn*/}
                <a
                  href="https://www.linkedin.com/company/mestria-io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#565952]/10 hover:bg-[#565952]/20 flex items-center justify-center transition"
                >
                  <svg
                    className="w-5 h-5 text-[#565952]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.2 2.1-2.4 4.3-2.4C20 7.8 22 9.9 22 14v10h-5v-8.5c0-2-0.7-3.4-2.5-3.4-1.4 0-2.3 1-2.7 2-.1.3-.2.8-.2 1.3V24h-5V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
