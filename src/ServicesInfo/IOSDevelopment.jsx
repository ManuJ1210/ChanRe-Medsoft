import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function IOSDevelopment() {
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
          iOS App Development
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
            Transforming Ideas into Exceptional iOS Experiences
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
          "In the dynamic landscape of today's digital realm, establishing a captivating presence on Apple's iOS platform can be the catalyst for transforming your business. Our team of seasoned iOS developers is here to help you create custom iOS apps that align perfectly with your unique business needs.",
          "We provide a wide range of iOS app development services, from UI/UX design to the development of feature-rich apps. We use the latest technologies, such as Swift and Objective-C, to create apps that offer maximum performance and stability. Furthermore, our developers are well-versed in developing apps for all Apple devices, including the iPhone, iPad, Apple Watch, and Apple TV.With our experienced team of app developers, you can be sure that your app will be reliable, secure, and optimized for the highest user experience."
        ].map((text, idx) => (
          <motion.p key={idx} variants={fadeInUp}>
            {text.includes("ChanRe Medsoft") ? (
              <span>
                
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
         Our iOS App Development Process:
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
              title: "Consultation and Idea Exploration:",
              points: [
                "We kickstart the process by comprehending your business objectives and app concepts.",
                "Our team evaluates the feasibility and potential of your ideas."
              ]
            },
            {
              title: "Design and Prototyping:",
              points: [
                "Our expert designers craft user-friendly app interfaces with a focus on aesthetics and usability.",
                "We develop prototypes to gather your feedback and ensure alignment with your vision."
              ]
            },
            {
              title: "Development",
              points: [
                "Our skilled developers bring your app to life using the latest iOS technologies.",
                "We ensure compatibility across various iOS devices and OS versions."
              ]
            },
            {
              title: "Quality Assurance",
              points: [
                "Thorough testing is conducted to identify and resolve any issues or bugs.",
                "Usability testing guarantees a flawless user experience."
              ]
            },
            {
              title: "Deployment",
              points: [
                "We assist with the app store submission process and optimize your app for maximum visibility.",
                "Your app is made available to your target audience."
              ]
            },
            {
              title: "Support and Maintenance",
              points: [
                "We provide ongoing support, updates, and maintenance to ensure your app remains competitive and secure."
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
          Why Choose ChanRe Medsoft for iOS App Development?
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
              title: "Expertise",
              desc1: "Our team comprises experienced iOS developers who are well-versed in the latest Apple technologies.",
              desc2: "We stay updated with the ever-evolving iOS ecosystem to ensure your app stays ahead of the competition."
            },
            {
              title: "Custom Solutions",
              desc1: "We understand that each business is distinct. That's why we offer personalized solutions to cater to your specific requirements.",
              desc2: "Our apps are designed to provide seamless user experiences, ensuring user retention and satisfaction."
            },
            {
              title: "Comprehensive Services",
              desc1: "From conceptualization and design to development and deployment, we offer end-to-end iOS app developmentservices.",
              desc2: "We also provide post-launch support and maintenance to keep your app running smoothly."
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
                  {desc2 && <p className="leading-relaxed text-base">{desc2}</p>}
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
          If you have an iOS app development project you'd like to discuss, contact us now to arrange a consultation. Let ChanRe Medsoft  help your business succeed in the digital arena.
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

export default IOSDevelopment;
