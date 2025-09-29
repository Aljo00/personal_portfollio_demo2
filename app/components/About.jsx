import {
  assets,
  educationData,
  skillsData,
  certificationsData,
} from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none lg:sticky lg:top-24 group">
          <Image
            src={assets.user_image}
            alt="user_image"
            className="w-full rounded-3xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a seasoned Marketing Strategist with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <div className="space-y-12">
            {/* Education Section */}
            <section className="transform transition-all duration-500 hover:translate-x-2">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
                <Image
                  src={assets.edu_icon}
                  alt="Education"
                  className="w-6 h-6"
                />
                EDUCATION
              </h3>
              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-500 pl-6 relative transform transition-all duration-500 hover:translate-x-2"
                  >
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {edu.degree}{" "}
                      <span className="text-purple-600">| {edu.year}</span>
                    </h4>
                    <p className="text-purple-600 italic mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
                <Image
                  src={assets.code_icon}
                  alt="Skills"
                  className="w-6 h-6"
                />
                SKILLS & CORE COMPETENCIES
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 p-4 rounded-lg hover:bg-purple-50 transform transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:4px_4px_0_#000] border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Image src={skill.icon} alt="Skill" className="w-4 h-4" />
                    </div>
                    {skill.text}
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
                <Image
                  src={assets.project_icon}
                  alt="Certifications"
                  className="w-6 h-6"
                />
                CERTIFICATIONS & ACHIEVEMENTS
              </h3>
              <ul className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 p-4 rounded-lg hover:bg-purple-50 transform transition-all duration-500 hover:-translate-x-2 hover:[box-shadow:4px_4px_0_#000] border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Image
                        src={cert.icon}
                        alt="Certification"
                        className="w-4 h-4"
                      />
                    </div>
                    {cert.text}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
