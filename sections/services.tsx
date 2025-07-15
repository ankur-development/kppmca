import React from "react";
import {
  FileText,
  Shield,
  FileCheck,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Tax Planning & Filing",
    description:
      "Efficient and accurate tax strategies to minimize liability and ensure timely filings.",
    icon: FileText,
  },
  {
    title: "Audit & Assurance",
    description:
      "Comprehensive internal and external audit services to ensure compliance and transparency.",
    icon: Shield,
  },
  {
    title: "GST Compliance",
    description:
      "End-to-end GST filing, advisory, and reconciliation services to stay ahead of regulations.",
    icon: FileCheck,
  },
  {
    title: "Bookkeeping & Accounting",
    description:
      "Accurate and timely bookkeeping to help you make informed business decisions.",
    icon: BookOpen,
  },
  {
    title: "Company Registration",
    description:
      "Hassle-free company formation, legal documentation, and registration services.",
    icon: Briefcase,
  },
  {
    title: "Payroll Management",
    description:
      "Streamlined payroll processing with statutory compliance and employee benefits tracking.",
    icon: Users,
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-8 sm:py-12 md:py-16 w-full flex flex-col items-center justify-evenly bg-muted/25 bg-dot px-4 sm:px-6 lg:px-8">
      <div className="py-4 max-w-4xl text-center flex flex-col items-center mb-6">
        <div className="w-fit bg-accent text-primary px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
          How We Serve
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-3">
          Comprehensive Financial and Compliance Services Tailored to Your Needs
        </h1>
        <p className="max-w-xl mt-3 text-sm sm:text-base">
          We offer a wide range of services designed to address all aspects of your financial and Complinace requirements with precision, expertise and promptness.
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl flex flex-col bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex flex-col items-start gap-6 relative z-10">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl transform group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Elegant hover indicator */}
                {/* <div className="mt-4 w-full">
                  <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
