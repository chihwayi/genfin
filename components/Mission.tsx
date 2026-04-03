import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Affordable coverage for individuals and families",
  "Access to 500+ healthcare providers across Zimbabwe",
  "Fast, hassle-free claims processing",
  "No minimum membership numbers required",
  "Comprehensive cover from day-to-day care to hospitalisation",
];

export default function Mission() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            About GenFin
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">
            Healthcare Without the{" "}
            <span className="gradient-text">Financial Burden</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F5A623]/20 to-transparent rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/genfin.jpg"
                alt="GenFin Medical Aid - Quality Healthcare Coverage"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1A1A2E] text-white rounded-2xl p-5 shadow-2xl max-w-xs hidden md:block">
              <p className="text-[#F5A623] font-bold text-2xl">Register Today</p>
              <p className="text-gray-300 text-sm mt-1">
                Call +263 766 323 131
              </p>
              <p className="text-gray-300 text-sm">
                WhatsApp +263 774 988 661
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <blockquote className="text-2xl font-medium text-[#1A1A2E] leading-relaxed border-l-4 border-[#F5A623] pl-6">
              "Our mission is to provide quality healthcare coverage that is{" "}
              <strong className="text-[#F5A623]">
                affordable and accessible
              </strong>
              , ensuring you receive the care you need without any added
              financial burden."
            </blockquote>

            <p className="text-gray-600 leading-relaxed text-lg">
              GenFin Medical Aid Fund is committed to transforming healthcare
              access in Zimbabwe by offering flexible, inclusive medical aid
              solutions for individuals, families, and corporates — regardless
              of their budget.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#F5A623] mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5A623] text-white font-semibold hover:bg-[#D4891A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Our Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
