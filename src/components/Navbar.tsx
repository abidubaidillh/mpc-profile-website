'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-text-primary">
              Miracle <span className="text-primary">Private Class</span>
            </h1>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-text-primary hover:text-primary transition-colors duration-200 font-medium">
                Beranda
              </a>
              <a href="#programs" className="text-text-primary hover:text-primary transition-colors duration-200 font-medium">
                Program
              </a>
              <a href="#about" className="text-text-primary hover:text-primary transition-colors duration-200 font-medium">
                Tentang Kami
              </a>
              <a href="#contact" className="text-text-primary hover:text-primary transition-colors duration-200 font-medium">
                Kontak
              </a>
            </div>
          </div>

          {/* Desktop Login Portal Button */}
          <div className="hidden md:block">
            <a 
              href="https://app.miracleprivate.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 px-6 py-2 rounded-lg font-medium inline-block"
            >
              Login Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-primary p-3 -mr-3 touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-text-secondary/20 z-50">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#home" 
                onClick={closeMobileMenu}
                className="block text-text-primary hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 touch-manipulation"
              >
                Beranda
              </a>
              <a 
                href="#programs" 
                onClick={closeMobileMenu}
                className="block text-text-primary hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 touch-manipulation"
              >
                Program
              </a>
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-text-primary hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 touch-manipulation"
              >
                Tentang Kami
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-text-primary hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 touch-manipulation"
              >
                Kontak
              </a>
              
              {/* Mobile Login Portal Button */}
              <div className="pt-4 border-t border-text-secondary/20">
                <a 
                  href="https://app.miracleprivate.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 py-3 px-4 rounded-lg font-medium touch-manipulation"
                >
                  Login Portal
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}