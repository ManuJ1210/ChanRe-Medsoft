import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Header Container */}
      <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50
                      w-[90%] sm:w-[88%] md:w-[80%] lg:w-[65%]
                      backdrop-blur-xl bg-white/10 border border-cyan-500/30
                      rounded-full px-6 sm:px-8 md:px-10 py-4 sm:py-5
                      flex items-center justify-between shadow-lg">
        {/* Logo */}
        <div className="text-white text-base sm:text-lg font-bold">
          ChanReMedSoft
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="text-white/80 hover:text-cyan-300">Home</a>
          <a href="#" className="text-white/80 hover:text-cyan-300">About</a>
          <a href="#" className="text-white/80 hover:text-cyan-300">Product</a>
          <a href="#" className="text-white/80 hover:text-cyan-300">Services</a>
          <a href="#" className="text-white/80 hover:text-cyan-300">Partner</a>
          <a href="#" className="text-white/80 hover:text-cyan-300">Contact</a>
        </div>

        {/* Quote Button (desktop only) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm
                       px-4 py-1.5 rounded-full shadow-md hover:brightness-110"
          >
            Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="fixed top-[5.5rem] left-1/2 transform -translate-x-1/2
                        w-[90%] sm:w-[88%] bg-white/10 backdrop-blur-lg
                        border border-cyan-500/20 rounded-2xl shadow-md
                        text-center text-sm space-y-4 py-5 z-40">
          <a href="#" className="block text-white/90 hover:text-cyan-300">Home</a>
          <a href="#" className="block text-white/90 hover:text-cyan-300">About</a>
          <a href="#" className="block text-white/90 hover:text-cyan-300">Product</a>
          <a href="#" className="block text-white/90 hover:text-cyan-300">Services</a>
          <a href="#" className="block text-white/90 hover:text-cyan-300">Partner</a>
          <a href="#" className="block text-white/90 hover:text-cyan-300">Contact</a>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600
                       text-white px-4 py-2 rounded-full shadow-lg hover:brightness-110"
          >
            Quote
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
