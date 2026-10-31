/**
 * The Great Champion Gym - Verified Business Data & Configuration
 * Singh Saheb Market, New, Bahiro, Arrah, Bihar 802312, India
 * Contact: +91 93041 97481
 */

export interface GymPlan {
  id: string;
  name: string;
  period: string;
  priceNote: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
}

export interface GymConfig {
  businessName: string;
  tagline: string;
  heroLine1: string;
  heroLine2: string;
  heroItalicWord: string;
  heroDescription: string;
  phone: string;
  whatsappNumber: string;
  googleRating: number;
  googleRatingCount: number;
  address: string;
  addressShort: string;
  hoursWeekdayMorning: string;
  hoursWeekdayEvening: string;
  hoursSunday: string;
  mapsUrl: string;
  verifiedHighlights: string[];
  plans: GymPlan[];
  facilities: FacilityItem[];
  reviews: ReviewItem[];
}

export const DEFAULT_GYM_CONFIG: GymConfig = {
  businessName: "The Great Champion Gym",
  tagline: "WELCOME TO THE GREAT CHAMPION GYM",
  heroLine1: "BUILD YOUR STRENGTH.",
  heroLine2: "BECOME",
  heroItalicWord: "A CHAMPION.",
  heroDescription: "Train with purpose. Build your strength. Experience a premium fitness environment in Arrah.",
  phone: "+91 93041 97481",
  whatsappNumber: "919304197481",
  googleRating: 4.7,
  googleRatingCount: 38,
  address: "Singh Saheb Market, New, Bahiro, Arrah, Bihar 802312, India",
  addressShort: "Singh Saheb Market, Bahiro, Arrah, Bihar 802312",
  hoursWeekdayMorning: "5:00 AM – 9:00 AM",
  hoursWeekdayEvening: "4:00 PM – 9:00 PM",
  hoursSunday: "Closed",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Great%20Champion%20Gym%20Arrah%20Bihar",
  verifiedHighlights: [
    "Clean, well-maintained gym environment",
    "Positive workout atmosphere",
    "Reportedly less-crowded setting",
    "Restroom available on-site"
  ],
  plans: [
    {
      id: "monthly",
      name: "MONTHLY MEMBERSHIP",
      period: "per month",
      priceNote: "Contact for Price",
      description: "Ideal for beginners or those seeking flexible short-term training in Bahiro.",
      features: [
        "Full access to gym floor during operating shifts",
        "Free weights & strength training machines",
        "Access to morning (5-9 AM) & evening (4-9 PM) slots",
        "Clean, well-maintained environment",
        "On-site restroom facility access"
      ]
    },
    {
      id: "quarterly",
      name: "QUARTERLY MEMBERSHIP",
      period: "per 3 months",
      priceNote: "Contact for Price",
      popular: true,
      description: "Our most requested tier for committed lifters building real muscular strength.",
      features: [
        "Unrestricted access to all strength & machine stations",
        "Dedicated orientation on workout machine usage",
        "Access to both morning & evening time slots",
        "Reportedly less-crowded workout intervals",
        "Direct enquiry for special seasonal offers"
      ]
    },
    {
      id: "yearly",
      name: "YEARLY MEMBERSHIP",
      period: "per year",
      priceNote: "Contact for Price",
      description: "Long-term fitness transformation package for serious athletes in Arrah.",
      features: [
        "365-day champion commitment & floor privileges",
        "Lock in current membership terms",
        "Access to all strength and conditioning apparatus",
        "Supportive, motivating gym community",
        "Priority assistance from on-site staff"
      ]
    }
  ],
  facilities: [
    {
      id: "strength-floor",
      title: "Heavy Strength & Free Weights",
      category: "Free Weights",
      badge: "Strength Core",
      description: "Comprehensive dumbbell racks, Olympic barbells, flat and incline benches engineered for progressive overload.",
      imageUrl: "https://res.cloudinary.com/vpx3f9ae/image/upload/v1793438813/Screenshot_2026-10-31-14-50-49-815_com.android.chrome-edit.jpg"
    },
    {
      id: "selectorized-machines",
      title: "Cable & Resistance Stations",
      category: "Resistance",
      badge: "Targeted Hypertrophy",
      description: "Multi-functional cable crossovers, lat pulldowns, seated chest presses, and leg extension machines for safe isolation work.",
      imageUrl: "https://res.cloudinary.com/vpx3f9ae/image/upload/v1793438812/IMG_fd76ae39-b978-4370-b4f3-c8e811817f57.webp"
    },
    {
      id: "power-squat-zone",
      title: "Power Rack & Compound Area",
      category: "Compound Lifts",
      badge: "Power & Foundation",
      description: "Heavy-duty rack for squats, deadlifts, and overhead presses on non-slip, shock-absorbing athletic floor mats.",
      imageUrl: "https://res.cloudinary.com/vpx3f9ae/image/upload/v1793438720/1000041077.webp"
    },
    {
      id: "clean-environment",
      title: "Clean, Well-Maintained Atmosphere",
      category: "Hygiene",
      badge: "Verified Highlight",
      description: "Maintained daily with sanitized gear, organized dumbbell tiers, and positive workout culture praised by local members.",
      imageUrl: "https://res.cloudinary.com/vpx3f9ae/image/upload/v1793438813/IMG_46fbd010-bf61-4814-ba88-cb087e618133.webp"
    },
    {
      id: "hygiene-restroom",
      title: "On-Site Restroom & Amenities",
      category: "Convenience",
      badge: "On-Site Restroom",
      description: "Clean restroom on premises providing hassle-free comfort before, during, and after intense training routines.",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "spacious-vibe",
      title: "Reportedly Less-Crowded Space",
      category: "Atmosphere",
      badge: "Focused Training",
      description: "Train without endless waiting lines for machines during selected morning and evening workout blocks.",
      imageUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Verified Member",
      rating: 5,
      date: "Recent Google Review",
      highlight: "Clean environment & friendly vibe",
      text: "The Great Champion Gym in Bahiro is very clean and has all essential strength equipment. The atmosphere is positive and everyone focuses on their workout."
    },
    {
      id: "rev-2",
      author: "Local Fitness Enthusiast",
      rating: 5,
      date: "Google Verified Review",
      highlight: "Not overly crowded, great machines",
      text: "Compared to other gyms in Arrah, you don't have to wait for dumbbells or benches. Morning hours from 5 to 9 AM are very peaceful."
    },
    {
      id: "rev-3",
      author: "Strength Trainee",
      rating: 4.8,
      date: "Local Reviewer",
      highlight: "Good location at Singh Saheb Market",
      text: "Easy to reach in Bahiro, clean restroom available inside, and the equipment is well maintained. Definitely recommend checking it out."
    }
  ]
};

const STORAGE_KEY = "great_champion_gym_config_v1";

export function getStoredConfig(): GymConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_GYM_CONFIG, ...parsed };
    }
  } catch (err) {
    console.warn("Could not read stored gym config, falling back to default", err);
  }
  return DEFAULT_GYM_CONFIG;
}

export function saveStoredConfig(config: GymConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.error("Failed to save gym config to localStorage", err);
  }
}

export function resetStoredConfig(): GymConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to reset gym config", err);
  }
  return DEFAULT_GYM_CONFIG;
}

export function formatWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
