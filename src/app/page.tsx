import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-white/90 py-16 px-4 text-center shadow-lg rounded-xl mx-auto max-w-2xl mt-8">
        <Image
          src="/logo.jpeg"
          alt="Assistly VA Logo"
          width={180}
          height={180}
          priority
          className="mx-auto mb-6 rounded-full shadow-md"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">Reliable Virtual Assistant Support for Your Business</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">Let us lighten your workload with professional, dedicated virtual assistants.</p>
        <a
          href="#plans"
          className="inline-block px-8 py-3 bg-[var(--primary)] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[var(--secondary)] transition"
        >
          Start Free Trial
        </a>
      </section>

      {/* Plans Section */}
      <section
        id="plans"
        className="w-full max-w-5xl mx-auto py-16 px-4 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--secondary)] mb-8 text-center">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
          {/* Full-Time Plan Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[var(--primary)] flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[var(--secondary)] mb-2">Full-Time Plan</h3>
            <div className="text-3xl font-bold text-[var(--primary)] mb-1">$9<span className="text-lg font-medium">/hr</span></div>
            <div className="text-gray-500 mb-4">40 hrs/week · 160 hrs/month</div>
            <ul className="text-gray-700 text-left mb-6 space-y-2 w-full max-w-xs">
              <li>✔ Dedicated Virtual Assistant</li>
              <li>✔ Phone calls, appointments, inbox mgmt</li>
              <li>✔ Daily task updates</li>
              <li>✔ Admin & light social tasks</li>
            </ul>
            <div className="text-lg font-semibold text-gray-800 mb-2">Total: $1,440/month</div>
            <button className="mt-auto px-6 py-2 bg-[var(--primary)] text-white rounded-full font-semibold shadow hover:bg-[var(--secondary)] transition">Start Free Trial</button>
          </div>
          {/* Part-Time Plan Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border-t-8 border-[var(--secondary)] flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-[var(--secondary)] mb-2">Part-Time Plan</h3>
            <div className="text-3xl font-bold text-[var(--primary)] mb-1">$10<span className="text-lg font-medium">/hr</span></div>
            <div className="text-gray-500 mb-4">20 hrs/week · 80 hrs/month</div>
            <ul className="text-gray-700 text-left mb-6 space-y-2 w-full max-w-xs">
              <li>✔ Phone handling & calendar work</li>
              <li>✔ Light CRM support</li>
              <li>✔ Weekly or daily summaries</li>
              <li>✔ Flexible onboarding</li>
            </ul>
            <div className="text-lg font-semibold text-gray-800 mb-2">Total: $800/month</div>
            <button className="mt-auto px-6 py-2 bg-[var(--secondary)] text-white rounded-full font-semibold shadow hover:bg-[var(--primary)] transition">Start Free Trial</button>
          </div>
        </div>
      </section>
    </>
  );
}
