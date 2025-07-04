import Background from "./Components/Background";
import Header from "./Components/Header";
import Navigation from "./Routes/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative">
      <Background /> {/* Always behind everything */}
      <div className="relative z-10">
        <Header />
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
