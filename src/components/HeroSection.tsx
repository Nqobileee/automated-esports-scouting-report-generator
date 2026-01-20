"use client";

import { useState } from "react";

export default function HeroSection() {
  const [teamName, setTeamName] = useState("");

  const handleSearch = () => {
    if (teamName.trim()) {
      console.log("Searching for team:", teamName);
      // Add search logic here
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      <div className="lg:col-span-7 flex flex-col justify-center space-y-8 p-10 bg-[#ff6e00]/5 rounded-3xl border border-[#ff6e00]/10 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] size-64 bg-[#ff6e00]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
            Automated <span className="text-[#ff6e00]">Esports</span> Scouting.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Harness the power of neural engines to generate professional-grade
            scouting reports instantly. Search any team to begin.
          </p>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-3 max-w-lg">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#ff6e00] text-gray-900"
              placeholder="Enter team name..."
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#ff6e00] text-white px-8 py-4 rounded-xl font-bold hover:glow-orange-strong transition-all flex items-center justify-center gap-2"
          >
            Start <span className="material-symbols-outlined">bolt</span>
          </button>
        </div>
      </div>

      <div
        className="lg:col-span-5 rounded-3xl bg-cover bg-center glow-orange min-h-[300px]"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcVF2ocm15RZRFbVjNcICkS2NEHiGsgyfGe9zgQNdX06t1pNTrs4LSBljL60rs98U8L5xQ0fw-v-Nm_F0mfHBVV2p9PSaoZv7F39Xlmj5cMm-qjvXX4bdd_viJEQFJeRga3sTrr8iCaICBU7YouG_P0GFa6QtA0-9IdLG4yF48oTh4yIDs6PReK6eLv5oaZ-VkaDxI1T8iCHRGVvFz4I0NBHuhYvGSxzHAl1Y3RHCUIs4NQm1_E0yMchTTWgSRywCuMYkNtB4ttvo')",
        }}
        aria-label="Futuristic data dashboard visualization with orange highlights"
      />
    </section>
  );
}
