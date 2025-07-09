import { motion } from "framer-motion";
import { FaStar, FaRocket, FaCode, FaMobileAlt } from "react-icons/fa";

function Quotation() {
  const packages = [
    {
      icon: <FaCode className="text-cyan-400 text-4xl mb-4" />,
      title: "Basic Website",
      price: "₹4,999",
      features: [
        "Static Website",
        "Responsive Design",
        "Up to 4 Pages",
        "Free Hosting (1 Yr)",
      ],
    },
    {
      icon: <FaMobileAlt className="text-purple-400 text-4xl mb-4" />,
      title: "Mobile App",
      price: "₹14,999",
      features: [
        "Android App",
        "UI/UX Design",
        "API Integration",
        "Play Store Deployment",
      ],
    },
    {
      icon: <FaRocket className="text-pink-400 text-4xl mb-4" />,
      title: "Premium Bundle",
      price: "₹24,999",
      features: [
        "Website + App",
        "SEO Optimized",
        "Dashboard & Admin Panel",
        "1 Year Support",
      ],
    },
  ];

  return (
    <section className="mt-12 text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          Request a Quotation
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Select a package or request a custom quote. We’ll respond with a tailored proposal based on your business needs.
        </p>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20"
            >
              {pkg.icon}
              <h2 className="text-2xl font-bold mb-2 text-cyan-300">{pkg.title}</h2>
              <p className="text-3xl font-extrabold text-white mb-4">{pkg.price}</p>
              <ul className="text-blue-100 space-y-1 text-sm">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaStar className="text-purple-400 text-xs" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-400/20 shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center">
            Fill the form to get your custom quote
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Service Interested In (e.g. App + Web)"
              className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Describe your requirements"
              className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 w-full py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition">
              Get My Quote
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Quotation;
