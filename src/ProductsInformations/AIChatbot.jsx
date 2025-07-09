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

const features = [
    "Natural Language Understanding: Our chatbot is equipped with advanced natural language processing capabilities, allowing it to understand and respond to customer inquiries in a human-like manner. It can comprehend user intents, making interactions more meaningful.",
    "Seamless Integration: Whether you're looking to embed the chatbot into your website, mobile app, or messaging platform, our solution seamlessly integrates with your existing infrastructure.",
    "Personalized Experiences: The chatbot can collect and utilize user data to provide personalized recommendations, support, and content, enhancing user engagement and satisfaction.",
    "24/7 Availability: Your customers can engage with the chatbot at any time, day or night, providing round-the-clock support and assistance, reducing response times, and improving customer service.",
    "Multi-Platform Deployment: Our chatbot can be deployed across various platforms, including websites, social media, and messaging apps, ensuring that your customers can interact with your brand wherever they prefer.",
    "Analytics and Insights: Gain valuable insights into customer interactions and preferences through analytics and reporting, allowing you to make data-driven decisions and refine your chatbot's performance.",
];

const benefits = [
    "Enhanced Customer Support: Provide quick and accurate responses to customer inquiries, improving customer satisfaction and loyalty.",
    "Efficiency and Cost Savings: Automate routine tasks and inquiries, freeing up your staff to focus on more complex and valuable activities.",
    "Scalability: As your business grows, the chatbot can scale with you, handling an increasing volume of interactions without compromising quality.",
    "User Engagement: Personalized recommendations and interactions keep users engaged and increase the likelihood of conversions and sales.",
    "Competitive Advantage: Stay ahead of the competition by offering cutting-edge, AI-driven customer support and engagement.",
];

function AIChatbot() {
    return (
        <section className="py-16 px-6 md:px-20 mt-12 text-white min-h-screen">
            <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
               AI Chatbot
                </h1>
                <p className="text-center text-blue-100 max-w-2xl mx-auto mb-12">
                  Conversational Excellence: Your Business, Empowered by AI Chatbot Brilliance
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
                    Our AI Chatbot, built using Node.js, React.js, and ChatGPT, is a cutting-edge conversational solution designed to revolutionize the way you engage with your customers and streamline your business operations. With the power of artificial intelligence, natural language processing, and a user-friendly interface, our chatbot is a versatile tool that can be customized to meet your specific needs.
                </p>
            </motion.div>

            <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
            >
                Key Features
            </motion.h2>

            <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
            >
                {features.map((feature, i) => {
                    const [title, desc] = feature.split(":");
                    return (
                        <div key={i}>
                            <input
                                type="checkbox"
                                id={`feature-${i}`}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`feature-${i}`}
                                className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-purple-400/20 shadow-lg shadow-purple-500/10 rounded-xl peer-checked:collapse-open cursor-pointer"
                            >
                                <div className="collapse-title font-semibold text-cyan-300 flex items-center gap-2">
                                    <FaCheckCircle className="text-cyan-400" />
                                    {title}
                                </div>
                                <div className="collapse-content text-sm text-blue-100 leading-relaxed">
                                    {desc?.trim() || ""}
                                </div>
                            </label>
                        </div>
                    );
                })}
            </motion.div>

            <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
            >
                Benefits
            </motion.h2>

            <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
            >
                {benefits.map((benefit, i) => {
                    const title = benefit.split(":")[0];
                    const content = benefit.split(":")[1] || benefit;

                    return (
                        <div key={i}>
                            <input
                                type="checkbox"
                                id={`benefit-${i}`}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={`benefit-${i}`}
                                className="collapse collapse-arrow bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg shadow-cyan-500/10 rounded-xl peer-checked:collapse-open cursor-pointer"
                            >
                                <div className="collapse-title font-semibold text-purple-300 flex items-center gap-2">
                                    <FaCheckCircle className="text-purple-400" />
                                    {title}
                                </div>
                                <div className="collapse-content text-sm text-blue-100 leading-relaxed">
                                    {content.trim()}
                                </div>
                            </label>
                        </div>
                    );
                })}
            </motion.div>


            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-blue-300 text-center md:text-left"
            >
                <h2 className="text-2xl font-bold mb-3 text-cyan-400">Conclusion</h2>
                <p className="leading-relaxed">
                    Our AI Chatbot, built with Node.js, React.js, and ChatGPT, represents the future of customer engagement and support. It is a versatile tool that can be tailored to your business needs, providing 24/7 assistance, personalized experiences, and valuable insights to help you build stronger customer relationships and drive business growth. Embrace the power of AI to transform your customer interactions and stay ahead in the digital age.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.6)}
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

export default AIChatbot;
