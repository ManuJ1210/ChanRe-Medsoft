import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y6t6z3f",
        "template_s93du8n",
        form.current,
        "qk0wxlJwal9ag4sjS"
      )
      .then(() => {
        setShowModal(true);
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6">
          CONTACT US
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          If you have any questions, feel free to reach out to us via phone, email, or by using the form below.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-16">
        
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-cyan-400/20 shadow-lg">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-1/2 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
                />
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Phone"
                  required
                  className="w-1/2 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
                />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

         
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-purple-400/20 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-300 mb-4">Contact Information</h2>
              <div className="flex items-start gap-3 mb-2 text-blue-100">
                <FaPhoneAlt className="text-cyan-400 mt-1" />
                <p>+91 80-42516636</p>
              </div>
              <div className="flex items-start gap-3 mb-2 text-blue-100">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <p>marketing@chanrejournals.com</p>
              </div>
              <div className="flex items-start gap-3 text-blue-100">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <p>No.414/65,20th Main,1st Block, Rajajinagar, Bangalore-560010, IN</p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-cyan-400/20 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-semibold text-purple-300 mb-4">Business Hours</h2>
              <div className="text-blue-100 space-y-1">
                <p><FaClock className="inline text-cyan-400 mr-2" /> Monday - Friday: 9:00 AM – 8:00 PM</p>
                <p><FaClock className="inline text-cyan-400 mr-2" /> Saturday: 10:00 AM – 6:00 PM</p>
                <p><FaClock className="inline text-cyan-400 mr-2" /> Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="overflow-hidden rounded-xl shadow-lg brightness-60">
          <iframe
            title="ChanRe MedSoft Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5717687197343!2d77.54771567500501!3d12.99921901427229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbc8be6ee1f%3A0x99d77f3579e9ed2e!2sChanRe%20Rheumatology%20And%20Immunology%20Center%20And%20Research!5e0!3m2!1sen!2sin!4v1751968120488!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
 
        className="fixed inset-0 z-50 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-gradient-to-br from-[#000d1a] via-[#001a33] to-[#000c1f] p-6 rounded-xl border border-cyan-400/20 backdrop-blur-lg shadow-lg max-w-md w-full text-center ">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Message Sent!</h2>
            <p className=" text-white mb-6">
              Thank you for contacting us. We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6  bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
