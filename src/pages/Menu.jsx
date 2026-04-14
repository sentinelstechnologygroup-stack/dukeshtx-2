import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCategory from "../components/menu/MenuCategory";

const MENU_DATA = {
  "Starters": [
    { name: "Loaded Nachos", price: "$12", desc: "Queso, jalapeños, pico, sour cream & guac" },
    { name: "Fried Pickles", price: "$9", desc: "Beer-battered with ranch dipping sauce" },
    { name: "Wings (10 pc)", price: "$14", desc: "Buffalo, lemon pepper, garlic parm, or BBQ" },
    { name: "Quesadillas", price: "$11", desc: "Stuffed with cheese, peppers & your choice of meat" },
    { name: "Onion Rings", price: "$8", desc: "Hand-breaded and golden fried" },
    { name: "Chips & Queso", price: "$7", desc: "House-made queso with warm tortilla chips" },
  ],
  "Burgers & Sandwiches": [
    { name: "Dukes Classic Burger", price: "$13", desc: "½ lb patty, lettuce, tomato, onion, pickles" },
    { name: "Bacon Jalapeño Burger", price: "$15", desc: "Pepper jack, crispy bacon, jalapeños, chipotle mayo" },
    { name: "Mushroom Swiss Burger", price: "$14", desc: "Sautéed mushrooms, Swiss cheese, garlic aioli" },
    { name: "Crispy Chicken Sandwich", price: "$13", desc: "Buttermilk fried chicken, slaw, pickles" },
    { name: "Philly Cheesesteak", price: "$14", desc: "Shaved ribeye, peppers, onions, provolone" },
  ],
  "From the Kitchen": [
    { name: "Ribeye Steak", price: "$28", desc: "12oz hand-cut with garlic mashed potatoes & green beans" },
    { name: "Filet Mignon", price: "$32", desc: "8oz center-cut with garlic mashed potatoes & green beans" },
    { name: "Pork Chops", price: "$22", desc: "Grilled bone-in with garlic mashed potatoes" },
    { name: "Lamb Chops", price: "$30", desc: "Herb-crusted with sautéed green beans" },
    { name: "Crawfish Boil", price: "Market", desc: "Seasonal — served Fri, Sat & Sun while in season" },
    { name: "Fish & Chips", price: "$14", desc: "Beer-battered cod with fries and tartar sauce" },
  ],
  "Tacos & Tex-Mex": [
    { name: "Street Tacos (3)", price: "$11", desc: "Carne asada, cilantro, onion, salsa verde" },
    { name: "Fish Tacos (3)", price: "$12", desc: "Fried cod, cabbage slaw, chipotle crema" },
    { name: "Chicken Fajitas", price: "$15", desc: "Sizzling with peppers, onions, rice & beans" },
    { name: "Steak Fajitas", price: "$18", desc: "Marinated skirt steak with all the fixings" },
  ],
  "Cocktails": [
    { name: "Dukes Margarita", price: "$10", desc: "House-made with fresh lime and agave" },
    { name: "Texas Mule", price: "$11", desc: "Tito's vodka, ginger beer, lime" },
    { name: "Old Fashioned", price: "$12", desc: "Bourbon, bitters, orange peel, cherry" },
    { name: "Paloma", price: "$10", desc: "Tequila, grapefruit soda, lime, salt rim" },
    { name: "Ranch Water", price: "$9", desc: "Tequila, Topo Chico, lime" },
  ],
  "Beer & More": [
    { name: "Domestic Draft", price: "$4", desc: "Bud Light, Coors Light, Miller Lite" },
    { name: "Craft Draft", price: "$6", desc: "Rotating local & craft selections" },
    { name: "Import Bottles", price: "$5", desc: "Modelo, Corona, Dos Equis, Heineken" },
    { name: "Bucket Deal (5)", price: "$18", desc: "Pick any domestic bottles" },
  ],
};

const TABS = Object.keys(MENU_DATA);

export default function Menu() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all"
    ? TABS
    : [activeTab];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
            Fresh · Texan · Bold
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#F5F0E8] mb-4">
            Our Menu
          </h1>
          <div className="w-16 h-[1px] bg-[#D4A853] mx-auto mb-6" />
          <p className="text-[#8A8278] text-base max-w-lg mx-auto">
            Texas-style food made fresh every day. Pair it with one of our 
            craft cocktails or an ice-cold beer.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#D4A853] text-[#1A1A1A]"
                : "bg-white/5 text-[#8A8278] hover:text-[#D4A853] hover:bg-[#D4A853]/10"
            }`}
          >
            All
          </button>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#D4A853] text-[#1A1A1A]"
                  : "bg-white/5 text-[#8A8278] hover:text-[#D4A853] hover:bg-[#D4A853]/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredCategories.map((cat, i) => (
                <MenuCategory
                  key={cat}
                  title={cat}
                  items={MENU_DATA[cat]}
                  delay={i * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}