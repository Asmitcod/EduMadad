import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Telugu', code: 'te' },
  { name: 'Bengali', code: 'bn' },
  { name: 'Malayalam', code: 'ml' },
  { name: 'Gujarati', code: 'gu' },
  { name: 'Marathi', code: 'mr' },
  { name: 'Punjabi', code: 'pa' },
  { name: 'Urdu', code: 'ur' },
  { name: 'Kannada', code: 'kn' },
];

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.google?.translate) {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
    
    // Add CSS to fix Google Translate positioning issues and ensure navbar stays visible
    const style = document.createElement('style');
    style.textContent = `
      body {
        top: 0 !important;
        position: static !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Change language manually via Google Translate
  const changeLanguage = (langCode) => {
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Spacer div to move navbar down */}
      <div className="h-12"></div>
      
      <nav className={`fixed top-12 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 w-10 h-10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-eduBlue-500 to-eduTeal-500 bg-clip-text text-transparent">EduMadad</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/repayment-plan-advisor" className="navbar-link">AI Repayment Plan</Link>
              <a href="#calculator" className="navbar-link">EMI Calculator</a>
              <Link to="/personal-finance-tracker" className="navbar-link">Personal Finance Tracker</Link>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode */}
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 bg-muted hover:bg-muted/80 transition-colors relative flex items-center justify-center"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <Sun size={20} className={`absolute transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
                <Moon size={20} className={`transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
              </button>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-1 rounded-full p-2 bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Globe size={20} />
                  <span className="hidden sm:inline text-sm font-medium">Select Language</span>
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-card rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                    {languages.map(({ name, code }) => (
                      <button
                        key={code}
                        onClick={() => {
                          changeLanguage(code);
                          setShowLanguageDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors"
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu icon */}
              <button className="md:hidden rounded-md p-2 bg-muted hover:bg-muted/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hidden Google Translate element */}
        <div id="google_translate_element" className="hidden"></div>
      </nav>
    </>
  );
};

export default Navbar;