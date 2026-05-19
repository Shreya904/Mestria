"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Earnings() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 bg-[#faf7f2]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#e0701c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#947c64]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#e0701c]" />
            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#947c64]">
              Business Impact
            </span>
            <div className="w-12 h-[2px] bg-[#e0701c]" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "#947c64" }}
          >
            {t("earnings.title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {t.raw("earnings.items").map((item: any, index: number) => (
            <motion.div
              key={item.key ?? index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#e6d7c7] bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Decorative Gradient Strip */}
              <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#e0701c] to-[#947c64]" />

              <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
                {/* SVG (NO ANIMATION NOW) */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]">
                    <Image
                      src={item.svg}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center md:justify-start mb-5">
                    <div className="px-4 py-1 rounded-full bg-[#f8ede3] text-[#e0701c] text-sm font-semibold tracking-wide">
                      Strategic Advantage
                    </div>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-5 leading-tight"
                    style={{ color: "#e0701c" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e0701c]/10 rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
