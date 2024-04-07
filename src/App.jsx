import "./App.css";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Paralax from "./Components/Parallax/Paralax";
import Portfolioone from "./Components/Portfolio1/Portfolioone";
import Services from "./Components/Services/Services";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <AnimatePresence>
      <section className="snap-center min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <section className="snap-center min-h-screen">
        <Paralax type={"services"} />
      </section>
      <section className="snap-center min-h-screen">
        <Services />
      </section>
      <section className="snap-center min-h-screen">
        {" "}
        <Paralax type={"portfolio"} />
      </section>
      <Portfolioone />

      <section className="snap-center min-h-screen">
        <Contact />
      </section>
    </AnimatePresence>
  );
}

export default App;
