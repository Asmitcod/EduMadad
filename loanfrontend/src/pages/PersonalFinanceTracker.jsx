
import React from 'react';
import { ArrowLeft, Wallet, PieChart, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalFinanceTracker = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-eduBlue-600 to-eduTeal-600 bg-clip-text text-transparent">
          Personal Finance Tracker
        </h1>
        
        <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Track your expenses, set budget goals, and receive personalized suggestions 
          to manage your finances effectively during your educational journey.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <Wallet className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Expense Tracking</h3>
            </div>
            <p className="text-muted-foreground">
              Categorize and monitor your daily expenses to understand your spending patterns.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <PieChart className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Budget Planning</h3>
            </div>
            <p className="text-muted-foreground">
              Create monthly budgets for different categories and track your adherence to them.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <BarChart3 className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Financial Reports</h3>
            </div>
            <p className="text-muted-foreground">
              Get insights through visual reports about your spending habits and saving patterns.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <TrendingUp className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold">Saving Goals</h3>
            </div>
            <p className="text-muted-foreground">
              Set financial goals and track your progress towards achieving them over time.
            </p>
          </div>
        </div>
        
        <div className="bg-card shadow-lg p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-6">Coming Soon!</h2>
          <p className="text-muted-foreground mb-6">
            Our Personal Finance Tracker is currently under development. 
            We're working hard to bring you a comprehensive financial management solution
            tailored for students and young professionals.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalFinanceTracker;
