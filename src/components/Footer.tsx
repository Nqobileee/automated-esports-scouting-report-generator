import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#ff6e00] p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-lg">analytics</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Scoutly</span>
        </Link>

        <div className="flex flex-wrap gap-6 md:gap-8">
          <a
            href="https://github.com/Nqobileee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff6e00] transition-colors flex items-center gap-1 font-medium"
          >
            <span className="material-symbols-outlined text-xl">code</span>{" "}
            GitHub
          </a>
          <a
            href="https://nqobilemportfolio.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff6e00] transition-colors flex items-center gap-1 font-medium"
          >
            <span className="material-symbols-outlined text-xl">work</span>{" "}
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/nqobile-muyambiri-423522236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff6e00] transition-colors flex items-center gap-1 font-medium"
          >
            <span className="material-symbols-outlined text-xl">link</span>{" "}
            LinkedIn
          </a>
          <a
            href="mailto:nqobilemuyambiri@gmail.com"
            className="text-gray-500 hover:text-[#ff6e00] transition-colors flex items-center gap-1 font-medium"
          >
            <span className="material-symbols-outlined text-xl">mail</span>{" "}
            Email
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Scoutly AI. Built for the next meta.
        </p>
      </div>
    </footer>
  );
}
