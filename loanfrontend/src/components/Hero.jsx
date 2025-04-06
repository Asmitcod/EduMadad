import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 100 / 12; // monthly interest rate
    const N = loanTerm * 12; // total months

    const emiValue = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    setEmi(Math.round(emiValue));
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6 bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
            Educational Loans Made Simple
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Find the perfect educational loan, get personalized repayment plans, and make informed decisions with AI-powered guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/loan-eligibility" className="btn-primary">
              Check Loan Eligibility
            </Link>
            {/* <a href="#calculator" className="bg-muted hover:bg-muted/80 text-foreground font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </a> */}
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
                    <label className="text-sm text-muted-foreground mb-1 block">Loan Amount (₹)</label>
                    <input 
                      type="number" 
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <label className="text-sm text-muted-foreground mb-1 block">Interest Rate (%)</label>
                    <input 
                      type="number" 
                      value={interestRate} 
                      step="0.1"
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <label className="text-sm text-muted-foreground mb-1 block">Loan Term (Years)</label>
                    <input 
                      type="number" 
                      value={loanTerm} 
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                    />
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-primary mb-1">Monthly EMI</div>
                    <div className="text-2xl font-semibold font-poppins text-primary">
                      ₹{emi !== null ? emi.toLocaleString() : '—'}
                    </div>
                  </div>
                </div>

                <button onClick={calculateEMI} className="btn-primary inline-flex items-center">
                  Calculate EMI
                  <ArrowRight size={18} className="ml-2" />
                </button>
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

        {/* AI Repayment Plan Advisor (unchanged) */}
        {/* You can keep that section as is below... */}
      </div>
    </div>
  );
};

export default Hero;