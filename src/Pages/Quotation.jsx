import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";


function Quotation() {
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
        alert("Something went wrong. Try again later.");
      });
  };

  

  return (
    <section className="mt-12 text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          Request a Quotation
        </h1>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
          Select a package or request a custom quote. We’ll respond with a tailored proposal based on your business needs.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-400/20 shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center">
            Fill the form to get your custom quote
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="flex-1 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="flex-1 px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="service"
              placeholder="Service Interested In (e.g. App + Web)"
              className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your requirements"
              required
              className="w-full px-4 py-2 bg-transparent border border-blue-500 rounded-md text-white placeholder:text-blue-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 w-full py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition"
            >
              Get My Quote
            </button>
          </form>
        </motion.div>
      </motion.div>

    
      {showModal && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
           className="fixed inset-0 z-50 backdrop-blur-xs flex items-center justify-center">
          <div className="bg-gradient-to-br from-[#000d1a] via-[#001a33] to-[#000c1f] p-6 rounded-xl border border-cyan-400/20 backdrop-blur-lg shadow-lg max-w-md w-full text-center ">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Request Submitted!</h2>
            <p className="text-white  mb-6">
              Thank you for your interest. We'll contact you soon with a detailed quotation.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className=" mt-4 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 py-2 rounded-md font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition"
            >
              Close
            </button>
            
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Quotation;
