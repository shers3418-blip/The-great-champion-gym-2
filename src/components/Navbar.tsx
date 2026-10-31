import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  businessName: string;
  onJoinClick: () => void;
  onOpenConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  businessName,
  onJoinClick,
  onOpenConfig,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Memberships", href: "#memberships" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-black/80 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three-column grid layout: Left (Logo), Center (Nav), Right (CTA) */}
        <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
          {/* Left Column: Logo Text */}
          <div className="flex items-center justify-start">
            <a
              href="#"
              className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-white hover:text-neutral-200 transition-colors whitespace-nowrap"
              style={{ letterSpacing: "-0.02em" }}
            >
              {businessName || "THE GREAT CHAMPION GYM."}
            </a>
          </div>

          {/* Center Column: Perfectly Centered Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-9 text-xs font-medium tracking-wide text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-white/40 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Column: CTA Button & Mobile Toggle */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onJoinClick}
              className="hero-btn-primary !h-[40px] !px-5 !text-[11px] !tracking-[0.14em] hidden sm:inline-flex"
            >
              JOIN NOW
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-neutral-300 rounded-lg border border-white/10 bg-neutral-950 transition-colors"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Navigation with Animated Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-black/98 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-200 md:hidden border-t border-white/10">
          <div className="flex flex-col space-y-5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-tight text-neutral-200 hover:text-white pb-3 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="hero-btn-primary w-full !h-[48px] !text-xs !tracking-[0.14em]"
            >
              JOIN NOW ↗
            </button>

            {onOpenConfig && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="w-full text-center text-xs text-neutral-400 hover:text-neutral-200 py-2 transition-colors"
              >
                Edit Gym Details
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
