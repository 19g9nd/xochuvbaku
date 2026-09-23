export type Lang = "ru" | "en";
export type ColorStop = [number, number, number]; // RGB colour [red,green,blue] values
export type IconName =
  | "heritage"
  | "cinema"
  | "healer"
  | "artist"
  | "caravan"
  | "palace"
  | "market"
  | "garden";


export interface SectionData {
  id: string;
  icon: IconName;
  eyebrow: Record<Lang, string>; //title on both languages
  title: Record<Lang, string>; //main title on both languages
  body: Record<Lang, string>;
  detail: Record<Lang, string>;
  image?: string;
  imageAlt?: Record<Lang, string>;
  imageLabel?: Record<Lang, string>;
}

// Separate interface for theme data, which is part of the themes section
export interface ThemeData {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  image?: string;
  imageAlt?: Record<Lang, string>;
  imageLabel?: Record<Lang, string>;
}

// The themes section itself, which contains multiple ThemeData items
export interface ThemesSection {
  eyebrow: Record<Lang, string>;
  title: Record<Lang, string>;
  items: ThemeData[];

  // Optional image for the whole theme section
  image?: string;
  imageAlt?: Record<Lang, string>;
  imageLabel?: Record<Lang, string>;
}


export interface HeroData {
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  description: Record<Lang, string>;
  image: string;
}

export interface PracticalData {
  eyebrow: Record<Lang, string>;
  points: Record<Lang, string[]>;
}
export interface BookingData {
  certified: Record<Lang, string>;
  guideName: Record<Lang, string>;
  guideSub: Record<Lang, string>;
  durationLabel: Record<Lang, string>;
  durationValue: Record<Lang, string>;
  formatLabel: Record<Lang, string>;
  formatValue: Record<Lang, string>;
  languagesLabel: Record<Lang, string>;
  languagesValue: Record<Lang, string>;
  ctaPrimary: Record<Lang, string>;
  ctaSecondary: Record<Lang, string>;
}
export interface TourData {
  slug: string;                  // ← URL: /tour/icheri-sheher
  hero: HeroData;
  sections: SectionData[];
  themes: ThemesSection;
  practical: PracticalData;
  booking: BookingData;
  price: number;                 // ← 60 (для карточек)
  duration: string;              // ← "~3 часа"
  relatedTours?: string[];       // ← ручной подбор рекомендаций
  themeColors?: ColorStop[];     // ← опционально: своя палитра
}
