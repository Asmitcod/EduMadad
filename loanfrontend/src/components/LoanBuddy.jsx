
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ChevronUp, ChevronDown } from 'lucide-react';

const LoanBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm LoanBuddy, your AI assistant. How can I help you today with your educational loan queries?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [idleTimer, setIdleTimer] = useState(null);
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    // Reset idle timer when component mounts
    resetIdleTimer();
    
    // Cleanup idle timer
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom of messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const resetIdleTimer = () => {
    // Clear previous timer
    if (idleTimer) clearTimeout(idleTimer);
    
    // Set new timer for 60 seconds (60000 ms)
    const timer = setTimeout(() => {
      if (!isOpen) {
        // Prompt the user if chat is not open
        setIsOpen(true);
        setTimeout(() => {
          sendBotMessage("I noticed you've been browsing. Do you have any questions about educational loans or need assistance with anything?");
        }, 1000);
      }
    }, 60000);
    
    setIdleTimer(timer);
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    resetIdleTimer();
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    resetIdleTimer();
  };
  
  const sendBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text, isBot: true }]);
      setIsTyping(false);
    }, 1000); // Simulated typing delay
  };
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response based on keywords in user message
    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = '';
      const userText = inputValue.toLowerCase();
      
      if (userText.includes('hello') || userText.includes('hi') || userText.includes('hey')) {
        botResponse = "Hello! How can I help you today with your educational loan queries?";
      } else if (userText.includes('loan eligibility') || userText.includes('qualify')) {
        botResponse = "To check your loan eligibility, we consider factors like your academic record, chosen institution, course, and sometimes family income. Would you like me to guide you through our eligibility checker?";
      } else if (userText.includes('emi') || userText.includes('calculator')) {
        botResponse = "Our EMI calculator can help you estimate your monthly payments. Would you like to try it? You'll need to provide loan amount, interest rate, and tenure.";
      } else if (userText.includes('repayment') || userText.includes('plan')) {
        botResponse = "Our AI Repayment Plan Advisor can create a personalized repayment strategy based on your expected income, expenses, and loan details. Would you like to explore this tool?";
      } else if (userText.includes('thank')) {
        botResponse = "You're welcome! Feel free to reach out if you have any other questions.";
      } else {
        botResponse = "I'd be happy to help with that. Could you provide more details about your query so I can give you the best information?";
      }
      
      sendBotMessage(botResponse);
    }, 1500);
    
    resetIdleTimer();
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 hover:shadow-xl'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat with LoanBuddy'}
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageCircle className="text-white" size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-96 bg-card rounded-lg shadow-xl overflow-hidden flex flex-col animate-slideIn">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-2 mr-2">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-medium">LoanBuddy</h3>
                <p className="text-xs opacity-90">AI Loan Assistant</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/90 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-background/50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isBot 
                      ? 'bg-muted text-foreground rounded-tl-none' 
                      : 'bg-primary text-primary-foreground rounded-tr-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-muted text-foreground rounded-lg rounded-tl-none p-3">
                  <div className="flex space-x-1">
                    <span className="animate-bounce delay-0">•</span>
                    <span className="animate-bounce delay-150">•</span>
                    <span className="animate-bounce delay-300">•</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-3 bg-card border-t">
            <div className="flex items-center">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 bg-background border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                rows="1"
              />
              <button 
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className={`p-2 rounded-r-md ${
                  inputValue.trim() === '' 
                    ? 'bg-muted text-muted-foreground' 
                    : 'bg-primary text-primary-foreground'
                }`}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanBuddy;
