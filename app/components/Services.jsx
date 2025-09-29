import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  const experiences = [
    {
      title: "Marketing Strategist",
      period: "April 2025 – Present",
      company: "Macins Group of Companies - UAE",
      icon: assets.project_icon,
      borderColor: "border-blue-400",
      hoverColor: "hover:bg-blue-50",
      responsibilities: [
        "Spearheading B2B marketing initiatives for retail and commercial clients",
        "Created and executed pitch decks for high-end clients",
        "Designed social media campaigns and managed content calendars",
        "Coordinated branding and event support materials",
      ],
    },
    {
      title: "Marketing & Brand Specialist",
      period: "March 2024 – Present",
      company: "AM Health Hub - UAE",
      icon: assets.mobile_icon,
      borderColor: "border-green-400",
      hoverColor: "hover:bg-green-50",
      responsibilities: [
        "Managed website design, content updates, and SEO",
        "Created and published blogs on medical tourism",
        "Planned and delivered podcast episodes",
        "Designed social media posts and digital marketing campaigns",
      ],
    },
    {
      title: "Marketing & Events Associate",
      period: "Aug 2023 – April 2025",
      company: "Aries Group of Companies – India & UAE",
      icon: assets.graphics_icon,
      borderColor: "border-purple-400",
      hoverColor: "hover:bg-purple-50",
      responsibilities: [
        "Customer Service & Client Relations management",
        "Communication & Digital Support for social media",
        "Managed personal branding initiatives",
        "Event & Service Coordination",
      ],
    },
    {
      title: "Marketing and Events Intern",
      period: "May 2023 – Jun 2023",
      company: "Male' Water & Sewerage Company Pvt. Ltd",
      icon: assets.edu_icon,
      borderColor: "border-orange-400",
      hoverColor: "hover:bg-orange-50",
      responsibilities: [
        "Marketing campaign execution",
        "Market research and consumer analysis",
        "Content creation and corporate event planning",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="w-full px-4 sm:px-[8%] md:px-[12%] py-6 sm:py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">
        My Journey
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        Professional Experience
      </h2>

      <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 mt-4 sm:mt-5 text-sm sm:text-base">
        A dedicated marketing professional with experience in digital marketing,
        brand management, and event coordination
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-10">
        {experiences.map(
          (
            {
              title,
              period,
              company,
              responsibilities,
              icon,
              borderColor,
              hoverColor,
            },
            index
          ) => (
            <div
              key={index}
              className={`border-2 ${borderColor} rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 ${hoverColor} hover:[box-shadow:4px_4px_0_#000] sm:hover:[box-shadow:8px_8px_0_#000] hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 -mr-6 -mt-6 sm:-mr-8 sm:-mt-8 bg-gray-100 rounded-full opacity-20 group-hover:scale-150 duration-300" />

              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className={`p-2 sm:p-3 rounded-lg ${hoverColor} border ${borderColor}`}
                >
                  <Image src={icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-green-600 font-medium">
                {period}
              </p>
              <p className="text-sm sm:text-md text-gray-700 italic mb-4 sm:mb-6">
                {company}
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-green-500 mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
// TODO: Consider renaming the file to Experience.jsx to match its new purpose
