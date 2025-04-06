import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send } from "lucide-react";

// ⛔ Replace with your actual Gemini API key
const API_KEY = `AIzaSyDxRsu2fep2UI51yx8jwkOy49AMbF3Blrg`;

const LoanBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm LoanBuddy. Ask me anything about educational loans 📚💰",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const messagesEndRef = useRef(null);
  const modelRef = useRef(null);

  // Initialize model once
  useEffect(() => {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      modelRef.current = genAI.getGenerativeModel({ 
        model: "gemini-1.5-pro",
        systemInstruction: "You are Loan Buddy, an assistant designed to help students with loan recommendations based on all relevant factors and provide comprehensive information related to financial technology. Your responses should be concise and precise, avoiding unnecessary fluff. Maintain a blend of friendly and professional tone, making the conversation engaging yet informative. Focus on delivering the best possible guidance tailored to the user's needs. Always aim to be supportive, knowledgeable, and approachable—like a smart financial mentor who's also easy to talk to."
      });
    } catch (error) {
      console.error("Error initializing Gemini API:", error);
      setIsError(true);
    }
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim() || !modelRef.current) return;

    const userMsg = { id: Date.now(), text: input, isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setIsError(false);

    try {
      // Create chat generation config
      const generationConfig = {
        temperature: 0.9,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      };

      // Get response from Gemini
      const result = await modelRef.current.generateContent({
        contents: [{ role: "user", parts: [{ text: input }] }],
        generationConfig,
      });

      const response = result.response;
      const text = response.text();

      const botMsg = {
        id: Date.now() + 1,
        text: text,
        isBot: true,
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Gemini API error:", err);
      setIsError(true);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now() + 2, 
          text: "Sorry, I couldn't process your request. Please try again or check your internet connection.", 
          isBot: true 
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chat Icon */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-colors ${
          isOpen ? "bg-red-500" : "bg-blue-600 hover:bg-blue-700"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-3 flex justify-between items-center">
            <div className="font-semibold flex items-center gap-2">
              <MessageCircle size={18} />
              <span>LoanBuddy</span>
            </div>
            <button onClick={toggleChat} className="hover:bg-blue-700 dark:hover:bg-blue-800 p-1 rounded">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[85%] ${
                    msg.isBot 
                      ? "bg-gray-200 dark:bg-gray-700 dark:text-white" 
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            )}
            {isError && (
              <div className="p-2 text-xs text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded mb-3">
                Connection error. Please check your API key or internet connection.
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about student loans..."
              className="flex-1 resize-none p-2 border dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows="1"
            />
            <button
              onClick={sendMessage}
              disabled={isTyping || !input.trim()}
              className={`px-4 rounded-r-md flex items-center justify-center ${
                isTyping || !input.trim() 
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white"
              }`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanBuddy;