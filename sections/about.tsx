import React from "react";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-8 md:py-16 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="py-4 max-w-4xl text-center flex flex-col items-center mb-6">
        <div className="w-fit bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
          Who We Are
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl mt-3 text-balance">
          A Team of Financial Experts who work with Positive thinking and innovation at our attitude, excellence and learning at our aptitude to reach the altitude of client success.
        </h1>
        <p className="max-w-xl mt-3 text-sm sm:text-base">
          KPPM is a premier chartered accountancy firm dedicated to providing comprehensive financial solutions with integrity and precision.
        </p>
      </div>

      <div className="laborator container mx-auto flex flex-col  md:flex-row-reverse gap-6 md:gap-8">
        <div className="p-4 space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold">Our Mission</h2>
          <p className="max-w-xl text-sm sm:text-base">
           At KPPM, our mission is to empower businesses with strategic financial insights and solutions that drive growth, ensure compliance, and build lasting success. We combine technical expertise with personalized service to address the unique needs of each client.
          </p>

          <ul className="space-y-4 my-6">
            <li className="flex items-start">
              <div className="bg-accent p-2 rounded-full mr-3 mt-1">
                <ChevronRight size={16} className="" />
              </div>
              <div>
                <span className="font-medium">Industry Experience</span>:
                Founded by experienced professionals with over 75 years of collective expertise in financial services
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-accent p-2 rounded-full mr-3 mt-1">
                <ChevronRight size={16} className="" />
              </div>
              <div>
                <span className="font-medium">Professional Excellence</span>:
                Committed to the highest standards of integrity and financial accuracy with certifications from leading accounting bodies
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-accent p-2 rounded-full mr-3 mt-1">
                <ChevronRight size={16} className="" />
              </div>
              <div>
                <span className="font-medium">Client-Centered Approach</span>:
                Dedicated to building long-term relationships through responsive service and customized financial strategies
              </div>
            </li>
          </ul>

          <div className="pt-4">
            <a
              href="/team"
              className="inline-flex items-center text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:text-primary/90 hover:underline transition-all text-sm sm:text-base"
            >
              Meet Our Entire Team
              <ChevronRight size={16} className="ml-2" />
            </a>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center">
          <div className="w-full  bg-card p-4 rounded-2xl">
            <img
              src="/team.jpg"
              alt="hero"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
