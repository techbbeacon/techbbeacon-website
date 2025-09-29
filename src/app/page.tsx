"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      {/* <section id="packages">
        <Packages />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section> */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
