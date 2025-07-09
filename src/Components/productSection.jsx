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
     icon: <FaDatabase className="text-blue-400 text-4xl mb-4" />,
     Link :"/DatabaseRegistry"
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
   },
];

function Products() {
  const repeated = [...products, ...products]; 

  return (
    <section className="relative z-10 px-6 md:px-24 py-24 h-auto overflow-hidden bg-transparent">
   
      <style>
        {`
          @keyframes scrollSlider {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-infinite-scroll {
            animation: scrollSlider 25s linear infinite;
          }
        `}
      </style>

     
      <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
        Our Products
      </h3>
      <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
        Unleash the Digital Possibilities

      </p>
      <div className="relative w-full h-90 overflow-hidden ">
        <div className="flex gap-8 w-max animate-infinite-scroll ">
          {repeated.map((product, idx) => (
           <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              
              className="group bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-6 text-center
                     transition-allp-6 mt-10  shadow-md hover:shadow-cyan-400/30 hover:border-cyan-300  w-[260px] shrink-0"
            >
          
              <Link to={product.Link}><motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-cyan-400 text-2xl mb-3 place-items-center"
              >
                {product.icon}
              </motion.div>

             
              <h4 className="text-white text-base font-semibold mb-1">
                {product.title}
              </h4>

              
              <p className="text-sm text-blue-200">{product.desc}</p></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
