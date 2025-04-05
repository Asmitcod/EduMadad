
import React from 'react';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const RegisterLogin = () => {
  return (
    <section id="register" className="section-container bg-muted py-20">
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-eduBlue-500/20 to-eduTeal-500/20 rounded-xl transform rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Student working on laptop" 
              className="rounded-lg shadow-lg relative z-10 object-cover h-96 w-full"
            />
          </div>
        </div>
        
        <div className="md:col-span-2 bg-card p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Join EduMadad Today</h2>
            <p className="text-muted-foreground">
              Create an account to save your preferences, track your applications, and receive personalized recommendations.
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-muted-foreground" />
                </div>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-muted-foreground" />
                </div>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-muted-foreground" />
                </div>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Create a password"
                />
              </div>
            </div>
            
            <button type="submit" className="w-full btn-primary mt-2">
              Register Now
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">Already have an account?</p>
            <button className="text-primary font-medium hover:underline mt-1 inline-flex items-center">
              Login 
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterLogin;
