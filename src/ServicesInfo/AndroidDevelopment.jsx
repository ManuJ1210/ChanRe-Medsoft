import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AndroidAppDevelopment() {
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
          Android App Development
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Turning Ideas into Apps
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
          "In today’s digital age, having a strong online presence is essential for any business. That’s why our team of experienced Android developers is here to help you take your business to the next level.",
          "At ChanRe Medsoft, we understand that every business has unique needs. Our apps are custom-made to fit your specific requirements, ensuring an amazing user experience."
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
          Our Android App Development Process:
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
              title: "Consultation and Idea Evaluation",
              points: [
                "We begin by understanding your business goals and app ideas.",
                "Our team evaluates the feasibility and potential of your concept."
              ]
            },
            {
              title: "Design and Prototyping",
              points: [
                "Our designers create intuitive, user-friendly app interfaces.",
                "We develop prototypes for your feedback and approval."
              ]
            },
            {
              title: "Development",
              points: [
                "Our developers bring your app to life using the latest Android technologies.",
                "We ensure compatibility with various Android devices and OS versions."
              ]
            },
            {
              title: "Quality Assurance",
              points: [
                "Rigorous testing is conducted to identify and fix any bugs or issues.",
                "We perform usability testing to guarantee a seamless user experience."
              ]
            },
            {
              title: "Deployment",
              points: [
                "We assist with app store submission and optimization for maximum visibility.",
                "Your app is made available to your target audience."
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

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-300 font-semibold text-2xl mt-12 mb-4"
        >
          Why Choose ChanRe Medsoft for Android App Development?
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
              title: "Expertise :",
              desc1: "Our team consists of seasoned Android developers with years of hands-on experience.",
              desc2: "We stay up-to-date with the latest trends and technologies in the Android app development ecosystem."
            },
            {
              title: "Custom Solutions :",
              desc1: "We understand that every business is unique.",
              desc2: "That’s why we offer tailor-made solutions to meet your specific requirements."
            },
            {
              title: "Comprehensive Services :",
              desc1: "From concept and design to development and deployment, we provide end-to-end app development services.",
              desc2: "We also offer post-launch support and maintenance."
            }
          ].map(({ title, desc1, desc2 }, index) => (
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
                  <p className="leading-relaxed text-base">{desc1}</p>
                  <p className="leading-relaxed text-base">{desc2}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          Ready to discuss your Android app development project? Contact us today to schedule a consultation and learn how ChanRe Medsoft can help your business thrive in the digital era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link to="/Contact">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-pink-500/40 transition-all">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AndroidAppDevelopment;
