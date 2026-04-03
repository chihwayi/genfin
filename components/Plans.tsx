import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$25",
    period: "/month",
    tagline: "Perfect for individuals",
    color: "border-gray-200",
    badge: null,
    features: [
      "GP consultations",
      "Emergency care",
      "Public hospital admission",
      "Basic prescription medication",
      "Annual dental check-up",
      "Basic optical cover",
    ],
    cta: "Get Essential",
    ctaStyle:
      "border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white",
  },
  {
    name: "Standard",
    price: "$45",
    period: "/month",
    tagline: "Great for families",
    color: "border-gray-200",
    badge: null,
    features: [
      "Everything in Essential",
      "Specialist consultations",
      "Private hospital access (Group B)",
      "Maternity benefits",
      "Chronic medication (unlimited)",
      "Allied health services",
      "Enhanced dental & optical",
    ],
    cta: "Get Standard",
    ctaStyle:
      "border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white",
  },
  {
    name: "Premium",
    price: "$75",
    period: "/month",
    tagline: "Most popular choice",
    color: "border-[#F5A623]",
    badge: "Most Popular",
    features: [
      "Everything in Standard",
      "Group A private hospitals",
      "Unlimited hospitalization days",
      "Advanced imaging & diagnostics",
      "Cancer treatment cover",
      "Regional cover (Southern Africa)",
      "Priority claims processing",
      "Wellness programme access",
    ],
    cta: "Get Premium",
    ctaStyle: "bg-[#F5A623] text-white hover:bg-[#D4891A]",
  },
  {
    name: "Executive",
    price: "$110",
    period: "/month",
    tagline: "Elite comprehensive cover",
    color: "border-gray-200",
    badge: null,
    features: [
      "Everything in Premium",
      "Top-tier hospital network",
      "International coverage",
      "Dedicated account manager",
      "No co-payments",
      "Full dental & orthodontics",
      "Full optical & contact lenses",
      "Corporate wellness support",
    ],
    cta: "Get Executive",
    ctaStyle:
      "border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            Medical Aid Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Choose the Plan That{" "}
            <span className="gradient-text">Fits Your Life</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Flexible plans designed for every budget. All plans cover both USD
            and local currency contributions.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative card-hover rounded-3xl border-2 ${plan.color} p-8 flex flex-col ${
                plan.badge ? "bg-[#1A1A2E] text-white shadow-2xl shadow-[#F5A623]/20 scale-105" : "bg-white"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#F5A623] text-white text-xs font-bold shadow-lg">
                  <Star size={12} fill="white" />
                  {plan.badge}
                </div>
              )}

              {/* Plan name & tagline */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    plan.badge ? "text-white" : "text-[#1A1A2E]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.badge ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.badge ? "text-[#F5A623]" : "text-[#1A1A2E]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${
                    plan.badge ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.badge ? "text-[#F5A623]" : "text-[#F5A623]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.badge ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-400 mt-10">
          * Prices shown are indicative. Contact us for exact contribution rates
          and family/corporate packages. Plans cover individuals — family rates
          available on request.
        </p>
      </div>
    </section>
  );
}
