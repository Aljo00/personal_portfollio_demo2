'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Experiences />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
