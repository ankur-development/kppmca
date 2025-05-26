"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity. A standard website might take 4-8 weeks, while custom applications could take 3-6 months. We provide detailed timelines during consultation.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price, hourly, and subscription-based plans. Exact costs depend on project scope and requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer maintenance and support packages to ensure your product remains up-to-date and performs optimally after launch.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely, we specialize in integrating with existing systems and platforms, ensuring seamless compatibility and functionality.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-8 w-full flex flex-col md:items-center  justify-center gap-8 px-4 md:px-8 bg-muted/25 bg-dot">
      <div className="py-4 max-w-4xl text-center flex flex-col items-center mb-6 ">
        <div className="w-fit bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
          Frequently Asked Questions
        </div>
        <h1 className="text-5xl mt-3">Answers to Common Questions</h1>
        <p className="max-w-xl mt-3">
          Find quick answers to questions our clients frequently ask about our
          services and processes.
        </p>
      </div>
      <div className="w-full max-w-xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 ">
            <button
              className="w-full text-left p-3 sm:p-4 bg-transparent hover:bg-accent flex justify-between items-center transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium">
                {faq.question}
              </span>
              <span
                className="text-lg sm:text-xl transition-transform duration-300 transform"
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-48" : "max-h-0"
              }`}
            >
              <div className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
