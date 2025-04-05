
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6 bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
            Educational Loans Made Simple
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Find the perfect educational loan, get personalized repayment plans, and make informed decisions with AI-powered guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/repayment-plan-advisor" className="btn-primary">
              AI Repayment Plan
            </Link>
            <a href="#calculator" className="bg-muted hover:bg-muted/80 text-foreground font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        {/* EMI Calculator Section */}
        <div id="calculator" className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-eduBlue-500/20 to-eduTeal-500/20 rounded-xl transform rotate-1"></div>
          <div className="relative bg-card shadow-xl p-6 md:p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  Get a quick estimate for your student loan
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our EMI calculator helps you understand your repayment schedule before you commit to a loan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Loan Amount</div>
                    <div className="text-2xl font-semibold font-poppins">₹5,00,000</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Interest Rate</div>
                    <div className="text-2xl font-semibold font-poppins">8.5%</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Loan Term</div>
                    <div className="text-2xl font-semibold font-poppins">5 Years</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-primary mb-1">Monthly EMI</div>
                    <div className="text-2xl font-semibold font-poppins text-primary">₹10,251</div>
                  </div>
                </div>
                <a href="#calculator-full" className="btn-primary inline-flex items-center">
                  Try Full Calculator
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" 
                  alt="Student planning finances" 
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Repayment Plan Advisor Section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-eduTeal-500/20 to-eduBlue-500/20 rounded-xl transform -rotate-1"></div>
          <div className="relative bg-card shadow-xl p-6 md:p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="AI Repayment Plan" 
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  AI-based Repayment Plan Advisor
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our AI analyzes your future income potential based on your education, industry trends, and personal goals to create a tailored repayment plan that grows with your career.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Career Trajectory</div>
                    <div className="text-lg font-semibold font-poppins">Personalized</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Payment Options</div>
                    <div className="text-lg font-semibold font-poppins">Flexible</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Projection</div>
                    <div className="text-lg font-semibold font-poppins">10+ Years</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-primary mb-1">AI Updates</div>
                    <div className="text-lg font-semibold font-poppins text-primary">Quarterly</div>
                  </div>
                </div>
                <Link to="/repayment-plan-advisor" className="btn-primary inline-flex items-center">
                  Plan My Repayment
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
