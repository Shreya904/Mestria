"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionWeDeliver() {
  const t = useTranslations("home");

  return (
    <>
      {/* MISSION SECTION */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            {/* TITLE */}
            <div className="col-span-full text-center">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#736356" }}
              >
                {t("mission.title")}
              </h2>
            </div>

            {/* LEFT SVG */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-[280px] sm:w-[340px] md:w-[420px] aspect-square">
                <Image
                  src="/mission.svg"
                  alt="Mission Illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Glow */}
              <div className="absolute w-72 h-72 bg-[#e0701c]/10 blur-3xl rounded-full -z-10" />
            </div>

            {/* CONTENT */}
            <div>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#e0701c]" />

                <p className="whitespace-pre-line leading-relaxed text-lg md:text-xl text-gray-700 pl-6">
                  {t("mission.content")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WE DELIVER SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#e0701c]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#736356]/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#e0701c" }}
            >
              {t("weDeliver.title")}
            </h2>

            <p className="text-xl text-gray-700 mb-20 font-semibold max-w-3xl mx-auto">
              {t("weDeliver.subtitle")}
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {t.raw("weDeliver.items").map((item: any, index: number) => {
              return (
                <motion.div
                  key={item.key ?? index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#e0701c]/15 bg-white p-8 sm:p-10 shadow-md hover:shadow-2xl transition-all duration-300 min-h-[520px] flex flex-col"
                >
                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-[#e0701c]" />

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#e0701c]/5 blur-3xl rounded-full" />
                  </div>

                  {/* SVG (NO animation) */}
                  <div className="relative flex items-center justify-center mb-10">
                    <div className="relative w-full h-[240px] sm:h-[280px]">
                      <Image
                        src={`/${item.svg}`}
                        alt={item.title}
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col items-center text-center mt-auto">
                    <h3
                      className="text-2xl sm:text-3xl font-bold leading-tight mb-5"
                      style={{ color: "#736356" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-[17px] sm:text-lg max-w-[320px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
