import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A2E]"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]" />

      {/* Gold radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F5A623 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] text-sm font-medium">
              <Shield size={14} />
              <span>Trusted Medical Aid Coverage in Zimbabwe</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Your Health.{" "}
              <span className="gradient-text block">Our Priority.</span>
            </h1>

            {/* Mission */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Our mission is to provide{" "}
              <strong className="text-white">quality healthcare coverage</strong>{" "}
              that is affordable and accessible, ensuring you receive the care
              you need without any added financial burden.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#plans"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5A623] text-white font-semibold text-lg shadow-2xl hover:bg-[#D4891A] transition-all hover:-translate-y-1 hover:shadow-[#F5A623]/30"
              >
                Explore Plans
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+263766323131"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:border-[#F5A623] hover:text-[#F5A623] transition-all"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>

            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Call: +263 766 323 131
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                WhatsApp: +263 774 988 661
              </span>
            </div>
          </div>

          {/* Right: Hero image card */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative w-full max-w-lg">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F5A623]/30 to-[#D4891A]/20 rounded-3xl blur-xl" />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/genfin.jpg"
                  alt="GenFin Medical Aid - Serving Families Across Zimbabwe"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
