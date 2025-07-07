import { motion } from 'framer-motion';
import {
  FaHospitalAlt, FaCalendarCheck, FaRobot, FaDatabase,
  FaQuestionCircle, FaHeartbeat, FaExchangeAlt, FaCapsules
} from 'react-icons/fa';
import { Link } from 'react-router';

const products = [
  {
    title: "HICMS",
    desc: "HICMS(Hospital Intra Communication Management System) is a robust and user-friendly system designed to enhance communication within a healthcare facility",
    icon: <FaHospitalAlt className="text-cyan-400 text-4xl mb-4" />,
    Link :"/HICMSPage"
    
  },
  {
    title: "Appointment System",
    desc: "Doctor's Appointment Booking System is a digital platform designed to simplify and streamline the process of scheduling medical appointments with healthcare providers",
    icon: <FaCalendarCheck className="text-purple-400 text-4xl mb-4" />,
    Link :"/AppointmentSystem"
  },
  {
    title: "AI Chatbot",
    desc: "Our AI Chatbot, is a cutting-edge conversational solution designed to revolutionize the way you engage with your customers and streamline your business operations",
    icon: <FaRobot className="text-pink-400 text-4xl mb-4" />,
    Link:"/AIChatbot"
  },
  {
    title: "Database Registry",
    desc: "Database Registry is a versatile digital platform that empowers users to securely enter, store, while also providing the flexibility to export the stored information in CSV or PDF formats.",
    icon: <FaDatabase className="text-blue-400 text-4xl mb-4" />
  },
  {
    title: "Online Quiz",
    desc: "Our Online Quiz System is your gateway to engaging quizzes and assessments that promise to entertain, educate, and inspire.",
    icon: <FaQuestionCircle className="text-emerald-400 text-4xl mb-4" />
  },
  {
    title: "HIMS",
    desc: "ChanRe MedSoft provides a powerful solution to meet the needs of both hospitals and patients.",
    icon: <FaHeartbeat className="text-indigo-400 text-4xl mb-4" />
  },
  {
    title: "CDME",
    desc: "ChanRe Med Soft has developed a revolutionary Clinical Data Management Exchange System for Rheumatology",
    icon: <FaExchangeAlt className="text-yellow-400 text-4xl mb-4" />
  },
  {
    title: "Pharmacy Management",
    desc: "In the ever-evolving healthcare landscape, efficient and precise management of pharmacy operations is paramount.",
    icon: <FaCapsules className="text-rose-400 text-4xl mb-4" />
  }
];

function OurProducts() {
  return (
    <section className="relative z-10 px-6 md:px-20 py-24 mt-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
          Our Products
        </h2>
        <p className="text-blue-300 text-sm md:text-base">
          Unleash the Digital Possibilities
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-6 text-center
                       shadow-lg hover:shadow-cyan-400/30 transition-all"
          >
            <div className="flex justify-center">
              {product.icon}
            </div>
            <h4 className="text-white font-semibold text-lg mb-2">
              {product.title}
            </h4>
            <p className="text-blue-200 text-sm mb-5">
              {product.desc}
            </p>
            <Link to={product.Link}><a
              href="#"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 
                         rounded-full text-xs font-semibold shadow-md hover:brightness-110"
            >
              Learn More
            </a></Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurProducts;
