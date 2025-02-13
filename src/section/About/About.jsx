import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const xTransformBlock1 = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ["0%", "-200%"]
  );

  const xTransformBlock2 = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.6, 0.7],
    ["100%", "0%", "0%", "-200%"]
  );

  const xTransformBlock21 = useTransform(
    scrollYProgress,
    [0.2, 0.27],
    ["500%", "0%"]
  );
  const xTransformBlock22 = useTransform(
    scrollYProgress,
    [0.34, 0.41],
    ["500%", "0%"]
  );
  const xTransformBlock23 = useTransform(
    scrollYProgress,
    [0.41, 0.58],
    ["500%", "0%"]
  );

  return (
    <section ref={sectionRef} className="relative h-[500vh] w-full bg-bg">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Первый блок */}
        <motion.div
          className="absolute w-full h-full flex justify-center items-center bg-gray-100 z-10"
          style={{ x: xTransformBlock1 }}
        >
          <div className="text-center">
            <p className="color-blue">Hi there!</p>
            <h2 className="uppercase">I'm Vladislav, and here’s my story</h2>
          </div>
          <div className="absolute top-[20px] bottom-[20px] right-[-25%] w-[50%] h-[90%]">
            <img
              className="w-auto h-auto object-cover"
              src="src/assets/img/i2.png"
              alt=""
            />
          </div>
          <div className="absolute right-[-70%] bottom-[20px] space-y-[80px]">
            <div className="space-y-[8px] color-blue">
              <h2>6</h2>
              <p>Years in digital design</p>
            </div>
            <div className="space-y-[8px] color-blue">
              <h2>110+</h2>
              <p>Successfully completed projects</p>
            </div>
          </div>
        </motion.div>

        {/* Второй блок */}
        <motion.div
          className="absolute w-full h-full flex flex-col justify-center items-center z-0"
          style={{ x: xTransformBlock2 }}
        >
          <div className="text-start space-y-[60px]">
            <div className="space-y-[14px]">
              <h3 className="uppercase color-black">Me + my Team</h3>
              <p>
                I am an Art Director, and at the helm of a team <br />
                comprising like-minded individuals and skilled
                <br /> experts, and together we:
              </p>
            </div>
            <div className="space-y-[20px]">
              <motion.div
                className="max-w-[360px] space-y-[20px]"
                style={{ x: xTransformBlock21 }}
              >
                <div className="max-w-[360px] w-full h-[1px] bg-blue"></div>
                <div className="space-x-[39px] flex">
                  <p className="color-blue">01</p>
                  <p className="color-blue">
                    We create products that fuel business growth and attract new
                    clients
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="max-w-[360px] space-y-[20px]"
                style={{ x: xTransformBlock22 }}
              >
                <div className="max-w-[360px] w-full h-[1px] bg-blue"></div>
                <div className="space-x-[39px] flex">
                  <p className="color-blue">02</p>
                  <p className="color-blue">
                    Our design philosophy values functional aesthetics, and we
                    always keep the end-user in mind
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="max-w-[360px] space-y-[20px]"
                style={{ x: xTransformBlock23 }}
              >
                <div className="max-w-[360px] w-full h-[1px] bg-blue"></div>
                <div className="space-x-[39px] flex">
                  <p className="color-blue">03</p>
                  <p className="color-blue">
                    By seamlessly blending form and function, we strive to
                    deliver solutions that captivate and resonate
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
