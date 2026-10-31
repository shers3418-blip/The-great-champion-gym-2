import React, { useState } from "react";
import { X, Save, RotateCcw, Sliders, Phone, Star, Image, DollarSign, MapPin } from "lucide-react";
import { GymConfig, resetStoredConfig, saveStoredConfig } from "../data/gymData.ts";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: GymConfig;
  onSave: (newConfig: GymConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<GymConfig>({ ...config });
  const [activeTab, setActiveTab] = useState<"general" | "plans" | "gallery">("general");
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredConfig(formData);
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    if (confirm("Reset all settings, prices, and photo URLs back to the verified initial defaults?")) {
      const def = resetStoredConfig();
      setFormData(def);
      onSave(def);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in-50 duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-center justify-between shrink-0 bg-neutral-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400">
              <Sliders size={16} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-tight">
                Gym Details & Configuration Manager
              </h3>
              <p className="text-[11px] text-neutral-400">
                Edit contact numbers, Google rating, pricing templates, and gallery URLs.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-neutral-800 bg-neutral-900 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("general")}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === "general"
                ? "border-amber-400 text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            General & Contact
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("plans")}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === "plans"
                ? "border-amber-400 text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Pricing Templates
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("gallery")}
            className={`pb-3 px-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === "gallery"
                ? "border-amber-400 text-white"
                : "border-transparent text-neutral-400 hover:text-neutral-200"
            }`}
          >
            Gallery & Photos
          </button>
        </div>

        {/* Scrollable Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1 text-xs">
          {activeTab === "general" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 font-semibold uppercase mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono"
                    placeholder="+91 93041 97481"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 font-semibold uppercase mb-1">
                    Google Rating (out of 5.0)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={formData.googleRating}
                    onChange={(e) =>
                      setFormData({ ...formData, googleRating: parseFloat(e.target.value) || 4.7 })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold uppercase mb-1">
                  Full Business Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 font-semibold uppercase mb-1">
                    Morning Shift Hours
                  </label>
                  <input
                    type="text"
                    value={formData.hoursWeekdayMorning}
                    onChange={(e) =>
                      setFormData({ ...formData, hoursWeekdayMorning: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 font-semibold uppercase mb-1">
                    Evening Shift Hours
                  </label>
                  <input
                    type="text"
                    value={formData.hoursWeekdayEvening}
                    onChange={(e) =>
                      setFormData({ ...formData, hoursWeekdayEvening: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold uppercase mb-1">
                  Google Maps URL
                </label>
                <input
                  type="text"
                  value={formData.mapsUrl}
                  onChange={(e) => setFormData({ ...formData, mapsUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-[11px] font-mono"
                />
              </div>
            </div>
          )}

          {activeTab === "plans" && (
            <div className="space-y-4">
              <p className="text-neutral-400 text-[11px] mb-2">
                Update the displayed price text or fee notes for each membership tier. (Default is "Contact for Price").
              </p>
              {formData.plans.map((p, idx) => (
                <div key={p.id} className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="font-bold text-white uppercase text-xs">{p.name}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block mb-1">Price Note / Fee</span>
                      <input
                        type="text"
                        value={p.priceNote}
                        onChange={(e) => {
                          const updated = [...formData.plans];
                          updated[idx] = { ...updated[idx], priceNote: e.target.value };
                          setFormData({ ...formData, plans: updated });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-white"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block mb-1">Period Label</span>
                      <input
                        type="text"
                        value={p.period}
                        onChange={(e) => {
                          const updated = [...formData.plans];
                          updated[idx] = { ...updated[idx], period: e.target.value };
                          setFormData({ ...formData, plans: updated });
                        }}
                        className="w-full px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-4">
              <p className="text-neutral-400 text-[11px] mb-2">
                Replace gallery image URLs with direct photo links or uploaded images.
              </p>
              {formData.facilities.map((fac, idx) => (
                <div key={fac.id} className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white uppercase text-xs">{fac.title}</span>
                    <span className="text-[10px] text-amber-400 uppercase">{fac.category}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase block mb-1">Photo Image URL</span>
                    <input
                      type="text"
                      value={fac.imageUrl}
                      onChange={(e) => {
                        const updated = [...formData.facilities];
                        updated[idx] = { ...updated[idx], imageUrl: e.target.value };
                        setFormData({ ...formData, facilities: updated });
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-neutral-900 border border-neutral-700 text-white font-mono text-[11px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-400 hover:text-white rounded-lg border border-neutral-800 hover:border-neutral-700 cursor-pointer transition-colors"
            >
              <RotateCcw size={14} />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white rounded-lg cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="liquid-metal-button px-5 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <Save size={14} />
                <span>{savedSuccess ? "Saved!" : "Save Changes"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
