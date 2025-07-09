import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function AndroidAppDevelopment() {
  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          Android App Development
        </h2>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Turning Ideas into Apps
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
          src="/Webdevelopment.png"
          alt="Android app development flow"
          className="rounded-xl shadow-xl border p-2 border-purple-500/20 max-w-full h-auto"
          width="900"
          height="400"
        />
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-blue-100 text-lg md:text-xl leading-relaxed space-y-8"
      >
        <p>
          In today’s digital age, having a strong online presence is essential for any business. That’s why our team of experienced Android developers is here to help you take your business to the next level.
        </p>
        <p>
          At <span className="text-purple-300 font-semibold">ChanRe Medsoft</span>, we understand that every business has unique needs. Our apps are custom-made to fit your specific requirements, ensuring an amazing user experience.
        </p>

        
        <h3 className="text-cyan-300 font-semibold text-2xl mt-12 mb-4">Our Android App Development Process:</h3>
        <ul className="space-y-6 text-base md:text-lg">
          {[
            {
              title: "Consultation and Idea Evaluation",
              points: [
                "We begin by understanding your business goals and app ideas.",
                "Our team evaluates the feasibility and potential of your concept."
              ]
            },
            {
              title: "Design and Prototyping",
              points: [
                "Our designers create intuitive, user-friendly app interfaces.",
                "We develop prototypes for your feedback and approval."
              ]
            },
            {
              title: "Development",
              points: [
                "Our developers bring your app to life using the latest Android technologies.",
                "We ensure compatibility with various Android devices and OS versions."
              ]
            },
            {
              title: "Quality Assurance",
              points: [
                "Rigorous testing is conducted to identify and fix any bugs or issues.",
                "We perform usability testing to guarantee a seamless user experience."
              ]
            },
            {
              title: "Deployment",
              points: [
                "We assist with app store submission and optimization for maximum visibility.",
                "Your app is made available to your target audience."
              ]
            },
            {
              title: "Support and Maintenance",
              points: [
                "We provide ongoing support, updates, and maintenance to ensure your app remains competitive."
              ]
            }
          ].map((section, idx) => (
            <li key={idx}>
              <h4 className="font-bold text-purple-300 text-xl mb-2">{section.title}:</h4>
              <ul className="pl-6 list-disc space-y-2 text-blue-100">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        
        <h3 className="text-cyan-300 font-semibold text-2xl mt-12 mb-4">
          Why Choose ChanRe Medsoft for Android App Development?
        </h3>
        <ul className="space-y-6">
          {[
            {
              title: "Expertise",
              desc: "Our team consists of seasoned Android developers with years of hands-on experience. We stay up-to-date with the latest trends and technologies in the Android app development ecosystem."
            },
            {
              title: "Custom Solutions",
              desc: "We understand that every business is unique. That’s why we offer tailor-made solutions to meet your specific requirements."
            },
            {
              title: "Comprehensive Services",
              desc: "From concept and design to development and deployment, we provide end-to-end app development services. We also offer post-launch support and maintenance."
            }
          ].map(({ title, desc }, index) => (
            <li key={index}>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-purple-400 mt-1 text-xl min-w-[20px]" />
                <div className="space-y-1 text-blue-100">
                  <h4 className="text-lg font-semibold text-cyan-300">{title}</h4>
                  <p className="leading-relaxed text-base">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

       
        <p className="mt-10 text-center text-blue-200">
          Ready to discuss your Android app development project? Contact us today to schedule a consultation and learn how ChanRe Medsoft can help your business thrive in the digital era.
        </p>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-purple-400/40 transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default AndroidAppDevelopment;
