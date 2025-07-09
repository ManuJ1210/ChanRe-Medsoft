import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SEO() {
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
          SEO 
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
          src="/seo.png"
          alt="SEO services"
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
          "In today's highly competitive digital landscape, having a strong online presence is critical for the success of your business. Our team of experienced SEO professionals is here to help you achieve better search engine rankings, increased organic traffic, and improved visibility in search results.",
          "ChanRe Medsoft offers expert SEO services to help you maximize your online presence and reach more potential customers. We specialize in helping businesses of all sizes increase their visibility in search engine results, and we offer a range of services to suit your individual needs. Our experienced team of SEO specialists will work with you to identify the best strategies for your business, and we'll help you create content and optimize your website for maximum search engine visibility."
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
         Our SEO Process:
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
              title: "Website Audit and Analysis:",
              points: [
                "We start by conducting a thorough audit of your website to identify strengths and weaknesses.",
                "In-depth keyword and competitor analysis helps us devise a winning strategy."
              ]
            },
            {
              title: "On-Page Optimization:",
              points: [
                "We optimize your website's structure, content, and meta tags to improve search engine visibility.",
                "This includes optimizing images, improving site speed, and enhancing user experience."
              ]
            },
            {
              title: "Content Creation and Optimization:",
              points: [
                "Our skilled developers bring your app to life using the latest iOS technologies.",
                "We ensure compatibility across various iOS devices and OS versions."
              ]
            },
            {
              title: "Link Building:",
              points: [
                "We build high-quality, authoritative backlinks to enhance your website's domain authority and search engine rankings.",
                "Our link-building strategies are ethical and follow industry best practices."
              ]
            },
            {
              title: "Monitoring and Reporting:",
              points: [
                "We continuously monitor the performance of your SEO campaign and provide detailed reports on key metrics.",
                "This ensures transparency and allows for data-driven adjustments to our strategies."
              ]
            },
            {
              title: "Adaptation and Growth:",
              points: [
                "SEO is an ongoing process. We adapt to changes in search algorithms and market trends to keep your website at the forefront of search results."
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
         Why Choose ChanRe Medsoft for SEO Services?

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
              desc1: "Our team comprises seasoned SEO experts with a deep understanding of search engine algorithms.",
              desc2: "We have a track record of delivering tangible results for our clients across various industries."
            },
            {
              title: "Tailored Strategies:",
              desc1: "We understand that every business is unique. That's why we offer customized SEO strategies to align with your specific goals.",
              desc2: "Our approach is data-driven, ensuring that our strategies are continually optimized for maximum ROI."
            },
            {
              title: "Comprehensive Services",
              desc1: "From on-page optimization and keyword research to link building and content creation, we provide end-to-end SEO services.",
              desc2: "We stay up-to-date with the latest SEO trends and best practices to keep your website ahead of the competition."
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
                  {desc2 && <p className="leading-relaxed text-base">{desc2}</p>}
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
         If you're ready to take your online presence to the next level, contact us today to schedule a consultation. Discover how ChanRe Medsoft can help your business climb the search engine ranks and drive organic traffic to your website.
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

export default SEO;
