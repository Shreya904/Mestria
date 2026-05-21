"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactCTA from "@/app/components/ContactCTA";
import { useLocale } from "next-intl";

export default function SolutionsPage() {
  const t = useTranslations("solutions");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#faf7f2] overflow-x-hidden relative">
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#e0701c]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#736356]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative">
        {/* ================= HERO (UPGRADED) ================= */}
        <section className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#e0701c]">
                {t("pageTitle")}
              </h1>

              <p className="text-xl md:text-2xl text-[#736356] leading-relaxed">
                {t("pageIntro")}
              </p>

              {locale !== "pt" && (
                <p className="mt-6 text-[#736356]/80 max-w-md">
                  Structured systems for capturing, transferring, and scaling
                  expert knowledge before it disappears.
                </p>
              )}
            </motion.div>

            {/* ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <Image
                src="/Solution.svg"
                alt="Solutions illustration"
                width={520}
                height={520}
                className="w-full max-w-md"
              />
            </motion.div>
          </div>
        </section>

        {/* ================= KNOWLEDGE RETENTION ================= */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={t("knowledgeRetention.title")}
              subtitle={t("knowledgeRetention.intro")}
              accent="#e0701c"
            />

            <StepFlowCard
              title={t("knowledgeRetention.approach.title")}
              subtitle=""
              steps={safeRaw(t, "knowledgeRetention.approach.steps")}
              accent="#e0701c"
            />
          </div>
        </section>

        {/* ================= TRAINING ================= */}
        <section className="py-20 px-6 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={t("training.title")}
              subtitle={t("training.intro")}
              accent="#947c64"
            />

            <StepFlowCard
              title={t("training.approach.title")}
              subtitle=""
              steps={safeRaw(t, "training.approach.steps")}
              accent="#947c64"
            />
          </div>
        </section>

        {/* ================= WIKI CREATION ================= */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={t("wikiCreation.title")}
              subtitle={t("wikiCreation.intro")}
              accent="#736356"
            />

            <div className="grid md:grid-cols-2 gap-10">
              {safeRawObject(
                t,
                "wikiCreation.digitization",
                "wikiCreation.fromScratch",
              ).map((item: any, i: number) => (
                <WikiCard
                  key={i}
                  title={item.title}
                  steps={item.steps}
                  icon={`/${item.svg}`}
                  accent={i === 0 ? "#e0701c" : "#736356"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="py-20 px-6 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title={t("whyChoose.title")}
              subtitle=""
              accent="#e0701c"
              center
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {safeRaw(t, "whyChoose.benefits").map((b: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 text-center border border-[#e0701c]/10 shadow-sm"
                >
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <Image
                      src={`/${b.svg}`}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#736356] mb-3">
                    {b.title}
                  </h3>

                  <p className="text-[#736356]/80">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SectionHeader({ title, subtitle, accent, center = false }: any) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-4xl font-bold mb-4" style={{ color: accent }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#736356] max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

/* STEP FLOW (FIXES YOUR MAIN UX ISSUE) */
function StepFlowCard({ title, steps, accent }: any) {
  return (
    <div className="bg-white rounded-3xl p-10 border shadow-sm relative overflow-hidden">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-6" style={{ color: accent }}>
          {title}
        </h3>

        {steps.map((step: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex gap-5 items-start"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
              style={{ background: accent }}
            >
              {i + 1}
            </div>

            <p className="text-[#736356] leading-relaxed">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* WIKI CARD (SVG-FIRST, STRONG VISUAL HIERARCHY) */
function WikiCard({ title, steps, accent, icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-3xl p-8 border shadow-sm relative overflow-hidden"
      style={{ borderColor: `${accent}22` }}
    >
      <div className="w-28 h-28 mx-auto mb-6 relative">
        <Image src={icon} alt="" fill className="object-contain" />
      </div>

      <h3
        className="text-2xl font-bold text-center mb-6"
        style={{ color: accent }}
      >
        {title}
      </h3>

      <div className="space-y-4">
        {steps.map((s: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-3"
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs mt-1"
              style={{ background: accent }}
            >
              {i + 1}
            </div>

            <p className="text-[#736356] text-sm leading-relaxed">{s}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= SAFE HELPERS (IMPORTANT FIX) ================= */

function safeRaw(t: any, key: string) {
  const value = t.raw(key);
  return Array.isArray(value) ? value : [];
}

function safeRawObject(t: any, ...keys: string[]) {
  return keys.map((k) => t.raw(k)).filter(Boolean);
}
