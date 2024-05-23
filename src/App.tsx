import Header from "./components/Header";
import Benefit from "./components/Benefit";
import FAQ from "./components/FAQ";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 300,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <main className="antialiased">
      <Header />
      <Jumbotron />
      <Benefit />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
