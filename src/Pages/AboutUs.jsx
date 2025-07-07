import { motion } from 'framer-motion';

const sections = [
  {
    title: "Serves Thousands of Providers:",
    content: `ChanRe Medsoft aims to create a future where healthcare practitioners have more time to focus on their practice. To achieve this, they have continuously expanded their reach to bring their software solutions closer to their target market. Over the years, they managed to connect practitioners at more than __ provider facilities across the country.`,
    imgSrc: "/A1.png",
  },
  {
    title: "Strategic Relationships:",
    content: `ChanRe Medsoft collaborates with some of the most reputable technology, service and software providers around the country. This way, we can create better software solutions for our clients.`,
    imgSrc: "/A2.png",
  },
  {
    title: "Large Workforce Dedicated to Excellence:",
    content: ` ChanRe Medsoft has an adequate workforce, having diverse experiences in healthcare, our staff members bring to the table, varying ideas that make developing e-health software much more efficient.`,
    imgSrc: "/A3.png",
  },
  {
    title: "Continuous Software Support:",
    content: `Whether you are having difficulties implementing our software or are simply looking to get more from our technology, we will give you the resources you need. We demonstrate on webinars and live demo in your sector to help you understand more about our products.`,
    imgSrc: "/A4.png",
  }
];

function AboutUs() {
  return (
    <>

      <section className="relative z-10 px-6 md:px-20 py-24 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl px-6 py-12 md:py-16 shadow-lg shadow-cyan-500/10"
        >
          <h4 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-transparent bg-clip-text tracking-wide">
            About Us
          </h4>
          <p className="text-blue-200 max-w-5xl mx-auto mb-8 text-sm md:text-base">
            ChanRe Medsoft is a medical software provider dedicated to enabling smarter care in the healthcare industry for over 25 years. We design leading-edge healthcare IT solutions for organizations of all sizes. Our comprehensive, integrated platforms empower practitioners by offering customizable tools tailored to their needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-pink-500/40 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

     
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        Why Us?
      </h3>
      

     
      {sections.map((sec, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.section
            key={index}
            className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 md:px-24 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-10 -z-10" />

            
            {isEven && (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 text-center"
              >
                <div className="relative mx-auto w-fit rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md shadow-xl p-1  hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all">
                  <img
                    className="rounded-xl h-80 object-cover"
                    src={sec.imgSrc}
                    alt="ChanReMedSoft Section Visual"
                  />
                </div>
              </motion.div>
            )}

          
            <motion.div
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center md:text-left"
            >
              <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
                {sec.title}
              </h2>
              <p className="text-blue-300 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                {sec.content}
              </p>
              <div className="mt-6 text-sm text-purple-300 italic">
                Empowering the future of digital healthcare.
              </div>
            </motion.div>

           
            {!isEven && (
              <motion.div
                initial={{ opacity: 0, x: -60 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 text-center"
              >
                <div className="relative mx-auto w-fit rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md shadow-xl p-1  hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all">
                  <img
                    className="rounded-xl h-80 object-cover"
                    src={sec.imgSrc}
                    alt="ChanReMedSoft Section Visual"
                  />
                </div>
              </motion.div>
            )}
          </motion.section>
        );
      })}
    </>
  );
}

export default AboutUs;
