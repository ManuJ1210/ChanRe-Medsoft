import Background from "./Components/Background";
import Header from "./Components/Header";
import Navigation from "./Routes/Navigation";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTop";

function App() {
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
