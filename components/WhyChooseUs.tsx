import { Banknote, HeartHandshake, Zap, ShieldCheck, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: Banknote,
    title: "Truly Affordable",
    desc: "Plans starting at $25/month with flexible payment options in both USD and local currency — so no Zimbabwean family is left behind.",
  },
  {
    icon: HeartHandshake,
    title: "Care You Can Trust",
    desc: "We treat every member like family. Our dedicated support team is always ready to assist you with claims, queries, and healthcare guidance.",
  },
  {
    icon: Zap,
    title: "Fast Claims Processing",
    desc: "Submit claims easily and receive reimbursements quickly. No unnecessary red tape — just fast, fair processing when you need it most.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Cover",
    desc: "From chronic conditions to emergency hospitalisation, dental and optical — we cover the full spectrum of your healthcare needs.",
  },
  {
    icon: Globe,
    title: "Nationwide Access",
    desc: "Access healthcare through our growing network of providers across Zimbabwe, with branches in Harare, Bulawayo, and Kadoma.",
  },
  {
    icon: Users,
    title: "For Everyone",
    desc: "Plans tailored for individuals, families, SMEs, and corporates — no minimum membership requirements and no age restrictions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1A1A2E] px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            Why GenFin
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Thousands Choose{" "}
            <span className="gradient-text">GenFin</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are more than a medical aid fund — we are your partner in
            health, committed to your wellbeing every single day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group card-hover bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-[#F5A623]/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/15 group-hover:bg-[#F5A623] flex items-center justify-center mb-5 transition-colors duration-300">
                <reason.icon
                  size={24}
                  className="text-[#F5A623] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
