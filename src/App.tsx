/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { FacilitiesSection } from "./components/FacilitiesSection.tsx";
import { MembershipSection } from "./components/MembershipSection.tsx";
import { TrainersSection } from "./components/TrainersSection.tsx";
import { ReviewsSection } from "./components/ReviewsSection.tsx";
import { FaqSection } from "./components/FaqSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";
import { EnquiryModal } from "./components/EnquiryModal.tsx";
import { ConfigModal } from "./components/ConfigModal.tsx";
import { GymConfig, GymPlan, getStoredConfig } from "./data/gymData.ts";

export default function App() {
  const [config, setConfig] = useState<GymConfig>(getStoredConfig);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState("Monthly");

  // Keep state updated if storage changes
  const handleConfigSave = (updated: GymConfig) => {
    setConfig(updated);
  };

  const handleOpenEnquiry = (planName = "Monthly") => {
    setSelectedPlanForEnquiry(planName);
    setEnquiryModalOpen(true);
  };

  const handleScrollToMemberships = () => {
    const el = document.getElementById("memberships");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-neutral-200 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar
        businessName={config.businessName}
        onJoinClick={() => handleOpenEnquiry("General")}
        onOpenConfig={() => setConfigModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Vesper.ai Motion AI Homepage / Hero */}
        <Hero
          config={config}
          onJoinClick={() => handleOpenEnquiry("General")}
          onExploreClick={handleScrollToMemberships}
        />

        {/* About Section */}
        <AboutSection
          config={config}
          onExplorePlans={handleScrollToMemberships}
        />

        {/* Facilities & Gallery */}
        <FacilitiesSection
          config={config}
          onOpenConfig={() => setConfigModalOpen(true)}
        />

        {/* Membership Plans */}
        <MembershipSection
          config={config}
          onSelectPlan={(plan: GymPlan) => handleOpenEnquiry(plan.name)}
        />

        {/* Floor Mentorship & Trainers */}
        <TrainersSection
          config={config}
          onOpenConfig={() => setConfigModalOpen(true)}
        />

        {/* Reviews & Google Rating */}
        <ReviewsSection
          config={config}
          onOpenConfig={() => setConfigModalOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection config={config} />

        {/* Contact & Map Directions */}
        <ContactSection
          config={config}
          onOpenEnquiryModal={() => handleOpenEnquiry("General")}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        config={config}
        onOpenConfig={() => setConfigModalOpen(true)}
      />

      {/* Membership Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        config={config}
        initialPlan={selectedPlanForEnquiry}
      />

      {/* Live Customization / Configuration Manager Modal */}
      <ConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
        config={config}
        onSave={handleConfigSave}
      />
    </div>
  );
}
