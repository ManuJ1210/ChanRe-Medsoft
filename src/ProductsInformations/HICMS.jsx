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
  "Secure Messaging: HICMS allows healthcare professionals to exchange secure messages, ensuring quick and confidential communication between staff members. This feature helps improve coordination, especially during critical situations.",
  "Appointment Scheduling: The system simplifies the appointment scheduling process, allowing staff to efficiently manage patient appointments, reducing wait times, and ensuring a smoother patient experience.",
  "Resource Allocation: HICMS provides tools for managing hospital resources such as rooms, equipment, and staff. It helps optimize resource allocation and ensures that healthcare providers have the necessary tools and facilities to deliver quality care.",
  "Emergency Alerts:  In emergency situations, HICMS can send instant alerts to relevant personnel, ensuring rapid response and effective crisis management.",
  "User-friendly Interface: The system is built with a user-friendly interface, making it easy for staff members to navigate and use. Bootstrap and responsive design ensure that HICMS works seamlessly on various devices and screen sizes.",
  "Customization:  HICMS can be customized to align with the specific needs and workflow of your hospital. Whether it's adding specialized modules or integrating with existing systems, the system is adaptable to your unique requirements.",
  "Reporting and Analytics: It offers robust reporting and analytics features, allowing hospital administrators to gain insights into operations, resource utilization, and performance metrics, aiding in data-driven decision-making.",
  "Security: Security is a top priority in healthcare, and HICMS implements stringent security measures to protect patient data and ensure compliance with privacy regulations like HIPAA.",
];

const benefits = [
  "Improved Efficiency: By streamlining communication and resource management, HICMS enhances overall operational efficiency, leading to better patient care.",
  "Enhanced Patient Experience: The system reduces wait times, ensures accurate information access, and provides better coordination among staff, ultimately improving the patient experience.",
  "Data-driven Decision Making: HICMS provides valuable insights through analytics, enabling informed decisions that can positively impact hospital operations.",
  "Scalability: As your hospital grows, HICMS can scale with you, accommodating changing needs and requirements.",
  "Cost-effective: Investing in HICMS can lead to long-term cost savings by optimizing resource utilization and improving workflows.",
];

function HICMSPage() {
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
          HICMS
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Seamless Care, Efficiently Shared: HICMS – The Pulse of Hospital Communication
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
          HICMS is a robust and user-friendly digital solution designed to enhance
          communication and streamline operations within a healthcare facility. Built
          with modern technologies like PHP, HTML, CSS, Bootstrap, MySQL, and
          JavaScript, it offers features tailored to the needs of hospitals.
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
          HICMS is a powerful and versatile hospital intra communication system that leverages the latest web technologies to enhance the communication and operational efficiency of healthcare facilities. Tailored to the unique needs of hospitals, it offers a secure, user-friendly, and customizable solution that can greatly benefit your organization by improving patient care and streamlining operations.
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

export default HICMSPage;
