import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaCogs, FaLaptopCode, FaArrowRight, FaUsers, FaFileAlt, FaChartLine, FaShieldAlt, FaRocket, FaStar, FaCheckCircle, FaClock } from "react-icons/fa";
import StickyDiscoveryCallButton from "@/components/StickyDiscoveryCallButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { FramerMotionWrapper } from "@/components/FramerMotionWrapper";

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

// Combined Strategic Operations & Services Section
const StrategicOperations = () => (
  <section id="strategic-operations" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with About content */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[#2E5AAC] bg-[#2E5AAC]/10 rounded-full">
          Your Strategic Advantage
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C2331] mb-6 leading-tight">
          Your Strategic Operations Partner
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2E5AAC] to-[#4A90E2] mx-auto mb-8"></div>
        <p className="text-xl text-[#3A4256] leading-relaxed mb-12">
          OpsAlpha is a hand-picked team of trained virtual assistants helping founders, startups, and consultants scale without burnout. 
          With systemized workflows, AI tools, and personalized service — we don&apos;t just assist, we optimize.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#2E5AAC]/5 to-[#4A90E2]/5 rounded-2xl -z-10"></div>
        
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[#1C2331] mb-4">Our Premium Services</h3>
          <p className="text-lg text-[#3A4256] max-w-2xl mx-auto">
            We&apos;re not here to just assist — we optimize your backend so you can scale faster with less noise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <FramerMotionWrapper index={0}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-xl mr-5">
                  <FaUserTie className="text-2xl text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2331] mb-2">Virtual Executive Assistance</h3>
                  <p className="text-[#3A4256] mb-4">For founders, coaches, and consultants seeking premium support</p>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {["Calendar & inbox management", "Travel coordination", "Client follow-ups", "Personal admin & task routing"].map((item, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]">
                    <svg className="h-5 w-5 text-[#2E5AAC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FramerMotionWrapper>

          {/* Service 2 */}
          <FramerMotionWrapper index={1}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-xl mr-5">
                  <FaFileAlt className="text-2xl text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2331] mb-2">Back Office Support</h3>
                  <p className="text-[#3A4256] mb-4">For growing teams that need operational excellence</p>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {["Data entry & formatting", "Research & reports", "SOP documentation", "Presentation prep"].map((item, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]">
                    <svg className="h-5 w-5 text-[#2E5AAC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FramerMotionWrapper>

          {/* Service 3 */}
          <FramerMotionWrapper index={2}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-xl mr-5">
                  <FaCogs className="text-2xl text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2331] mb-2">Salesforce Admin Support</h3>
                  <p className="text-[#3A4256] mb-4">Certified expertise to streamline your CRM operations</p>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {["Data cleanup & deduplication", "Workflow automation", "Dashboard/report setup", "Pipeline optimization"].map((item, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]">
                    <svg className="h-5 w-5 text-[#2E5AAC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FramerMotionWrapper>

          {/* Service 4 */}
          <FramerMotionWrapper index={3}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-xl mr-5">
                  <FaLaptopCode className="text-2xl text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C2331] mb-2">Web Development</h3>
                  <p className="text-[#3A4256] mb-4">For startups needing lean, fast, and effective digital solutions</p>
                </div>
              </div>
              <ul className="space-y-3 pl-4">
                {["Landing pages", "CMS setup (Webflow, WordPress)", "Small-scale custom solutions", "Website maintenance & updates"].map((item, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]">
                    <svg className="h-5 w-5 text-[#2E5AAC] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FramerMotionWrapper>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaShieldAlt className="text-3xl text-[#2E5AAC] mx-auto mb-3" />, value: "100%", label: "Confidential" },
            { icon: <FaRocket className="text-3xl text-[#2E5AAC] mx-auto mb-3" />, value: "24/7", label: "Support" },
            { icon: <FaUsers className="text-3xl text-[#2E5AAC] mx-auto mb-3" />, value: "50+", label: "Happy Clients" },
            { icon: <FaChartLine className="text-3xl text-[#2E5AAC] mx-auto mb-3" />, value: "3x", label: "More Efficient" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#1C2331]">{stat.value}</div>
              <div className="text-[#3A4256]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Integration */}
        <div id="pricing" className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-4">Our Plans & Investment</h3>
            <p className="text-lg text-[#3A4256] max-w-2xl mx-auto">
              Simple, transparent pricing for every stage of your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Part Time Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-5 right-6 bg-[#2E5AAC] text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md"><FaStar /> Most Flexible</div>
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-[#1C2331] mb-1">Part Time</h4>
                <div className="text-3xl font-bold text-[#2E5AAC] mb-1">$10<span className="text-base font-normal text-[#64748B]">/hour</span></div>
                <div className="text-sm text-[#64748B] mb-2">Starts at</div>
                <p className="text-[#3A4256] mb-3">Perfect for growing businesses with variable needs</p>
              </div>
              <ul className="mb-8 w-full space-y-2">
                {['Dedicated Virtual Assistant','Email & Calendar Management','Data Entry & Reporting','Research & Presentation Support','Custom Workflows'].map((feature, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]"><FaCheckCircle className="text-[#2E5AAC] mr-2" />{feature}</li>
                ))}
                <li className="flex items-center text-[#3A4256]"><FaClock className="text-[#2E5AAC] mr-2" />Minimum 20 hours/month</li>
              </ul>
              <a href="https://calendly.com/opsalphava/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#2E5AAC] to-[#4A90E2] text-white font-semibold shadow-md hover:from-[#1C2331] hover:to-[#2E5AAC] transition-all duration-300">Get Started</a>
            </div>
            {/* Full Time Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#2E5AAC] flex flex-col items-center scale-105 z-10 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-5 right-6 bg-[#2E5AAC] text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md"><FaStar /> Best Value</div>
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-[#1C2331] mb-1">Full Time</h4>
                <div className="text-3xl font-bold text-[#2E5AAC] mb-1">$9<span className="text-base font-normal text-[#64748B]">/hour</span></div>
                <div className="text-sm text-[#64748B] mb-2">Starts at</div>
                <p className="text-[#3A4256] mb-3">Ideal for established businesses with consistent needs</p>
              </div>
              <ul className="mb-8 w-full space-y-2">
                {['Dedicated Virtual Assistant','Email & Calendar Management','Data Entry & Reporting','Research & Presentation Support','Custom Workflows'].map((feature, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]"><FaCheckCircle className="text-[#2E5AAC] mr-2" />{feature}</li>
                ))}
                <li className="flex items-center text-[#3A4256]"><FaClock className="text-[#2E5AAC] mr-2" />160+ hours/month</li>
              </ul>
              <a href="https://calendly.com/opsalphava/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#2E5AAC] to-[#4A90E2] text-white font-semibold shadow-md hover:from-[#1C2331] hover:to-[#2E5AAC] transition-all duration-300">Get Started</a>
            </div>
            {/* Custom Plan */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-[#1C2331] mb-1">Custom Solution</h4>
                <div className="text-3xl font-bold text-[#2E5AAC] mb-1">Contact Us</div>
                <div className="text-sm text-[#64748B] mb-2">Tailored for unique needs</div>
                <p className="text-[#3A4256] mb-3">Let&apos;s build a bespoke plan for your business</p>
              </div>
              <ul className="mb-8 w-full space-y-2">
                {['All features from Full Time','Specialized workflow automation','Industry-specific support','Advanced analytics & reporting'].map((feature, i) => (
                  <li key={i} className="flex items-center text-[#3A4256]"><FaCheckCircle className="text-[#2E5AAC] mr-2" />{feature}</li>
                ))}
              </ul>
              <a href="https://calendly.com/opsalphava/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#2E5AAC] to-[#4A90E2] text-white font-semibold shadow-md hover:from-[#1C2331] hover:to-[#2E5AAC] transition-all duration-300">Request Custom Quote</a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C2331] mb-6">Ready to Transform Your Operations?</h3>
          <p className="text-xl text-[#3A4256] max-w-2xl mx-auto mb-8">
            Schedule a free consultation and discover how we can help streamline your business.
          </p>
          <a
            href="https://calendly.com/opsalphava/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#2E5AAC] to-[#4A90E2] rounded-full hover:from-[#1C2331] hover:to-[#2E5AAC] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Free Strategy Session
            <FaArrowRight className="ml-3 h-4 w-4" />
          </a>
        </div>
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
        <StrategicOperations />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
