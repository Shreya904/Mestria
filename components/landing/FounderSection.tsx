"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const FounderSection = () => {
  const t = useTranslations("team");

  const highlights = [
    t("founder.highlight1"),
    t("founder.highlight2"),
    t("founder.highlight3"),
    t("founder.highlight4"),
  ];

  return (
    <section className="pt-32 py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm tracking-widest uppercase mb-4 text-center"
        >
          {t("whoWeAre")}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-16"
        >
          {t("founder.section_title")}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Photo */}
          <div className="shrink-0 md:w-56">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-md mx-auto relative">
              <Image
                src="/founder-mjo.jpg"
                alt="Maria João Oliveira"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/maria-joão-oliveira-286530277"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-bold mb-1">
              {t("founder.name")}
            </h3>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
              {t("founder.title")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("founder.bio")}
            </p>

            <ul className="space-y-2">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Image
                    src="/logo-mestria-icon-transparent.png"
                    alt=""
                    width={14}
                    height={14}
                    className="object-contain shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
