import React, { useState } from "react";
import { Phone, MapPin, Clock, MessageSquare, Navigation, CheckCircle2, Copy, Check } from "lucide-react";
import { GymConfig, formatWhatsAppUrl } from "../data/gymData.ts";

interface ContactSectionProps {
  config: GymConfig;
  onOpenEnquiryModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  onOpenEnquiryModal,
}) => {
  const [copied, setCopied] = useState(false);

  const cleanPhone = config.phone.replace(/[^0-9+]/g, "");
  const defaultWhatsAppText =
    "Hi, I would like to enquire about membership, facilities, and visiting The Great Champion Gym in Bahiro, Arrah.";
  const whatsAppUrl = formatWhatsAppUrl(config.phone, defaultWhatsAppText);

  const copyAddress = () => {
    navigator.clipboard.writeText(config.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            <span>LOCATION & CONTACT</span>
            <span aria-hidden="true">·</span>
            <span>VISIT US IN BAHIRO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-4">
            YOUR FITNESS JOURNEY STARTS HERE.
          </h2>

          <p className="text-base text-neutral-400 leading-relaxed font-normal">
            Reach out directly for membership admissions, take an in-person facility tour, or start training during our daily morning and evening sessions.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Business Details & 3 Functional Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-neutral-800 space-y-6">
              {/* Business Name */}
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                  OFFICIAL BUSINESS NAME
                </div>
                <div className="text-2xl font-bold text-white uppercase tracking-tight">
                  {config.businessName}
                </div>
              </div>

              {/* Address */}
              <div className="pt-4 border-t border-neutral-900">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                    <MapPin size={14} className="text-amber-400" />
                    <span>LOCATION</span>
                  </div>
                  <button
                    onClick={copyAddress}
                    className="text-[11px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
                  {config.address}
                </p>
              </div>

              {/* Phone */}
              <div className="pt-4 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                  <Phone size={14} className="text-amber-400" />
                  <span>CONTACT NUMBER</span>
                </div>
                <a
                  href={`tel:${cleanPhone}`}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-amber-200 transition-colors inline-block tracking-tight tabular-nums"
                >
                  {config.phone}
                </a>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-neutral-900">
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-2">
                  <Clock size={14} className="text-amber-400" />
                  <span>OPERATING HOURS</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-neutral-400">Monday–Saturday:</span>
                    <span className="font-semibold text-white">
                      5:00 AM–9:00 AM and 4:00 PM–9:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-neutral-900/60">
                    <span className="text-neutral-400">Sunday:</span>
                    <span className="font-semibold text-amber-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The 3 Functional Buttons Required: CALL NOW, GET DIRECTIONS, ENQUIRE ABOUT MEMBERSHIP */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. CALL NOW */}
                <a
                  href={`tel:${cleanPhone}`}
                  className="liquid-metal-button w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Phone size={16} />
                  <span>CALL NOW</span>
                </a>

                {/* 2. GET DIRECTIONS */}
                <a
                  href={config.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-metal-secondary w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Navigation size={16} />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>

              {/* 3. ENQUIRE ABOUT MEMBERSHIP */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 hover:from-amber-100 hover:to-amber-300 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl"
              >
                <MessageSquare size={16} />
                <span>ENQUIRE ABOUT MEMBERSHIP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Simulation & Landmark Directions */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-8 rounded-2xl border border-neutral-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  MAP LOCATION & NAVIGATION
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  <span>Verified Google Listing</span>
                </div>
              </div>

              {/* Styled Map Preview Card */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 mb-6 group">
                {/* Visual map preview canvas/rendering */}
                <div className="w-full h-full bg-[#171a21] relative flex items-center justify-center p-6 text-center overflow-hidden">
                  {/* Subtle map road grid patterns */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-60" />
                  
                  {/* Roads simulation */}
                  <div className="absolute w-[200%] h-1 bg-neutral-700/40 -rotate-12 top-1/3" />
                  <div className="absolute w-[200%] h-1.5 bg-neutral-700/50 rotate-45 top-1/2" />
                  <div className="absolute w-2 h-[200%] bg-neutral-700/40 left-1/3" />

                  {/* Pin Pulse */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300 shadow-xl shadow-amber-500/20 animate-bounce">
                      <MapPin size={24} />
                    </div>
                    <div className="mt-3 px-3.5 py-1.5 rounded-lg bg-neutral-950/90 border border-neutral-700 backdrop-blur-md shadow-2xl">
                      <span className="text-xs font-bold text-white uppercase tracking-tight block">
                        The Great Champion Gym
                      </span>
                      <span className="text-[10px] text-neutral-400 block">
                        Singh Saheb Market, Bahiro, Arrah
                      </span>
                    </div>
                  </div>
                </div>

                {/* Open in Google Maps button overlay */}
                <a
                  href={config.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white uppercase tracking-wider gap-2"
                >
                  <Navigation size={16} />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Landmark details */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>
                    <strong>Landmark:</strong> Situated directly inside Singh Saheb Market in New Bahiro.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>
                    <strong>Arrival:</strong> Ample parking space available in front of the commercial complex.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>
                    <strong>Walk-in:</strong> Feel free to drop in during active workout shifts without prior appointment.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
              <span>Arrah, Bihar 802312</span>
              <a
                href={config.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white font-medium inline-flex items-center gap-1"
              >
                <span>Navigate via GPS</span>
                <Navigation size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
