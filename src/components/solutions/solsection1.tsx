import { useState } from "react"
import {
  GraduationCap,
  HeartPulse,
  Building2,
  ShoppingCart,
  Factory,
  Users,
  Truck,
  Globe,
  Hotel,
  Hammer,
  Landmark,
  CarFront,
  Check
} from "lucide-react"

// Import all 12 ERP images
import SchoolERPImg from "../../assets/solutions/SchoolERP.png"
import HealthcareERPImg from "../../assets/solutions/HealthcareERP.png"
import RealEstateERPImg from "../../assets/solutions/RealEstateERP.png"
import RetailERPImg from "../../assets/solutions/RetailERP.png"
import ManufactureERPImg from "../../assets/solutions/ManufactureERP.png"
import PayrollERPImg from "../../assets/solutions/PayrollERP.png"
import SupplychainERPImg from "../../assets/solutions/SupplychainERP.png"
import EcommerceERPImg from "../../assets/solutions/EcommerceERP.png"
import HospitalityERPImg from "../../assets/solutions/HospitalityERP.png"
import ConstructionERPImg from "../../assets/solutions/ConstructionERP.png"
import FinanceERPImg from "../../assets/solutions/FinanceERP.png"
import AutomobileERPImg from "../../assets/solutions/AutomobileERP.png"

const erpCards = [
  {
    id: "school",
    name: "School ERP",
    icon: GraduationCap,
    image: SchoolERPImg,
    bgColor: "bg-blue-600",
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    lightBg: "bg-blue-50",
    description: "Complete education management for K-12 schools, colleges, and universities. Manage admissions, attendance, examinations, and more.",
    features: ["Student Info System", "Online Admissions", "Exam Management", "Fee Collection", "Transport Tracking", "Parent Portal"]
  },
  {
    id: "healthcare",
    name: "Healthcare ERP",
    icon: HeartPulse,
    image: HealthcareERPImg,
    bgColor: "bg-emerald-600",
    borderColor: "border-emerald-600",
    textColor: "text-emerald-600",
    lightBg: "bg-emerald-50",
    description: "Streamline patient care, clinic management, and hospital operations with our AI-powered healthcare ERP.",
    features: ["Patient Records", "Appointments", "Billing & Insurance", "Pharmacy Mgmt", "Lab Integration", "Doctor Portal"]
  },
  { id: "real-estate", name: "Real Estate ERP", icon: Building2, image: RealEstateERPImg, bgColor: "bg-indigo-600", borderColor: "border-indigo-600", textColor: "text-indigo-600", lightBg: "bg-indigo-50", description: "Comprehensive property management, lead tracking, and project monitoring for developers.", features: ["Property Listings", "Lead Management", "Tenant Portal", "Lease Tracking", "Construction", "Sales Dashboard"] },
  { id: "retail", name: "Retail & POS", icon: ShoppingCart, image: RetailERPImg, bgColor: "bg-rose-600", borderColor: "border-rose-600", textColor: "text-rose-600", lightBg: "bg-rose-50", description: "Omnichannel retail management with integrated POS, inventory tracking, and loyalty programs.", features: ["POS System", "Inventory Sync", "Loyalty Programs", "Supplier Mgmt", "Multi-store", "Sales Analytics"] },
  { id: "manufacturing", name: "Manufacturing ERP", icon: Factory, image: ManufactureERPImg, bgColor: "bg-orange-600", borderColor: "border-orange-600", textColor: "text-orange-600", lightBg: "bg-orange-50", description: "Optimize production processes, supply chain, and quality control with industrial-grade tools.", features: ["Production Planning", "Inventory Mgmt", "Quality Control", "Maintenance", "Supply Chain", "Worker Safety"] },
  { id: "hrms", name: "HRMS & Payroll", icon: Users, image: PayrollERPImg, bgColor: "bg-purple-600", borderColor: "border-purple-600", textColor: "text-purple-600", lightBg: "bg-purple-50", description: "Automate workforce management, payroll, and employee engagement with a modern HR platform.", features: ["Employee Database", "Payroll", "Leave Mgmt", "Performance", "Recruitment", "Self-Service"] },
  { id: "supply-chain", name: "Supply Chain", icon: Truck, image: SupplychainERPImg, bgColor: "bg-cyan-600", borderColor: "border-cyan-600", textColor: "text-cyan-600", lightBg: "bg-cyan-50", description: "End-to-end visibility and optimization for logistics, warehousing, and distribution networks.", features: ["Warehouse Mgmt", "Order Fulfilment", "Fleet Tracking", "Vendor Mgmt", "Route Opt", "Stock Audit"] },
  { id: "ecommerce", name: "E-commerce ERP", icon: Globe, image: EcommerceERPImg, bgColor: "bg-teal-600", borderColor: "border-teal-600", textColor: "text-teal-600", lightBg: "bg-teal-50", description: "Synchronize your online store with back-office operations for seamless fulfillment.", features: ["Inventory Sync", "Order Tracking", "Analytics", "Payment Int", "Shipping", "Multi-channel"] },
  { id: "hospitality", name: "Hospitality ERP", icon: Hotel, image: HospitalityERPImg, bgColor: "bg-amber-600", borderColor: "border-amber-600", textColor: "text-amber-600", lightBg: "bg-amber-50", description: "Manage hotel bookings, guest services, and back-office operations with a unified platform.", features: ["Room Booking", "Guest Feedback", "Housekeeping", "Billing", "Kitchen Mgmt", "Staff Scheduling"] },
  { id: "construction", name: "Construction ERP", icon: Hammer, image: ConstructionERPImg, bgColor: "bg-slate-600", borderColor: "border-slate-600", textColor: "text-slate-600", lightBg: "bg-slate-50", description: "Manage large-scale construction projects, resources, and finances with precision.", features: ["Project Costing", "Resource Alloc", "Site Progress", "Vendor Billing", "Safety Logs", "Compliance"] },
  { id: "financial", name: "Financial ERP", icon: Landmark, image: FinanceERPImg, bgColor: "bg-sky-600", borderColor: "border-sky-600", textColor: "text-sky-600", lightBg: "bg-sky-50", description: "Comprehensive financial management for banking, fintech, and accounting firms.", features: ["General Ledger", "Accounts Payable", "Asset Mgmt", "Tax Compliance", "Reporting", "Analytics"] },
  { id: "automotive", name: "Automotive ERP", icon: CarFront, image: AutomobileERPImg, bgColor: "bg-red-600", borderColor: "border-red-600", textColor: "text-red-600", lightBg: "bg-red-50", description: "Tailored solutions for automobile dealerships, service centers, and spare parts management.", features: ["Vehicle Inventory", "Service Scheduler", "Spare Parts", "Sales CRM", "Warranty", "Technician Log"] },
]

