import Image from "next/image";
import { FaBolt, FaEnvelopeOpenText, FaCalendarCheck, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/10 py-16 px-4 text-center shadow-lg rounded-xl mx-auto max-w-2xl mt-8 animate-fade-in">
        <Image
          src="/logo.jpeg"
          alt="Assistly VA Logo"
          width={120}
          height={120}
          priority
          className="mx-auto mb-6 rounded-full shadow-md animate-pop-in"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight animate-slide-in-up">
  Delegate Smarter. Build Faster.
</h1>
<p className="text-xl md:text-2xl text-gray-800 mb-8 animate-fade-in delay-100">
  From inbox wrangling to CRM sorcery — we handle the grind, you grow the biz.
</p>
        <a
          href="#plans"
          className="inline-block px-10 py-4 bg-[var(--primary)] text-white text-xl font-bold rounded-full shadow-lg hover:bg-[var(--secondary)] transition active:scale-95 animate-pop-in"
        >
          Let’s Work
        </a>
      </section>

      {/* Plans Section */}
      <section
        id="plans"
        className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center animate-fade-in delay-200"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-8 text-center flex items-center gap-2 animate-slide-in-up">
          <FaBolt className="inline text-[var(--primary)]" /> Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
          {/* Full-Time Plan Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[var(--primary)] flex flex-col items-center transition hover:scale-105 hover:shadow-2xl animate-pop-in">
            <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
              <FaCalendarCheck className="text-[var(--primary)]" /> Full-Time
            </h3>
            <div className="text-4xl font-extrabold text-[var(--primary)] mb-1">$9<span className="text-lg font-medium">/hr</span></div>
            <div className="text-gray-500 mb-4">40 hrs/week · 160 hrs/month</div>
            <ul className="text-gray-700 text-left mb-6 space-y-2 w-full max-w-xs">
              <li>✔ Dedicated VA, always on it</li>
              <li>✔ Calls, inbox, and calendar wrangling</li>
              <li>✔ Daily updates in your DMs</li>
              <li>✔ Admin, light social & more</li>
            </ul>
            <div className="text-lg font-semibold text-gray-800 mb-2">Total: $1,440/month</div>
            <button className="mt-auto px-6 py-2 bg-[var(--primary)] text-white rounded-full font-bold shadow hover:bg-[var(--secondary)] transition">Book a Free Chat</button>
          </div>
          {/* Part-Time Plan Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[var(--secondary)] flex flex-col items-center transition hover:scale-105 hover:shadow-2xl animate-pop-in delay-100">
            <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
              <FaEnvelopeOpenText className="text-[var(--secondary)]" /> Part-Time
            </h3>
            <div className="text-4xl font-extrabold text-[var(--primary)] mb-1">$10<span className="text-lg font-medium">/hr</span></div>
            <div className="text-gray-500 mb-4">20 hrs/week · 80 hrs/month</div>
            <ul className="text-gray-700 text-left mb-6 space-y-2 w-full max-w-xs">
              <li>✔ Phone, CRM & calendar magic</li>
              <li>✔ Quick updates, zero drama</li>
              <li>✔ Flexible onboarding</li>
            </ul>
            <div className="text-lg font-semibold text-gray-800 mb-2">Total: $800/month</div>
            <button className="mt-auto px-6 py-2 bg-[var(--secondary)] text-white rounded-full font-bold shadow hover:bg-[var(--primary)] transition">Book a Free Chat</button>
          </div>
        </div>
      </section>
    </>
  );
}
