import { FaUserTie, FaCogs, FaLaptopCode, FaRegBuilding, FaCalendarAlt, FaChartBar, FaSearch } from 'react-icons/fa';

export default function ServicesPage() {
  const coreServices = [
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
    }
  ];

  const supportServices = [
    {
      icon: <FaCalendarAlt className="text-4xl text-[#2E5AAC] mb-4" />,
      title: 'Calendar & Inbox Management',
      description: 'We tame your schedule and declutter your inbox, ensuring you never miss important communications or appointments.'
    },
    {
      icon: <FaChartBar className="text-4xl text-[#2E5AAC] mb-4" />,
      title: 'Data Entry & Reporting',
      description: 'Accurate, on-time, and formatted the way you like it. We ensure your data is always organized and accessible.'
    },
    {
      icon: <FaSearch className="text-4xl text-[#2E5AAC] mb-4" />,
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

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1C2331] mb-4">Core Services</h2>
          <div className="w-20 h-1 bg-[#2E5AAC] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1C2331] mb-3">{service.title}</h3>
              <p className="text-[#3A4256] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1C2331] mb-4">Professional Support Services</h2>
            <p className="text-[#3A4256] max-w-3xl mx-auto">
              Additional specialized services to support your business operations and executive needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-[#2E5AAC]"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C2331] mb-3 text-center">{service.title}</h3>
                <p className="text-[#3A4256] text-sm text-center">{service.description}</p>
              </div>
            ))}
          </div>
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
