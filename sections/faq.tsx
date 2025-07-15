"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How will outsourcing of Accounting and Finance benefit the business?",
      answer:
        "Outsourcing accounting and finance reduces the time and effort required to manage in-house accounting personnel, allowing you to devote more resources to core business activities.",
    },
    {
      question: "Is there any option to use outsourcing for more than one CA firm?",
      answer:
        "A chartered accountant in practice can join multiple companies as a partner. However, they cannot become a partner in other firms or professions outside of their practice.",
    },
    {
      question: "What are the advantages of accounting services?",
      answer:
        "Effective accounting provides comprehensive insights into your company's financial health, enabling smarter business decisions with a clear view of your finances.",
    },
    {
      question: "How can accounting services help my business?",
      answer:
        "Bookkeeping and accounting services help track expenses, ensure accurate tax documentation, and provide a clear picture of your company's financial health.",
    },
    {
      question: "Which three accounting items are the most important for a business?",
      answer:
        "The top line (cash), accounts receivable, and short-term investments are considered critical components of a company's balance sheet, alongside assets, liabilities, and equity.",
    },
    {
      question: "What is financial accounting and what are its advantages?",
      answer:
        "Financial accounting meticulously tracks a company's financial transactions, summarizing revenue and expenditure in a Financial Statement of Accounts, providing a clear overview of business activities.",
    },
    {
      question: "Where would you find the best Chartered Accountants in Pune?",
      answer:
        "The best Chartered Accountants in Pune can be identified through a 50-Point Inspection, evaluating customer reviews, history, complaints, ratings, satisfaction, trust, pricing, and overall quality.",
    },
    {
      question: "Does India provide 'Double Taxation Relief'?",
      answer:
        "Yes, India offers double taxation relief under Section 91 of the Income Tax Act, 1961, for individuals taxed on the same income in India and a foreign country with a Double Taxation Avoidance Agreement.",
    },
    {
      question: "What are the different categories under which Income Tax is imposed?",
      answer:
        "The Income Tax Act categorizes taxable income into: Salaries, Profits from business or profession, Income from house property, Income from other sources, and Capital gains.",
    },
    {
      question: "What are the various forms of collection of Income Tax?",
      answer:
        "Income tax is collected through various methods, including Tax Deducted at Source (TDS), Tax Collected at Source (TCS), advance tax, and self-assessment tax.",
    },
  ];

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen py-8 w-full flex flex-col md:items-center  justify-center gap-8 px-4 md:px-8 bg-muted/25 bg-dot">
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
    </section>
  );
};

export default FAQ;
