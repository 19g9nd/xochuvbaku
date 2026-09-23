import { TourData } from "../../types";
import { icheriSheher } from "./icheri-sheher";

export const tours: Record<string, TourData> = {
    "icheri-sheher": icheriSheher,
};

export const toursList = Object.values(tours);

export function getTour(slug: string): TourData | undefined {
    return tours[slug];
}