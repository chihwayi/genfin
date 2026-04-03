import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Plans", href: "#plans" },
  { label: "Benefits", href: "#benefits" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

const branches = [
  { city: "Harare", address: "89 Fife Avenue, Mount Pleasant" },
  { city: "Bulawayo", address: "308 & 309 Charter House" },
  { city: "Kadoma", address: "Room 2&3 James Beattie Building" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#F5A623] to-[#D4891A] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to protect your health?
            </h3>
            <p className="text-white/80 mt-1">
              Join thousands of Zimbabweans already covered by GenFin.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+263766323131"
              className="px-8 py-3.5 rounded-full bg-white text-[#F5A623] font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/263774988661"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#1A1A2E] text-white font-bold hover:bg-[#16213E] transition-colors shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="relative w-44 h-14">
              <Image
                src="/logo.jpg"
                alt="GenFin Medical Aid Fund"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing quality, affordable, and accessible healthcare coverage
              for every Zimbabwean — without the financial burden.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Genfinmedicalaidfund"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://wa.me/263774988661"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Branches
            </h4>
            <ul className="space-y-4">
              {branches.map((b) => (
                <li key={b.city} className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{b.city}</p>
                    <p className="text-gray-400 text-xs">{b.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+263766323131"
                className="flex items-center gap-2 text-gray-400 hover:text-[#F5A623] transition-colors text-sm"
              >
                <Phone size={15} className="text-[#F5A623]" />
                +263 766 323 131
              </a>
              <a
                href="https://wa.me/263774988661"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle size={15} className="text-green-400" />
                +263 774 988 661
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={15} className="text-[#F5A623] mt-0.5 shrink-0" />
                89 Fife Avenue, 10 Hughson Wynd,
                <br />
                Mount Pleasant, Harare
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} GenFin Medical Aid Fund. All rights
            reserved.
          </p>
          <p>Registered Medical Aid Society · Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
