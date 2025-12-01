import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'For Business', href: '#business' },
    { name: 'The Program', href: '#program' },
    { name: 'For Students', href: '#students' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://images2.imgbox.com/a9/2b/wwL8umOq_o.jpg" 
            alt="NMHS Logo" 
            className="h-10 w-10 rounded-lg object-contain bg-white" 
          />
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            NMHS <span className="text-nmgreen-600">Pathways</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`font-medium hover:text-nmgreen-500 transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onJoinClick}
            className="bg-nmgold-500 hover:bg-nmgold-400 text-slate-900 font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
          >
            Become a Partner
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full mt-4 bg-nmgreen-700 text-white font-bold py-3 rounded-lg"
            >
              Become a Partner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;