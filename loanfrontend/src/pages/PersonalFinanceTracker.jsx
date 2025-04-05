import React, { useState } from 'react';
import { Wallet, PieChart, BarChart3, TrendingUp, Plus } from 'lucide-react';

const PersonalFinanceTracker = () => {
  // Sample data to demonstrate the improved UI
  const expenses = [
    { id: 1, amount: 300, category: 'food', description: 'Groceries', date: '2025-04-01' },
    { id: 2, amount: 300, category: 'entertainment', description: 'Movie tickets', date: '2025-04-03' }
  ];
  
  const budgets = {
    food: 1000,
    housing: 6000,
    transportation: 1200,
    education: 3000,
    entertainment: 1000,
    other: 5000
  };
  
  const savingsGoals = [
    { id: 1, name: 'UPSC creck', saved: 70000, target: 10000 }
  ];
  
  // Category options with colors
  const categories = [
    { value: 'food', label: 'Food & Groceries', color: '#FF8042' },
    { value: 'housing', label: 'Housing & Utilities', color: '#0088FE' },
    { value: 'transportation', label: 'Transportation', color: '#00C49F' },
    { value: 'education', label: 'Education', color: '#FFBB28' },
    { value: 'entertainment', label: 'Entertainment', color: '#FF6B8B' },
    { value: 'other', label: 'Other', color: '#8884D8' }
  ];
  
  // Helper functions
  const getTotalExpenses = () => expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const getTotalBudget = () => Object.values(budgets).reduce((sum, budget) => sum + budget, 0);
  
  return (
    <div className="bg-slate-900 text-white p-4 flex flex-col gap-6 mt-16"> {/* Added margin-top to prevent navbar overlap */}
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add Expense Form */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
            <Wallet className="mr-2" size={20} />
            Add Expense
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Amount (₹)</label>
              <input
                type="number"
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                placeholder="0.00"
                defaultValue="50000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Category</label>
              <select className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white">
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Date</label>
              <input
                type="date"
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                defaultValue="2025-04-05"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                placeholder="Enter description"
              />
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center">
              <Plus size={18} className="mr-2" /> Add Expense
            </button>
          </div>
        </div>

        {/* Spending Distribution */}
        <div className="bg-slate-800 p-6 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Spending Distribution</h2>
          
          <div className="flex-1 flex items-center justify-center relative">
            {/* Simple pie chart representation */}
            <div className="w-40 h-40 rounded-full overflow-hidden relative">
              <div
                className="absolute bg-orange-500"
                style={{
                  width: '100%',
                  height: '100%',
                  clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)'
                }}
              ></div>
              <div
                className="absolute bg-blue-500"
                style={{
                  width: '100%',
                  height: '100%',
                  clipPath: 'polygon(50% 50%, 0 0, 30% 0)'
                }}
              ></div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-0 right-2 flex flex-col items-end">
              <div className="flex items-center mb-1">
                <span className="text-sm mr-2 text-white">Food & Groceries</span>
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2 text-white">Housing: 83%</span>
                <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget vs. Spending */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Budget vs. Spending</h2>
          
          <div className="h-48 mt-4 flex items-end justify-around">
            {categories.map(cat => (
              <div key={cat.value} className="flex flex-col items-center">
                <div className="flex flex-col h-32 w-8 mb-2">
                  {/* Budget bar */}
                  <div 
                    className="w-full bg-green-400 opacity-60 mb-1"
                    style={{ 
                      height: `${Math.min(budgets[cat.value] / 200, 100)}%`,
                    }}
                  ></div>
                  {/* Spent bar */}
                  <div 
                    className="w-full bg-blue-400 mt-auto"
                    style={{ 
                      height: cat.value === 'entertainment' ? '8%' : '4%',
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-300 truncate w-12 text-center">
                  {cat.label.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-2 text-xs">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-green-400 opacity-60 mr-1"></div>
              <span>Budget</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 mr-1"></div>
              <span>Spent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Summary */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
            <BarChart3 className="mr-2" size={20} />
            Financial Summary
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Total Expenses</span>
              <p className="text-xl font-semibold">₹600</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Total Budget</span>
              <p className="text-xl font-semibold">₹17,200</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Number of Expenses</span>
              <p className="text-xl font-semibold">2</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Average Expense</span>
              <p className="text-xl font-semibold">₹300.00</p>
            </div>
          </div>
        </div>

        {/* Savings Goals */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
            <TrendingUp className="mr-2" size={20} />
            Savings Goals
          </h2>
          
          {savingsGoals.map(goal => (
            <div key={goal.id} className="bg-slate-700 p-3 rounded-md mb-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{goal.name}</span>
                <span className="text-sm">700%</span>
              </div>
              <div className="h-2 bg-slate-600 rounded-full overflow-hidden mt-2 mb-1">
                <div 
                  className="h-full bg-blue-500"
                  style={{ width: `100%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>₹70,000</span>
                <span>₹10,000</span>
              </div>
            </div>
          ))}
          
          <button className="text-blue-400 text-sm hover:text-blue-300 mt-2">
            + Add another goal
          </button>
        </div>
      </div>

      {/* Budget Settings */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
          <PieChart className="mr-2" size={20} />
          Budget Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.slice(0, 6).map(category => (
            <div key={category.value} className="mb-2">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                {category.label}
              </label>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">₹</span>
                <input
                  type="number"
                  defaultValue={budgets[category.value]}
                  className="flex-1 p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                  min="0"
                  step="100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalFinanceTracker;