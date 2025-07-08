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
  "User-Friendly Interface: Our platform boasts an intuitive interface, making it a breeze to create, take, and manage quizzes.",
  "Diverse Question Types: Whether it's multiple-choice, true/false, short answer, or essay questions, we support a wide array of question types to suit your needs.",
  "Tailored Customization: Customize quizzes to your heart's content with options like setting time limits, randomizing questions, and defining passing scores.",
  "Accessible Anywhere: Accessible from any internet-connected device, our system offers the convenience of remote learning, training, or evaluation.",
  "Instant Gratification: Participants receive immediate feedback upon quiz completion, allowing them to gauge their performance and identify areas for improvement.",
  "Effortless Scoring: Say goodbye to manual grading. Our system automates scoring and grading, saving you valuable time.",
  "Insightful Analytics: Dive into detailed analytics and reporting tools to track participant progress, uncover trends, and evaluate quiz effectiveness.",
];

const benefits = [
  "Convenience:Participants can take quizzes at their convenience, reducing the need for physical presence.",
  "Scalability:Our system can accommodate both small and large audiences, ensuring no one is left out.",
  "Efficiency:Automated grading and reporting free up your time to focus on what matters most.",
  "Engagement:Interactive features and immediate feedback boost engagement and learning outcomes.",
  "Cost Savings:Bid farewell to paper-based assessments and manual grading, leading to cost savings.",
];
const UseCase = [
  "Education:Perfect for educational institutions for assessments, homework, and practice tests.",
  "Training and Corporate Learning:Ideal for businesses for employee training, onboarding, and compliance testing.",
  "Recruitment:Used in recruitment processes to assess candidates' skills and knowledge.",
  "Entertainment:Great for websites and social media platforms, providing users with fun and interactive experiences.",
];

function OnlineQuize() {
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
       Online Quiz
        </h1>
        <p className="text-lg font-light text-purple-200 mb-10">
       Quiz, Engage, Excel: Explore the World of Knowledge!
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
         Are you looking to captivate your audience, enhance learning, or simply have some interactive fun? Look no further! Our Online Quiz System is your gateway to engaging quizzes and assessments that promise to entertain, educate, and inspire.
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

<motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        Use Cases
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
      >
        {UseCase.map((UseCase, i) => {
          const [title, desc] = UseCase.split(":");
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={`UseCase-${i}`}
                className="peer hidden"
              />
              <label
                htmlFor={`UseCase-${i}`}
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


      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-blue-300 text-center md:text-left"
      >
        <h2 className="text-2xl font-bold mb-3 text-cyan-400">Conclusion</h2>
        <p className="leading-relaxed">
          Our Online Quiz System offers boundless opportunities to engage, educate, and entertain. Whether you're an educator, trainer, business, or simply a quiz enthusiast, our platform promises to take your interactive experiences to the next level. Elevate engagement, enhance learning, and make quizzes more exciting than ever. Join us on a journey of knowledge, fun, and discovery!
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

export default OnlineQuize;
