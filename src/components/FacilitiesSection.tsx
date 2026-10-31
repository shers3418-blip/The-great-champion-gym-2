import React, { useState } from "react";
import { Dumbbell, Eye, Sparkles, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { FacilityItem, GymConfig } from "../data/gymData.ts";

interface FacilitiesSectionProps {
  config: GymConfig;
  onOpenConfig: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  config,
  onOpenConfig,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const categories = ["All", "Free Weights", "Resistance", "Atmosphere", "Convenience"];

  const filteredFacilities = config.facilities.filter((f) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Atmosphere") {
      return f.category === "Atmosphere" || f.category === "Hygiene";
    }
    return f.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-neutral-950/80 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
              <span>WORKOUT SPACES & EQUIPMENT</span>
              <span aria-hidden="true">·</span>
              <span>THE GREAT CHAMPION GYM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              FACILITIES & TRAINING ENVIRONMENT.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
              Explore the dedicated training spaces at Bahiro, Arrah. Equipment includes verified strength machines, compound lifting racks, free weights, and on-premises hygiene amenities.
            </p>
          </div>

          {/* Quick config button */}
          <button
            onClick={onOpenConfig}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <SlidersHorizontal size={14} />
            <span>Customize Gallery Photos</span>
          </button>
        </div>

        {/* Filter Controls (Segmented Tabs with proper handlers) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900/70 border border-neutral-800/80 rounded-xl w-fit mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-neutral-100 text-neutral-950 shadow-md font-bold"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((item) => {
            const hasError = imageErrors[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedFacility(item)}
                className="group glass-panel rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700/80 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                {/* Visual Area with Zero-Broken-Image Fallback */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  {!hasError ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* High-fidelity CSS/SVG Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                      <div className="w-12 h-12 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-amber-300 mb-3 relative z-10">
                        <Dumbbell size={22} />
                      </div>
                      <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider relative z-10">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-neutral-400 mt-1 relative z-10">
                        The Great Champion Gym
                      </span>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                  {/* Badge unboxed text */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[10px] font-semibold tracking-wider text-amber-300 uppercase">
                    {item.badge}
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={14} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-medium tracking-wider text-neutral-400 uppercase mb-1.5">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                    <span>Bahiro, Arrah</span>
                    <span className="text-neutral-300 group-hover:text-white font-medium inline-flex items-center gap-1">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Disclaimer */}
        <div className="mt-12 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          Equipment lineup reflects verified workout machines and spaces documented at Bahiro. Gym management can update photos anytime via the configuration panel.
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-neutral-950">
              <img
                src={selectedFacility.imageUrl}
                alt={selectedFacility.title}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(selectedFacility.id)}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2">
                <span>{selectedFacility.badge}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedFacility.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedFacility.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedFacility.description}
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Location: Singh Saheb Market, Bahiro, Arrah
                </span>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
