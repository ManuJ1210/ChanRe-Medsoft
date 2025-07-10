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
  "Patient registration : Patient registration for both walk-in and phone-in patients",
  "Appointment management : Appointment management with SMS reminders to notify patients of appointments and delays",
  "Outpatient billing : Outpatient billing and tracking with the ability to accept different payment modes",
  "Reporting : Various reports and dashboards to facilitate improved efficiencies through metric measurement",
];



function CDME() {
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
       CDME
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
      Empowering Rheumatology Excellence: CDME - Your Path to Effortless Patient Care and Research
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
          ChanRe Rheumatology & Immunology Center & Research has developed a revolutionary Clinical Data Management Exchange System (CDME) for Rheumatology, an intuitive web-based patient data management system. It offers an array of features to make routine patient care and research, a breeze. With this incredible platform, medical professionals can easily access, store, and share patient clinical data, such as X-rays and clinical photos, from any electronic system having a web-based browser to another with an internet connection.
        </p>
        <br />

        <p className="leading-relaxed">
          For added security and privacy, each unit is independent and only accessible with an individualized login. CDME also features three user types: doctors, administrators, and medical transcriptionists. Doctors can enter patient details and follow-up prescriptions themselves or have medical transcriptionists enter it from written documents or voice recorders. Every editing action is traceable and recorded as required by international standards. CDME also allows for the sharing of integrated clinical data between subscribers for collaborative research purposes, with the data automatically restricted to information that does not uniquely identify patients.
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

export default CDME;
