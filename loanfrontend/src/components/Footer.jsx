import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} EduMadad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;