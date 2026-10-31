import React, { useState } from "react";
import { MessageSquare, Phone, X, Dumbbell, Clock, Target, CheckCircle2 } from "lucide-react";
import { GymConfig, formatWhatsAppUrl } from "../data/gymData.ts";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: GymConfig;
  initialPlan?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  config,
  initialPlan = "Monthly",
}) => {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [goal, setGoal] = useState("Strength & Muscle Building");
  const [shift, setShift] = useState("Morning (5:00 AM – 9:00 AM)");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I would like to join The Great Champion Gym in Bahiro, Arrah.
• Name: ${name.trim() || "Prospective Member"}
• Interested Plan: ${selectedPlan}
• Goal: ${goal}
• Preferred Shift: ${shift}

Please share current admission fees and slot availability.`;

    window.open(formatWhatsAppUrl(config.phone, message), "_blank");
    onClose();
  };

  const cleanPhone = config.phone.replace(/[^0-9+]/g, "");

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in-50 duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
            <Dumbbell size={13} />
            <span>DIRECT ADMISSION ENQUIRY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
            START YOUR FITNESS JOURNEY
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
            Send an instant message to The Great Champion Gym management.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Membership Tier Select */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Preferred Membership Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Monthly", "Quarterly", "Yearly"].map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setSelectedPlan(p)}
                  className={`py-2 px-2 text-xs font-semibold uppercase rounded-lg border transition-all cursor-pointer ${
                    selectedPlan.toLowerCase().includes(p.toLowerCase())
                      ? "bg-neutral-100 text-neutral-950 border-neutral-100 shadow-sm"
                      : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Workout Shift Select */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Preferred Workout Shift
            </label>
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors cursor-pointer"
            >
              <option value="Morning (5:00 AM – 9:00 AM)">
                Morning Shift (5:00 AM – 9:00 AM)
              </option>
              <option value="Evening (4:00 PM – 9:00 PM)">
                Evening Shift (4:00 PM – 9:00 PM)
              </option>
              <option value="Flexible (Both Shifts)">
                Flexible (Both Shifts)
              </option>
            </select>
          </div>

          {/* Fitness Goal Select */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              Primary Fitness Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors cursor-pointer"
            >
              <option value="Strength & Muscle Building">
                Strength & Muscle Building
              </option>
              <option value="Weight & Fat Loss">Weight & Fat Loss</option>
              <option value="General Health & Conditioning">
                General Health & Conditioning
              </option>
              <option value="Athletic Transformation">
                Athletic Transformation
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="pt-3 space-y-2.5">
            <button
              type="submit"
              className="liquid-metal-button w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </button>

            <a
              href={`tel:${cleanPhone}`}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone size={14} />
              <span>Direct Call: {config.phone}</span>
            </a>
          </div>
        </form>

        <div className="mt-4 text-center text-[11px] text-neutral-400">
          Located at Singh Saheb Market, Bahiro, Arrah · Sunday Closed
        </div>
      </div>
    </div>
  );
};
