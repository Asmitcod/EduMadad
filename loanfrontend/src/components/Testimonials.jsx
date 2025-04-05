
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "MBA Student, IIM Ahmedabad",
    quote: "EduMadad helped me secure financing for my MBA with an affordable interest rate and a payment plan that works with my budget. Their AI advisor suggested a perfect repayment strategy based on my expected post-MBA salary.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Engineering Student, IIT Delhi",
    quote: "The EMI calculator and eligibility checker were incredibly helpful in planning my educational finances. EduMadad made the complex process of student loans simple and transparent.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Aisha Khan",
    role: "Medical Student, AIIMS",
    quote: "As a medical student with a long education ahead, I was worried about loan repayment. EduMadad's AI repayment plan considered my residency period and created a payment schedule that eases my financial stress.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Parent of an Undergraduate Student",
    quote: "The educational resources on EduMadad gave our family a clear understanding of the financial commitment. LoanBuddy guided us through every step of the application process.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Neha Patel",
    role: "Computer Science Student, BITS Pilani",
    quote: "I compared multiple loan offers through EduMadad and found one that saved me over 2 lakhs in interest over the loan term. Their platform is intuitive and saves so much time!",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "Arjun Reddy",
    role: "International Student, University of Toronto",
    quote: "Securing financing for international education was a challenge until I found EduMadad. Their resources for international students and partnership with global financial institutions made my dream possible.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 7,
    name: "Lakshmi Rao",
    role: "Law Student, National Law School",
    quote: "The scholarship guidance section helped me find additional funding that reduced my loan amount significantly. EduMadad truly understands the financial needs of students.",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 8,
    name: "Mohammed Qureshi",
    role: "PhD Candidate, JNU",
    quote: "As a research scholar, I needed flexible repayment options. EduMadad connected me with lenders who offer grace periods and income-based repayment plans perfect for academics.",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-card rounded-xl p-6 shadow-md h-full flex flex-col">
    <div className="mb-4 text-primary">
      <Quote size={32} />
    </div>
    <p className="italic text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>
    <div className="flex items-center">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  
  useEffect(() => {
    // Randomly select 6 testimonials to display
    const shuffleTestimonials = () => {
      const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
      setVisibleTestimonials(shuffled.slice(0, 6));
    };
    
    shuffleTestimonials();
    
    // Rotate testimonials every 30 seconds
    const interval = setInterval(shuffleTestimonials, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-container bg-gradient-to-b from-background to-muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">What Our Users Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from students and parents who've successfully navigated educational financing with EduMadad.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
