import { FaUserTie, FaCogs, FaLaptopCode, FaRegBuilding, FaCalendarAlt, FaChartBar, FaSearch } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaUserTie className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Virtual Executive Assistance',
      description: 'Inbox, calendar, travel, research & high-touch support for leaders who need leverage.'
    },
    {
      icon: <FaCogs className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Salesforce Admin & Optimization',
      description: 'Certified Salesforce administration, automation, reporting & CRM optimization for your business.'
    },
    {
      icon: <FaLaptopCode className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Project-Based Web Development',
      description: 'Websites, dashboards, automations & integrations built for operational efficiency.'
    },
    {
      icon: <FaRegBuilding className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Admin & Back Office Solutions',
      description: 'Billing, docs, HR, research, process & admin handled with precision and care.'
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Calendar & Inbox Management',
      description: 'We tame your schedule and declutter your inbox, ensuring you never miss important communications or appointments.'
    },
    {
      icon: <FaChartBar className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Data Entry & Reporting',
      description: 'Accurate, on-time, and formatted the way you like it. We ensure your data is always organized and accessible.'
    },
    {
      icon: <FaSearch className="text-5xl text-[#2E5AAC] mb-4" />,
      title: 'Research & Presentation Support',
      description: 'Give us the topic, we&apos;ll deliver insights. Professional research and presentation support to make you shine.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1C2331] to-[#2E5AAC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive virtual assistance solutions tailored to help your business thrive. 
            We handle the details so you can focus on growth.
          </p>
        </div>
      </div>

      {/* Unified Luxury Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C2331] mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-[#2E5AAC] mx-auto mb-8"></div>
          <p className="text-xl text-[#3A4256] max-w-3xl mx-auto">
            Explore our full suite of core and professional services, delivered with a luxury, white-glove approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1C2331] mb-3">{service.title}</h3>
              <p className="text-[#3A4256] text-base mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1C2331] to-[#2E5AAC] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can support your business goals with our professional services.
          </p>
          <a
            href="https://calendly.com/opsalphava/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2E5AAC] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
