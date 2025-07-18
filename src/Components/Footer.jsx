import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-20 py-16 mt-12 bg-white/5 backdrop-blur-lg border-t border-cyan-300/10 text-white shadow-inner shadow-cyan-300/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-blue-200">
        
        <div>
          <h4 className=" text-lg font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            ChanReMedSoft
          </h4>
          <p className="leading-relaxed">
            Innovating healthcare through digital solutions. We provide advanced
            hospital systems and smart patient engagement tools.
          </p>
        </div>

        
        <div>
          <h4 className="text-white text-lg font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/ourproducts" className="hover:text-cyan-300 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/ourservices" className="hover:text-cyan-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-cyan-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-bold mb-3">Contact</h4>
          <p className="flex items-center gap-2 mb-1">
            <FaMapMarkerAlt className="text-cyan-400" /> No. 414/65,1st Block, Rajajinagar, Bangalore-560010
          </p>
          <p className="flex items-center gap-2 mb-1">
            <FaPhone className="text-cyan-400" /> +91 80-42516636
          </p>
          <p className="flex items-center gap-2 mb-3">
            <FaEnvelope className="text-cyan-400" /> marketing@chanrejournals.com
          </p>

          
          <div className="flex gap-4 mt-3 text-xl">
            
            <Link
              to="#"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaGoogle />
            </Link>
            <Link
              to="#"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      
      <div className="text-center text-xs mt-10 text-blue-400 border-t border-cyan-800/40 pt-4">
        © 2025 ChanReMedSoft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
