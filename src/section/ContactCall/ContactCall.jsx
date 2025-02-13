import { useRef } from "react";
import Button from "../../components/Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactCall = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const yTransformH2 = useTransform(scrollYProgress, [0, 0.5], [100, -1000]);

  const yTransformPc = useTransform(scrollYProgress, [0, 0.5], [50, -600]);
  const xTransformPc = useTransform(scrollYProgress, [0.5, 1], [100, -1500]);

  return (
    <section className="relative h-[500vh]" ref={sectionRef}>
      <div className="sticky inset-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col space-y-[30px]"
          style={{ y: yTransformH2 }}
        >
          <h2 className="uppercase text-center">
            start to <br />
            work now
          </h2>
          <Button>Contact us</Button>
        </motion.div>
        <motion.div
          className="absolute h-screen w-full top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: yTransformPc, x: xTransformPc }}
        >
          <img src="src\assets\img\pc.png" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCall;
