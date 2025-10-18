
import { FaHtml5, FaCss3Alt, FaPhp, FaFigma } from "react-icons/fa";

export default function WebCase() {
  return (
    <div className="min-h-screen bg-[#0c1a0c] text-white p-10">
        <h3>Website E-Commerce</h3>
        <h1>Smart Shop</h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Bagian Kiri */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-400">Work for</p>
            <p className="font-semibold">
              Binus Student Learning Community (BSLC)
            </p>
          </div>

          <div>
            <p className="text-gray-400">Year</p>
            <p className="font-semibold">2022</p>
          </div>

          <div>
            <p className="text-gray-400">Deliverables</p>
            <p className="font-semibold">Website</p>
          </div>

          <div>
            <p className="text-gray-400">Platform</p>
            <p className="font-semibold">Computer/Laptop</p>
            <p className="font-semibold">Phone (iPhone & Android)</p>
          </div>

          <div>
            <p className="text-gray-400">Technologies</p>
            <div className="flex gap-3 mt-2 flex-wrap">
              <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm">
                <FaHtml5 className="text-orange-600" /> HTML
              </span>
              <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm">
                <FaCss3Alt className="text-blue-600" /> CSS
              </span>
              <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm">
                <FaPhp className="text-purple-600" /> PHP
              </span>
              <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-full text-sm">
                <FaFigma className="text-pink-600" /> Figma
              </span>
            </div>
          </div>

          <div>
            <p className="text-gray-400">Project Showcase</p>
            <a
              href="#"
              className="inline-block mt-2 border border-gray-400 px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              View <span className="text-green-400 font-bold">Website ↗</span>
            </a>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Outline</h2>
          <p className="text-gray-200 leading-relaxed">
            The E-Learning Binus Student Learning Community (BSLC) platform
            supports 45,000+ active students at BINUS University, providing
            seamless access to a comprehensive library of 50+ educational modules
            across 10+ diverse majors. Purposefully designed to enhance learning
            efficiency, the platform offers curated lecture notes, in-depth video
            tutorials, and practical resources to foster academic excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
