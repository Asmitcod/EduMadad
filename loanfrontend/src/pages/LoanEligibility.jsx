import React from 'react';
import { ArrowLeft, ClipboardCheck, Sliders, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoanEligibility = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
          Loan Eligibility Checker
        </h1>

        <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Enter your academic and demographic details to find government-backed student loan schemes you're eligible for.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <ClipboardCheck className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Eligibility Criteria</h3>
            </div>
            <p className="text-muted-foreground">
              Filter loan options based on your marks, caste, gender, and other eligibility factors.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <Sliders className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Customizable Filters</h3>
            </div>
            <p className="text-muted-foreground">
              Adjust filters such as interest rate, repayment duration, and parental income.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <MapPin className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">State-Based Schemes</h3>
            </div>
            <p className="text-muted-foreground">
              Discover schemes specific to your state of residence or institution.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Student-Centric</h3>
            </div>
            <p className="text-muted-foreground">
              Built for students to reduce time and confusion while exploring financial aid options.
            </p>
          </div>
        </div>

        <div className="bg-card shadow-lg p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
          <p className="text-muted-foreground mb-6">
            Our Loan Eligibility Checker will soon allow you to input your academic and personal details 
            and instantly view matching government loan schemes tailored to your profile.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;
