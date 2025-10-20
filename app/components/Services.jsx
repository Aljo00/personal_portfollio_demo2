import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Comprehensive digital marketing strategies tailored to your business goals, including B2B marketing, content strategy, and campaign planning.",
      icon: assets.mobile_icon,
      color: "blue",
      tools: ["Content Strategy", "Campaign Planning", "B2B Marketing"],
    },
    {
      title: "Social Media Management",
      description:
        "End-to-end social media management including content creation, scheduling, and analytics across multiple platforms.",
      icon: assets.graphics_icon,
      color: "purple",
      tools: ["Content Creation", "Platform Management", "Analytics"],
    },
    {
      title: "Brand Development",
      description:
        "Strategic brand development and management services to enhance your market presence and engagement.",
      icon: assets.project_icon,
      color: "green",
      tools: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    },
    {
      title: "Event Management",
      description:
        "Comprehensive event planning and execution services, from corporate events to product launches.",
      icon: assets.edu_icon,
      color: "orange",
      tools: ["Event Planning", "Coordination", "Execution"],
    },
  ];

  return (
    <div
      id="work"
      className="w-full px-4 sm:px-[8%] md:px-[12%] py-6 sm:py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">
        What I Offer
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 mt-4 sm:mt-5 text-sm sm:text-base">
        Specialized marketing services tailored to elevate your brand and drive
        meaningful engagement
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 sm:p-8 hover:-translate-y-1 duration-300 cursor-pointer
              border-2 border-${service.color}-400 hover:bg-${service.color}-50
              group relative overflow-hidden`}
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-${service.color}-100 rounded-full opacity-20 
              group-hover:scale-150 duration-300`}
            />

            <div className="relative z-10">
              <div
                className={`w-12 h-12 rounded-lg bg-${service.color}-100 p-3 mb-4`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className={`text-xs sm:text-sm px-3 py-1 rounded-full bg-${service.color}-100 
                    text-${service.color}-700`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
// TODO: Consider renaming this file to Services.jsx to match its new purpose
