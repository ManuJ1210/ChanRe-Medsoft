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
import { Link } from "react-router";

const services = [
  { icon: <FaLaptopCode size={28} color="#3B82F6" />, name: "Website Development", Link:"/"  },
  { icon: <FaAndroid size={28} color="#3DDC84" />, name: "Android App Development", Link:"/"  },
  { icon: <FaApple size={28} color="#A2AAAD" />, name: "iOS App Development", Link:"/"  },
  { icon: <FaHospital size={28} color="#EC4899" />, name: "Hospital Software", Link:"/"  },
  { icon: <FaSearch size={28} color="#F59E0B" />, name: "SEO Optimization", Link:"/"  },
  { icon: <FaBullhorn size={28} color="#10B981" />, name: "Social Bookmarking", Link:"/"  },
  { icon: <FaGoogle size={28} color="#EA4335" />, name: "Google Ads", Link:"/"  },
  { icon: <FaFacebook size={28} color="#1877F2" />, name: "Facebook Ads", Link:"/"  },
  { icon: <FaChartLine size={28} color="#6366F1" />, name: "SEM (Search Engine Marketing)", Link:"/"  },
  { icon: <FaRobot size={28} color="#8B5CF6" />, name: "AI-Based Software", Link:"/"  }
];

function Services() {
  return (
    <section className="relative z-10 px-6 md:px-24 py-24">

      <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-6">
        Our Services
      </h3>
      <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
        Web Application, Android Application and Digital Marketing Services
      </p>

      <Link to={services.Link}></Link><div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-6 text-center
                        shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all"
          >
        
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-cyan-400 text-2xl mb-4 place-items-center"
            >
              {service.icon}
            </motion.div>

      
            <div className="text-white text-sm md:text-base font-medium tracking-wide">
              {service.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
