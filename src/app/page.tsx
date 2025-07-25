import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaCogs, FaLaptopCode, FaRegBuilding, FaArrowRight } from "react-icons/fa";
import StickyDiscoveryCallButton from "../../components/StickyDiscoveryCallButton";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import VisualsSection from "@/components/VisualsSection";
import Footer from "@/components/Footer";

// Hero Section Component
const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-10 px-4 text-center bg-[#F7F5F2]">
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
    <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mx-auto px-4">
      <div className="mb-8">
        <Image
          src="/Logo.png"
          alt="OpsAlpha Logo"
          width={280}
          height={280}
          className="mx-auto animate-fade-in"
          priority
        />
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#1C2331] font-poppins">
        Elevate Your Business with Expert Virtual Support
      </h1>
      <p className="text-xl text-[#3A4256] mb-10 max-w-3xl">
        Professional virtual assistants helping founders, startups, and consultants scale their operations efficiently.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
        <a
          href="https://calendly.com/opsalphava/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#2E5AAC] text-white font-semibold rounded-full hover:bg-[#1C2331] transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Book a Free Consultation</span>
          <FaArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#services"
          className="px-8 py-4 border-2 border-[#2E5AAC] text-[#2E5AAC] font-semibold rounded-full hover:bg-[#2E5AAC]/5 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Explore Services</span>
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
      <div className="animate-bounce">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14L12 21L5 14" stroke="#1C2331" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 8L12 15L5 8" stroke="#1C2331" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
);

// Services Overview Component
const ServicesOverview = () => (
  <section id="services" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-[#2E5AAC] mx-auto mb-8"></div>
        <p className="text-xl text-[#3A4256] max-w-3xl mx-auto">
          Comprehensive solutions designed to streamline your business operations and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaUserTie className="text-5xl text-[#2E5AAC] mb-4" />,
            title: 'Virtual Executive Assistance',
            description: 'High-touch support for leaders who need leverage.'
          },
          {
            icon: <FaCogs className="text-5xl text-[#2E5AAC] mb-4" />,
            title: 'Salesforce Solutions',
            description: 'Certified administration and optimization.'
          },
          {
            icon: <FaLaptopCode className="text-5xl text-[#2E5AAC] mb-4" />,
            title: 'Web Development',
            description: 'Custom solutions for your digital presence.'
          },
          {
            icon: <FaRegBuilding className="text-5xl text-[#2E5AAC] mb-4" />,
            title: 'Back Office',
            description: 'Comprehensive administrative support.'
          }
        ].map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1C2331] mb-3">{service.title}</h3>
            <p className="text-[#3A4256] text-sm mb-4">{service.description}</p>
            <Link 
              href="/services"
              className="text-[#2E5AAC] text-sm font-medium hover:underline inline-flex items-center"
            >
              Learn more <FaArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2E5AAC] hover:bg-[#1C2331] transition-colors duration-200"
        >
          View All Services
        </Link>
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = () => (
  <section className="bg-gradient-to-r from-[#1C2331] to-[#2E5AAC] text-white py-20">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Let&apos;s discuss how our virtual assistance services can help you achieve your business goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://calendly.com/opsalphava/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-[#2E5AAC] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Schedule a Call</span>
          <FaArrowRight className="h-4 w-4" />
        </a>
        <Link
          href="/contact"
          className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <StickyDiscoveryCallButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        <TestimonialsSection />
        <PricingSection />
        <VisualsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
