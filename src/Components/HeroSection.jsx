import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative z-10 mt-16 px-6 md:px-20 py-52 text-center overflow-hidden">
      
      <div className="absolute inset-0 -z-20">
        <img
          src="/banner.png"
          alt="Futuristic Web Development Illustration"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] opacity-20 object-contain"
        />
      </div>

    
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl h-30 font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-xl"
      >
        <Typewriter
          words={["Web Development", "Mobile Apps", "Digital Marketing"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-blue-300 mt-6 text-lg max-w-2xl mx-auto leading-relaxed"
      >
        Empowering Healthcare Through Next-Gen Technology
      </motion.p>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10"
      >
        <button className="relative  inline-block px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 shadow-xl hover:brightness-110 transition">
          Get Started
          <span className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-10 blur-md animate-pulse"></span>
        </button>
      </motion.div>
    </section>
  );
}

export default HeroSection;
