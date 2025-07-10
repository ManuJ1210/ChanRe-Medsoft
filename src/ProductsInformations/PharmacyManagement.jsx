import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  {
    title: "Inventory Management",
    list: [
      "Track medications and supplies with precision.",
      "Manage stock levels, expiration dates, and reorder points effortlessly.",
    ],
  },
  {
    title: "Prescription Processing",
    list: [
      "Streamline prescription intake, processing, and verification.",
      "Ensure accuracy and compliance with prescription regulations.",
    ],
  },
  {
    title: "Patient Data Management",
    list: [
      "Maintain comprehensive patient profiles and medication histories.",
      "Facilitate medication adherence and improve patient care.",
    ],
  },
  {
    title: "Billing and Insurance Integration",
    list: [
      "Simplify billing processes and insurance claims.",
      "Minimize errors and expedite reimbursement.",
    ],
  },
  {
    title: "Reporting and Analytics",
    list: [
      "Access real-time data and generate reports for informed decision-making.",
      "Monitor sales, trends, and compliance with ease.",
    ],
  },
  {
    title: "Security and Compliance",
    list: [
      "Protect patient data and maintain compliance with healthcare regulations.",
      "Implement robust security measures to safeguard sensitive information.",
    ],
  },
];
const Experiences = [
  {
    title: "Extensive Experience:",
    list: [
      "Our team boasts years of experience in pharmacy management system development.",
      "We have successfully implemented solutions for pharmacies of all sizes, from independent stores to hospital pharmacies.",
    ],
  },
  {
    title: "Customized Solutions:",
    list: [
      "We understand that each pharmacy is unique, with distinct needs and processes. Our approach is to provide tailored pharmacy management systems that align perfectly with your specific requirements.",
      "Our solutions are designed to optimize your pharmacy's efficiency, accuracy, and profitability.",
    ],
  },
  {
    title: "Patient Data Management",
    list: [
      "Maintain comprehensive patient profiles and medication histories.",
      "Facilitate medication adherence and improve patient care.",
    ],
  },
  {
    title: "Comprehensive Services:",
    list: [
      "From system design and development to implementation, training, and ongoing support, we offer end-to-end pharmacy management solutions.",
      "We stay updated with the latest healthcare regulations and industry best practices to keep your pharmacy compliant and competitive.",
    ],
  },
  
];

function PharmacyManagement() {
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
          Pharmacy Management
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Prescribing Efficiency, Delivering Care: Your Pharmacy Management Solution
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
          ChanRe MedSoft's team of dedicated professionals specializes in crafting state-of-the-art Pharmacy Management Systems that streamline workflows, enhance patient care, and ensure compliance with regulatory standards. It enables pharmacists and medical staff to keep track of products and services, manage customers and orders, and streamline communications with external stakeholders such as insurance providers.
        </p>
      </motion.div>

      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        Our Pharmacy Management System Features:
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
      >
        {features.map((feature, i) => (
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
                {feature.title}
              </div>
              <div className="collapse-content text-sm text-blue-100 leading-relaxed">
                <ul className="list-disc ml-6">
                  {feature.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
        ))}
      </motion.div>

      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
       Why Choose ChanRe Medsoft for Pharmacy Management System Development?
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
      >
        {Experiences.map((experience, i) => (
          <div key={i}>
            <input
              type="checkbox"
              id={`experience-${i}`}
              className="peer hidden"
            />
            <label
              htmlFor={`experience-${i}`}
              className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-purple-400/20 shadow-lg shadow-purple-500/10 rounded-xl peer-checked:collapse-open cursor-pointer"
            >
              <div className="collapse-title font-semibold text-cyan-300 flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" />
                {experience.title}
              </div>
              <div className="collapse-content text-sm text-blue-100 leading-relaxed">
                <ul className="list-disc ml-6">
                  {experience.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </label>
          </div>
        ))}
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
         The system is designed to provide a comprehensive view of patient information, including patient history, current medications, orders, and billing. Additionally, it should offer features for inventory control and tracking, order entry and processing, prescription processing, refill requests, and reporting. Furthermore, the system should provide secure access to clinical information, drug interaction alerts, and detailed patient records.
        </p>
        <br />
        <p className="leading-relaxed">
         Contact us today to schedule a consultation. Discover how ChanRe Medsoft can empower your pharmacy with advanced technology, efficiency, and compliance.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center gap-4 mt-10"
      >
        <Link to="/Quotation"><button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-purple-500/40">
          Quotation
        </button></Link>
        <Link to="/Contact"><button className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-green-400/40">
          Contact
        </button></Link>
      </motion.div>
    </section>
  );
}

export default PharmacyManagement;
