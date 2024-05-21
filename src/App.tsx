import Header from "./components/Header";
import Benefit from "./components/Benefit";
import FAQ from "./components/FAQ";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
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
