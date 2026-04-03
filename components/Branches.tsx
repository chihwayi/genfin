import { MapPin, Phone, MessageCircle } from "lucide-react";

const branches = [
  {
    city: "Harare",
    subtitle: "Head Office",
    address: ["89 Fife Avenue", "10 Hughson Wynd", "Mount Pleasant, Harare"],
    phone: "+263 766 323 131",
    whatsapp: "+263 774 988 661",
    color: "from-[#F5A623] to-[#D4891A]",
  },
  {
    city: "Bulawayo",
    subtitle: "Regional Branch",
    address: [
      "308 & 309 Charter House",
      "Cnr Fort Street &",
      "Leopold Takawira Ave, Bulawayo",
    ],
    phone: "+263 766 323 131",
    whatsapp: "+263 774 988 661",
    color: "from-[#5C5C6E] to-[#3a3a4a]",
  },
  {
    city: "Kadoma",
    subtitle: "Regional Branch",
    address: [
      "Room 2 & 3",
      "James Beattie Building",
      "Robert Mugabe Way, Kadoma",
    ],
    phone: "+263 766 323 131",
    whatsapp: "+263 774 988 661",
    color: "from-[#1A1A2E] to-[#16213E]",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            Our Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Find a Branch{" "}
            <span className="gradient-text">Near You</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We are present in Zimbabwe&apos;s major cities to serve you better.
            Walk in or call us — we are always ready to help.
          </p>
        </div>

        {/* Branch cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, i) => (
            <div
              key={i}
              className="card-hover rounded-3xl overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${branch.color} p-8`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {branch.city}
                    </h3>
                    <p className="text-white/70 text-sm">{branch.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white p-8 space-y-5">
                {/* Address */}
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-2">
                    Address
                  </p>
                  {branch.address.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Phone */}
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-2">
                    Call Us
                  </p>
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-[#1A1A2E] hover:text-[#F5A623] transition-colors text-sm font-medium"
                  >
                    <Phone size={15} />
                    {branch.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="text-xs font-semibold text-[#F5A623] uppercase tracking-wider mb-2">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${branch.whatsapp.replace(/[\s+]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors text-sm font-medium"
                  >
                    <MessageCircle size={15} />
                    {branch.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
