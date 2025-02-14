import Header from "./components/Header/Header.jsx";
import Figure from "./components/Figure/Figure2.jsx";
import Main from "./section/Main/Main.jsx";
import Works from "./section/Works/Works.jsx";
import Testimonials from "./section/Testimonials/Testimonials.jsx";
import About from "./section/About/About.jsx";
import ContactCall from "./section/ContactCall/ContactCall.jsx";
import FAQ from "./section/FAQ/FAQ.jsx";
import Contact from "./section/contact/Contact.jsx";

function App() {

  return (
    <div className="bg-white flex w-auto relative">
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
