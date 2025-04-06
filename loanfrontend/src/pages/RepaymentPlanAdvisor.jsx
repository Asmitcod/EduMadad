import React, { useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const RepaymentPlanAdvisor = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '10',
    salary: '',
    industry: '',
    collegeTier: '',
    degree: '',
    publicServiceWorker: false
  });
  
  const [repaymentPlans, setRepaymentPlans] = useState(null);
  const [recommendedPlan, setRecommendedPlan] = useState(null);
  const [careerOptions, setCareerOptions] = useState([]);
  
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };
  
  const calculateMonthlyPayment = (principal, rate, years) => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  };
  
  const calculateGraduatedPayment = (principal, rate, years) => {
    // Simplified graduated payment calculation
    const basePayment = principal / (years * 12) * 0.5;
    const finalPayment = basePayment * 3;
    return { initial: basePayment, final: finalPayment };
  };
  
  const calculateIDRPayment = (plan, salary) => {
    const monthlySalary = salary / 12;
    let paymentPercentage = 0;
    let discretionaryIncome = 0;
    
    switch (plan) {
      case 'SAVE':
        paymentPercentage = 0.05; // 5% of discretionary income
        discretionaryIncome = monthlySalary - (2.5 * 2037); // 250% of poverty line (simplified)
        break;
      case 'PAYE':
        paymentPercentage = 0.1; // 10% of discretionary income
        discretionaryIncome = monthlySalary - (1.5 * 2037); // 150% of poverty line (simplified)
        break;
      case 'IBR':
        paymentPercentage = 0.15; // 15% of discretionary income
        discretionaryIncome = monthlySalary - (1.5 * 2037);
        break;
      case 'ICR':
        paymentPercentage = 0.2; // 20% of discretionary income
        discretionaryIncome = monthlySalary - (1 * 2037);
        break;
      default:
        return 0;
    }
    
    return Math.max(0, discretionaryIncome * paymentPercentage);
  };
  
  const isPSLFEligible = (isPublicServiceWorker, plan) => {
    const eligiblePlans = ['SAVE', 'PAYE', 'IBR', 'ICR'];
    return isPublicServiceWorker && eligiblePlans.includes(plan);
  };
  
  const calculateTotalInterest = (principal, monthlyPayment, years) => {
    const totalPaid = monthlyPayment * years * 12;
    return totalPaid - principal;
  };
  
  const estimateForgiveness = (principal, monthlyPayment, years, plan) => {
    const totalPaid = monthlyPayment * years * 12;
    const remaining = principal - totalPaid;
    
    if (remaining <= 0) return 0;
    
    // Simplified forgiveness estimate
    const forgivenessPeriod = isPSLFEligible(formData.publicServiceWorker, plan) ? 10 : 20;
    if (years >= forgivenessPeriod) {
      return remaining;
    }
    return 0;
  };
  
  const getCareerOptionsForDegree = (industry, degree, collegeTier) => {
    // Example career options with expected salaries based on degree and industry
    const careerMap = {
      tech: {
        undergraduate: [
          { title: 'Software Developer', salary: 800000, tier1: 1000000, tier2: 850000, tier3: 700000 },
          { title: 'Web Developer', salary: 650000, tier1: 800000, tier2: 650000, tier3: 550000 },
          { title: 'QA Engineer', salary: 600000, tier1: 750000, tier2: 600000, tier3: 500000 }
        ],
        postgraduate: [
          { title: 'Data Scientist', salary: 1200000, tier1: 1500000, tier2: 1200000, tier3: 1000000 },
          { title: 'ML Engineer', salary: 1300000, tier1: 1700000, tier2: 1300000, tier3: 1100000 },
          { title: 'Software Architect', salary: 1800000, tier1: 2200000, tier2: 1800000, tier3: 1500000 }
        ],
        mba: [
          { title: 'Product Manager', salary: 1500000, tier1: 2000000, tier2: 1500000, tier3: 1200000 },
          { title: 'IT Manager', salary: 1600000, tier1: 2200000, tier2: 1600000, tier3: 1300000 }
        ]
      },
      finance: {
        undergraduate: [
          { title: 'Financial Analyst', salary: 700000, tier1: 900000, tier2: 700000, tier3: 600000 },
          { title: 'Investment Banking Analyst', salary: 1000000, tier1: 1500000, tier2: 1000000, tier3: 800000 }
        ],
        postgraduate: [
          { title: 'Portfolio Manager', salary: 1500000, tier1: 2000000, tier2: 1500000, tier3: 1200000 },
          { title: 'Risk Analyst', salary: 1200000, tier1: 1600000, tier2: 1200000, tier3: 1000000 }
        ],
        mba: [
          { title: 'Investment Manager', salary: 2000000, tier1: 2800000, tier2: 2000000, tier3: 1600000 },
          { title: 'Finance Director', salary: 2500000, tier1: 3500000, tier2: 2500000, tier3: 2000000 }
        ]
      },
      healthcare: {
        undergraduate: [
          { title: 'Healthcare Administrator', salary: 600000, tier1: 750000, tier2: 600000, tier3: 500000 },
          { title: 'Medical Technologist', salary: 550000, tier1: 700000, tier2: 550000, tier3: 450000 }
        ],
        postgraduate: [
          { title: 'Clinical Researcher', salary: 900000, tier1: 1200000, tier2: 900000, tier3: 750000 },
          { title: 'Health Informatics Specialist', salary: 1000000, tier1: 1300000, tier2: 1000000, tier3: 800000 }
        ],
        phd: [
          { title: 'Medical Scientist', salary: 1500000, tier1: 2000000, tier2: 1500000, tier3: 1200000 }
        ]
      },
      education: {
        undergraduate: [
          { title: 'School Teacher', salary: 400000, tier1: 500000, tier2: 400000, tier3: 350000 },
          { title: 'Education Coordinator', salary: 450000, tier1: 550000, tier2: 450000, tier3: 400000 }
        ],
        postgraduate: [
          { title: 'College Professor', salary: 700000, tier1: 900000, tier2: 700000, tier3: 600000 },
          { title: 'Educational Consultant', salary: 800000, tier1: 1000000, tier2: 800000, tier3: 650000 }
        ],
        phd: [
          { title: 'University Professor', salary: 1200000, tier1: 1600000, tier2: 1200000, tier3: 1000000 },
          { title: 'Education Researcher', salary: 1100000, tier1: 1400000, tier2: 1100000, tier3: 900000 }
        ]
      }
    };
    
    if (!industry || !degree) return [];
    
    const tierKey = collegeTier ? collegeTier.replace('tier', 'tier') : null;
    
    if (careerMap[industry] && careerMap[industry][degree]) {
      return careerMap[industry][degree].map(career => {
        let adjustedSalary = career.salary;
        if (tierKey && career[tierKey]) {
          adjustedSalary = career[tierKey];
        }
        return {
          title: career.title,
          salary: adjustedSalary
        };
      });
    }
    return [];
  };
  
  const determineRecommendedPlan = (plans, salary, loanAmount, publicServiceWorker) => {
    // Logic to recommend the most suitable repayment plan
    if (publicServiceWorker && loanAmount > 500000) {
      return 'PSLF with SAVE';
    }
    
    if (salary < 500000 && loanAmount > 800000) {
      return 'SAVE';
    }
    
    if (salary >= 500000 && salary < 1000000) {
      if (loanAmount / salary > 1.5) {
        return 'IBR';
      }
      return 'Standard';
    }
    
    if (salary >= 1000000) {
      if (loanAmount > 2000000) {
        return 'Graduated';
      }
      return 'Standard';
    }
    
    return 'Standard';
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { loanAmount, interestRate, loanTerm, salary, industry, collegeTier, degree, publicServiceWorker } = formData;
    
    // Calculate repayment options
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const years = parseInt(loanTerm);
    const annualSalary = parseFloat(salary);
    
    const standardMonthly = calculateMonthlyPayment(principal, rate, years);
    const graduatedPayment = calculateGraduatedPayment(principal, rate, years);
    const saveMonthly = calculateIDRPayment('SAVE', annualSalary);
    const payeMonthly = calculateIDRPayment('PAYE', annualSalary);
    const ibrMonthly = calculateIDRPayment('IBR', annualSalary);
    const icrMonthly = calculateIDRPayment('ICR', annualSalary);
    
    const repaymentOptions = {
      standard: {
        name: 'Standard Repayment',
        monthlyPayment: standardMonthly,
        totalPaid: standardMonthly * years * 12,
        totalInterest: calculateTotalInterest(principal, standardMonthly, years),
        forgiveness: 0
      },
      graduated: {
        name: 'Graduated Repayment',
        initialPayment: graduatedPayment.initial,
        finalPayment: graduatedPayment.final,
        totalPaid: ((graduatedPayment.initial + graduatedPayment.final) / 2) * years * 12,
        totalInterest: calculateTotalInterest(principal, ((graduatedPayment.initial + graduatedPayment.final) / 2), years),
        forgiveness: 0
      },
      save: {
        name: 'SAVE Plan',
        monthlyPayment: saveMonthly,
        totalPaid: saveMonthly * years * 12,
        totalInterest: calculateTotalInterest(principal, saveMonthly, years),
        forgiveness: estimateForgiveness(principal, saveMonthly, years, 'SAVE'),
        pslfEligible: isPSLFEligible(publicServiceWorker, 'SAVE')
      },
      paye: {
        name: 'PAYE Plan',
        monthlyPayment: payeMonthly,
        totalPaid: payeMonthly * years * 12,
        totalInterest: calculateTotalInterest(principal, payeMonthly, years),
        forgiveness: estimateForgiveness(principal, payeMonthly, years, 'PAYE'),
        pslfEligible: isPSLFEligible(publicServiceWorker, 'PAYE')
      },
      ibr: {
        name: 'IBR Plan',
        monthlyPayment: ibrMonthly,
        totalPaid: ibrMonthly * years * 12,
        totalInterest: calculateTotalInterest(principal, ibrMonthly, years),
        forgiveness: estimateForgiveness(principal, ibrMonthly, years, 'IBR'),
        pslfEligible: isPSLFEligible(publicServiceWorker, 'IBR')
      },
      icr: {
        name: 'ICR Plan',
        monthlyPayment: icrMonthly,
        totalPaid: icrMonthly * years * 12,
        totalInterest: calculateTotalInterest(principal, icrMonthly, years),
        forgiveness: estimateForgiveness(principal, icrMonthly, years, 'ICR'),
        pslfEligible: isPSLFEligible(publicServiceWorker, 'ICR')
      }
    };
    
    setRepaymentPlans(repaymentOptions);
    
    // Get career options based on degree and industry
    const careers = getCareerOptionsForDegree(industry, degree, collegeTier);
    setCareerOptions(careers);
    
    // Determine recommended plan
    const recommended = determineRecommendedPlan(
      repaymentOptions, 
      annualSalary, 
      principal, 
      publicServiceWorker
    );
    setRecommendedPlan(recommended);
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-card shadow-xl p-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
            AI Repayment Plan Advisor
          </h1>
          
          <p className="text-muted-foreground mb-8 text-center">
            Tell us about your loan details and future plans, and our AI will generate a customized loan repayment 
            strategy that adapts to your expected career trajectory.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  id="loanAmount"
                  type="number"
                  placeholder="Ex: 1000000"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium mb-2">
                  Interest Rate (%)
                </label>
                <input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="Ex: 8.5"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.interestRate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium mb-2">
                  Loan Term (Years)
                </label>
                <select
                  id="loanTerm"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.loanTerm}
                  onChange={handleInputChange}
                  required
                >
                  <option value="5">5 years</option>
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="25">25 years</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="salary" className="block text-sm font-medium mb-2">
                  Expected Future Salary (Annual in ₹)
                </label>
                <input
                  id="salary"
                  type="number"
                  placeholder="Ex: 600000"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-2">
                  Industry/Sector
                </label>
                <select
                  id="industry"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="collegeTier" className="block text-sm font-medium mb-2">
                  Tier of College/University
                </label>
                <select
                  id="collegeTier"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.collegeTier}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Tier</option>
                  <option value="tier1">Tier 1 (IITs, IIMs, NITs, etc.)</option>
                  <option value="tier2">Tier 2 (State Universities, Deemed Universities)</option>
                  <option value="tier3">Tier 3 (Other Colleges)</option>
                  <option value="foreign">Foreign University</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="degree" className="block text-sm font-medium mb-2">
                  Degree/Course
                </label>
                <select
                  id="degree"
                  className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.degree}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Degree</option>
                  <option value="undergraduate">Undergraduate (B.Tech, B.Sc, BA, etc.)</option>
                  <option value="postgraduate">Postgraduate (M.Tech, M.Sc, MA, etc.)</option>
                  <option value="mba">MBA</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="certificate">Certificate Course</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  id="publicServiceWorker"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={formData.publicServiceWorker}
                  onChange={handleInputChange}
                />
                <label htmlFor="publicServiceWorker" className="text-sm">
                  I plan to work in public service (Government, NGO, Education)
                </label>
                <div className="group relative">
                  <Info size={16} className="text-muted-foreground cursor-help" />
                  <div className="absolute bottom-6 left-0 w-64 bg-popover p-2 rounded-md shadow-md text-xs invisible group-hover:visible z-10">
                    Public Service Loan Forgiveness (PSLF) may forgive remaining loan balances after 10 years of qualifying payments while working for eligible employers.
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 text-white py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Generate My Repayment Plan
            </button>
          </form>
          
          {repaymentPlans && (
            <div className="mt-12 space-y-8">
              <div className="bg-accent/30 p-6 rounded-lg border border-accent">
                <h2 className="text-2xl font-bold mb-4 text-center">Recommended Repayment Plan</h2>
                <div className="text-center mb-4">
                  <span className="text-xl font-semibold text-primary">
                    {recommendedPlan === 'PSLF with SAVE' ? 'PSLF with SAVE Plan' : 
                     repaymentPlans[recommendedPlan.toLowerCase()]?.name || recommendedPlan}
                  </span>
                </div>
                <p className="text-center mb-6">
                  {recommendedPlan === 'PSLF with SAVE' ? 
                    'Based on your career in public service, you may qualify for Public Service Loan Forgiveness (PSLF) when paired with the SAVE repayment plan after 10 years of qualifying payments.' :
                    recommendedPlan === 'Standard' ? 
                    'Based on your income and loan amount, the Standard Repayment Plan offers the best balance of monthly payments and total cost.' :
                    recommendedPlan === 'Graduated' ?
                    'With your high income potential, Graduated Repayment allows you to start with lower payments that increase over time.' :
                    recommendedPlan === 'SAVE' ? 
                    'Given your income-to-debt ratio, the SAVE Plan will provide the most affordable payments based on your income.' :
                    recommendedPlan === 'IBR' ?
                    'The Income-Based Repayment (IBR) plan provides a good balance between affordability and repayment term.' :
                    'This plan best fits your financial situation and career trajectory.'
                  }
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedPlan === 'PSLF with SAVE' ? (
                    <>
                      {/* <div className="bg-background p-4 rounded-md">
                        <h3 className="font-medium mb-2">Monthly Payment</h3>
                        <p className="text-xl font-semibold">{formatCurrency(repaymentPlans.save.monthlyPayment)}</p>
                      </div>
                      <div className="bg-background p-4 rounded-md">
                        <h3 className="font-medium mb-2">Potential Forgiveness</h3>
                        <p className="text-xl font-semibold text-green-600">
                          {formatCurrency(parseFloat(formData.loanAmount) - (repaymentPlans.save.monthlyPayment * 10 * 12))}
                        </p>
                        <p className="text-xs text-muted-foreground">After 10 years of qualified payments</p>
                      </div> */}
                    </>
                  ) : (
                    <>
                      <div className="bg-background p-4 rounded-md">
                        <h3 className="font-medium mb-2">Monthly Payment</h3>
                        <p className="text-xl font-semibold">
                          {recommendedPlan === 'Graduated' 
                            ? `${formatCurrency(repaymentPlans.graduated.initialPayment)} → ${formatCurrency(repaymentPlans.graduated.finalPayment)}`
                            : formatCurrency(repaymentPlans[recommendedPlan.toLowerCase()].monthlyPayment)}
                        </p>
                      </div>
                      <div className="bg-background p-4 rounded-md">
                        <h3 className="font-medium mb-2">Total Cost</h3>
                        <p className="text-xl font-semibold">{formatCurrency(repaymentPlans[recommendedPlan.toLowerCase()].totalPaid)}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">All Repayment Options</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-card shadow-sm p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Standard Repayment</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="block text-muted-foreground">Monthly Payment</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.standard.monthlyPayment)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Paid</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.standard.totalPaid)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Interest</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.standard.totalInterest)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Forgiveness</span>
                        <span className="font-medium">N/A</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card shadow-sm p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Graduated Repayment</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="block text-muted-foreground">Monthly Payment</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.graduated.initialPayment)} → {formatCurrency(repaymentPlans.graduated.finalPayment)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Paid</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.graduated.totalPaid)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Interest</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.graduated.totalInterest)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Forgiveness</span>
                        <span className="font-medium">N/A</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card shadow-sm p-4 rounded-lg">
                    <h3 className="font-bold mb-2">SAVE Plan (Income-Driven)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="block text-muted-foreground">Monthly Payment</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.save.monthlyPayment)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Paid</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.save.totalPaid)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Total Interest</span>
                        <span className="font-medium">{formatCurrency(repaymentPlans.save.totalInterest)}</span>
                      </div>
                      <div>
                        <span className="block text-muted-foreground">Potential Forgiveness</span>
                        <span className="font-medium text-green-600">{formatCurrency(repaymentPlans.save.forgiveness)}</span>
                      </div>
                    </div>
                    {repaymentPlans.save.pslfEligible && (
                      <div className="mt-2 text-sm text-green-600 flex items-center">
                      <Info size={14} className="mr-1" />
                      PSLF Eligible: May qualify for forgiveness after 10 years
                    </div>
                  )}
                </div>
                
                <div className="bg-card shadow-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">PAYE Plan (Income-Driven)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground">Monthly Payment</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.paye.monthlyPayment)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Paid</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.paye.totalPaid)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Interest</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.paye.totalInterest)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Potential Forgiveness</span>
                      <span className="font-medium text-green-600">{formatCurrency(repaymentPlans.paye.forgiveness)}</span>
                    </div>
                  </div>
                  {repaymentPlans.paye.pslfEligible && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <Info size={14} className="mr-1" />
                      PSLF Eligible: May qualify for forgiveness after 10 years
                    </div>
                  )}
                </div>
                
                <div className="bg-card shadow-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">IBR Plan (Income-Driven)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground">Monthly Payment</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.ibr.monthlyPayment)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Paid</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.ibr.totalPaid)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Interest</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.ibr.totalInterest)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Potential Forgiveness</span>
                      <span className="font-medium text-green-600">{formatCurrency(repaymentPlans.ibr.forgiveness)}</span>
                    </div>
                  </div>
                  {repaymentPlans.ibr.pslfEligible && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <Info size={14} className="mr-1" />
                      PSLF Eligible: May qualify for forgiveness after 10 years
                    </div>
                  )}
                </div>
                
                <div className="bg-card shadow-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">ICR Plan (Income-Driven)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground">Monthly Payment</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.icr.monthlyPayment)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Paid</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.icr.totalPaid)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Total Interest</span>
                      <span className="font-medium">{formatCurrency(repaymentPlans.icr.totalInterest)}</span>
                    </div>
                    <div>
                      <span className="block text-muted-foreground">Potential Forgiveness</span>
                      <span className="font-medium text-green-600">{formatCurrency(repaymentPlans.icr.forgiveness)}</span>
                    </div>
                  </div>
                  {repaymentPlans.icr.pslfEligible && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <Info size={14} className="mr-1" />
                      PSLF Eligible: May qualify for forgiveness after 10 years
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {careerOptions.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Career Options in {formData.industry.charAt(0).toUpperCase() + formData.industry.slice(1)}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {careerOptions.map((career, index) => (
                    <div key={index} className="bg-card shadow-sm p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-3">{career.title}</h3>
                      <div className="space-y-2">
                        <div>
                          <span className="text-muted-foreground">Expected Salary:</span>
                          <span className="font-medium block">{formatCurrency(career.salary)}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Est. Monthly Loan Payment:</span>
                          <span className="font-medium block">
                            {formatCurrency(Math.min(
                              0.1 * career.salary / 12,
                              repaymentPlans.standard.monthlyPayment
                            ))}
                          </span>
                          <span className="text-xs text-muted-foreground block">
                            (10% of monthly income or standard payment, whichever is lower)
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Income-to-Debt Ratio:</span>
                          <span className="font-medium block">
                            {(career.salary / parseFloat(formData.loanAmount)).toFixed(2)}
                          </span>
                          <span className="text-xs text-muted-foreground block">
                            {career.salary / parseFloat(formData.loanAmount) >= 1.5 ? 
                            "Excellent" : career.salary / parseFloat(formData.loanAmount) >= 1 ? 
                            "Good" : career.salary / parseFloat(formData.loanAmount) >= 0.75 ? 
                            "Fair" : "Challenging"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {!repaymentPlans && (
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              Enter your loan details above to generate personalized repayment plans based on your career trajectory 
              and financial situation.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default RepaymentPlanAdvisor;