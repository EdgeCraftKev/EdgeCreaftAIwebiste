import React, { useState, useCallback } from 'react';
import MobileMenu from './MobileMenu';

const Header: React.FC = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev: boolean) => !prev);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/EdgeCraft AI Logo.jpg" 
              alt="EdgeCraft AI" 
              className="h-8 sm:h-10 w-auto bg-transparent"
            />
            <p className="text-sm text-gray-600 font-medium hidden sm:block">AI at the Edge of Innovation</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#collabme" className="text-gray-600 hover:text-gray-900 transition-colors">CollabMe</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a 
              href="mailto:hello@edgecraftai.com?subject=General%20Inquiry%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20EdgeCraft%20AI%20and%20your%20services.%0A%0APlease%20get%20in%20touch%20to%20discuss:%0A%0A-%20%0A-%20%0A-%20%0A%0AThank%20you!"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 xl:px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all touch-manipulation text-sm xl:text-base"
              aria-label="Get started with CollabMe"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onToggle={toggleMobileMenu} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;