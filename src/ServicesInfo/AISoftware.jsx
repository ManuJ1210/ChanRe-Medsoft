import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AISoftware() {
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
          AI Based Software
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
         Empowering Your Online Presence
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
          alt="Google Ads illustration"
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
          "ChanRe Medsoft is a strategic ally in the world of AI-Based Software development. In today's digital landscape, connecting with your audience and providing exceptional customer support has taken on a new dimension, and chatbots are at the forefront of this revolution. Our team of expert developers is poised to equip your business with personalized chatbot solutions that redefine the way you engage with your customers.",

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
        Our AI-Based Software Development Process:
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
              title: " Consultation and Needs Assessment: ",
              points: [
                "We begin by comprehensively understanding your business goals and target audience.",
                "Our team evaluates the feasibility of your software concept and its potential impact."
              ]
            },
            {
              title: "Design and Prototyping: ",
              points: [
                "Our expert designers focus on creating chatbot interfaces that resonate with your brand and user expectations.",
                "Prototypes are developed for your feedback and endorsement."
              ]
            },
            {
              title: "Development:",
              points: [
                "Our adept developers breathe life into your software using cutting-edge AI and machine learning technologies.",
                "We ensure seamless integration with your existing systems."
              ]
            },
            {
              title: "Quality Assurance: ",
              points: [
                "Rigorous testing is conducted to identify and address any issues or discrepancies.",
                "We fine-tune the software's responses to ensure precision and relevance."
              ]
            },
            {
              title: "Deployment: ",
              points: [
                "We assist in the seamless integration of your chatbot into your customer support or engagement processes.",
                "Your chatbot is made readily available for your audience."
              ]
            },
            
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
        Why Choose ChanRe Medsoft for AI-Based Software Development?
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
              title: "Proven Expertise :",
              desc1: "Our team boasts seasoned developers with deep expertise in AI technology.",
              desc2: "We stay at the forefront of AI advancements to deliver state-of-the-art solutions."

            },
            {
              title: "Custom Solutions :",
              desc1: "We understand that every business is unique. That's why we offer personalized chatbot solutions to meet your specific needs.",
              desc2: "Our software is designed to enhance user engagement and deliver seamless customer experiences."
           
            },
            {
              title: "Comprehensive Services: ",
              desc1: "From conceptualization and design to development and deployment, we provide end-to-end chatbot development services.",
              desc2: "Ongoing support and optimization ensure your software continues to deliver outstanding results."
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

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cyan-300 font-semibold text-2xl mt-12 mb-4"
        >
       Key Features of Our Chatbots :
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
              title: " 24/7 Customer Support: ",
              points: [
                "Engage with customers around the clock, addressing queries and providing assistance.",
                
              ]
            },
            {
              title: "Personalized Experiences: ",
              points: [
                "Deliver tailored responses and recommendations based on user interactions.",
              
              ]
            },
            {
              title: "Development:",
              points: [
                "Our adept developers breathe life into your software using cutting-edge AI and machine learning technologies.",
                
              ]
            },
            {
              title: "Multilingual Support: ",
              points: [
                "Serve a diverse global audience with multilingual chatbot capabilities.",
              
              ]
            },
            {
              title: "Data Analytics: ",
              points: [
                "Collect and analyze user data to refine chatbot performance and user experiences.",
                
              ]
            },
            {
              title: "Integration: ",
              points: [
                "Seamlessly integrate with websites, apps, and messaging platforms.",
                
              ]
            },
            
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
           Ready to embark on your AI-Based Software development journey? Reach out to us today to schedule a consultation and explore how ChanRe Medsoft can revolutionize your customer engagement in the digital era.
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

export default AISoftware;
