import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sagar Jha",
      role: "Marketing Director, TechTrend Innovations",
      quote:
        "Their strategic marketing campaigns doubled our lead generation in just three months. The team’s expertise and dedication are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Torres",
      role: "Founder, Urban Eats",
      quote:
        "Thanks to their branding and analytics services, our customer engagement increased by 40%. They truly understand our business needs.",
      rating: 4,
    },
    {
      name: "Aisha Khan",
      role: "Operations Manager, HealthPlus Clinics",
      quote:
        "Their consulting services transformed our workflow efficiency. The customized approach made all the difference for our team.",
      rating: 5,
    },
  ];

  // Component to render star ratings
  const StarRating = ({ rating }) => {
    const maxStars = 5;
    return (
      <div
        className="flex items-center mb-4"
        aria-label={`Rating: ${rating} out of ${maxStars} stars`}
      >
        {[...Array(maxStars)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 w-full flex flex-col items-center justify-center ">
      <div className="py-4 max-w-4xl text-center flex flex-col items-center mb-12">
        <div className="w-fit bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
          What Our Clients Say
        </div>
        <h1 className="text-5xl mt-3 text-gray-800">
          Trusted by Businesses Across Industries
        </h1>
        <p className="max-w-xl mt-3 text-gray-600">
          Don’t just take our word for it. Here’s what our clients have to say
          about our services and impact.
        </p>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-card shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-sm italic text-gray-500 mb-2">
              {testimonial.role}
            </p>
            <StarRating rating={testimonial.rating} />
            <p className="text-gray-600 leading-relaxed">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
