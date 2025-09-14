import {
  FaBroom,
  FaHeart,
  FaChild,
  FaTintSlash,
  FaLeaf,
} from "react-icons/fa";

import heroImage from "../assets/endurance.webp"; // Image for product section

export default function HomeHero() {
  return (
    <div className="w-full">

      {/* ======= Background Video Section ======= */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./public/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

        {/* Centered Branding Text (optional) */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center px-4">
            Welcome to EVARA
          </h1>
        </div>
      </section>

      {/* ======= Main Product Section ======= */}
      <section className="relative bg-[#f5f1ec] z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Left Side - Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="Cleaning carpet"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Text & Icons */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
            <h4 className="text-sm font-semibold text-gray-700 tracking-wider mb-2">
              INTRODUCING
            </h4>
            <h2 className="text-5xl font-serif text-[#5f3c2d] font-bold leading-tight mb-2">
              ENDURANCE
            </h2>
            <p className="text-md tracking-wider uppercase text-[#8a6c54] mb-4">
              Spill-Safe Technology
            </p>
            <p className="text-gray-700 mb-6 text-sm md:text-base">
              High-quality fabrics that blend performance, luxury, and conscious living.
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
              <div className="flex flex-col items-center text-xs">
                <FaTintSlash className="text-[#5f3c2d] text-xl mb-1" />
                <span className="font-semibold">Stain Resistant</span>
              </div>
              <div className="flex flex-col items-center text-xs">
                <FaBroom className="text-[#5f3c2d] text-xl mb-1" />
                <span className="font-semibold">Easy To Clean</span>
              </div>
              <div className="flex flex-col items-center text-xs">
                <FaHeart className="text-[#5f3c2d] text-xl mb-1" />
                <span className="font-semibold text-center">Low Maintenance</span>
              </div>
              <div className="flex flex-col items-center text-xs">
                <FaChild className="text-[#5f3c2d] text-xl mb-1" />
                <span className="font-semibold text-center">Child & Pet Friendly</span>
              </div>
              <div className="flex flex-col items-center text-xs">
                <FaLeaf className="text-[#5f3c2d] text-xl mb-1" />
                <span className="font-semibold">Resilient</span>
              </div>
            </div>

            {/* Explore Button */}
            <button className="bg-[#5f3c2d] text-white px-6 py-2 rounded-md hover:bg-[#4e3124] transition font-semibold tracking-wide text-sm">
              EXPLORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
