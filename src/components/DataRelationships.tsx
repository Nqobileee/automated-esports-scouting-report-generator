export default function DataRelationships() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-black tracking-tight leading-tight">
          Data Relationships <br />
          <span className="text-[#ff6e00]">Evolved.</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Our platform doesn&apos;t just show stats; it maps the intricate
          relationships between playstyles, team chemistry, and map control.
          Real-time sync ensures you&apos;re never scouting based on
          yesterday&apos;s meta.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">
            <span className="material-symbols-outlined text-[#ff6e00]">
              globe
            </span>
            <span className="font-bold">Global Coverage</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">
            <span className="material-symbols-outlined text-[#ff6e00]">
              sync
            </span>
            <span className="font-bold">Live Integration</span>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] rounded-3xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff6e00]/10 via-transparent to-transparent"></div>
        <div className="z-10 grid grid-cols-3 gap-8">
          <div className="size-4 bg-[#ff6e00] rounded-full animate-pulse glow-orange-strong"></div>
          <div className="size-4 bg-[#ff6e00]/40 rounded-full"></div>
          <div className="size-4 bg-[#ff6e00] rounded-full animate-pulse glow-orange-strong"></div>
          <div className="size-4 bg-[#ff6e00]/40 rounded-full"></div>
          <div className="size-4 bg-[#ff6e00] rounded-full animate-pulse glow-orange-strong"></div>
          <div className="size-4 bg-[#ff6e00]/40 rounded-full"></div>
        </div>
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
        >
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
