import React, { useState, useEffect } from 'react';
import { Wallet, PieChart, BarChart3, TrendingUp, Plus } from 'lucide-react';

const PersonalFinanceTracker = () => {
  // State management for expenses
  const [expenses, setExpenses] = useState([]);
  
  // State for adding new expenses
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: 'food',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  // State for budgets
  const [budgets, setBudgets] = useState({
    food: 0,
    housing: 0,
    transportation: 0,
    education: 0,
    entertainment: 0,
    other: 0
  });

  // State for savings goals
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    name: '',
    saved: 0,
    target: 0
  });
  const [showGoalForm, setShowGoalForm] = useState(false);

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
  const getTotalExpenses = () => expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  const getTotalBudget = () => Object.values(budgets).reduce((sum, budget) => sum + parseFloat(budget || 0), 0);
  const getExpensesByCategory = () => {
    const result = {};
    categories.forEach(cat => {
      result[cat.value] = expenses
        .filter(exp => exp.category === cat.value)
        .reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
    });
    return result;
  };
  
  // Handle form input changes
  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (category, value) => {
    setBudgets(prev => ({ ...prev, [category]: value }));
  };

  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setNewGoal(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handlers
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newExpense.amount || parseFloat(newExpense.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    const expenseToAdd = {
      ...newExpense,
      id: Date.now(),
      amount: parseFloat(newExpense.amount)
    };
    
    setExpenses(prev => [...prev, expenseToAdd]);
    setNewExpense({
      amount: '',
      category: 'food',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.name || !newGoal.target || parseFloat(newGoal.target) <= 0) {
      alert('Please fill all required fields');
      return;
    }
    
    const goalToAdd = {
      ...newGoal,
      id: Date.now(),
      saved: parseFloat(newGoal.saved),
      target: parseFloat(newGoal.target)
    };
    
    setSavingsGoals(prev => [...prev, goalToAdd]);
    setNewGoal({ name: '', saved: 0, target: 0 });
    setShowGoalForm(false);
  };

  // Calculate percentages for pie chart
  const getSpendingDistribution = () => {
    const totalExpenses = getTotalExpenses();
    if (totalExpenses === 0) return [];
    
    const expensesByCategory = getExpensesByCategory();
    return categories.map(cat => ({
      ...cat,
      amount: expensesByCategory[cat.value],
      percentage: (expensesByCategory[cat.value] / totalExpenses) * 100
    })).filter(cat => cat.amount > 0);
  };

  // Get spending distribution for the pie chart
  const spendingDistribution = getSpendingDistribution();
  const expensesByCategory = getExpensesByCategory();

  return (
    <div className="bg-slate-900 text-white p-4 flex flex-col gap-6 mt-16">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add Expense Form */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
            <Wallet className="mr-2" size={20} />
            Add Expense
          </h2>
          
          <form onSubmit={handleAddExpense} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={newExpense.amount}
                onChange={handleExpenseChange}
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                placeholder="0.00"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Category</label>
              <select 
                name="category"
                value={newExpense.category}
                onChange={handleExpenseChange}
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={newExpense.date}
                onChange={handleExpenseChange}
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Description</label>
              <input
                type="text"
                name="description"
                value={newExpense.description}
                onChange={handleExpenseChange}
                className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                placeholder="Enter description"
              />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center">
              <Plus size={18} className="mr-2" /> Add Expense
            </button>
          </form>
        </div>

        {/* Spending Distribution */}
        <div className="bg-slate-800 p-6 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Spending Distribution</h2>
          
          <div className="flex-1 flex items-center justify-center relative">
            {spendingDistribution.length > 0 ? (
              <>
                {/* Simple pie chart representation */}
                <div className="w-40 h-40 rounded-full overflow-hidden relative bg-slate-700">
                  {spendingDistribution.map((category, index) => {
                    // Create simple pie chart segments
                    let startAngle = 0;
                    spendingDistribution.slice(0, index).forEach(cat => {
                      startAngle += (cat.percentage / 100) * 360;
                    });
                    const endAngle = startAngle + (category.percentage / 100) * 360;
                    
                    // Convert to radians
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    // Calculate points
                    const x1 = 20 + 20 * Math.cos(startRad);
                    const y1 = 20 + 20 * Math.sin(startRad);
                    const x2 = 20 + 20 * Math.cos(endRad);
                    const y2 = 20 + 20 * Math.sin(endRad);
                    
                    // Create SVG path for the segment
                    const largeArcFlag = category.percentage > 50 ? 1 : 0;
                    
                    return (
                      <div
                        key={category.value}
                        className="absolute"
                        style={{
                          width: '100%',
                          height: '100%',
                          background: category.color,
                          clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(startRad)}% ${50 + 50 * Math.sin(startRad)}%, ${50 + 50 * Math.cos((startRad + endRad) / 2)}% ${50 + 50 * Math.sin((startRad + endRad) / 2)}%, ${50 + 50 * Math.cos(endRad)}% ${50 + 50 * Math.sin(endRad)}%)`
                        }}
                      ></div>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-0 right-2 flex flex-col items-end">
                  {spendingDistribution.map(category => (
                    <div key={category.value} className="flex items-center mb-1">
                      <span className="text-sm mr-2 text-white">{category.label.split(' ')[0]}: {category.percentage.toFixed(0)}%</span>
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: category.color }}></div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-400 flex-1 flex items-center justify-center">
                No expenses recorded yet
              </div>
            )}
          </div>
        </div>

        {/* Budget vs. Spending */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Budget vs. Spending</h2>
          
          <div className="h-48 mt-4 flex items-end justify-around">
            {categories.map(cat => {
              const categoryExpenses = expensesByCategory[cat.value] || 0;
              const categoryBudget = parseFloat(budgets[cat.value]) || 0;
              const maxAmount = Math.max(categoryBudget, categoryExpenses, 100);
              const budgetHeight = categoryBudget ? (categoryBudget / maxAmount) * 100 : 0;
              const expenseHeight = categoryExpenses ? (categoryExpenses / maxAmount) * 100 : 0;
              
              return (
                <div key={cat.value} className="flex flex-col items-center">
                  <div className="flex flex-col h-32 w-8 mb-2">
                    {/* Budget bar */}
                    <div 
                      className="w-full bg-green-400 opacity-60 mb-1"
                      style={{ height: `${budgetHeight}%` }}
                    ></div>
                    {/* Spent bar */}
                    <div 
                      className="w-full bg-blue-400 mt-auto"
                      style={{ height: `${expenseHeight}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-300 truncate w-12 text-center">
                    {cat.label.split(' ')[0]}
                  </span>
                </div>
              );
            })}
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
              <p className="text-xl font-semibold">₹{getTotalExpenses().toLocaleString('en-IN')}</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Total Budget</span>
              <p className="text-xl font-semibold">₹{getTotalBudget().toLocaleString('en-IN')}</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Number of Expenses</span>
              <p className="text-xl font-semibold">{expenses.length}</p>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-md">
              <span className="text-sm text-gray-400">Average Expense</span>
              <p className="text-xl font-semibold">
                ₹{expenses.length ? (getTotalExpenses() / expenses.length).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
              </p>
            </div>
          </div>
        </div>

        {/* Savings Goals */}
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
            <TrendingUp className="mr-2" size={20} />
            Savings Goals
          </h2>
          
          {savingsGoals.length > 0 ? (
            savingsGoals.map(goal => {
              const percentComplete = goal.target > 0 ? Math.min(100, (goal.saved / goal.target) * 100) : 0;
              
              return (
                <div key={goal.id} className="bg-slate-700 p-3 rounded-md mb-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm">{percentComplete.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 bg-slate-600 rounded-full overflow-hidden mt-2 mb-1">
                    <div 
                      className="h-full bg-blue-500"
                      style={{ width: `${percentComplete}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>₹{goal.saved.toLocaleString('en-IN')}</span>
                    <span>₹{goal.target.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-gray-400 mb-4">No savings goals added yet</div>
          )}
          
          {showGoalForm ? (
            <form onSubmit={handleAddGoal} className="bg-slate-700 p-3 rounded-md space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Goal Name</label>
                <input
                  type="text"
                  name="name"
                  value={newGoal.name}
                  onChange={handleGoalChange}
                  className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                  placeholder="e.g., New Car"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Current Savings (₹)</label>
                <input
                  type="number"
                  name="saved"
                  value={newGoal.saved}
                  onChange={handleGoalChange}
                  className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Target Amount (₹)</label>
                <input
                  type="number"
                  name="target"
                  value={newGoal.target}
                  onChange={handleGoalChange}
                  className="w-full p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                  placeholder="10000"
                  min="1"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex-1">
                  Add Goal
                </button>
                <button 
                  type="button" 
                  onClick={() => {
                    setShowGoalForm(false);
                    setNewGoal({ name: '', saved: 0, target: 0 });
                  }}
                  className="bg-slate-600 hover:bg-slate-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button 
              className="text-blue-400 text-sm hover:text-blue-300 mt-2"
              onClick={() => setShowGoalForm(true)}
            >
              + Add another goal
            </button>
          )}
        </div>
      </div>

      {/* Budget Settings */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center text-blue-400">
          <PieChart className="mr-2" size={20} />
          Budget Settings
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(category => (
            <div key={category.value} className="mb-2">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                {category.label}
              </label>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">₹</span>
                <input
                  type="number"
                  value={budgets[category.value] || ''}
                  onChange={(e) => handleBudgetChange(category.value, e.target.value)}
                  className="flex-1 p-2 rounded-md border border-gray-600 bg-slate-700 text-white"
                  min="0"
                  step="100"
                  placeholder="0"
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