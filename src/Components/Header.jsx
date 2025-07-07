import { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50
                      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[60%]
                      backdrop-blur-lg bg-white/10 border border-cyan-500/30
                      rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5
                      flex items-center justify-between shadow-xl">
        
       
        <Link to="/"><div className="text-white text-lg sm:text-xl font-bold tracking-wide">
          ChanReMedSoft
        </div></Link>

        
        <div className="hidden md:flex gap-6 text-sm sm:text-base items-center">
          <Link to="/" className="text-white/80 hover:text-cyan-300 transition">Home</Link>
          <Link to="/about" className="text-white/80 hover:text-cyan-300 transition">About</Link>
          <Link to="/ourproducts" className="text-white/80 hover:text-cyan-300 transition">Product</Link>
          <a href="#services" className="text-white/80 hover:text-cyan-300 transition">Services</a>
          <a href="#partner" className="text-white/80 hover:text-cyan-300 transition">Partner</a>
          <a href="#contact" className="text-white/80 hover:text-cyan-300 transition">Contact</a>
        </div>

  
        <div className="hidden md:block">
          <a
            href="#quote"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base
                       px-5 py-2 rounded-full shadow-md hover:brightness-110 transition"
          >
            Quote
          </a>
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
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </nav>

    
      {menuOpen && (
        <div className="fixed top-[5.2rem] left-1/2 transform -translate-x-1/2
                        w-[95%] sm:w-[90%] md:hidden bg-white/10 backdrop-blur-lg
                        border border-cyan-500/20 rounded-2xl shadow-xl
                        text-center text-sm space-y-4 py-6 px-4 z-40">
          <a href="#home" className="block text-white/90 hover:text-cyan-300 transition">Home</a>
          <a href="#about" className="block text-white/90 hover:text-cyan-300 transition">About</a>
          <a href="#product" className="block text-white/90 hover:text-cyan-300 transition">Product</a>
          <a href="#services" className="block text-white/90 hover:text-cyan-300 transition">Services</a>
          <a href="#partner" className="block text-white/90 hover:text-cyan-300 transition">Partner</a>
          <a href="#contact" className="block text-white/90 hover:text-cyan-300 transition">Contact</a>
          <a
            href="#quote"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600
                       text-white px-5 py-2 rounded-full shadow-lg hover:brightness-110 transition"
          >
            Quote
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
