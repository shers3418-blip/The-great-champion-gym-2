import React from "react";
import { MessageSquare, Phone, Check, ShieldAlert, Sparkles } from "lucide-react";
import { GymConfig, GymPlan, formatWhatsAppUrl } from "../data/gymData.ts";

interface MembershipSectionProps {
  config: GymConfig;
  onSelectPlan: (plan: GymPlan) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  config,
  onSelectPlan,
}) => {
  const getPlanWhatsAppLink = (planName: string) => {
    const text = `Hi, I would like to enquire about the ${planName} at The Great Champion Gym (Bahiro, Arrah). Please share current fee details and slot availability.`;
    return formatWhatsAppUrl(config.phone, text);
  };

  return (
    <section id="memberships" className="py-24 sm:py-32 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            <span>MEMBERSHIP OPTIONS</span>
            <span aria-hidden="true">·</span>
            <span>TRANSPARENT ADMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-6 leading-tight">
            SELECT YOUR MEMBERSHIP TIER.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto font-normal">
            We offer adaptable membership durations structured for both new trainees and seasoned lifters. Connect with our gym desk to receive immediate details on pricing and timings.
          </p>

          {/* Verification Notice Banner */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-xs text-amber-300/90 text-left sm:text-center">
            <ShieldAlert size={15} className="shrink-0 text-amber-400" />
            <span>
              <strong>Note:</strong> Pricing packages below are editable templates. Confirm verified seasonal pricing directly with gym management at {config.phone}.
            </span>
          </div>
        </div>

        {/* 3 Premium Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {config.plans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-9 transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border-2 border-neutral-700 shadow-2xl shadow-black/80 lg:-translate-y-2"
                    : "glass-panel rounded-2xl border border-neutral-800/80 hover:border-neutral-700/80"
                }`}
              >
                {/* Popular Highlight Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-400 text-neutral-950 text-[10px] font-extrabold tracking-[0.2em] uppercase shadow-lg">
                    MOST REQUESTED
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                      MEMBERSHIP TIER
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 font-normal leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-5 px-5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 mb-7 text-center">
                    <div className="text-2xl font-black text-white tracking-tight">
                      {plan.priceNote}
                    </div>
                    <div className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1">
                      {plan.period} · Enquire for exact rates
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                      INCLUDED PRIVILEGES
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 mt-0.5 text-amber-300">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-6 border-t border-neutral-800/80">
                  {/* WhatsApp Button */}
                  <a
                    href={getPlanWhatsAppLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-metal-button w-full py-3 px-4 rounded-lg text-xs font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare size={15} />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  {/* Call Direct Button */}
                  <a
                    href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Phone size={14} />
                    <span>Call {config.phone}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Shift Notice */}
        <div className="max-w-2xl mx-auto p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
            DAILY OPERATIONAL SHIFTS
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-200">
            <div>
              <span className="text-neutral-400 text-xs block">Morning Shift</span>
              <strong className="text-white">{config.hoursWeekdayMorning}</strong>
            </div>
            <div className="hidden sm:block text-neutral-700">|</div>
            <div>
              <span className="text-neutral-400 text-xs block">Evening Shift</span>
              <strong className="text-white">{config.hoursWeekdayEvening}</strong>
            </div>
            <div className="hidden sm:block text-neutral-700">|</div>
            <div>
              <span className="text-neutral-400 text-xs block">Sunday</span>
              <strong className="text-amber-400">{config.hoursSunday}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
