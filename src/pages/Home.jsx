import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import EventsPreview from "../components/home/EventsPreview";
import HappyHourBanner from "../components/home/HappyHourBanner";
import LocationSection from "../components/home/LocationSection";

const HERO_IMG = "/images/home/hero.png";
const FOOD_IMG = "/images/home/food.png";

const EVENT_IMAGES = [
  "/images/home/karaoke.png",
  "/images/home/steak-night.png",
  "/images/home/crawfish.png",
  "/images/home/ufc.png",
];

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMG} />
      <AboutSection foodImage={FOOD_IMG} />
      <EventsPreview images={EVENT_IMAGES} />
      <HappyHourBanner />
      <LocationSection />
    </div>
  );
}