export default function SolSection1() {
  const [activeId, setActiveId] = useState("school")
  const activeERP = erpCards.find(card => card.id === activeId) || erpCards[0]
  const ActiveIcon = activeERP.icon

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ff] via-[#f5f8ff] to-white px-6 py-24 md:py-32 font-sans">

      {/* DOT GRID (match Home hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.08)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-60" />

      {/* BLUE MIST DECORATIONS (match Home hero) */}
      <div className="absolute top-20 -left-32 h-[600px] w-[600px] rounded-full bg-blue-400/30 blur-[120px]" />
      <div className="absolute bottom-20 -right-32 h-[700px] w-[700px] rounded-full bg-blue-300/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER (match Pricing typography) */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="mb-4 inline-flex rounded-full border border-slate-300/60 px-4 py-1.5 text-xs font-medium text-slate-500">
            SOLUTIONS
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-800">
            10+ Industry-Specific ERPs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-500">
            Every industry has unique challenges. That’s why we built specialized ERP
            modules powered by AI.
          </p>
        </div>

        {/* ERP SELECTOR GRID (6 in a row) */}
        <div className="mb-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {erpCards.map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group relative flex flex-col items-center justify-center rounded-2xl border-[2px] p-6 transition-all duration-300
                  ${isActive
                    ? `bg-white shadow-2xl ${item.borderColor} translate-y-[-4px]`
                    : "border-slate-100 bg-white/70 hover:border-blue-200 hover:bg-white"
                  }
                `}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300
                    ${isActive ? `${item.lightBg} ${item.textColor}` : "bg-slate-50 text-slate-400 group-hover:text-blue-400"}
                  `}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span
                  className={`text-[13px] font-bold tracking-tight transition-colors duration-300 text-center
                    ${isActive ? item.textColor : "text-slate-400 group-hover:text-slate-600"}
                  `}
                >
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* COMPACT BIG CARD */}
        <div className={`mx-auto max-w-6xl relative overflow-hidden rounded-[40px] border-[3px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ${activeERP.borderColor}`}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-12 md:min-h-[500px]">

            {/* CONTENT SIDE (Left on Desktop, Bottom on Mobile) */}
            <div className={`lg:col-span-7 p-8 md:p-14 flex flex-col justify-center space-y-6 md:space-y-8 transition-colors duration-500 ${activeERP.bgColor}`}>
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md shadow-inner">
                <ActiveIcon className="h-6 w-6 md:h-7 md:w-7" />
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white">
                  {activeERP.name}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-white/90 font-medium max-w-xl">
                  {activeERP.description}
                </p>
              </div>

              {/* FEATURES LIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
                {activeERP.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/95 font-bold text-sm md:text-[15px]">
                    <Check className="h-4 w-4 md:h-5 md:w-5 stroke-[4px]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 md:pt-6">
                <button className={`inline-flex items-center justify-center rounded-full bg-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-lg ${activeERP.textColor}`}>
                  Request Demo
                </button>
              </div>
            </div>

            {/* ILLUSTRATION SIDE (Right on Desktop, Top on Mobile) */}
            <div className="lg:col-span-5 bg-white p-8 md:p-14 flex items-center justify-center border-b md:border-b-0 md:border-l border-blue-100/50">
              <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px]">
                <img
                  src={activeERP.image}
                  alt={activeERP.name}
                  className="relative z-10 w-full drop-shadow-2xl transition-all duration-700 animate-in fade-in zoom-in slide-in-from-right-8"
                  key={activeId}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
