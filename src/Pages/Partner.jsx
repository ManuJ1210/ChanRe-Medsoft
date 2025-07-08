import { motion } from "framer-motion";

function Partner() {
  return (
    <section className="mt-12 py-24 px-6 md:px-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex flex-col items-start gap-6 md:gap-10"
      >
        <img
          src="/ibm.svg"
          alt="IBM Silver Partner"
          className="w-36 md:w-44 brightness-300"
        />

        <p className="text-lg md:text-xl text-cyan-400 font-medium leading-relaxed">
          As a Silver Partner of IBM, Chanre Med Soft has authorization to sell IBM software products such as SPSS (Statistical Package for the Social Sciences).
        </p>

        <p className="text-base md:text-lg text-blue-100 leading-relaxed">
        This partnership indicates that Chanre Med Soft has met certain criteria set by IBM and has demonstrated expertise in IBM products and solutions.
        </p>

        <p className="text-base md:text-lg text-blue-100 leading-relaxed">
          As an authorized partner, Chanre Med Soft can provide customers with access to IBM software products, including SPSS, along with support and services related to these products.
        </p>
      </motion.div>
    </section>
  );
}

export default Partner;
