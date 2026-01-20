import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trendingTeams = [
  { rank: 1, name: "T1", game: "League of Legends", change: "+5", momentum: "up" },
  { rank: 2, name: "Sentinels", game: "Valorant", change: "+12", momentum: "up" },
  { rank: 3, name: "Team Spirit", game: "CS2", change: "-2", momentum: "down" },
  { rank: 4, name: "Cloud9", game: "Valorant", change: "+8", momentum: "up" },
  { rank: 5, name: "Fnatic", game: "League of Legends", change: "+3", momentum: "up" },
];

const metaShifts = [
  {
    title: "Controller Dominance",
    game: "Valorant",
    description: "Controller agents seeing 40% higher pick rate in pro play",
    impact: "High",
  },
  {
    title: "Early Aggression Meta",
    game: "League of Legends",
    description: "Teams prioritizing early game compositions with 65% win rate",
    impact: "Critical",
  },
  {
    title: "AWP Economy Shift",
    game: "CS2",
    description: "Teams investing in AWPs earlier, changing buy round dynamics",
    impact: "Medium",
  },
];

export default function TrendsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <section className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
            Esports <span className="text-[#ff6e00]">Trends</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Stay ahead of the competition with real-time insights into team
            performance, meta shifts, and emerging strategies across all major
            esports titles.
          </p>
        </section>

        {/* Live Stats Banner */}
        <section className="bg-[#181410] text-white p-8 rounded-3xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#ff6e00] p-3 rounded-xl">
                <span className="material-symbols-outlined text-3xl">
                  trending_up
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Live Analysis Active</h3>
                <p className="text-gray-400">
                  Monitoring 2,847 matches in real-time
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#ff6e00]">47</div>
                <p className="text-gray-400 text-sm">Live Matches</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#ff6e00]">12.5K</div>
                <p className="text-gray-400 text-sm">Players Tracked</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#ff6e00]">8</div>
                <p className="text-gray-400 text-sm">Games</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trending Teams */}
          <section className="lg:col-span-2 bento-card p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Trending Teams</h2>
                <p className="text-gray-500">Based on recent performance data</p>
              </div>
              <button className="text-[#ff6e00] font-medium flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="space-y-4">
              {trendingTeams.map((team) => (
                <div
                  key={team.rank}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#ff6e00]/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#181410] text-white rounded-xl flex items-center justify-center font-bold">
                      {team.rank}
                    </div>
                    <div>
                      <h3 className="font-bold">{team.name}</h3>
                      <p className="text-gray-500 text-sm">{team.game}</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1 font-bold ${
                      team.momentum === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {team.momentum === "up" ? "trending_up" : "trending_down"}
                    </span>
                    {team.change}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats */}
          <section className="space-y-6">
            <div className="bento-card p-6 rounded-3xl">
              <span className="material-symbols-outlined text-[#ff6e00] text-3xl mb-3">
                bolt
              </span>
              <h3 className="font-bold text-lg">Prediction Accuracy</h3>
              <div className="text-4xl font-black text-[#ff6e00] mt-2">89.2%</div>
              <p className="text-gray-500 text-sm mt-1">Last 7 days</p>
            </div>
            <div className="bento-card p-6 rounded-3xl">
              <span className="material-symbols-outlined text-[#ff6e00] text-3xl mb-3">
                update
              </span>
              <h3 className="font-bold text-lg">Data Freshness</h3>
              <div className="text-4xl font-black text-[#ff6e00] mt-2">2min</div>
              <p className="text-gray-500 text-sm mt-1">Average delay</p>
            </div>
            <div className="bento-card p-6 rounded-3xl bg-[#ff6e00] text-white border-none">
              <span className="material-symbols-outlined text-3xl mb-3">
                notifications
              </span>
              <h3 className="font-bold text-lg">Get Alerts</h3>
              <p className="text-white/80 text-sm mt-1">
                Subscribe to trend notifications
              </p>
              <button className="mt-4 bg-white text-[#ff6e00] px-4 py-2 rounded-lg font-bold text-sm hover:bg-white/90 transition-colors">
                Enable
              </button>
            </div>
          </section>
        </div>

        {/* Meta Shifts Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Meta Shifts</h2>
              <p className="text-gray-500">
                Significant changes detected in competitive strategies
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metaShifts.map((shift, index) => (
              <div key={index} className="bento-card p-6 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                    auto_awesome
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      shift.impact === "Critical"
                        ? "bg-red-100 text-red-700"
                        : shift.impact === "High"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {shift.impact}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{shift.title}</h3>
                <p className="text-[#ff6e00] text-sm font-medium mt-1">
                  {shift.game}
                </p>
                <p className="text-gray-500 text-sm mt-3">{shift.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Chart Placeholder */}
        <section className="bento-card p-8 rounded-3xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">Global Performance Index</h2>
              <p className="text-gray-500">
                Aggregated team performance across all regions
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#ff6e00] text-white text-sm font-bold">
                7D
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200 transition-colors">
                30D
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-bold hover:bg-gray-200 transition-colors">
                90D
              </button>
            </div>
          </div>
          <div className="h-64 w-full relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#ff6e00", stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#ff6e00", stopOpacity: 0 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M0 150 Q 100 100, 200 120 T 400 60 T 600 100 T 800 40"
                fill="none"
                stroke="#ff6e00"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M0 150 Q 100 100, 200 120 T 400 60 T 600 100 T 800 40 V 200 H 0 Z"
                fill="url(#chartGrad)"
              />
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
