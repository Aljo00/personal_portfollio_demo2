import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/haritha-jyothi-130759250/",
      icon: Linkedin,
      color: "hover:border-blue-500 hover:text-blue-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/haritha.jyothi?utm_source=ig_web_button_share_sheet&igsh=MXczY2x4N25mcW10dw==",
      icon: Instagram,
      color: "hover:border-pink-500 hover:text-pink-500",
    },
    {
      name: "Twitter",
      url: "#",
      icon: Twitter,
      color: "hover:border-sky-500 hover:text-sky-500",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          {/* Logo and Info Section */}
          <div className="md:col-span-4 space-y-6">
            <Image
              src={assets.logo}
              alt="Haritha Seema Jyothi"
              className="w-50"
            />
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              A passionate marketing professional specializing in digital
              marketing, brand development, and strategic communications.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-11 h-11 rounded-lg border-2 border-gray-300 flex items-center justify-center
                      ${social.color} hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-3 md:ml-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a
                    href="mailto:haritha.sjyothi@gmail.com"
                    className="text-green-600 hover:text-green-700"
                  >
                    haritha.sjyothi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a
                    href="tel:+971503108094"
                    className="text-green-600 hover:text-green-700"
                  >
                    +971 503108094
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-800">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 py-6 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-600">
            © {currentYear} Haritha Seema Jyothi. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2 sm:mt-0">
            Designed with ❤️ for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
