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
}

export interface ThemeData {
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
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
  themes: ThemeData[];
  practical: PracticalData;
}