import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sampleReports = [
  {
    id: 1,
    teamName: "Cloud9",
    game: "League of Legends",
    date: "Jan 15, 2026",
    accuracy: 92,
    status: "Complete",
  },
  {
    id: 2,
    teamName: "Fnatic",
    game: "Valorant",
    date: "Jan 12, 2026",
    accuracy: 89,
    status: "Complete",
  },
  {
    id: 3,
    teamName: "T1",
    game: "League of Legends",
    date: "Jan 10, 2026",
    accuracy: 94,
    status: "Complete",
  },
  {
    id: 4,
    teamName: "Sentinels",
    game: "Valorant",
    date: "Jan 8, 2026",
    accuracy: 87,
    status: "Complete",
  },
  {
    id: 5,
    teamName: "G2 Esports",
    game: "CS2",
    date: "Jan 5, 2026",
    accuracy: 91,
    status: "Complete",
  },
  {
    id: 6,
    teamName: "Team Liquid",
    game: "Dota 2",
    date: "Jan 3, 2026",
    accuracy: 88,
    status: "Processing",
  },
];

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <section className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
            Scouting <span className="text-[#ff6e00]">Reports</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Access your generated scouting reports. Each report contains detailed
            analysis, player statistics, and strategic insights powered by our
            neural engines.
          </p>
        </section>

        {/* Filter Bar */}
        <section className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#ff6e00] focus:border-transparent text-gray-900"
              placeholder="Search reports..."
            />
          </div>
          <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-[#ff6e00]">
            <option>All Games</option>
            <option>League of Legends</option>
            <option>Valorant</option>
            <option>CS2</option>
            <option>Dota 2</option>
          </select>
          <button className="bg-[#ff6e00] text-white px-6 py-3 rounded-xl font-bold hover:glow-orange-strong transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            New Report
          </button>
        </section>

        {/* Reports Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleReports.map((report) => (
            <div
              key={report.id}
              className="bento-card p-6 rounded-3xl flex flex-col gap-4 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="bg-[#ff6e00]/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                    description
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    report.status === "Complete"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {report.status}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold">{report.teamName}</h3>
                <p className="text-gray-500 text-sm">{report.game}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    calendar_today
                  </span>
                  {report.date}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#ff6e00] text-lg">
                    verified
                  </span>
                  <span className="font-bold text-[#ff6e00]">
                    {report.accuracy}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Stats Summary */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card p-8 rounded-3xl text-center">
            <span className="material-symbols-outlined text-[#ff6e00] text-4xl mb-4">
              folder
            </span>
            <div className="text-4xl font-black">156</div>
            <p className="text-gray-500 mt-2">Total Reports Generated</p>
          </div>
          <div className="bento-card p-8 rounded-3xl text-center">
            <span className="material-symbols-outlined text-[#ff6e00] text-4xl mb-4">
              sports_esports
            </span>
            <div className="text-4xl font-black">12</div>
            <p className="text-gray-500 mt-2">Games Supported</p>
          </div>
          <div className="bento-card p-8 rounded-3xl text-center">
            <span className="material-symbols-outlined text-[#ff6e00] text-4xl mb-4">
              avg_pace
            </span>
            <div className="text-4xl font-black">2.4s</div>
            <p className="text-gray-500 mt-2">Avg. Generation Time</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
