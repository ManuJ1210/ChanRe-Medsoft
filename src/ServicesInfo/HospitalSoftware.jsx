import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function HospitalSoftware() {
  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6">
          Hospital Software 
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Empowering Healthcare, One Software Solution
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <img
          src="/Webdevelopment.png"
          alt="Android app development flow"
          className="rounded-xl shadow-xl border p-2 border-purple-500/20 max-w-full h-auto"
          width="900"
          height="400"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-blue-100 text-lg md:text-xl leading-relaxed space-y-8"
      >
        {[
          "In today's dynamic healthcare landscape, the role of technology in enhancing patient care and optimizing hospital operations cannot be overstated. Our team of experienced developers is here to empower healthcare providers with tailored software solutions that are designed to streamline processes, improve patient outcomes, and ensure regulatory compliance.",
          "ChanRe Medsoft offers this pivotal hospital software solution to empower healthcare providers with a robust platform that enhances the quality of patient care. By digitizing patient information and automating administrative tasks, it lightens the administrative burden on your staff, allowing them to focus more on patient care.",
          "Our software doesn't stop at administrative efficiency; it extends to clinical operations, ensuring smoother workflows, better coordination among medical teams, and quicker access to patient records. This translates to improved patient care, as healthcare professionals can make more informed decisions.",
        ].map((text, idx) => (
          <motion.p key={idx} variants={fadeInUp}>
            {text.includes("ChanRe Medsoft") ? (
              <span>
                At <span className="text-purple-300 font-semibold">ChanRe Medsoft</span>, we understand that every business has unique needs. Our apps are custom-made to fit your specific requirements, ensuring an amazing user experience.
              </span>
            ) : (
              text
            )}
          </motion.p>
        ))}

        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-300 font-semibold text-2xl mt-12 mb-4"
        >
         Key Features and Functions of Hospital Software:
        </motion.h3>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-3 mt-3"
        >
          {[
            {
              title: "Patient Management",
            },
            {
              title: "Electronic Health Records (EHR)",
            },
            {
              title: "Billing and Invoicing",
            },
             {
              title: "Appointment and Queue Management",
            },
            {
              title: "Clinical Workflow Management",
            },
            {
              title: "Inventory and Pharmacy Management",
            },
             {
              title: "Medical Billing and Insurance Claims",
            },
            {
              title: "Analytics and Reporting",
            },
            {
              title: "Security and Compliance",
            },
             {
              title: "Integration with Medical Devices",
            },
            {
              title: "Mobile Accessibility",
            },
            {
              title: "Patient Engagement"
            }
          ].map(({ title }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-purple-400 mt-1 text-xl min-w-[20px]" />
                <div className="space-y-1 text-blue-100">
                  <h4 className="text-lg font-semibold text-cyan-300">{title}</h4>
                  
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-300 font-semibold text-2xl mt-12 mb-4"
        >
          ChanRe Medsoft, Hospital Software Development Process:
        </motion.h3>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-3 mt-3"
        >
          {[
            {
              title: "Needs Assessment:",
              points: [
                "We commence with a thorough understanding of your hospital's objectives and challenges.",
                "Our team evaluates the feasibility of your software concept and its potential impact."
              ]
            },
            {
              title: "Design and Prototyping",
              points: [
                "Our expert designers focus on creating user-friendly interfaces tailored to healthcare workflows.",
                "Prototypes are developed to facilitate your feedback and ensure alignment with your vision."
              ]
            },
            {
              title: "Development",
              points: [
                "Leveraging the latest technologies, our skilled developers bring your hospital software to life.",
                "We ensure seamless integration with your existing systems."
              ]
            },
            {
              title: "Quality Assurance",
              points: [
                "Rigorous testing is conducted to identify and rectify any issues or vulnerabilities.",
                "Usability testing ensures that healthcare professionals can navigate the software seamlessly."
              ]
            },
            {
              title: "Deployment",
              points: [
                "We assist with the seamless integration of your software into your hospital's daily operations.",
                "Your hospital software is made readily accessible for your staff."
              ]
            },
            {
              title: "Support and Maintenance",
              points: [
                "We provide ongoing support, updates, and maintenance to ensure your app remains competitive."
              ]
            }
          ].map((section, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="font-bold text-purple-300 text-xl mb-2">
                {section.title}:
              </h4>
              <ul className="pl-6 list-disc space-y-2 text-blue-100">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
         If you're eager to discuss your hospital software development project, please don't hesitate to reach out to us today and schedule a consultation. Let [Your Organization Name] empower your healthcare institution to excel in the digital age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-pink-500/40 transition-all">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HospitalSoftware;
