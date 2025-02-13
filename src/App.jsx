import Header from "./components/Header/Header.jsx";
import Figure from "./components/Figure/Figure2.jsx";
import Main from "./section/Main/Main.jsx";
import Works from "./section/Works/Works.jsx";
import Testimonials from "./section/Testimonials/Testimonials.jsx";
import About from "./section/About/About.jsx";
import ContactCall from "./section/ContactCall/ContactCall.jsx";

function App() {
  return (
    <div className="bg-white flex w-auto relativ">
      <div className="md:w-1/5">
        <Header />
      </div>
      <div className="md:w-4/5 z-[1]">
        <Main />
        <Works />
        <Testimonials />
        <ContactCall />
        <About />
      </div>
      {/* <div className="absolute w-[80%] top-[-110px] right-[-550px] z-[100]">
        <Figure />
      </div> */}
    </div>
  );
}

export default App;
