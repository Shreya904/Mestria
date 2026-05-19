"use client";

// import { useTranslations } from "next-intl";
import FounderSection from "@/components/landing/FounderSection";
import MemorialSection from "@/components/landing/MemorialSection";
import ContactCTA from "@/app/components/ContactCTA";

export default function TeamPage() {
  // const t = useTranslations("team");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FounderSection />
      <MemorialSection />

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}
