import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function FacebookAds() {
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
          Facebook Ads
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
          "Facebook Ads have emerged as a dominant force in the art of captivating your ideal audience and achieving results that go beyond expectations. ChanRe Medsoft is dedicated to being your steadfast ally in the realm of top-tier Facebook Ads management services. Our team of seasoned Facebook Ads professionals is here to help you create, optimize, capture your target audience's attention, achieve outstanding results, and manage high-impact ad campaigns that deliver impressive returns on your advertising investment.",

          "In a digital landscape where every scroll counts, we are here to help you craft campaigns that do more than just interrupt the scrolling thumb; they create moments of engagement, conversations, and conversions. Our mission is not merely to spend your ad budget; it's to make every dollar invested in Facebook Ads work tirelessly for your business.",

          "So, whether you're aiming to boost brand visibility, generate leads, or drive sales, we have the tools, expertise, and dedication to turn your advertising goals into tangible, remarkable results."
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
        Our Facebook Ads Management Process:
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
                "We start by gaining a deep understanding of your business objectives and target audience.",
                "Extensive audience research and strategic planning lay the groundwork for effective campaign execution."
              ]
            },
            {
              title: "Campaign Setup and Creative Ad Development:",
              points: [
                "We create highly targeted ad campaigns, selecting the right demographics and interests.",
                "Our creative team crafts captivating ad creatives to engage your audience and drive conversions."
              ]
            },
            {
              title: "Budget Optimization and Performance Monitoring:",
              points: [
                "We continually optimize ad budgets to ensure efficient spending and maximize ad placements.",
                "In-depth performance monitoring and A/B testing refine ad performance and boost click-through rates."
              ]
            },
            {
              title: "Ad Extensions and Landing Page Optimization:",
              points: [
                "We implement ad extensions to provide additional information and enhance user experience.",
                "Landing pages are meticulously optimized to improve conversion rates and user satisfaction."
              ]
            },
            {
              title: "Comprehensive Reporting and Insights:",
              points: [
                "We provide detailed reports on key metrics, including click-through rate (CTR), conversion rate, and return on ad spend (ROAS).",
                "Our transparent reporting enables data-driven adjustments to enhance campaign performance."
              ]
            },
            {
              title: "Adaptation and Growth:",
              points: [
                "Facebook Ads is a dynamic platform. We adapt to changes in algorithms and market trends to ensure your campaigns remain effective and competitive."
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
          Why Choose us for Facebook Ads Management?
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
              desc1: "Our team comprises certified Facebook Ads specialists with a deep understanding of the platform.",
              desc2: "We have a successful track record of driving tangible results for clients across diverse industries."
              
            },
            {
              title: "Customized Strategies :",
              desc1: "We understand that every business has unique goals and challenges. That's why we offer tailored Facebook Ads strategies to align with your specific objectives.",
              desc2: "Our data-driven approach ensures continuous optimization for maximum ROI.",
            },
            {
              title: "Comprehensive Services :",
              desc1: "From campaign setup and audience targeting to ad creation and performance tracking, we provide end-to-end Facebook Ads management services.",
              desc2: "We stay updated with the latest Facebook Ads trends and best practices to keep your campaigns competitive."

            }
          ].map(({ title, desc1, desc2 }, index) => (
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
                  <p className="leading-relaxed text-base">{desc2}</p>
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
          If you're ready to supercharge your online advertising efforts and achieve remarkable results with Facebook Ads, contact us today to schedule a consultation. Discover how ChanRe Medsoft can help your business maximize its online reach and drive conversions through expert Facebook Ads management.
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

export default FacebookAds;
