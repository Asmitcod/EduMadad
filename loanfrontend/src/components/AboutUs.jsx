
import React from 'react';
import { BookOpen, Users, Heart, Globe } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="bg-card rounded-xl p-6 shadow-md">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <div className="relative mx-auto w-32 h-32 mb-4 rounded-full overflow-hidden">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <h4 className="font-semibold text-lg">{name}</h4>
    <p className="text-muted-foreground">{role}</p>
  </div>
);

const AboutUs = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Education Access",
      description: "We believe quality education should be accessible to all, regardless of financial background."
    },
    {
      icon: Users,
      title: "Student-First Approach",
      description: "Every solution and recommendation we provide prioritizes the student's best interests."
    },
    {
      icon: Heart,
      title: "Empathy & Support",
      description: "We understand the stress of educational financing and provide compassionate guidance."
    },
    {
      icon: Globe,
      title: "Inclusive Solutions",
      description: "Our platform is designed to help diverse students with varying educational and financial needs."
    }
  ];
  
  const team = [
    {
      name: "Ananya Desai",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/20.jpg"
    },
    {
      name: "Vivek Mehta",
      role: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Sanjana Kapoor",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      name: "Aryan Choudhury",
      role: "Education Specialist",
      image: "https://randomuser.me/api/portraits/men/24.jpg"
    }
  ];
  
  return (
    <section id="about" className="section-container bg-muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">About EduMadad</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our mission is to simplify educational financing and help students achieve their academic dreams without financial stress.
        </p>
      </div>
      
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              EduMadad was founded in 2020 by a group of education enthusiasts who experienced firsthand the challenges of navigating educational loans and financing options.
            </p>
            <p className="text-muted-foreground mb-4">
              Recognizing the need for transparent, accessible information and personalized guidance, we built a platform that combines technological innovation with financial expertise to empower students and their families.
            </p>
            <p className="text-muted-foreground">
              Today, we've helped over 50,000 students secure appropriate funding for their education, implementing AI-driven solutions that make educational financing decisions simpler and more informed.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-eduBlue-500/20 to-eduTeal-500/20 rounded-xl transform rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaborating" 
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">Our Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
