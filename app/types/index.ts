// types/index.ts
export type Lang = "ru" | "en";
export type ColorStop = [number, number, number]; // RGB colour [red,green,blue] values

export interface SectionData {
  id: string;
  icon: string;
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
}

export interface PracticalData {
  eyebrow: Record<Lang, string>;
  points: Record<Lang, string[]>;
}

export interface CopyData {
  hero: HeroData;
  sections: SectionData[];
  themes: ThemesSection;      // ← теперь это объект, а не массив
  practical: PracticalData;
}