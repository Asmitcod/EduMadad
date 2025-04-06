import React, { useState } from 'react';
import { HandHeart, Briefcase, ChevronDown, ChevronUp, ArrowRight, Users, Building, Clock, Award, ExternalLink } from 'lucide-react';

const ProgramCard = ({ icon: Icon, title, description, details, isExpanded, toggleExpand }) => (
  <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 rounded-md bg-gradient-to-r from-eduBlue-500/20 to-eduTeal-500/20 flex items-center justify-center mb-4">
      <Icon className="text-primary" size={24} />
    </div>
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <button onClick={toggleExpand} className="p-1 rounded-full hover:bg-gray-200">
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
    </div>
    <p className="text-muted-foreground mb-4">{description}</p>
    
    {isExpanded && (
      <div className="mt-4 border-t pt-4">
        {details}
      </div>
    )}
    
    {!isExpanded && (
      <button 
        onClick={toggleExpand}
        className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center"
      >
        Learn More <ChevronDown size={16} className="ml-1" />
      </button>
    )}
  </div>
);

const ExternalLinkCard = ({ name, website }) => (
  <a 
    href={website} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gray-50 p-2 rounded flex items-center justify-between hover:bg-gray-100 transition-colors"
  >
    <span>{name}</span>
    <ExternalLink size={14} className="text-gray-500" />
  </a>
);

const WhatWeOffer = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);
  
  const toggleExpand = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  const ngoPartners = [
    { name: "Pratham Education Foundation", website: "https://www.pratham.org" },
    { name: "Goonj", website: "https://goonj.org" },
    { name: "Akshaya Patra Foundation", website: "https://www.akshayapatra.org" },
    { name: "CRY - Child Rights and You", website: "https://www.cry.org" },
    { name: "Teach For India", website: "https://www.teachforindia.org" }
  ];

  const corporatePartners = [
    { name: "Tata Consultancy Services", website: "https://www.tcs.com" },
    { name: "Infosys", website: "https://www.infosys.com" },
    { name: "Wipro", website: "https://www.wipro.com" },
    { name: "HDFC Bank", website: "https://www.hdfcbank.com" },
    { name: "Reliance Industries", website: "https://www.ril.com" }
  ];

  const programs = [
    {
      icon: HandHeart,
      title: "NGO Support Program",
      description: "Partially repay your educational loans through dedicated service with partner non-governmental organizations across India.",
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">How It Works</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Users size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Qualify & Apply</p>
                  <p className="text-sm text-gray-600">Complete your education and apply through your EduMadad dashboard</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Building size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Choose an NGO</p>
                  <p className="text-sm text-gray-600">Select from our network of 100+ verified NGOs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Clock size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Service Commitment</p>
                  <p className="text-sm text-gray-600">Commit to 1-3 years of service based on your loan amount</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Award size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Loan Forgiveness</p>
                  <p className="text-sm text-gray-600">Receive 20-50% total loan forgiveness based on service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Program Benefits</h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Gain valuable professional experience in the social impact sector</li>
              <li>Make a meaningful contribution to communities across India</li>
              <li>Reduce your educational loan burden significantly</li>
              <li>Build a professional network in the development sector</li>
              <li>Receive mentorship from experienced professionals</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Partner NGOs</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black">
  {ngoPartners.map((ngo, index) => (
    <ExternalLinkCard key={index} name={ngo.name} website={ngo.website} />
  ))}
</div>

          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">FAQ</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">Can I apply while still studying?</p>
                <p className="text-sm text-gray-600">The program is primarily for graduates, but final-year students can apply for placements beginning after graduation.</p>
              </div>
              <div>
                <p className="font-medium text-sm">Is the loan forgiveness amount taxable?</p>
                <p className="text-sm text-gray-600">No, loan amounts forgiven through the NGO Support Program are not considered taxable income under current regulations.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Briefcase,
      title: "Internship-Based Repayment",
      description: "Connect with paid internships at corporate partners, with a portion of earnings automatically allocated toward loan repayment.",
      details: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">How It Works</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Users size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Apply Through Platform</p>
                  <p className="text-sm text-gray-600">Access our exclusive internship portal through your account</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Building size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Match with Opportunities</p>
                  <p className="text-sm text-gray-600">Get matched with internships based on your skills and goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Clock size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Earn While Learning</p>
                  <p className="text-sm text-gray-600">Complete part-time internships during studies or full-time opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-blue-100 p-1 rounded-full">
                  <Award size={16} className="text-blue-700" />
                </div>
                <div>
                  <p className="font-medium text-sm">Automatic Repayment</p>
                  <p className="text-sm text-gray-600">30-40% of your stipend goes directly toward loan repayment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Program Benefits</h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Gain industry-relevant work experience while studying</li>
              <li>Build your professional resume with recognized companies</li>
              <li>Reduce loan burden during or immediately after studies</li>
              <li>Potential for pre-placement offers from partner companies</li>
              <li>Early start on loan repayment before graduation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Corporate Partners</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-black">
              {corporatePartners.map((corp, index) => (
                <ExternalLinkCard key={index} name={corp.name} website={corp.website} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">FAQ</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">How are internship stipends determined?</p>
                <p className="text-sm text-gray-600">Stipends are competitive with market rates and vary based on your field of study, the company, and position requirements.</p>
              </div>
              <div>
                <p className="font-medium text-sm">Will participating affect my studies?</p>
                <p className="text-sm text-gray-600">All internships are designed to complement academic schedules, with part-time options during semesters and full-time options during breaks.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Alternative Repayment Solutions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At EduMadad, we understand that traditional loan repayment methods may not work for everyone. 
          Our programs provide flexible alternatives that align with your career goals and social impact aspirations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <ProgramCard 
            key={index} 
            {...program} 
            isExpanded={expandedFeature === index}
            toggleExpand={() => toggleExpand(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;