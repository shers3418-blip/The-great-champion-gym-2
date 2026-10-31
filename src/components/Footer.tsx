import React from "react";
import { SlidersHorizontal, ArrowUp } from "lucide-react";
import { GymConfig } from "../data/gymData.ts";

interface FooterProps {
  config: GymConfig;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-base font-bold text-white uppercase tracking-tight block">
              {config.businessName}
            </span>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated strength and physical conditioning facility located in Bahiro, Arrah, Bihar. Providing clean equipment, positive workout culture, and verified member standards.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <span>Google Rating {config.googleRating}★</span>
              <span aria-hidden="true">·</span>
              <span>Bahiro, Arrah</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
              EXPLORE
            </span>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="hover:text-white transition-colors">About Facility</a>
              <a href="#facilities" className="hover:text-white transition-colors">Equipment & Gallery</a>
              <a href="#memberships" className="hover:text-white transition-colors">Membership Tiers</a>
              <a href="#trainers" className="hover:text-white transition-colors">Floor Mentorship</a>
              <a href="#reviews" className="hover:text-white transition-colors">Member Feedback</a>
              <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
              FACILITY DESK
            </span>
            <p className="text-neutral-300">
              {config.address}
            </p>
            <p className="text-neutral-300 font-mono pt-1">
              {config.phone}
            </p>
            <p className="text-neutral-400 text-[11px] pt-1">
              Mon–Sat: 5 AM–9 AM & 4 PM–9 PM · Sun: Closed
            </p>
          </div>
        </div>

        {/* Bottom Bar with Quiet Copyright and Config Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} The Great Champion Gym</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved</span>
            <span aria-hidden="true">·</span>
            <span>Arrah, Bihar</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConfig}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={12} />
              <span>Customize Site Details</span>
            </button>

            <span aria-hidden="true">·</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
