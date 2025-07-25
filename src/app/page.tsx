import Image from "next/image";
import { FaUserTie, FaCogs, FaLaptopCode, FaRegBuilding } from "react-icons/fa";
import StickyDiscoveryCallButton from "./StickyDiscoveryCallButton";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import VisualsSection from "@/components/VisualsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-10 px-4 text-center" style={{ background: '#F7F5F2' }}>
        <Image
          src="/Logo.png"
          alt="OpsAlpha Logo"
          width={320}
          height={320}
          className="mb-6 animate-fade-in"
          priority
        />
        <div className="relative z-10 flex flex-col items-center max-w-2xl w-full mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-3" style={{ color: '#26221A', letterSpacing: '-0.04em', fontFamily: 'Poppins, Inter, Arial, sans-serif' }}>
            OpsAlpha VA
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-8" style={{ color: '#8D7B5A', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Empowering Professionals. Elevating Businesses. Every Day.
          </p>
          <StickyDiscoveryCallButton />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Visuals Section */}
      <VisualsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Services Section */}
      <section id="services" className="w-full max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-8 text-center animate-fade-in">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Virtual Executive Assistance */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up">
            <FaUserTie className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Virtual Executive Assistance</h3>
            <p className="text-[#3A4256] text-sm">Inbox, calendar, travel, research & high-touch support for leaders who need leverage.</p>
          </div>
          {/* Salesforce Admin & Optimization */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            <FaCogs className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Salesforce Admin & Optimization</h3>
            <p className="text-[#3A4256] text-sm">Customize, maintain, and optimize your Salesforce instance for maximum efficiency.</p>
          </div>
          {/* Project-Based Web Development */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up" style={{ animationDelay: '200ms' }}>
            <FaLaptopCode className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Web Development</h3>
            <p className="text-[#3A4256] text-sm">Custom websites, landing pages, and web applications built to your specifications.</p>
          </div>
          {/* Admin & Back Office Solutions */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <FaRegBuilding className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Admin & Back Office</h3>
            <p className="text-[#3A4256] text-sm">Data entry, document management, and operational support to keep your business running smoothly.</p>
          </div>
        </div>
      </section>

      {/* Why OpsAlpha Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-6 animate-fade-in">Why Choose OpsAlpha?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-md p-6 text-left animate-slide-in-up">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FaUserTie className="text-2xl text-[#2E5AAC]" />
              </div>
              <h4 className="text-lg font-bold text-[#1C2331] mb-2">Operator-Level Mindset</h4>
              <p className="text-[#3A4256] text-sm">We think like owners and act with initiative—delivering outcomes, not just tasks.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left animate-slide-in-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FaCogs className="text-2xl text-[#2E5AAC]" />
              </div>
              <h4 className="text-lg font-bold text-[#1C2331] mb-2">Fluent in Modern Tools</h4>
              <p className="text-[#3A4256] text-sm">From Salesforce to Notion, we&apos;re power users who help you get the most from your stack.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FaLaptopCode className="text-2xl text-[#2E5AAC]" />
              </div>
              <h4 className="text-lg font-bold text-[#1C2331] mb-2">Trusted by Leaders</h4>
              <p className="text-[#3A4256] text-sm">Startups, consultants, and established businesses trust us to run their ops with excellence.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <FaRegBuilding className="text-2xl text-[#2E5AAC]" />
              </div>
              <h4 className="text-lg font-bold text-[#1C2331] mb-2">Outcome-Focused</h4>
              <p className="text-[#3A4256] text-sm">We design, document, and optimize systems—so you can scale with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#1C2331] to-[#2E5AAC] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Book a free discovery call to see how we can help streamline your operations and free up your time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/opsalphava/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Schedule Your Free Call
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
