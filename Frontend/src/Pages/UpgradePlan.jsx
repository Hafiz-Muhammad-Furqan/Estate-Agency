import { useState } from "react";
import { ChartNoAxesCombined, Check, HelpCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    credits: "1,000 Credits/Year",
    features: [
      "Features & functionality",
      "Basic Plans",
      "Basic Web & API Rate Limits",
      "Basic Support (Community)",
      "Basic Docs",
      "Basic API Access",
      "Standard Reporting & Analytics",
      "Basic Security",
      "Basic Monitoring",
    ],
  },
  {
    name: "Basic",
    price: "$49",
    credits: "40,000 Credits/Year",
    features: [
      "Everything in Free, plus:",
      "Basic Credits Monthly at a Time",
      "Basic Web & Power Tools",
      "Job Duration",
      "Premium & Mail-in Support",
      "Basic Web & API",
      "Mail Automation",
      "Basic Data & Analytics",
      "Advanced Web & Email",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    credits: "100,000 Credits/Year",
    features: [
      "Everything in Basic, plus:",
      "No Resource Limit",
      "Advanced Statistics",
      "Advanced Reports",
      "Real-time Analytics",
      "Advanced Data",
      "Custom Reporting",
      "Data Resources",
      "Task Schedule",
    ],
  },
  {
    name: "Organization",
    price: "$119",
    credits: "180,000 Credits/Year",
    features: [
      "Everything in Professional plus:",
      "Multiple Users & Teams",
      "Organization Tools",
      "Full Organization",
      "Custom Analytics",
      "Organization Reports",
      "Large-scale Analytics",
      "Advanced Reports",
      "Organization Tools",
    ],
  },
];

function App() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [users, setUsers] = useState(1);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111827]">
            Upgrade Your Plan
          </h1>
          <p className="mt-2 text-xl text-black font-semibold">
            Pricing for one-person startups to Fortune 500 enterprises.
          </p>
        </div>

        <div className="mt-8 flex  justify-center items-center">
          <div className="inline-flex items-center bg-[#F3F4F6] rounded-full p-1">
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  billingCycle === "annual"
                    ? "bg-blue-400 text-[#111827] shadow-sm"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
            >
              upgrade plan done Annual Billing
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 
                ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#111827] shadow-sm"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border-b border-black py-6">
          <h2 className="text-lg font-medium text-[#111827]">
            Edition and Users
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold ">
              How many users do you have?
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setUsers((prev) => Math.max(1, prev - 1))}
                className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-gray-800 outline-none   hover:text-[#111827] transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center text-[#111827]">{users}</span>
              <button
                onClick={() => setUsers((prev) => prev + 1)}
                className="w-7 h-7 cursor-pointer flex items-center justify-center rounded-full border border-gray-800 outline-none  hover:text-[#111827] transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 py-10">
          <ChartNoAxesCombined />
          <p className="text-sm font-semibold">
            Paying teams book 183% more meetings
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#111827]">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#111827]">
                    {plan.price}
                  </span>
                  <span className="text-[#6B7280] text-sm ml-1">
                    per seat/month
                  </span>
                </div>
                <div className="mt-1.5 flex items-center text-sm text-[#6B7280]">
                  <span>{plan.credits}</span>
                  <HelpCircle className="w-4 h-4 ml-1 text-[#9CA3AF]" />
                </div>
                <button
                  className={`mt-5 w-full py-2 px-4 rounded text-sm font-medium transition-colors duration-200 
                    ${
                      plan.name === "Free"
                        ? "bg-gray-400 hover:bg-gray-300 text-white"
                        : "bg-[#d8e003] hover:bg-[#22c550] text-white"
                    }`}
                >
                  {plan.name === "Free" ? "Try for free" : "Start free trial"}
                </button>
              </div>
              <div className="border-t border-[#E5E7EB] p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#6B7280] leading-5">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
