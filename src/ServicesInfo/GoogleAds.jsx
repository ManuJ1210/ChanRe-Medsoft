import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function GoogleAds() {
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
          Google Ads 
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
          src="/ads.png"
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
          "In today's competitive digital landscape, having a strong presence on Google is paramount. ChanRe Medsoft is a trusted partner for creating highly effective Google Ads campaigns. Our team of experienced Google Ads specialists is here to help you reach your target audience, drive qualified leads, and achieve measurable ROI through strategic advertising campaigns. We are a group of seasoned Google Ads professionals who have traversed the digital landscape, honing their skills and strategies to perfection.",

          "In a world where every click counts, we are here to help you craft campaigns that don't just generate clicks but meaningful engagements that translate into tangible results. Our mission is to ensure that every ad dollar spent is an investment, not an expense. We don't just create campaigns; we sculpt digital masterpieces that drive business growth.",

          "So, whether you're looking to create a brand presence, generate leads, or boost sales, we have the tools, knowledge, and passion to make it happen. Welcome to a world where your digital success is not just a goal; it's an expectation."
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
         Our Google Ads Management Process:
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
              title: "Strategic Planning and Research:",
              points: [
                "We begin with a deep dive into your business goals, target audience, and competition.",
                "Extensive keyword research and competitive analysis lay the foundation for strategic campaign planning."
              ]
            },
            {
              title: "Campaign Setup and Ad Creation:",
              points: [
                "We create highly targeted ad campaigns, selecting the right keywords and audience segments.",
                "Our team crafts compelling ad copy and designs eye-catching visuals to maximize ad performance."
              ]
            },
            {
              title: "Bid Management and Optimization:",
              points: [
                "We continuously monitor and optimize bids to ensure cost-effectiveness and top ad placements.",
                "A/B testing helps refine ad performance and increase click-through rates."
              ]
            },
            {
              title: "Ad Extensions and Landing Page Optimization:",
              points: [
                "We implement ad extensions to provide additional information and drive conversions.",
                "Landing pages are optimized to enhance user experience and boost conversion rates."
              ]
            },
            {
              title: "Performance Tracking and Reporting:",
              points: [
                "Detailed reports on key metrics, including click-through rate (CTR), conversion rate, and return on ad spend (ROAS), are provided.",
                "Transparent reporting allows for performance evaluation and data-driven adjustments."
              ]
            },
            {
              title: "Adaptation and Growth:",
              points: [
                "Google Ads is a dynamic platform. We adapt to changes in algorithms and market trends to ensure your campaigns stay effective."
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
          Why Choose ChanRe Medsoft for Google Ads Management?
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
              desc1: "Our team comprises certified Google Ads specialists with a deep understanding of the platform. We have a successful track record of driving tangible results for clients across diverse industries.",
              
            },
            {
              title: "Customized Strategies :",
              desc1: "We understand that every business has unique goals and challenges. That's why we offer tailored Google Ads strategies to align with your specific objectives. Our data-driven approach ensures continuous optimization for maximum ROI.",
           
            },
            {
              title: "End-to-End Management:",
              desc1: "From campaign setup and keyword research to ad creation and performance tracking, we provide comprehensive Google Ads management services. We stay updated with the latest Google Ads trends and best practices to keep your campaigns competitive.",
        
            }
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          If you're ready to take your online advertising to the next level and achieve remarkable results with Google Ads, contact us today to schedule a consultation. Discover how ChanRe Medsoft can help your business maximize its online reach and drive conversions through expert Google Ads management.
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

export default GoogleAds;
