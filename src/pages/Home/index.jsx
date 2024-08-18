import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import Client from "../../components/Client";
import Subnav from "../../components/Subnav";
import DevSection from "../../components/DevSection";
import IntegrateSection from "../../components/IntegrateSection";
import Faq from "../../components/Faq";
import Getstarted from "../../components/Getstarted";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import ServiceSection from "../../components/ServiceSection";
import ConnectEmail from "../../components/ConnectEmail";
import InterviewSection from "../../components/InterviewSection";

export default function Home() {
  return (
    <div className="sticky scroll-smooth">
      <Navbar />
      <div className="relative">
        <Hero />
        <Client />
        <ServiceSection />
        <Subnav />
        <DevSection />
        <IntegrateSection />
        <InterviewSection />
        <Testimonials />
        <Faq />
        <ConnectEmail />
        <Getstarted />
        <Footer />
      </div>
    </div>
  );
}
