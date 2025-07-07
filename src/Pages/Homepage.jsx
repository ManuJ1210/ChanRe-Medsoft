import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import About from '../Components/about';
import Products from '../Components/productSection';
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <>
      <Header />

      {/* Wrapper adds space below floating nav */}
      <main className="pt-[100px]">
        <HeroSection />
        <Services />
        <About />
        <Products/>

        {/* Custom CTA Section */}
        <section className="relative z-10 px-6 md:px-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl px-6 py-12 md:py-16 shadow-lg shadow-cyan-500/10"
          >
            <h4 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-transparent bg-clip-text tracking-wide">
              Need a Custom Solution?
            </h4>
            <p className="text-blue-200 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              We design and deliver powerful healthcare software tailored for your hospital, clinic, or digital healthcare needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-pink-500/40 transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </section>

      
      </main>
    </>
  );
}

export default Homepage;
