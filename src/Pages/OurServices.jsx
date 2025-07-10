import {
  FaLaptopCode,
  FaAndroid,
  FaApple,
  FaHospital,
  FaSearch,
  FaBullhorn,
  FaGoogle,
  FaFacebook,
  FaRobot,
  FaChartLine
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { icon: <FaLaptopCode size={28} color="#3B82F6" />, name: "Website Development", Link:"/WebsiteDevelopment"  },
  { icon: <FaAndroid size={28} color="#3DDC84" />, name: "Android App Development", Link:"/AndroidAppDevelopment"  },
  { icon: <FaApple size={28} color="#A2AAAD" />, name: "iOS App Development", Link:"/IOSDevelopment"  },
  { icon: <FaHospital size={28} color="#EC4899" />, name: "Hospital Software", Link:"/HospitalSoftware"  },
  { icon: <FaSearch size={28} color="#F59E0B" />, name: "SEO Optimization", Link:"/SEO"  },
  { icon: <FaBullhorn size={28} color="#10B981" />, name: "Social Bookmarking", Link:"/SocialBookmarking"  },
  { icon: <FaGoogle size={28} color="#EA4335" />, name: "Google Ads", Link:"/GoogleAds"  },
  { icon: <FaFacebook size={28} color="#1877F2" />, name: "Facebook Ads", Link:"/FacebookAds"  },
  { icon: <FaChartLine size={28} color="#6366F1" />, name: "SEM (Search Engine Marketing)", Link:"/SEM"  },
  { icon: <FaRobot size={28} color="#8B5CF6" />, name: "AI-Based Software", Link:"/AISoftware"  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          Our Services
        </h2>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Web Application, Android Application and Digital Marketing Services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg hover:shadow-cyan-400/30 transition-all"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
            <Link to={service.Link}>
              <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110">
                Learn More
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
