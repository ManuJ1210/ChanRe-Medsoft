import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 md:px-24 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-10 -z-10" />

      
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 lg:text-start sm:text-center md:text-start">
          About Us
        </h2>

        <p className="text-blue-300 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
          ChanRe Medsoft is a medical software provider company, dedicated to enabling smarter care in the healthcare industry for over 25 years.
          We design cutting-edge healthcare IT solutions for organizations of every size. With a focus on value-based care, our platforms help improve workflows and patient outcomes through integrated, customizable medical software.

          <br /><br />
          Our vision is to empower healthcare practitioners to focus more on care and less on complexity — by connecting them with intuitive technology in over <span className="text-purple-400 font-semibold">___+</span> provider facilities across India.
        </p>

        <div className="mt-6 text-sm text-purple-300 italic">
          Empowering the future of digital healthcare.
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center"
      >
        <div className="relative mx-auto w-fit rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md shadow-xl p-1  hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all">
          <img
            className="rounded-xl h-80 object-cover "
            src="/about.png"
            alt="About ChanReMedSoft"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
