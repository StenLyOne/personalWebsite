import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header.jsx";
import Main from "./section/Main/Main.jsx";
import Works from "./section/Works/Works.jsx";
import Testimonials from "./section/Testimonials/Testimonials.jsx";
import About from "./section/About/About.jsx";
import FAQ from "./section/FAQ/FAQ.jsx";
import Contact from "./section/contact/Contact.jsx";
import PopUp from "./section/PopUp/PopUp.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div className="bg-white flex flex-col md:flex-row w-auto relative">
      <div className="w-full h-auto md:w-1/5 z-[1] ">
        <Header />
      </div>
      <div className="md:w-4/5 z-[9]">
        <Main />
        <Works />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </div>

      {/* PopUp */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-full h-screen inset-0 bg-black/90 z-[10] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PopUp close={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
