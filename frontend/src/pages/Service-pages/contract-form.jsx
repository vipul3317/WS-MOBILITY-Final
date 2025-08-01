import React, { useState } from 'react';

import './contract-form.css'; // Assuming you have a CSS file for styles
import Footer from '../../components/footer/Footers';
// import Header from '../../components/navbar';
// import Footer from '../../components/footer/Footers';
// Sample data - you can replace this with your actual data
const contractData = {
  serviceFaqs: [
    {
      question: "How it works?",
      answer: "Quick & Easy: Schedule online, we collect your car, deliver top service, and return it to you.",
      icon: "howItWorksIcon"
    },
    {
      question: "Contract Validity",
      answer: "Contracts are valid for the duration selected (1, 2, or 3 years) from purchase date.",
      icon: "validityIcon"
    },
    {
      question: "What's covered?",
      answer: "Covers scheduled maintenance, parts, labor & breakdown help",
      icon: "coverageIcon"
    },
    {
      question: "Rights & Responsibilities",
      answer: "Clear terms and conditions with transparent pricing and service guarantees.",
      icon: "rightsResponsibilitiesIcon"
    }
  ],
  contractPackages: [
    {
      year: "1 YEAR",
      minorService: "2",
      majorService: "1",
      startingPrice: "14999",
      icon: "package1Icon"
    },
    {
      year: "2 YEAR",
      minorService: "4",
      majorService: "2",
      startingPrice: "29999",
      icon: "package2Icon"
    },
    {
      year: "3 YEAR",
      minorService: "6",
      majorService: "3",
      startingPrice: "44999",
      icon: "package3Icon"
    }
  ]
};

const whyChooseUsData = [
  {
    title: "Trust & Reliability",
    description: "Over 10 years of experience with certified mechanics and guaranteed service quality.",
    icon: "trustIcon"
  },
  {
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for all your automotive needs and emergency support.",
    icon: "customerSupportIcon"
  },
  {
    title: "Transparency",
    description: "Clear pricing, no hidden costs, and detailed service reports for every job.",
    icon: "transparencyIcon"
  }
];

const footerData = {
  brands: [
    ["Toyota", "Honda", "Nissan", "Mazda"],
    ["BMW", "Mercedes", "Audi", "Volkswagen"],
    ["Ford", "Chevrolet", "Hyundai", "Kia"]
  ],
  businessDetails: [
    { text: "123 Service Street, Auto City, AC 12345", type: "address" },
    { text: "Phone: +1 (555) 123-4567" },
    { text: "Email: info@autoservice.com" }
  ],
  quickLinks: [
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
    { text: "Terms & Conditions", href: "/terms" }
  ],
  copyright: "© 2025 Auto Service Pro. All rights reserved.",
  socialMedia: {
    instagram: "https://instagram.com/autoservicepro",
    facebook: "https://facebook.com/autoservicepro"
  }
};

const ContractServicesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contract-services-page">

      {/* Header */}
    
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-contract-image">
              🚗 Premium Car Service Contract
            </div>
          </div>
          <div className="hero-text-and-form">
            <h2 className="hero-title"><span>Personalized Multi-Year Maintenance & Support Plans</span></h2>
            <p className="hero-subtitle">
             Hassle-free car care with 1, 2, or 3-year contracts.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="input-icon">👤</span>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <span className="input-icon">📞</span>
                <input 
                  type="text" 
                  name="phone"
                  placeholder="Enter Your Contact Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="lets-go-button">LET'S GO</button>
              <p className="or-call-us">or call us on <strong>9117031733</strong></p>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="features-grid-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <p className="feature-text">Free Pickup and Delivery</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <p className="feature-text">Up to 50% cheaper than agencies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <p className="feature-text">Vetted & qualified mechanics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <p className="feature-text">1 year parts & labour warranty</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section-container">
        <div className="packages-grid">
          {/* Left Column: Service Contract FAQs */}
          <div className="service-contract-faq-column">
            <h2 className="section-title">SERVICE CONTRACT</h2>
            {contractData.serviceFaqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-icon-wrapper">
                  <div className="faq-icon">❓</div>
                </div>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Middle: Phone and Tools Image */}
          <div className="middle-image-column">
            <div className="phone-tools-image">
              📱🔧
            </div>
          </div>

          {/* Right Column: Contract Packages */}
          <div className="contract-packages-column">
            <h2 className="section-title">CONTRACT PACKAGES</h2>
            {contractData.contractPackages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-icon-wrapper">
                  <div className="package-icon">{index + 1}</div>
                </div>
                <h3 className="package-year">{pkg.year}</h3>
                <ul className="service-list">
                  <li><span>{pkg.minorService}</span> X Minor Service</li>
                  <li><span>{pkg.majorService}</span> X Major Service</li>
                </ul>
                <p className="starting-price">
                  Starting from <span className="price-value">INR {pkg.startingPrice}</span>
                </p>
                <button className="buy-now-button">BUY NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2 className="why-choose-us-title">WHY CHOOSE US?</h2>
        <div className="benefits-grid">
          {whyChooseUsData.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <div className="benefit-icon">
                  {index === 0 ? '🤝' : index === 1 ? '🆘' : '👁️'}
                </div>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default ContractServicesPage;