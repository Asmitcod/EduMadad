import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wallet, PieChart, BarChart3, TrendingUp, Plus, Trash2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PersonalFinanceTracker = () => {
  // State for expense tracking
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  
  // State for budget management
  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem('budgets');
    return savedBudgets ? JSON.parse(savedBudgets) : {
      food: 0,
      housing: 0,
      transportation: 0,
      education: 0,
      entertainment: 0,
      other: 0
    };
  });
  
  // State for savings goals
  const [savingsGoals, setSavingsGoals] = useState(() => {
    const savedGoals = localStorage.getItem('savingsGoals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });
  
  // Form states
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: 'food',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    saved: 0,
    deadline: ''
  });
  
  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('savingsGoals', JSON.stringify(savingsGoals));
  }, [expenses, budgets, savingsGoals]);
  
  // Handlers for expense tracking
  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense(prev => ({ ...prev, [name]: value }));
  };
  
  const addExpense = (e) => {
    e.preventDefault();
    if (!newExpense.amount || !newExpense.description) return;
    
    const expenseToAdd = {
      ...newExpense,
      amount: parseFloat(newExpense.amount),
      id: Date.now()
    };
    
    setExpenses(prev => [expenseToAdd, ...prev]);
    setNewExpense({
      amount: '',
      category: 'food',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };
  
  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };
  
  // Handlers for budget management
  const updateBudget = (category, value) => {
    setBudgets(prev => ({
      ...prev,
      [category]: parseFloat(value) || 0
    }));
  };
  
  // Handlers for savings goals
  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setNewGoal(prev => ({ ...prev, [name]: value }));
  };
  
  const addSavingsGoal = (e) => {
    e.preventDefault();
    if (!newGoal.name || !newGoal.target) return;
    
    const goalToAdd = {
      ...newGoal,
      target: parseFloat(newGoal.target),
      saved: parseFloat(newGoal.saved) || 0,
      id: Date.now()
    };
    
    setSavingsGoals(prev => [...prev, goalToAdd]);
    setNewGoal({
      name: '',
      target: '',
      saved: 0,
      deadline: ''
    });
  };
  
  const updateSavedAmount = (id, amount) => {
    setSavingsGoals(prev => 
      prev.map(goal => 
        goal.id === id ? { ...goal, saved: parseFloat(amount) || 0 } : goal
      )
    );
  };
  
  const deleteSavingsGoal = (id) => {
    setSavingsGoals(prev => prev.filter(goal => goal.id !== id));
  };
  
  // Helper functions for analytics
  const getTotalExpensesByCategory = () => {
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  };
  
  const getTotalExpenses = () => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };
  
  const getBudgetUtilization = () => {
    const expensesByCategory = getTotalExpensesByCategory();
    const result = {};
    
    for (const category in budgets) {
      const spent = expensesByCategory[category] || 0;
      const budget = budgets[category];
      result[category] = {
        spent,
        budget,
        percentage: budget > 0 ? Math.round((spent / budget) * 100) : 0
      };
    }
    
    return result;
  };
  
  // Find categories that exceed budget
  const getOverBudgetCategories = () => {
    const utilization = getBudgetUtilization();
    return Object.entries(utilization)
      .filter(([_, data]) => data.budget > 0 && data.spent > data.budget)
      .map(([category, data]) => ({
        category: categories.find(cat => cat.value === category)?.label || category,
        overspent: data.spent - data.budget,
        percentage: data.percentage
      }));
  };
  
  // Prepare pie chart data
  const getPieChartData = () => {
    const expensesByCategory = getTotalExpensesByCategory();
    return Object.entries(expensesByCategory).map(([category, amount]) => ({
      name: categories.find(cat => cat.value === category)?.label || category,
      value: amount
    }));
  };
  
  // Prepare bar chart data for budget comparison
  const getBudgetComparisonData = () => {
    const expensesByCategory = getTotalExpensesByCategory();
    return categories.map(category => ({
      name: category.label,
      budget: budgets[category.value] || 0,
      spent: expensesByCategory[category.value] || 0
    }));
  };
  
  // Category options
  const categories = [
    { value: 'food', label: 'Food & Groceries', color: '#FF8042' },
    { value: 'housing', label: 'Housing & Utilities', color: '#0088FE' },
    { value: 'transportation', label: 'Transportation', color: '#00C49F' },
    { value: 'education', label: 'Education', color: '#FFBB28' },
    { value: 'entertainment', label: 'Entertainment', color: '#FF6B8B' },
    { value: 'other', label: 'Other', color: '#8884D8' }
  ];
  
  // COLORS for pie chart
  const COLORS = categories.map(cat => cat.color);
  
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Personal Finance Tracker
        </h1>
        
        <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
          Track your expenses, set budget goals, and manage your finances effectively during your educational journey.
        </p>
        
        {/* Main Dashboard Content */}
        <div className="bg-card shadow-lg p-6 md:p-8 rounded-xl mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column - Add Expense & Budget Setting */}
            <div className="md:col-span-1">
              <div className="bg-muted p-4 rounded-lg mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Wallet className="text-primary mr-2" size={20} />
                  Add Expense
                </h2>
                
                <form onSubmit={addExpense} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Amount (₹)</label>
                    <input
                      type="number"
                      name="amount"
                      value={newExpense.amount}
                      onChange={handleExpenseChange}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      name="category"
                      value={newExpense.category}
                      onChange={handleExpenseChange}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={newExpense.date}
                      onChange={handleExpenseChange}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <input
                      type="text"
                      name="description"
                      value={newExpense.description}
                      onChange={handleExpenseChange}
                      className="w-full p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-4 py-2 rounded-md flex items-center justify-center"
                  >
                    <Plus size={18} className="mr-2" /> Add Expense
                  </button>
                </form>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <PieChart className="text-primary mr-2" size={20} />
                  Budget Settings
                </h2>
                
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category.value}>
                      <label className="block text-sm font-medium mb-1">{category.label}</label>
                      <div className="flex items-center">
                        <span className="mr-2">₹</span>
                        <input
                          type="number"
                          value={budgets[category.value]}
                          onChange={(e) => updateBudget(category.value, e.target.value)}
                          className="flex-1 p-2 rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                          min="0"
                          step="100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Middle Column - Visualization & Budget Alerts */}
            <div className="md:col-span-2">
              {/* Budget Alert Section */}
              {getOverBudgetCategories().length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="text-red-500 mt-1 mr-3" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-red-700 mb-2">Budget Alert</h3>
                      <p className="text-red-600 mb-2">You've exceeded your budget in the following categories:</p>
                      <ul className="list-disc pl-5 space-y-1 text-red-600">
                        {getOverBudgetCategories().map((item, index) => (
                          <li key={index}>
                            <span className="font-medium">{item.category}</span>: Exceeded by ₹{item.overspent.toLocaleString()} ({item.percentage}% of budget)
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Data Visualization Section */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Pie Chart */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Spending Distribution</h3>
                  {expenses.length === 0 ? (
                    <p className="text-muted-foreground text-center py-12">No expense data available.</p>
                  ) : (
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={getPieChartData()}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {getPieChartData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
                
                {/* Bar Chart */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Budget vs. Spending</h3>
                  {expenses.length === 0 ? (
                    <p className="text-muted-foreground text-center py-12">No expense data available.</p>
                  ) : (
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={getBudgetComparisonData()}
                          margin={{ top: 5, right: 5, left: 0, bottom: 50 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={-45} textAnchor="end" height={50} />
                          <YAxis />
                          <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, '']} />
                          <Legend />
                          <Bar dataKey="budget" name="Budget" fill="#82ca9d" />
                          <Bar dataKey="spent" name="Spent" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Financial Summary & Goals */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Financial Summary */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <BarChart3 className="text-primary mr-2" size={18} />
                    Financial Summary
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 p-3 rounded-md">
                      <span className="text-sm text-muted-foreground">Total Expenses</span>
                      <p className="text-xl font-semibold">₹{getTotalExpenses().toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-white/50 p-3 rounded-md">
                      <span className="text-sm text-muted-foreground">Total Budget</span>
                      <p className="text-xl font-semibold">
                        ₹{Object.values(budgets).reduce((sum, budget) => sum + budget, 0).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="bg-white/50 p-3 rounded-md">
                      <span className="text-sm text-muted-foreground">Number of Expenses</span>
                      <p className="text-xl font-semibold">{expenses.length}</p>
                    </div>
                    
                    <div className="bg-white/50 p-3 rounded-md">
                      <span className="text-sm text-muted-foreground">Average Expense</span>
                      <p className="text-xl font-semibold">
                        ₹{expenses.length ? (getTotalExpenses() / expenses.length).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Savings Goals */}
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <TrendingUp className="text-primary mr-2" size={18} />
                    Savings Goals
                  </h3>
                  
                  {savingsGoals.length === 0 ? (
                    <div>
                      <p className="text-muted-foreground mb-3">No savings goals set yet.</p>
                      <form onSubmit={addSavingsGoal} className="space-y-3">
                        <input
                          type="text"
                          name="name"
                          value={newGoal.name}
                          onChange={handleGoalChange}
                          placeholder="Goal Name"
                          className="w-full p-2 text-sm rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                          required
                        />
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            name="target"
                            value={newGoal.target}
                            onChange={handleGoalChange}
                            placeholder="Target Amount"
                            className="flex-1 p-2 text-sm rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                            min="0"
                            required
                          />
                          <button
                            type="submit"
                            className="bg-primary text-white px-3 py-2 rounded-md flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-32 overflow-y-auto">
                      {savingsGoals.map(goal => (
                        <div key={goal.id} className="bg-white/50 p-2 rounded-md">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{goal.name}</span>
                            <span className="text-sm">{Math.round((goal.saved / goal.target) * 100)}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1 mb-1">
                            <div 
                              className="h-full bg-primary"
                              style={{ width: `${Math.min((goal.saved / goal.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>₹{goal.saved.toLocaleString()}</span>
                            <span>₹{goal.target.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => document.getElementById('new-goal-form').classList.toggle('hidden')}
                        className="text-primary text-sm hover:text-primary/80"
                      >
                        + Add another goal
                      </button>
                      <form id="new-goal-form" onSubmit={addSavingsGoal} className="space-y-2 hidden">
                        <input
                          type="text"
                          name="name"
                          value={newGoal.name}
                          onChange={handleGoalChange}
                          placeholder="Goal Name"
                          className="w-full p-2 text-sm rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                          required
                        />
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            name="target"
                            value={newGoal.target}
                            onChange={handleGoalChange}
                            placeholder="Target Amount"
                            className="flex-1 p-2 text-sm rounded-md border border-muted-foreground/30 focus:outline-none text-gray-900"
                            min="0"
                            required
                          />
                          <button
                            type="submit"
                            className="bg-primary text-white px-3 py-2 rounded-md flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Expenses Table */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>
            
            {expenses.length === 0 ? (
              <p className="text-muted-foreground text-center py-6">No expenses recorded yet. Add your first expense using the form.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-left border-b">
                    <tr>
                      <th className="pb-2">Date</th>
                      <th className="pb-2">Description</th>
                      <th className="pb-2">Category</th>
                      <th className="pb-2 text-right">Amount</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.slice(0, 5).map(expense => (
                      <tr key={expense.id} className="border-b">
                        <td className="py-3">{new Date(expense.date).toLocaleDateString()}</td>
                        <td className="py-3">{expense.description}</td>
                        <td className="py-3">
                          {categories.find(cat => cat.value === expense.category)?.label || expense.category}
                        </td>
                        <td className="py-3 text-right">₹{expense.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td className="py-3 text-right">
                          <button 
                            onClick={() => deleteExpense(expense.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="pt-3 font-semibold">Total</td>
                      <td className="pt-3 text-right font-semibold">
                        ₹{getTotalExpenses().toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalFinanceTracker;