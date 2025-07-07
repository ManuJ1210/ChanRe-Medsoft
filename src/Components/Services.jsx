import {
  FaAndroid, FaApple, FaLaptopCode, FaHospital,
  FaSearch, FaBullhorn, FaGoogle, FaFacebook
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: <FaLaptopCode size={28} />, name: 'Website Development' },
  { icon: <FaAndroid size={28} />, name: 'Android App Development' },
  { icon: <FaApple size={28} />, name: 'iOS App Development' },
  { icon: <FaHospital size={28} />, name: 'Hospital Software' },
  { icon: <FaSearch size={28} />, name: 'SEO Optimization' },
  { icon: <FaBullhorn size={28} />, name: 'Social Media Marketing' },
  { icon: <FaGoogle size={28} />, name: 'Google Ads' },
  { icon: <FaFacebook size={28} />, name: 'Facebook Ads' },
    { icon: <FaGoogle size={28} />, name: 'Google Ads' },
  { icon: <FaFacebook size={28} />, name: 'Facebook Ads' },
];

function Services() {
  return (
    <section className="relative z-10 px-6 md:px-24 py-24">
      {/* Neon Title */}
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        Our Services
      </h3>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
            {/* Icon bounce */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-cyan-400 text-2xl mb-4 place-items-center"
            >
              {service.icon}
            </motion.div>

            {/* Service Name */}
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
