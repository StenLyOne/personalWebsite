import Header from "./components/Header/Header.jsx";
import Figure from "./components/Figure/Figure2.jsx";
import Main from "./section/Main/Main.jsx";
import Works from "./section/Works/Works.jsx";
import Testimonials from "./section/Testimonials/Testimonials.jsx";
import About from "./section/About/About.jsx";
import ContactCall from "./section/ContactCall/ContactCall.jsx";
import FAQ from "./section/FAQ/FAQ.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import Contact from "./section/contact/Contact.jsx";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2, // Скорость прокрутки
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white flex w-auto relative">
      <div className="md:w-1/5">
        <Header />
      </div>
      <div className="md:w-4/5 z-[1]">
        <Main />
        <Works />
        <Testimonials />
        <ContactCall />
        <About />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}

export default App;
