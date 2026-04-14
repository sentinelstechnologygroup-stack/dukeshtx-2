import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const EVENTS = [
  {
    title: "Karaoke Wednesdays",
    time: "Every Wednesday @ 9PM",
    desc: "Grab the mic and own the stage with The Karaoke Crew.",
  },
  {
    title: "Steak Night Thursday",
    time: "Every Thursday @ 5PM",
    desc: "Filet, ribeye, pork chops & lamb with garlic mashed potatoes.",
  },
  {
    title: "Crawfish Season",
    time: "Fri · Sat · Sun",
    desc: "Fresh crawfish boils served while in season. Don't miss it.",
  },
  {
    title: "UFC Fight Nights",
    time: "On Fight Days",
    desc: "Big screens, cold beers, and every punch live.",
  },
];

export default function EventsPreview({ images }) {
  return (
    <section id="events" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
              Always Something Going On
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#F5F0E8]">
              Upcoming Events
            </h2>
          </div>
          <Link
            to={createPageUrl("Events")}
            className="mt-6 md:mt-0 flex items-center gap-2 text-[#D4A853] text-sm font-medium hover:gap-3 transition-all"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#D4A853]/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[i]}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#D4A853] text-[10px] uppercase tracking-[0.2em] mb-1">
                  {event.time}
                </p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#F5F0E8] mb-1">
                  {event.title}
                </h3>
                <p className="text-[#8A8278] text-xs leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}