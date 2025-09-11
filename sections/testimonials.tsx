"use client";

import React from "react";

const industries = [
  "Automobile",
  "Banking & Capital Markets",
  "Consultancy",
  "Retail & Consumer",
  "Transportation & Logistics",
  "Entertainment & Media",
  "Industrial Manufacturing",
  "Minerals and Metals",
  "Communications",
  "Engineering & Construction",
  "Agriculture",
  "Education & Training",
  "Information Technology",
  "Printing & Packaging",
  "Hospitality & Healthcare",
  "Real Estate"
];

const IndustriesWeServe = () => {
  return (
    <section id="clients" className="py-16 px-4 w-full flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl mb-12">
        <div className="w-fit mx-auto bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
          Industries We Serve
        </div>
        <h1 className="text-4xl sm:text-5xl mt-4 font-medium text-gray-800">
          Trusted by Diverse Sectors
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          We offer tailored financial services across multiple industries, providing expert solutions to meet the unique needs of each sector.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300 px-6 py-4 rounded-lg text-center group cursor-pointer"
          >
            <span className="text-gray-800 group-hover:text-primary transition-colors duration-300 font-medium text-sm sm:text-base">
              {industry}
            </span>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center max-w-2xl">
        <p className="text-gray-600 text-sm sm:text-base">
          Our comprehensive expertise spans across these diverse industries, ensuring we understand the specific challenges and opportunities in your sector.
        </p>
      </div>
    </section>
  );
};

export default IndustriesWeServe;