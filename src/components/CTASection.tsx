export default function CTASection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Enterprise Card */}
      <div className="bg-[#f8f9fa] p-10 rounded-3xl border border-gray-200 flex flex-col justify-between items-start space-y-8">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-[#ff6e00] border border-[#ff6e00]/20">
            Enterprise
          </div>
          <h3 className="text-3xl font-bold">Insurance for SME Esports</h3>
          <p className="text-gray-600">
            Our predictive trends help insurance providers assess risk in the
            competitive landscape with high precision.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black border border-gray-200 px-6 py-3 rounded-xl font-bold hover:border-[#ff6e00] transition-all">
          Download Trends{" "}
          <span className="material-symbols-outlined">download</span>
        </button>
      </div>

      {/* Scouts & Coaches Card */}
      <div className="bg-[#ff6e00] p-10 rounded-3xl text-white flex flex-col justify-between items-start space-y-8 glow-orange">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Scouts &amp; Coaches
          </div>
          <h3 className="text-3xl font-bold">Comprehensive Summary</h3>
          <p className="text-white/80">
            Get the full picture of team performance, player psychology, and
            strategic weaknesses in one document.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white text-[#ff6e00] px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all">
          Download Full Report{" "}
          <span className="material-symbols-outlined">description</span>
        </button>
      </div>
    </section>
  );
}
