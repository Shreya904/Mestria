"use client";

import Hero from "@/app/components/Hero";
import MissionWeDeliver from "@/app/components/MissionWeDeliver";
import Earnings from "@/app/components/Earnings";
import ContactCTA from "@/app/components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MissionWeDeliver />
      <Earnings />
      <ContactCTA />
    </div>
  );
}
