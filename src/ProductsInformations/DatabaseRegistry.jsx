import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    },
  };
  return variants;
};

const features = [
  "Data Entry and Storage: Users can input their data into the registry, categorize it as needed, and securely store it within the system. The platform ensures data integrity and allows for easy retrieval.",
  "Customizable Duration: Users can set the retention period for their data, ranging from days to years. The system automatically archives or deletes data once the specified duration elapses, helping users adhere to data management policies.",
  "Export Options: The database registry offers export capabilities, allowing users to extract their stored data in both CSV and PDF formats. This feature facilitates data analysis, reporting, and sharing.",
  "Data Privacy and Security: Robust data security measures are implemented to safeguard sensitive information, ensuring compliance with privacy regulations and user trust.",
  "User-Friendly Interface: The platform features an intuitive and easy-to-use interface that simplifies data entry, retrieval, and export operations.",
];

const benefits = [
  "Data Organization: Users can maintain an organized repository of their data, eliminating the hassle of scattered files and documents.",
  "Data Retention Control: Set retention periods to comply with data management regulations, reducing the risk of data mishandling.",
  "Data Analysis: Export data in CSV or PDF formats for detailed analysis, reporting, or sharing with stakeholders.",
  "Efficiency: Streamline data-related tasks and reduce the time and effort required to manage and analyze information.",
  "Data-Driven Decisions: Access to stored data and analysis tools enables users to make informed decisions and identify trends and patterns.",
];

function DatabaseRegistry() {
  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
        Database Registry
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
        Data Management Made Simple: Your Data, Your Control, Your Insights
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12 text-blue-200 text-center md:text-left"
      >
        <p className="leading-relaxed">
          Database Registry is a digital platform that empowers users to securely enter, store, and manage their data for a specified duration, while also providing the flexibility to export the stored information in CSV or PDF formats for in-depth analysis. This user-friendly tool offers a convenient and organized way to handle data, making it valuable for individuals and businesses alike.
        </p>
      </motion.div>

      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        Key Features
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
      >
        {features.map((feature, i) => {
          const [title, desc] = feature.split(":");
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={`feature-${i}`}
                className="peer hidden"
              />
              <label
                htmlFor={`feature-${i}`}
                className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-purple-400/20 shadow-lg shadow-purple-500/10 rounded-xl peer-checked:collapse-open cursor-pointer"
              >
                <div className="collapse-title font-semibold text-cyan-300 flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  {title}
                </div>
                <div className="collapse-content text-sm text-blue-100 leading-relaxed">
                  {desc?.trim() || ""}
                </div>
              </label>
            </div>
          );
        })}
      </motion.div>

      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
      >
        Benefits
      </motion.h2>

      <motion.div
  variants={fadeIn("up", 0.6)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
>
  {benefits.map((benefit, i) => {
    const title = benefit.split(":")[0];
    const content = benefit.split(":")[1] || benefit;

    return (
      <div key={i}>
        <input
          type="checkbox"
          id={`benefit-${i}`}
          className="peer hidden"
        />
        <label
          htmlFor={`benefit-${i}`}
          className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg shadow-cyan-500/10 rounded-xl peer-checked:collapse-open cursor-pointer"
        >
          <div className="collapse-title font-semibold text-purple-300 flex items-center gap-2">
            <FaCheckCircle className="text-purple-400" />
            {title}
          </div>
          <div className="collapse-content text-sm text-blue-100 leading-relaxed">
            {content.trim()}
          </div>
        </label>
      </div>
    );
  })}
</motion.div>


      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-blue-300 text-center md:text-left"
      >
        <h2 className="text-2xl font-bold mb-3 text-cyan-400">Conclusion</h2>
        <p className="leading-relaxed">
       A Database Registry is a valuable tool that empowers users to efficiently manage their data, adhere to data retention policies, and leverage their information for analysis and decision-making. With user-friendly features, data export options, and secure storage, it serves as a reliable solution for individuals and businesses seeking effective data management and analysis capabilities.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center gap-4 mt-10"
      >
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-purple-500/40">
          Quotation
        </button>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-green-400/40">
          Contact
        </button>
      </motion.div>
    </section>
  );
}

export default DatabaseRegistry;
