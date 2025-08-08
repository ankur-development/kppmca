"use client";

import React, { useState } from "react";

const industries = [
  {
    key: "government",
    title: "Government & Regulatory",
    items: [
      "RBI", "Mahavat", "Income Tax Department", "Ministry of Corporate Affairs",
      "ITAT Online", "CBEC", "GST", "DGFT", "Maharera", "ROFM",
      "MSME Udyog Aadhar", "Mahagst", "CA Governance", "ICAI", "PUNE ICAI", "UDIN",
    ],
  },
  {
    key: "finance",
    title: "Banking & Financial",
    items: [
      "HDFC Bank", "ICICI Bank", "State Bank of India", "Indian Overseas Bank",
      "Punjab National Bank", "IndusInd Bank", "Bank of India", "Bank of Maharashtra",
      "Canara Bank", "Union Bank of India",
    ],
  },
  {
    key: "media",
    title: "Media & Financial Markets",
    items: [
      "Times of India", "Indian Express", "Hindustan Times", "Economic Times",
      "Bombay Stock Exchange", "National Stock Exchange", "Moneycontrol",
    ],
  },
];

const IndustriesWeServe = () => {
  const [activeTab, setActiveTab] = useState("government");

  return (
    <section id="industries" className="py-16 px-4  w-full flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl mb-12">
        <div className="w-fit mx-auto bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
          Industries We Serve
        </div>
        <h1 className="text-4xl sm:text-5xl mt-4 font-bold text-gray-800">
          Trusted by Diverse Sectors
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          We offer tailored financial services across government bodies, banks, and media giants in India.
        </p>
      </div>

      {/* Custom Tab Buttons */}
      <div className="flex flex-wrap justify-center mb-8 rounded-2xl border overflow-hidden shadow-sm">
        {industries.map((industry) => (
          <button
            key={industry.key}
            onClick={() => setActiveTab(industry.key)}
            className={`px-4 py-2  text-sm sm:text-base font-medium transition-all ${
              activeTab === industry.key
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {industry.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {industries
          .find((industry) => industry.key === activeTab)
          ?.items.map((item, index) => (
            <div
              key={index}
              className="bg-muted text-gray-800 px-4 py-2 rounded-full text-sm text-center"
            >
              {item}
            </div>
          ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
