import React from "react";
import { Star, ShieldCheck, ExternalLink, ThumbsUp } from "lucide-react";
import { GymConfig } from "../data/gymData.ts";

interface ReviewsSectionProps {
  config: GymConfig;
  onOpenConfig: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  config,
  onOpenConfig,
}) => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 4.7 Google Rating Callout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
              <span>COMMUNITY REPUTATION</span>
              <span aria-hidden="true">·</span>
              <span>VERIFIED FEEDBACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              RATED 4.7 / 5 BY MEMBERS.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
              Based on Google Business Profile feedback from members training at Bahiro, Arrah. Member testimonials highlight our clean spaces, supportive gym vibes, and equipment availability.
            </p>
          </div>

          {/* Prominent Score Card */}
          <div className="glass-panel p-6 rounded-2xl border border-neutral-800 flex items-center gap-6 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < 4
                        ? "fill-amber-400 text-amber-400"
                        : "fill-amber-400/60 text-amber-400"
                    }
                  />
                ))}
              </div>
              <div className="text-3xl font-black text-white tabular-nums tracking-tight">
                {config.googleRating}
                <span className="text-sm font-semibold text-neutral-400 ml-1">/ 5.0</span>
              </div>
              <div className="text-[11px] font-semibold text-neutral-400 tracking-wider uppercase mt-1">
                GOOGLE BUSINESS RATING
              </div>
            </div>

            <a
              href={config.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-metal-secondary px-4 py-3 rounded-lg text-xs font-bold tracking-wider uppercase text-neutral-200 hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>View On Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {config.reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel p-8 rounded-2xl border border-neutral-800/80 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(rev.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-amber-400/40 text-amber-400/60"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">{rev.date}</span>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs font-semibold text-amber-200/90 tracking-wide uppercase mb-3">
                  "{rev.highlight}"
                </div>

                {/* Review Body */}
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-neutral-400">Arrah, Bihar</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                  <ShieldCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Disclaimer */}
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-center max-w-3xl mx-auto">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Ratings and reviews are based on public feedback submitted to Google Maps for The Great Champion Gym in Bahiro, Arrah. Individual results, attendance patterns, and member experiences will vary.
          </p>
        </div>
      </div>
    </section>
  );
};
