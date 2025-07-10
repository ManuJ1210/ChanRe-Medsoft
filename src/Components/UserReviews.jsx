import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    client: "Dr. Priya Sharma",
    project: "Clinic Management System",
    rating: 5,
    feedback: "The app they built transformed our workflow. Seamless experience throughout!",
  },
  {
    client: "Dr. Rajiv Menon",
    project: "Appointment Booking App",
    rating: 4,
    feedback: "User-friendly and fast. The team was professional and communicative.",
  },
  {
    client: "Dr. Neha Agarwal",
    project: "EMR Portal",
    rating: 5,
    feedback: "Highly secure and responsive. Met all of our expectations.",
  },
  {
    client: "Dr. Anil Desai",
    project: "Telemedicine App",
    rating: 4,
    feedback: "A reliable solution that makes online consultations easy.",
  },
  {
    client: "Dr. Kavya R",
    project: "Diagnostic Dashboard",
    rating: 5,
    feedback: "The dashboard is fast, secure, and beautifully designed.",
  },
];

const ReviewCard = ({ client, project, feedback, rating }) => (
  <div className="keen-slider__slide bg-white/5 border border-cyan-500/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-lg hover:shadow-cyan-500/30 hover:border-cyan-300 ">
    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
      {client}
    </h3>
    <p className="text-sm text-cyan-300 mt-1 mb-2 italic">Project: {project}</p>
    <div className="flex justify-center text-yellow-400 mb-2">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} className="mx-0.5" />
      ))}
    </div>
    <p className="text-sm text-blue-100 leading-relaxed">{feedback}</p>
  </div>
);

export default function UserReviews() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 28 },
      },
    },
  });

  return (
    <section className="py-16 px-6 md:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-blue-300 mt-2">Real feedback from our trusted partners.</p>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}
