import React from "react";
import { Sparkles, CheckCircle2, Shield, Clock, MapPin, Users, Droplets } from "lucide-react";
import { GymConfig } from "../data/gymData.ts";

interface AboutSectionProps {
  config: GymConfig;
  onExplorePlans: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onExplorePlans }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Verified Stats Highlight Strip */}
        <div className="w-full max-w-4xl mx-auto mb-20 p-5 rounded-2xl glass-panel border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center py-2 px-3">
              <div className="flex items-center gap-1.5 mb-1 text-amber-300">
                <span className="text-sm sm:text-base font-bold tabular-nums text-white">
                  {config.googleRating}★
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase">
                GOOGLE RATING
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center py-2 px-3 sm:border-x sm:border-white/10">
              <div className="flex items-center gap-1.5 mb-1 text-neutral-200">
                <span className="text-sm sm:text-base font-semibold text-white">
                  VERIFIED CLEAN
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase">
                CLEAN WORKOUT ENVIRONMENT
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center py-2 px-3">
              <div className="flex items-center gap-1.5 mb-1 text-neutral-200">
                <span className="text-sm sm:text-base font-semibold text-white">
                  BAHIRO MARKET
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase">
                LOCATED IN ARRAH
              </span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            <span>ABOUT OUR SPACE</span>
            <span aria-hidden="true">·</span>
            <span>BAHIRO, ARRAH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-6 leading-tight">
            MORE THAN JUST A GYM.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Located in Bahiro, Arrah, The Great Champion Gym offers a dedicated space for people looking to improve their fitness and strength. The gym has received positive feedback for its clean environment and welcoming workout atmosphere.
          </p>
        </div>

        {/* 4 Verified Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Highlight 1 */}
          <div className="glass-panel glass-panel-hover p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-300 mb-5">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                HYGIENE STANDARDS
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Clean, Well-Maintained Environment
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                Equipped with sanitized stations and systematically arranged weights for a respectful, hygienic training routine.
              </p>
            </div>
          </div>

          {/* Highlight 2 */}
          <div className="glass-panel glass-panel-hover p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-300 mb-5">
              <Users size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                COMMUNITY CULTURE
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Positive Workout Atmosphere
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                Encouraging culture welcoming both beginners and veteran lifters working towards strength and disciplined health.
              </p>
            </div>
          </div>

          {/* Highlight 3 */}
          <div className="glass-panel glass-panel-hover p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-300 mb-5">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                FLOOR DENSITY
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Reportedly Less-Crowded Setting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                Allows focused training sessions without persistent delays or long wait times on major compound equipment.
              </p>
            </div>
          </div>

          {/* Highlight 4 */}
          <div className="glass-panel glass-panel-hover p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-300 mb-5">
              <Droplets size={20} />
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-1">
                ON-SITE AMENITY
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Restroom Available On-Site
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                Dedicated on-premises restroom facility offering convenience before, during, and after demanding workouts.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Context Card & Transparency Notice */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300/90 uppercase mb-2">
              <Shield size={14} />
              <span>VERIFIED PROFILE HIGHLIGHTS & OPERATIONAL DISCLOSURE</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              These highlights are derived from verified Google Business Profile feedback and customer reviews. We uphold complete honesty: individual member experiences may vary across shifts. To personally evaluate our training environment, you are welcome to visit our facility at Singh Saheb Market, Bahiro during standard operating shifts.
            </p>
          </div>

          <button
            onClick={onExplorePlans}
            className="liquid-metal-secondary px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white rounded-lg whitespace-nowrap shrink-0 hover:text-white"
          >
            Explore Memberships
          </button>
        </div>
      </div>
    </section>
  );
};
