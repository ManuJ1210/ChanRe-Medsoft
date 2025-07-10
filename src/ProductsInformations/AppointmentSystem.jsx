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
  "Online Booking: Patients can conveniently book appointments with their preferred doctors or specialists online, eliminating the need for phone calls or in-person visits.",
  "Waitlist Management: In cases where preferred slots are unavailable, patients can join waitlists and receive notifications if earlier appointments become available due to cancellations.",
  "Feedback and Ratings: Patients can provide feedback and ratings after appointments, helping others choose healthcare providers based on peer reviews.",
];

const benefits = [
  "Accessibility: Patients can book appointments 24/7 from the comfort of their homes or on the go, increasing access to healthcare services.",
  "Time Efficiency: The system reduces administrative tasks for healthcare staff, allowing them to focus more on patient care.",
  "Improved Patient Experience: Patients appreciate the convenience and transparency of online booking, leading to higher satisfaction.",
  "Data Security: Patient information is stored securely, ensuring compliance with healthcare privacy regulations.",
  "Optimized Scheduling: Healthcare providers can manage their schedules more efficiently, reducing overbooking and long wait times.",
];

function AppointmentSyatem() {
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
         Appointment System
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
        Seamless Scheduling, Healthier Tomorrow: Your Appointments, Your Way
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
          A Doctor's Appointment Booking System is a digital platform designed to simplify and streamline the process of scheduling medical appointments with healthcare providers. This system leverages technology to connect patients with doctors, clinics, and hospitals, making it easier for individuals to access healthcare services. Here is a brief description of its key features and benefits:
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
          A Doctor's Appointment Booking System enhances the patient experience, improves healthcare provider efficiency, and fosters better communication between patients and doctors. By offering online booking, real-time availability, and various features to streamline the appointment process, this system plays a vital role in modern healthcare delivery.
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

export default AppointmentSyatem;
