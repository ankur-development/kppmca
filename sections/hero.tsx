import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center w-full bg-grid bg-[#F7FAFC] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col justify-center max-w-lg lg:max-w-xl mb-6 lg:mb-0 lg:pr-8">
        <div className="py-4">
          <div className="bg-accent w-fit px-3 py-1 text-xs sm:text-sm rounded-full">
            Trusted Chartered Accountant Firm
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-3 leading-tight">
            Financial Expertise <br />
            <span className="text-primary">You Can Trust</span>
          </h1>
          <p className="max-w-md mt-3 text-sm sm:text-base">
            We help businesses navigate financial complexities with precision,
            integrity, and strategic insight.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
          <button className="bg-primary py-2 sm:py-3 px-6 sm:px-8 rounded-full text-background font-medium border-accent text-sm sm:text-base">
            Schedule a Consultation
          </button>
          <button className="bg-background py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium border-muted border text-sm sm:text-base">
            Explore Our Services
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex relative">
            <div className="size-8 sm:size-10 border-2 bg-accent rounded-full" />
            <div className="size-8 sm:size-10 border-2 bg-accent rounded-full -translate-x-3 sm:-translate-x-4" />
            <div className="size-8 sm:size-10 border-2 bg-accent rounded-full -translate-x-6 sm:-translate-x-8" />
          </div>
          <p className="ml-2 sm:ml-3 -translate-x-2 sm:-translate-x-4 text-sm sm:text-base">
            500+ satisfied clients
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[50vh] lg:max-w-[75vh]">
        <div className="aspect-[4/3] bg-card p-3 sm:p-4 rounded-2xl">
          <img
            src="/hero.png"
            alt="hero"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
