import React from "react";
import { Dumbbell, Award, Flame, UserCheck, Edit3 } from "lucide-react";
import { GymConfig } from "../data/gymData.ts";

interface TrainersSectionProps {
  config: GymConfig;
  onOpenConfig: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({
  config,
  onOpenConfig,
}) => {
  const defaultTrainers = [
    {
      id: "t1",
      role: "Strength & Conditioning Lead",
      badge: "Form & Safety",
      focus: "Compound Barbell Movements, Progressive Overload & Posture",
      schedule: "Morning & Evening Shifts",
      status: "Floor Assistance Available",
    },
    {
      id: "t2",
      role: "Hypertrophy & Machine Specialist",
      badge: "Muscle Building",
      focus: "Cable Mechanics, Targeted Muscle Isolation & Beginner Basics",
      schedule: "Evening Shift",
      status: "Floor Assistance Available",
    },
    {
      id: "t3",
      role: "Fitness & Endurance Mentor",
      badge: "General Fitness",
      focus: "Fat Loss Conditioning, Functional Strength & Routine Design",
      schedule: "Morning Shift",
      status: "Floor Assistance Available",
    },
  ];

  return (
    <section id="trainers" className="py-24 sm:py-32 bg-neutral-950/70 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-3">
              <span>FLOOR MENTORSHIP</span>
              <span aria-hidden="true">·</span>
              <span>DEDICATED GUIDANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              COMMITTED TO YOUR PROGRESS.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
              Whether you are lifting for the first time or breaking personal records, our floor mentors provide assistance with proper exercise form, safe machine handling, and workout discipline.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/60 px-4 py-2 rounded-lg">
            <UserCheck size={14} className="text-amber-400" />
            <span>Floor supervision during active morning & evening hours</span>
          </div>
        </div>

        {/* Mentorship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {defaultTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="glass-panel p-8 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-300 mb-6">
                  <Dumbbell size={24} />
                </div>

                <div className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase mb-1">
                  {trainer.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {trainer.role}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                  {trainer.focus}
                </p>
              </div>

              <div className="pt-5 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                <span className="text-neutral-400">{trainer.schedule}</span>
                <span className="text-emerald-400 font-medium">{trainer.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          Trainer profiles can be configured with specific coach names and photos as verified by gym management.
        </div>
      </div>
    </section>
  );
};
