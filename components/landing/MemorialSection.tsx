"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const VISIBLE = 4;

interface MemorialPhoto {
  src: string;
  alt: string;
}

const MemorialSection = () => {
  const t = useTranslations("team");
  const locale = useLocale();
  const [start, setStart] = useState(0);

  // Memorial photos
  const photos: MemorialPhoto[] = [
    { src: "/memoria-mestreabel.jpg", alt: "Mestre Abel a ensinar" },
    { src: "/memoria-mestreabel-2.jpg", alt: "Com o Mestre Abel" },
    { src: "/memoria-mestre-abel-3.jpg", alt: "Com o Mestre Abel" },
    { src: "/memoria-diogo.jpg", alt: "Na fábrica" },
    { src: "/memoria-alves.jpg", alt: "Com o Mestre Alves" },
    { src: "/memoria-anabela.jpg", alt: "Com a Mestra Anabela" },
    { src: "/memoria-avo.jpg", alt: "Avó" },
    { src: "/memoria-colegas-1.jpg", alt: "Com colegas" },
    { src: "/memoria-colegas-2.jpg", alt: "Com mestres" },
    { src: "/memoria-familia.jpg", alt: "Em família" },
    { src: "/memoria-fabrica-2.jpg", alt: "Na fábrica" },
    { src: "/memoria-fabrica-3.jpg", alt: "Na fábrica com mestres" },
    { src: "/memoria-mestres-1.jpg", alt: "Mestres na fábrica" },
    { src: "/memoria-mestres-2.jpg", alt: "Com mestres no escritório" },
    { src: "/memoria-mestres-3.jpg", alt: "Na celebração com mestres" },
    { src: "/memoria-celebracao.jpg", alt: "Celebração na fábrica" },
    { src: "/memoria-equipa.jpg", alt: "Com a equipa" },
    { src: "/memoria-mestres-4.jpg", alt: "Com mestres" },
  ];

  const canPrev = start > 0;
  const canNext = start + VISIBLE < photos.length;

  const text = t("inMemory.quote");
  const heading = locale === "pt" ? "Em Memória" : "In Memory";

  const visible = photos.slice(start, start + VISIBLE);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-2xl md:text-3xl font-serif font-bold mb-6 text-foreground/80"
        >
          {heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-muted-foreground italic leading-relaxed max-w-2xl mx-auto mb-12 text-base md:text-lg whitespace-pre-line"
        >
          &quot;{text}&quot;
        </motion.p>

        <div className="relative">
          {canPrev && (
            <button
              onClick={() => setStart((s) => Math.max(0, s - VISIBLE))}
              className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-foreground/70" />
            </button>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
            {visible.map((photo, i) => (
              <motion.div
                key={photo.alt + start + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {canNext && (
            <button
              onClick={() =>
                setStart((s) => Math.min(photos.length - VISIBLE, s + VISIBLE))
              }
              className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-foreground/70" />
            </button>
          )}
        </div>

        <p className="text-muted-foreground/50 text-xs mt-3">
          {start + 1}–{Math.min(start + VISIBLE, photos.length)} /{" "}
          {photos.length}
        </p>
      </div>
    </section>
  );
};

export default MemorialSection;
