import {
  Castle,
  Clapperboard,
  ClipboardList,
  Coffee,
  Landmark,
  Mountain,
  MoonStar,
  Palette,
  PawPrint,
  Sparkles,
  Waves,
  Flower2,
} from "lucide-react";
import type { IconName } from "../types";

export type BrandIconName = IconName;

interface BrandIconProps {
  name: BrandIconName;
  className?: string;
}

const icons = {
  castle: Castle,
  waves: Waves,
  volcano: Mountain,
  moon: MoonStar,
  raccoon: PawPrint,
  clipboard: ClipboardList,
  coffee: Coffee,
  sparkles: Sparkles,
  landmark: Landmark,
  clapperboard: Clapperboard,
  lotus: Flower2,
  palette: Palette,
} as const;

export function BrandIcon({ name, className = "w-5 h-5 text-brand-blue" }: BrandIconProps) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.9} aria-hidden="true" />;
}
