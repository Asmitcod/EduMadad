
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 w-10 h-10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 bg-clip-text text-transparent">EduMadad</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Simplifying educational financing and helping students achieve their academic dreams without financial stress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#eligibility" className="text-muted-foreground hover:text-primary transition-colors">Loan Eligibility</a></li>
              <li><a href="#advisor" className="text-muted-foreground hover:text-primary transition-colors">AI Repayment Plan</a></li>
              <li><a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">EMI Calculator</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Education Loans Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Scholarship Database</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Career Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Education Street, Knowledge Park, New Delhi, 110001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">support@edumadad.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EduMadad. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
