
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-muted last:border-0">
    <button
      className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      onClick={onClick}
    >
      <h3 className={`font-medium text-lg ${isOpen ? 'text-primary' : ''}`}>{question}</h3>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-4' : 'max-h-0'
      }`}
    >
      <p className="text-muted-foreground">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);
  
  const faqItems = [
    {
      question: "What types of educational loans does EduMadad help with?",
      answer: "EduMadad provides assistance with various types of educational loans, including undergraduate, postgraduate, professional courses, and international education loans. We work with multiple lenders to ensure you find options that match your specific educational and financial needs."
    },
    {
      question: "How does the AI Repayment Plan Advisor work?",
      answer: "Our AI Repayment Plan Advisor uses machine learning algorithms to analyze your educational path, expected career trajectory, and projected income to create a personalized repayment strategy. It considers factors like grace periods, income-based repayment options, and loan forgiveness opportunities to provide a plan that aligns with your future financial situation."
    },
    {
      question: "What documents do I need to apply for an educational loan?",
      answer: "Typically, you'll need identity proof, address proof, academic records, admission letter from your institution, income proof of parents/guardians (if applicable), and collateral documents (for secured loans). Our eligibility checker will provide a detailed list based on your specific circumstances and the lender's requirements."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "The approval timeline varies by lender, but typically ranges from 7-21 days. Unsecured loans under certain amounts may have faster approval. EduMadad provides real-time application tracking and updates to keep you informed throughout the process."
    },
    {
      question: "Can international students use EduMadad's services?",
      answer: "Yes, EduMadad supports international students seeking to study abroad. We provide guidance on international education loans, currency considerations, and connect you with lenders who specialize in financing international education."
    },
    {
      question: "Are there any fees for using EduMadad's services?",
      answer: "EduMadad's basic services like eligibility checks, EMI calculations, and educational resources are completely free. We may offer premium advisory services for complex cases, but these are clearly marked and always optional."
    },
    {
      question: "What interest rates can I expect for my educational loan?",
      answer: "Interest rates vary based on factors like loan amount, tenure, institution, course, and whether the loan is secured or unsecured. Typically, educational loans in India range from 8% to 15% per annum. Our platform provides real-time rate comparisons from various lenders."
    },
    {
      question: "Does EduMadad offer scholarships or grants?",
      answer: "While we don't directly offer scholarships, our platform includes a comprehensive database of scholarships and grants that you may be eligible for. Our scholarship guidance tool helps you identify and apply for additional funding sources to reduce your overall loan burden."
    },
    {
      question: "How does the EMI calculator work?",
      answer: "Our EMI calculator uses the loan amount, interest rate, and tenure to compute your monthly installment. It also provides a detailed amortization schedule showing the principal and interest breakdown for each payment, helping you understand the total cost of your loan."
    },
    {
      question: "Can parents or guardians apply for loans through EduMadad?",
      answer: "Yes, parents or legal guardians can apply for educational loans on behalf of students. In many cases, they may be required as co-applicants or guarantors, especially for larger loan amounts. Our platform guides both students and parents through the application process."
    }
  ];
  
  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about educational loans, our services, and how EduMadad can help you.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-6 md:p-8">
        {faqItems.map((item, index) => (
          <FAQItem 
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
