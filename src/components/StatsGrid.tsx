export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Model Accuracy Card */}
      <div className="md:col-span-1 bento-card p-8 rounded-3xl flex flex-col justify-between">
        <div>
          <span className="material-symbols-outlined text-[#ff6e00] mb-4 text-3xl">
            verified
          </span>
          <h3 className="text-gray-500 font-medium">Model Accuracy</h3>
        </div>
        <div>
          <div className="text-6xl font-black text-[#ff6e00]">87%</div>
          <p className="text-green-600 font-bold flex items-center gap-1 mt-2">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>{" "}
            +4.2%
          </p>
        </div>
      </div>

      {/* AUC Dashboard Card */}
      <div className="md:col-span-2 bento-card p-8 rounded-3xl flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">AUC Dashboard</h3>
            <p className="text-gray-500 text-sm">
              Prediction confidence over time
            </p>
          </div>
          <div className="text-2xl font-black">0.92</div>
        </div>
        <div className="h-40 w-full relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ff6e00", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff6e00", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0 80 Q 50 20, 100 50 T 200 10 T 300 60 T 400 30"
              fill="none"
              stroke="#ff6e00"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M0 80 Q 50 20, 100 50 T 200 10 T 300 60 T 400 30 V 100 H 0 Z"
              fill="url(#grad1)"
              opacity="0.1"
            />
          </svg>
        </div>
      </div>

      {/* Training Data Card */}
      <div className="md:col-span-1 bento-card p-8 rounded-3xl flex flex-col justify-between bg-[#181410] text-white border-none">
        <div>
          <span className="material-symbols-outlined text-[#ff6e00] mb-4 text-3xl">
            groups
          </span>
          <h3 className="text-gray-400 font-medium">Training Data</h3>
        </div>
        <div>
          <div className="text-5xl font-black">50k+</div>
          <p className="text-gray-400 text-sm mt-2">
            Global pro players indexed
          </p>
        </div>
      </div>
    </section>
  );
}
