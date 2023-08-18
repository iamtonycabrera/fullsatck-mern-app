import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Platforms from "./components/Platforms/Platforms";
import Residences from "./components/Residences/Residences";

import "./App.css";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <div>
        <div className="green-gradient" />
        <Header />
        <Hero />
      </div>
      <Platforms />
      <Residences />
      <Values />
      <Contact />
      <Location />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
