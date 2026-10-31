import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { AmbientCanvas } from "./AmbientCanvas.tsx";
import { GymConfig } from "../data/gymData.ts";

interface HeroProps {
  config: GymConfig;
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onJoinClick,
  onExploreClick,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Subtle Particle & Network Canvas */}
      <AmbientCanvas />

      {/* Subtle Atmospheric Vignette & Depth Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,204,112,0.04),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Main Center Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-md shadow-lg shadow-black/80 mb-7 sm:mb-8"
        >
          {/* Small golden-yellow glowing dot */}
          <span
            className="w-2 h-2 rounded-full shadow-[0_0_8px_#E8CC70]"
            style={{ backgroundColor: "#E8CC70" }}
          />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300 font-sans">
            {config.tagline || "WELCOME TO THE GREAT CHAMPION GYM"}
          </span>
        </motion.div>

        {/* Main H1 Headline with exact 3-line layout and typography */}
        <h1
          className="w-full text-center text-white uppercase flex flex-col items-center justify-center font-sans"
          style={{
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.08,
          }}
        >
          {/* Line 1: BUILD YOUR */}
          <div className="overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[94px] font-extrabold text-white"
            >
              BUILD YOUR
            </motion.span>
          </div>

          {/* Line 2: STRENGTH. */}
          <div className="overflow-hidden py-0.5">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.22,
              }}
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[94px] font-extrabold text-white"
            >
              STRENGTH.
            </motion.span>
          </div>

          {/* Line 3: BECOME A CHAMPION. */}
          <div className="overflow-hidden py-0.5">
            <motion.div
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.35,
              }}
              className="flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-4 text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[94px] font-extrabold text-white"
            >
              <span>BECOME</span>
              <span
                className="font-instrument-serif italic font-normal tracking-normal inline-block pr-1 uppercase"
                style={{
                  color: "#E8CC70",
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "1.06em",
                }}
              >
                A CHAMPION.
              </span>
            </motion.div>
          </div>
        </h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }}
          className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-[650px] mx-auto leading-relaxed mt-6 sm:mt-7 mb-9 sm:mb-10 px-4 font-normal text-center font-sans"
        >
          {config.heroDescription ||
            "Train with purpose. Build your strength. Experience a premium fitness environment in Arrah."}
        </motion.p>

        {/* Hero Liquid-Glass Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.65,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary Button: JOIN NOW ↗ */}
          <button
            onClick={onJoinClick}
            className="hero-btn-primary w-full sm:w-auto cursor-pointer"
          >
            <span>JOIN NOW ↗</span>
          </button>

          {/* Secondary Button: EXPLORE MEMBERSHIPS */}
          <button
            onClick={onExploreClick}
            className="hero-btn-secondary w-full sm:w-auto cursor-pointer"
          >
            <span>EXPLORE MEMBERSHIPS</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint Indicator at very bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none text-neutral-500 text-[10px] uppercase tracking-widest"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-1 h-3 rounded-full bg-neutral-600 animate-pulse" />
      </motion.div>
    </section>
  );
};
