import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] md:w-[85%] lg:w-[70%] xl:w-[60%] 
                      backdrop-blur-lg bg-white/10 border border-cyan-500/30 rounded-full 
                      px-4 py-2 sm:px-5 sm:py-3 flex items-center justify-between shadow-xl max-w-full">
        <Link to="/">
          <div className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wide">
            ChanReMedSoft
          </div>
        </Link>

        <div className="hidden md:flex gap-4 text-sm sm:text-base items-center">
          <Link to="/" className="text-white/80 hover:text-cyan-300 transition">Home</Link>
          <Link to="/about" className="text-white/80 hover:text-cyan-300 transition">About</Link>
          <Link to="/OurServices" className="text-white/80 hover:text-cyan-300 transition">Services</Link>
          <Link to="/ourproducts" className="text-white/80 hover:text-cyan-300 transition">Product</Link>
          <Link to="/partner" className="text-white/80 hover:text-cyan-300 transition">Partner</Link>
          <Link to="/contact" className="text-white/80 hover:text-cyan-300 transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            to="/Quotation"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm 
                       px-3 sm:px-4 py-2 rounded-full shadow-md hover:brightness-110 transition whitespace-nowrap"
          >
            Quote
          </Link>
        </div>

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
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-[4.8rem] left-1/2 -translate-x-1/2 mt-3 
                        w-[90vw] max-w-sm md:hidden bg-white/10 backdrop-blur-lg 
                        border border-cyan-500/20 rounded-2xl shadow-xl 
                        text-center text-sm space-y-4 py-6 px-4 z-40">
          <Link to="/" className="block text-white/90 hover:text-cyan-300 transition">Home</Link>
          <Link to="/about" className="block text-white/90 hover:text-cyan-300 transition">About</Link>
          <Link to="/OurServices" className="block text-white/90 hover:text-cyan-300 transition">Services</Link>
          <Link to="/ourproducts" className="block text-white/90 hover:text-cyan-300 transition">Product</Link>
          <Link to="/partner" className="block text-white/90 hover:text-cyan-300 transition">Partner</Link>
          <Link to="/contact" className="block text-white/90 hover:text-cyan-300 transition">Contact</Link>
          <Link
            to="/Quotation"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm 
                       px-5 py-2 rounded-full shadow-lg hover:brightness-110 transition"
          >
            Quote
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
