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
                  href="#collabme"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Product
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Market
                </a>
                <a
                  href="mailto:hello@edgecraftai.com?subject=Investment%20Opportunity%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20investment%20opportunities.%20Please%20send%20me%20the%20pitch%20deck.%0A%0AThank%20you!"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Investors
                </a>
                <a
                  href="#team"
                  className="block text-gray-600 hover:text-gray-900 transition-colors py-3 text-base sm:text-lg touch-manipulation"
                  onClick={handleLinkClick}
                >
                  Team
                </a>
                <button 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 sm:py-4 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all mt-6 text-base sm:text-lg font-semibold touch-manipulation"
                  aria-label="Investment opportunity"
                  onClick={() => window.location.href = 'mailto:hello@edgecraftai.com?subject=Series%20A%20Investment%20-%20EdgeCraft%20AI&body=Hi%20EdgeCraft%20AI%20team,%0A%0AI%27m%20interested%20in%20discussing%20the%20Series%20A%20investment%20opportunity.%20Please%20send%20me%20the%20pitch%20deck.%0A%0AThank%20you!'}
                >
                  Invest Now
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