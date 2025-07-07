import { motion } from 'framer-motion';
import {
  FaHospital,
  FaLaptopCode,
  FaAndroid,
  FaSearch
} from 'react-icons/fa';

const products = [
  {
    title: 'HRCS',
    description: 'Healthcare management software',
    icon: <FaHospital size={28} />,
  },
  {
    title: 'Appointment System',
    description: 'Online appointment booking',
    icon: <FaLaptopCode size={28} />,
  },
  {
    title: 'AI Chatbot',
    description: 'Conversational virtual assistant',
    icon: <FaAndroid size={28} />,
  },
  {
    title: 'Database Registry',
    description: 'Medical data management',
    icon: <FaSearch size={28} />,
  },
];

function Products() {
  const repeated = [...products, ...products]; // 🔁 Duplicate for infinite loop

  return (
    <section className="relative z-10 px-6 md:px-24 py-24 overflow-hidden bg-transparent">
   
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

     
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        Our Products
      </h3>

      <div className="relative w-full h-60 overflow-hidden">
        <div className="flex gap-8 w-max animate-infinite-scroll">
          {repeated.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-6 text-center
                     transition-allp-6 mt-10  shadow-md hover:shadow-cyan-400/30 hover:border-cyan-300 transition-all w-[260px] shrink-0"
            >
          
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-cyan-400 text-2xl mb-3 place-items-center"
              >
                {product.icon}
              </motion.div>

             
              <h4 className="text-white text-base font-semibold mb-1">
                {product.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-blue-200">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
