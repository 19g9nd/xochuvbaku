import { TourData } from "../../types";
import { icheriSheher } from "./icheri-sheher";
import { modernBaku } from "./modern-baku";

export const tours: Record<string, TourData> = {
    "icheri-sheher": icheriSheher,
    "modern-baku": modernBaku,
};

export const toursList = Object.values(tours);

export function getTour(slug: string): TourData | undefined {
    return tours[slug];
}