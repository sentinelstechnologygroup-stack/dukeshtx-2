import React from "react";
import { motion } from "framer-motion";
import EventCard from "../components/events/EventCard";

const EVENTS = [
  {
    title: "Karaoke Wednesdays",
    desc: "Grab the mic and own the stage with The Karaoke Crew! Sing your favorites and enjoy drink specials all night long. The fun starts at 9PM every Wednesday.",
    day: "Every Wednesday",
    time: "9:00 PM",
    badge: "Weekly",
    image: "/images/events/karaoke.png",
  },
  {
    title: "Steak Night Thursday",
    desc: "Premium cuts every Thursday — filet mignon, ribeye, pork chops & lamb chops. All served with garlic mashed potatoes and sautéed green beans. By Elements HTX.",
    day: "Every Thursday",
    time: "5:00 PM",
    badge: "Weekly",
    image: "/images/events/steak-night.png",
  },
  {
    title: "Crawfish Season",
    desc: "Fresh crawfish boils served Friday through Sunday while in season. Corn, potatoes, sausage — the whole Texas spread. Get it while it's hot!",
    day: "Fri · Sat · Sun",
    time: "While Supplies Last",
    badge: "Seasonal",
    image: "/images/events/crawfish.png",
  },
  {
    title: "UFC Fight Nights",
    desc: "Every major UFC card on our big screens. Cold beers, great food, and the energy of fight night. Bring your crew and don't miss a round.",
    day: "Fight Days",
    time: "Varies",
    badge: "Special",
    image: "/images/events/ufc.png",
  },
  {
    title: "Live Sports",
    desc: "Rockets, Astros, Texans — every game that matters on multiple screens. Happy hour from 11AM to 7PM. Come watch at Dukes!",
    day: "Game Days",
    time: "All Day",
    badge: "Daily",
    image: "/images/events/sports.png",
  },
  {
    title: "Happy Hour",
    desc: "Unbeatable drink specials 7 days a week until 7PM. Craft cocktails, cold brews, and good vibes — the perfect way to unwind.",
    day: "Every Day",
    time: "11AM – 7PM",
    badge: "Daily",
    image: "/images/events/happy-hour.png",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
            Never a Dull Moment
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#F5F0E8] mb-4">
            Events & Specials
          </h1>
          <div className="w-16 h-[1px] bg-[#D4A853] mx-auto mb-6" />
          <p className="text-[#8A8278] text-base max-w-lg mx-auto">
            From karaoke to steak nights, crawfish boils to UFC fights — 
            there's always something happening at Dukes.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>
      </section>

      {/* Party CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-gradient-to-br from-[#D4A853]/10 to-[#D4A853]/5 border border-[#D4A853]/20 text-center"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-4">
              Planning a Party?
            </h2>
            <p className="text-[#8A8278] text-base max-w-md mx-auto mb-8">
              Office parties, birthdays, or any occasion — we'll make it unforgettable. 
              Call us to reserve your spot.
            </p>
            <a
              href="tel:8326441861"
              className="inline-block px-8 py-4 bg-[#D4A853] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E8C97A] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A853]/20 text-sm tracking-wide"
            >
              Call (832) 644-1861
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}