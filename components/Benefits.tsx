import {
  Stethoscope,
  Hospital,
  SmilePlus,
  Eye,
  Pill,
  Baby,
  Ambulance,
  FlaskConical,
  Activity,
} from "lucide-react";

const benefits = [
  {
    icon: Stethoscope,
    title: "GP & Specialist Visits",
    desc: "Access to a wide network of general practitioners and medical specialists across Zimbabwe.",
  },
  {
    icon: Hospital,
    title: "Hospitalisation",
    desc: "Comprehensive in-patient cover at private and government hospitals, depending on your plan.",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    desc: "24/7 emergency medical assistance and ambulance services to ensure you are never left stranded.",
  },
  {
    icon: Pill,
    title: "Chronic Medication",
    desc: "Unlimited supply of registered chronic medication for conditions such as diabetes, hypertension, and more.",
  },
  {
    icon: Baby,
    title: "Maternity Benefits",
    desc: "Full coverage for prenatal care, delivery, and newborn care, giving your family the best start.",
  },
  {
    icon: SmilePlus,
    title: "Dental Care",
    desc: "Preventive and restorative dental services including check-ups, fillings, crowns, and more.",
  },
  {
    icon: Eye,
    title: "Optical Cover",
    desc: "Annual eye tests, prescription lenses, frames, and contact lenses for clear, healthy vision.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Tests",
    desc: "Full coverage for laboratory tests, X-rays, MRI, CT scans, and other diagnostic imaging.",
  },
  {
    icon: Activity,
    title: "Allied Health Services",
    desc: "Physiotherapy, occupational therapy, speech therapy, clinical psychology, and more.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            What&apos;s Covered
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Comprehensive Benefits{" "}
            <span className="gradient-text">You Can Count On</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From routine check-ups to emergency care, GenFin has you covered
            every step of the way.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8E7] group-hover:bg-[#F5A623] flex items-center justify-center mb-5 transition-colors duration-300">
                <benefit.icon
                  size={24}
                  className="text-[#F5A623] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
