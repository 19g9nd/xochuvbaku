import { TourPage } from "@/app/components/TourPage";
import { getTour, tours } from "@/app/data/tours/tours-index";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Not Found" };
  return {
    title: `${tour.hero.title.ru} | Baku Walks`,
    description: tour.hero.description.ru,
  };
}

export default async function TourRoute({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return notFound();
  return <TourPage tour={tour} />;
}