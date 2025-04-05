
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RepaymentPlanAdvisor = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-card shadow-xl p-8 rounded-xl">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
            AI Repayment Plan Advisor
          </h1>
          
          <p className="text-muted-foreground mb-8 text-center">
            Tell us about your future plans, and our AI will generate a customized loan repayment strategy 
            that adapts to your expected career trajectory.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="salary" className="block text-sm font-medium mb-2">
                Expected Future Salary (Annual in ₹)
              </label>
              <input
                id="salary"
                type="number"
                placeholder="Ex: 600000"
                className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium mb-2">
                Industry/Sector
              </label>
              <select
                id="industry"
                className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
              <label htmlFor="college" className="block text-sm font-medium mb-2">
                Tier of College/University
              </label>
              <select
                id="college"
                className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
            
            <button
              type="submit"
              className="w-full btn-primary py-3 mt-2"
            >
              Generate My Repayment Plan
            </button>
          </form>
          
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              Note: This is a placeholder form. In the future, this data will be processed by our AI to generate 
              personalized repayment plans based on your career trajectory and financial situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepaymentPlanAdvisor;
