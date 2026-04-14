import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export default function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 hover:border-[#D4A853]/30 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/30 to-transparent" />
      </div>

      {/* Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-[#D4A853] text-[#1A1A1A]">
          {event.badge}
        </span>
      </div>

      <div className="relative p-6 -mt-8">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#F5F0E8] mb-2">
          {event.title}
        </h3>
        <p className="text-[#8A8278] text-sm leading-relaxed mb-4">
          {event.desc}
        </p>
        <div className="flex items-center gap-4 text-xs text-[#D4A853]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {event.day}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {event.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
}