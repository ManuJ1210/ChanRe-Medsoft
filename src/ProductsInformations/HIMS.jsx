import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeIn = (direction = "up", delay = 0) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay,
            },
        },
    };
    return variants;
};



function HIMS() {
    return (
        <section className="bg-gradient-to-br mt-25 text-white py-20 px-6 md:px-20 min-h-screen">
            <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 tracking-wide">
               HIMS
                </h1>
                <p className="text-lg font-light text-purple-200 mb-10">
                  Unlocking Healthcare Efficiency, Empowering Patients, Securing Records
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mb-12 text-blue-200 text-center md:text-left"
            >
                <p className="leading-relaxed">
                    ChanRe MedSoft provides a powerful solution to meet the needs of both hospitals and patients. With its integrated system, hospitals can improve operational efficiencies and increase revenue generation. At the same time, patients can better manage their health.
                </p>
                <br />
                <p className="leading-relaxed">
                    The Record Management System from ChanRe MedSoft is highly scalable and offers a unified repository to securely store in-patient and out-patient records. It also allows for the generation of a variety of reports for both administrative and clinical purposes. ChanRe MedSoft is simple to deploy and use, providing hospitals with the perfect solution to better serve their patients.
                </p>
                <br />
                <p className="leading-relaxed">
                   The modern healthcare industry is facing several challenges in terms of operational and clinical needs. Hospitals must maintain records for both inpatients and outpatients for up to 8 years, which can be a major challenge if records are stored on paper. In addition, moving to an online records system can help hospitals save space and make better use of their resources.
                </p>
                <br />
                <p className="leading-relaxed">
                    On the clinical side, efficient access and secure exchange of health data are essential for improved quality of care, informed diagnosis, and planning and research. Additionally, customer management and retention can be improved with the help of CRM and workflow applications.
                </p>
                <br />
                <p className="leading-relaxed">
                    ChanRe MedSoft provides an integrated solution that is simple to deploy and use. It helps hospitals improve operational efficiencies, while also allowing them to generate revenues. At the same time, it empowers users to better manage their health. The Record Management System can be hosted remotely, used standalone in the hospital, or in conjunction with existing hospital systems. It provides a secure and unified repository for storing and managing hospital records, as well as generating a variety of reports for administrative and clinical purposes.
                </p>
            </motion.div>

           

            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center gap-4 mt-10"
            >
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-purple-500/40">
                    Quotation
                </button>
                <button className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-green-400/40">
                    Contact
                </button>
            </motion.div>
        </section>
    );
}

export default HIMS;
