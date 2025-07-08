import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WebsiteDevelopment() {
  return (
    <section className="px-6 py-16 md:px-20  text-white min-h-screen mt-12">
   
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">
          Website Development
        </h2>
        <p className="mt-4 text-blue-200 text-sm md:text-base max-w-2xl mx-auto">
          Empowering Your Online Presence with Custom Digital Solutions
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
          src="Webdevelopment.png"
          alt="Web development illustration"
          className="rounded-xl shadow-xl border p-2 border-purple-500/20 max-w-full h-auto"
          width="900"
          height="400"
        />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-blue-100 text-md md:text-lg leading-relaxed"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          At <span className="text-purple-300 font-semibold">ChanRe MedSoft</span>, we help you build modern websites that align with your business goals. From planning and design to development and maintenance, our expert team ensures secure, scalable, and visually stunning solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          Our development process includes:
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="list-disc list-inside ml-4 space-y-2"
        >
          {['Planning: Understanding client requirements and goals.', 'Design: Creating wireframes and design mockups.', 'Development: Coding using modern standards and frameworks.', 'Launch: Testing and going live with client approval.', 'Maintenance: Ongoing updates and support.'].map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <strong className="text-gradient">{item.split(':')[0]}</strong>: {item.split(':')[1]}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          Our team uses best practices in:
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-3 mt-3"
        >
          {[
            ['Custom Solutions', 'Built to match your unique goals and identity.'],
            ['Innovative Design', 'Visually stunning and user-friendly interfaces.'],
            ['Technical Excellence', 'Fast-loading, responsive, and secure code base.'],
            ['Security', 'Data privacy and compliance with standards like HIPAA.']
          ].map(([title, desc], idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-3"
            >
              <FaCheckCircle className="text-purple-400 mt-1" />
              <span><strong>{title}:</strong> {desc}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          Whether you're a startup or an established business, our goal is to empower your digital presence with top-tier website development. Let us bring your vision to life!
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