import { Users, MapPin, Building2, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Members Covered",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Branches Nationwide",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Healthcare Providers",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-[#FFF8E7] hover:bg-[#F5A623] transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/20 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                <stat.icon
                  size={26}
                  className="text-[#F5A623] group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-3xl font-bold text-[#1A1A2E] group-hover:text-white transition-colors">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-white/80 mt-1 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
