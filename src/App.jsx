import Background from "./Components/Background";
import Header from "./Components/Header";
import Navigation from "./Routes/Navigation";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTop";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });


   

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative">
      <Background />
      <ScrollToTop />
      <div className="relative z-10">
        <Header />

        <Navigation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
