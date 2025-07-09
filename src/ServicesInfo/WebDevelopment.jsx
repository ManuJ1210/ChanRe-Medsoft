import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WebsiteDevelopment() {
  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
   
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          Website Development
        </h2>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
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
      <br/>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
         We start the process by understanding your business goals and objectives and then create a website design that meets those goals. We use the latest web technologies and coding standards to ensure your website is secure, fast, and easy to use
        </motion.p>
        <br />
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
         Once the website design is approved, our web developers will begin coding the website, including custom coding for any features you may require. They will also test the website for any bugs and ensure the website is secure.
        </motion.p>
        <br />
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
         We provide comprehensive website development services for businesses of all sizes. Our services include the development of responsive websites, content management systems, and online marketing campaigns. With our expertise, you can rest assured that your website will be built to the highest quality standards and be optimized for maximum performance.
        </motion.p>
        <br />
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
         We offer website development services to help you create a professional and attractive website for your business. Our experienced developers specialize in creating custom websites with features such as intuitive navigation, search engine optimization, mobile-responsive design, and more. We understand that websites are more than just a way to showcase your business—they're a tool to engage customers and build relationships. That's why our team takes a holistic approach to website development, ensuring that your website looks great, functions smoothly, and helps you reach your business goals.
        </motion.p>
        <br />
         

        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          At ChanRe Medsoft, we take pride in providing world-class website development services that meet your specific business needs. Contact us today to learn more about our website development services and how we can help you create the perfect website for your business.
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
              className="flex items-start gap-3 "
            >
              <FaCheckCircle className="text-purple-400 mt-1" />
              <span><strong className="text-cyan-300">{title}:</strong> {desc}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
         To start your website development project, contact us for a consultation and discover how ChanRe Medsoft can help your business thrive in the digital age.
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