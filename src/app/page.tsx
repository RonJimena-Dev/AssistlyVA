import Image from "next/image";
import { FaBolt, FaEnvelopeOpenText, FaCalendarCheck, FaChartLine, FaUserTie, FaCogs, FaLaptopCode, FaRegBuilding } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Logo */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-10 px-4 text-center" style={{ background: '#F7F5F2' }}>

        {/* Logo centered above brand name, no background overlays/parallax */}
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

          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#1C2331] text-white text-xl font-bold rounded-full shadow-lg hover:bg-[#0F172A] hover:text-[#E4E7EF] border-2 border-[#3A4256] transition active:scale-95 animate-pop-in"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-3xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-4 animate-fade-in">About OpsAlpha</h2>
        <p className="text-lg md:text-xl text-[#3A4256] mb-6 animate-slide-in-up">
          OpsAlpha is a high-performance operations and virtual assistant agency built for founders, consultants, and business leaders. We provide executive-level support, Salesforce administration, and operational systems design — so you can scale with confidence.
        </p>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-8 text-center animate-fade-in">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Virtual Executive Assistance */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up">
            <FaUserTie className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Virtual Executive Assistance</h3>
            <p className="text-[#3A4256] text-sm">Inbox, calendar, travel, research & high-touch support for leaders who need leverage.</p>
          </div>
          {/* Salesforce Admin & Optimization */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up delay-100">
            <FaCogs className="text-4xl text-[#2E5AAC] mb-3 group-hover:text-[#1C2331] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Salesforce Admin & Optimization</h3>
            <p className="text-[#3A4256] text-sm">Certified Salesforce administration, automation, reporting & CRM optimization for your business.</p>
          </div>
          {/* Project-Based Web Development */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up delay-200">
            <FaLaptopCode className="text-4xl text-[#1C2331] mb-3 group-hover:text-[#2E5AAC] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Project-Based Web Development</h3>
            <p className="text-[#3A4256] text-sm">Websites, dashboards, automations & integrations built for operational efficiency.</p>
          </div>
          {/* Admin & Back Office Solutions */}
          <div className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition group animate-slide-in-up delay-300">
            <FaRegBuilding className="text-4xl text-[#2E5AAC] mb-3 group-hover:text-[#1C2331] transition" />
            <h3 className="text-xl font-semibold text-[#1C2331] mb-2">Admin & Back Office Solutions</h3>
            <p className="text-[#3A4256] text-sm">Billing, docs, HR, research, process & admin handled with precision and care.</p>
          </div>
        </div>
      </section>

      {/* Why OpsAlpha Section */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-6 animate-fade-in">Why OpsAlpha?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 rounded-xl shadow p-6 animate-slide-in-up">
            <h4 className="text-lg font-bold text-[#2E5AAC] mb-2">Operator-level mindset, not task-takers</h4>
            <p className="text-[#3A4256] text-sm">We think like owners and act with initiative—delivering outcomes, not just tasks.</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow p-6 animate-slide-in-up delay-100">
            <h4 className="text-lg font-bold text-[#2E5AAC] mb-2">Fluent in high-performance tools & platforms</h4>
            <p className="text-[#3A4256] text-sm">From Salesforce to Notion, we’re power users who help you get the most from your stack.</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow p-6 animate-slide-in-up delay-200">
            <h4 className="text-lg font-bold text-[#2E5AAC] mb-2">Trusted by leaders across industries</h4>
            <p className="text-[#3A4256] text-sm">Startups, consultants, and established businesses trust us to run their ops with excellence.</p>
          </div>
          <div className="bg-white/80 rounded-xl shadow p-6 animate-slide-in-up delay-300">
            <h4 className="text-lg font-bold text-[#2E5AAC] mb-2">Systems-driven. Outcome-focused.</h4>
            <p className="text-[#3A4256] text-sm">We design, document, and optimize systems—so you can scale with confidence.</p>
          </div>
        </div>
      </section>

      {/* Founder Insight (Optional) */}
      <section className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <Image
            src="/vercel.svg"
            alt="Founder Headshot"
            width={80}
            height={80}
            className="rounded-full border-2 border-[#2E5AAC] shadow-lg mb-2"
          />
          <blockquote className="italic text-[#3A4256] text-lg md:text-xl max-w-xl">
            “OpsAlpha was built to empower leaders and teams to scale—without the operational drag. We’re your leverage, your operator, your edge.”
          </blockquote>
          <span className="font-bold text-[#1C2331] mt-2">Alex Founder, OpsAlpha VA</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-4 animate-fade-in">Ready to delegate with confidence?</h2>
        <p className="text-lg text-[#3A4256] mb-8 animate-slide-in-up">Let’s build your operational advantage.</p>
        <form className="flex flex-col gap-4 items-center bg-white rounded-xl shadow-lg p-8 mx-auto animate-slide-in-up border border-[#8D7B5A]" action="#" method="POST">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full max-w-xs px-4 py-2 rounded border border-[#8D7B5A] focus:border-[#2E5AAC] outline-none text-[#26221A] font-semibold placeholder-[#8D7B5A] bg-white shadow-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full max-w-xs px-4 py-2 rounded border border-[#8D7B5A] focus:border-[#2E5AAC] outline-none text-[#26221A] font-semibold placeholder-[#8D7B5A] bg-white shadow-sm"
          />
          <textarea
            name="message"
            required
            placeholder="How can we help you?"
            className="w-full max-w-xs px-4 py-2 rounded border border-[#8D7B5A] focus:border-[#2E5AAC] outline-none text-[#26221A] font-semibold placeholder-[#8D7B5A] bg-white shadow-sm"
            rows={4}
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 bg-[#2E5AAC] text-white font-bold rounded-full shadow hover:bg-[#1C2331] transition border border-[#8D7B5A]"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-sm text-[#6B7280] animate-fade-in">
          <p>“Great team—highly recommend for founders who want to scale!”</p>
          <p className="mt-2">— Satisfied Client</p>
        </div>
      </section>
    </>
  );
}
