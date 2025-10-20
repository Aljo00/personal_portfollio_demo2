import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const clientData = [
  {
    name: 'Macins Group of Companies',
    image: '/Work 1.jpg',
    overview: 'Managed B2B marketing initiatives for this UAE-based construction and interior design group. Developed pitch decks, designed social media campaigns, and coordinated branding materials to enhance their market presence.',
    instagramUrl: 'https://www.instagram.com/macins_groupofcompanies?igsh=MXVqMGVkaWd2cDMwZw%3D%3D',
    theme: {
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      hoverBg: 'hover:bg-blue-100',
    },
  },
  {
    name: 'AM Health Hub',
    image: '/Work 2.jpg',
    overview: 'Led marketing and brand strategy for this integrated healthcare provider in the UAE. Responsibilities included website management (design, content, SEO), blog creation, podcast production, and digital marketing campaigns.',
    instagramUrl: 'https://www.instagram.com/am_health_hub?igsh=NDdjODB1c294bDUx',
    theme: {
      border: 'border-green-500',
      bg: 'bg-green-50',
      text: 'text-green-700',
      hoverBg: 'hover:bg-green-100',
    },
  },
  {
    name: 'Aries Group / Sohan Roy',
    image: '/Work 3.jpg',
    overview: 'Handled marketing, events, and personal branding support for the Aries Group of Companies (India & UAE) and its Founder, Sohan Roy. Managed client relations, social media communication, and event coordination.',
    instagramUrl: 'https://www.instagram.com/roy_sohan?igsh=MTZxOGQ2ZTJicDdv',
    theme: {
      border: 'border-purple-500',
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      hoverBg: 'hover:bg-purple-100',
    },
  },
  {
        name: "Male' Water & Sewerage Company",
    image: '/Work 4.jpg',
    overview: 'Supported marketing efforts during an internship. Contributed to campaign execution, market research, content creation, and corporate event planning for the primary utility provider in Malé, Maldives.',
    instagramUrl: 'https://www.instagram.com/mwsc_mv/',
    theme: {
      border: 'border-cyan-500',
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      hoverBg: 'hover:bg-cyan-100',
    },
  },
];

const Works = () => {
  return (
    <div id="works" className="px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Client Showcase</h4>
      <h2 className="text-center text-5xl font-Ovo">My Works</h2>
      <p className="text-center max-w-2xl mx-auto mb-12 mt-5">
        A glimpse into some of the organizations I've collaborated with, contributing to their marketing success and brand growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {clientData.map((client, index) => (
                    <div
            key={index}
            className={`group rounded-xl border ${client.theme.border} bg-white shadow-2xl shadow-black/20 hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 p-6`}
          >
            <div className="flex items-center mb-4">
              <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 ${client.theme.border}`}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold ml-4 text-gray-800">{client.name}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{client.overview}</p>
            <a
              href={client.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${client.theme.border} ${client.theme.text} ${client.theme.bg} ${client.theme.hoverBg} transition-colors duration-300`}
            >
              <Instagram className="w-4 h-4" />
              <span>View Profile</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
