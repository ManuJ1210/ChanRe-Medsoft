import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SEM() {
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
          SEM
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
          src="/sem.png"
          alt="SEM illustration"
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
          "At ChanRe Medsoft, we are your go-to partner for high-performance SEM (Search Engine Marketing) solutions. With the ever-evolving digital environment, effective online advertising is a must to stay ahead of the competition. Our team of experienced SEM professionals provides you with top-tier Search Engine Marketing solutions to help you achieve immediate visibility, drive targeted traffic, maximize ROI, and get the most value for your investment with our strategic paid advertising campaigns.",
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
      Our SEM Process:
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
              title: "Market Research and Keyword Analysis:",
              points: [
                "We start by conducting extensive market research to understand your industry and competitors.",
                "Thorough keyword analysis helps us identify high-value keywords to target in your campaigns."
              ]
            },
            {
              title: "Campaign Setup and Ad Creation:",
              points: [
                "We create highly targeted ad campaigns on platforms like Google Ads and Bing Ads.",
                "Compelling ad copy and eye-catching visuals are crafted to attract your ideal audience."
              ]
            },
            {
              title: "Bid Management and Optimization:",
              points: [
                "Our team monitors and optimizes bids in real-time to ensure cost-effectiveness and maximize ad placements.",
                "We use A/B testing to refine ad performance and boost click-through rates."
              ]
            },
            {
              title: "Ad Extensions and Landing Page Optimization:",
              points: [
                "We implement ad extensions to provide additional information and drive conversions.",
                "Landing pages are optimized to enhance user experience and increase conversion rates."
              ]
            },
            {
              title: "Performance Tracking and Reporting:",
              points: [
                "We provide detailed reports on key metrics, including click-through rate (CTR), conversion rate, and return on ad spend (ROAS).",
                "This allows for transparent performance evaluation and data-driven adjustments."
              ]
            },
            {
              title: "Adaptation and Growth:",
              points: [
                "SEM is an ever-evolving landscape. We adapt to changes in ad platforms and market dynamics to keep your campaigns effective."
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
          Why Choose ChanRe Medsoft for SEM Services?
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
              desc1: "Our team comprises seasoned SEM experts with a deep understanding of online advertising platforms. We have a track record of delivering tangible results for our clients across diverse industries.",
              
            },
            {
              title: "Tailored Strategies :",
              desc1: "We understand that every business is unique. That's why we offer customized SEM strategies to align with your specific objectives. Our approach is data-driven, ensuring that our campaigns are continually optimized for maximum ROI.",
           
            },
            {
              title: "Comprehensive Services :",
              desc1: "From keyword research and ad creation to bid management and performance tracking, we provide end-to-end SEM services. We stay updated with the latest SEM trends and best practices to keep your campaigns competitive.",
        
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
          If you're ready to supercharge your online presence and drive targeted traffic to your website, contact us today to schedule a consultation. Discover how ChanRe Medsoft can help your business achieve immediate visibility and boost online conversions through strategic SEM campaigns.
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

export default SEM;
