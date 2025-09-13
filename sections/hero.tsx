import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row justify-center items-center w-full bg-grid bg-[#F7FAFC] px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <div className="flex flex-col justify-center max-w-lg lg:max-w-xl mb-6 lg:mb-0 lg:pr-8">
        <div className="py-4">
          <div className="bg-accent w-fit px-3 py-1 text-xs sm:text-sm rounded-full">
            Trusted Chartered Accountant Firm
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-3 leading-tight">
            Profeciency <br />
            <span className="text-primary">You Can Trust</span>
          </h1>
          <p className="max-w-md mt-3 text-sm sm:text-base">
            We help businesses navigate financial complexities with precision,
            integrity, and strategic insight, with ethical and quality
            professional advise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
          <a
            href="#contact"
            className="bg-primary py-2 sm:py-3 px-6 sm:px-8 rounded-full text-background font-medium border-accent text-sm sm:text-base text-center"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="bg-background py-2 sm:py-3 px-6 sm:px-8 rounded-full font-medium border-muted border text-sm sm:text-base text-center"
          >
            Explore Our Services
          </a>
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
    </section>
  );
};

export default Hero;
