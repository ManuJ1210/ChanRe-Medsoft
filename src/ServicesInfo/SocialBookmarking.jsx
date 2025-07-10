import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SocialBookmarking() {
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
          Social Bookmarking
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
          src="/social.png"
          alt="Social bookmarking illustration"
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
          "In this digital age, where an impactful online presence and a strategic content distribution strategy are the keys to success, our seasoned experts stand ready to guide you. ChanRe Medsoft is committed to being your trusted ally in the realm of professional social bookmarking services.",
          "Imagine a world where your brand doesn't just exist in the digital landscape but thrives, where your content doesn't just get lost in the noise but resonates with your target audience. This is where our expertise in social bookmarking comes into play."
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
          How We Amplify Your Brand's Visibility:
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
              title: "Content Curation :",
              desc1: "Our journey begins with curating content that's not just high-quality but shareable. We craft content that speaks the language of your audience.",
             
            },
            {
              title: "Strategic Planning :",
              desc1: "We don't just submit content randomly. Our team meticulously plans the distribution strategy, ensuring that your content reaches the right platforms at the right time.",
          
            },
            {
              title: "Submission to Top Platforms :",
              desc1: "We submit your content to the most influential social bookmarking platforms, where it gains visibility among your potential customers.",
             
            },
            {
              title: "Active Community Engagement :",
              desc1: "Our experts don't just submit and forget. We actively engage with the communities and users who matter most to your brand, fostering discussions and building your brand's credibility.",
            },
            {
              title: "Transparent Reporting :",
              desc1: "We provide you with detailed reports on how your content is performing. You'll see the traffic it's driving, the engagement it's generating, and the impact it's making.",
             
            },
            {
              title: "Adaptation :",
              desc1: "Social bookmarking is a dynamic world. We stay on top of trends and changes, ensuring your content remains visible and relevant."
            },
            
          ].map(({ title, desc1 }, index) => (
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
         Why Choose ChanRe Medsoft for Social Bookmarking Services?
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
              title: "Proven Expertise:",
              points: [
                "Our team comprises experienced digital marketers with a deep understanding of social bookmarking platforms.",
                "We have a successful track record of delivering tangible results for clients across various industries."
              ]
            },
            {
              title: "Customized Strategies:",
              points: [
                "We understand that every business has unique goals and content needs. That's why we offer tailored social bookmarking strategies to align with your specific objectives.",
                "Our approach is data-driven, ensuring continuous optimization for maximum ROI."
              ]
            },
            {
              title: "Comprehensive Services:",
              points: [
                "From content curation and submission to community engagement and reporting, we provide end-to-end social bookmarking services.",
                "We stay updated with the latest social bookmarking trends and best practices to keep your brand competitive."
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
         If you're looking to not just be present in the digital world but to truly shine, to not just distribute content but to engage and build relationships, then welcome to ChanRe Medsoft. We're here to amplify your brand's presence, drive traffic to your digital doorstep, and help you effectively engage with your target audience.
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

export default SocialBookmarking;
