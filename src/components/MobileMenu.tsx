import React from 'react';
import { X, Menu } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }): JSX.Element => {
  const handleLinkClick = React.useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors touch-manipulation"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onToggle} />
          <div className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onToggle}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors touch-manipulation"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-4">
              <div className="space-y-4">
                <a
                  href="#features"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Features
                </a>
                <a
                  href="#solutions"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Solutions
                </a>
                <a
                  href="#collabme"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  CollabMe
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Pricing
                </a>
                <button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 sm:py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all mt-6 text-base sm:text-lg font-semibold touch-manipulation"
                  aria-label="Get started with CollabMe"
                  onClick={() => window.location.href = 'mailto:hello@edgecraftai.com?subject=CollabMe%20-%20Get%20Started%20Request&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI%27m%20ready%20to%20get%20started%20with%20CollabMe%20for%20my%20event.%20Please%20help%20me%20with:%0A%0A-%20Setting%20up%20my%20CollabMe%20account%0A-%20Choosing%20the%20right%20plan%20for%20my%20event%0A-%20Next%20steps%20to%20begin%0A%0AEvent%20details:%0A-%20Event%20type:%20%0A-%20Expected%20date:%20%0A-%20Estimated%20number%20of%20contributors:%20%0A%0AThank%20you!'}
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;