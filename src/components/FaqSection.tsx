import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { GymConfig } from "../data/gymData.ts";

interface FaqSectionProps {
  config: GymConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the gym operating hours?",
      a: `The Great Champion Gym operates two daily shifts from Monday to Saturday: Morning from 5:00 AM to 9:00 AM, and Evening from 4:00 PM to 9:00 PM. We are closed on Sundays to allow deep cleaning and athlete recovery.`,
    },
    {
      q: "Where is The Great Champion Gym located in Arrah?",
      a: `We are conveniently situated at Singh Saheb Market, New, Bahiro, Arrah, Bihar 802312, India. It is easily accessible with convenient landmark access in the Bahiro commercial area.`,
    },
    {
      q: "Is the gym suitable for complete beginners?",
      a: `Yes! Our floor environment is welcoming and respectful. On-duty floor trainers assist beginners with proper machine adjustments, safety precautions, and basic barbell form so you can train with confidence.`,
    },
    {
      q: "How crowded does the gym get?",
      a: `According to member reviews and profile highlights, The Great Champion Gym offers a reportedly less-crowded setting compared to other commercial gyms in Arrah, allowing lifters to perform routines without excessive waiting for stations. Early mornings (5:00–7:30 AM) and mid-afternoons are especially peaceful.`,
    },
    {
      q: "Are there restrooms available on the premises?",
      a: `Yes, clean and maintained restroom facilities are available directly on-site inside the gym for all active members.`,
    },
    {
      q: "How can I enquire about membership fees or enroll?",
      a: `You can reach out directly via WhatsApp or phone call at ${config.phone}. You can also visit during operational shifts (5-9 AM and 4-9 PM) to take a walkthrough of the gym floor and inspect the equipment firsthand.`,
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-neutral-950/80 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
            <span>COMMON INQUIRIES</span>
            <span aria-hidden="true">·</span>
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4 leading-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Everything you need to know before stepping foot inside The Great Champion Gym.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-xl border border-neutral-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-300" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-900/60 animate-in fade-in-50 duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
