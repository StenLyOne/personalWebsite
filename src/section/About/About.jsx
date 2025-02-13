import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const xTransformBlock1 = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    ["50vw", "0vw"]
  );
  const xTransformBlock2 = useTransform(
    scrollYProgress,
    [0.2, 0.33],
    ["50vw", "0vw"]
  );
  const xTransformBlock3 = useTransform(
    scrollYProgress,
    [0.2, 0.36],
    ["50vw", "0vw"]
  );

  const xTransformBlock4 = useTransform(
    scrollYProgress,
    [0.6, 0.71],
    ["50vw", "0vw"]
  );
  const xTransformBlock5 = useTransform(
    scrollYProgress,
    [0.6, 0.73],
    ["50vw", "0vw"]
  );
  const xTransformBlock6 = useTransform(
    scrollYProgress,
    [0.6, 0.75],
    ["50vw", "0vw"]
  );
  const xTransformBlock7 = useTransform(
    scrollYProgress,
    [0.6, 0.77],
    ["50vw", "0vw"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg rounded-[10px]"
      style={{ height: `${screenHeight * 7}px` }}
    >
      <div className="sticky top-0 h-screen w-auto overflow-hidden">
        <motion.div
          className="flex inline-flex h-full justify-start items-center"
          style={{ x: xTransform }}
        >
          <div className="relative w-[100vw] h-full flex justify-end items-center z-10">
            <div className="text-center translate-x-1/5 ">
              <p className="color-blue">Hi there!</p>
              <h2 className="uppercase">
                I'm Vladislav, and <br />
                here’s my story
              </h2>
            </div>
            <div className="py-[20px] w-[40vw] h-full flex justify-center">
              <img
                className="w-full h-full object-cover"
                src="src/assets/img/i2.png"
                alt=""
              />
            </div>
          </div>
          <div className="space-y-[80px] mx-[400px] ">
            <div className="space-y-[8px] color-blue">
              <h2>6</h2>
              <p>Years in digital design</p>
            </div>
            <div className="space-y-[8px] color-blue">
              <h2>110+</h2>
              <p>Successfully completed projects</p>
            </div>
            <div className="space-y-[8px] color-blue">
              <h2>10</h2>
              <p>International design awards</p>
            </div>
            <div className="space-y-[8px] color-blue">
              <h2>$900K</h2>
              <p>Total valuation of my clientele</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center z-0 w-[100vw]"
            // style={{ x: xTransformBlock2 }}
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
                  style={{ x: xTransformBlock1 }}
                >
                  <div className="max-w-[360px] w-full h-[1px] bg-blue"></div>
                  <div className="space-x-[39px] flex">
                    <p className="color-blue">01</p>
                    <p className="color-blue">
                      We create products that fuel business growth and attract
                      new clients
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock2 }}
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
                  style={{ x: xTransformBlock3 }}
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
          </div>
          <div
            className="flex flex-col justify-center items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock3 }}
          >
            <div className="space-y-[30px]">
              <div className="w-[430px] max-h-[480px] h-full ">
                <img
                  className="w-[430px] w-full max-h-[480px] h-full object-cover"
                  src="src/assets/img/i2.png"
                  alt=""
                />
              </div>
              <div className="space-y-[10px]">
                <div className="relative">
                  <h3 className="uppercase ">Me + hobbies</h3>
                  <p className="color-blue absolute right-[7%] top-[0px] font-12">
                    (Hover over the bullets)
                  </p>
                </div>
                <div className="space-y-[5px]">
                  <p>Practice yoga and meditation</p>
                  <p>Coloring pictures for relaxation</p>
                  <p>Travel extensively around the world</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock4 }}
          >
            <div className="space-y-[30px]">
              <div className="space-y-[50px]">
                <div className="relative">
                  <h3 className="uppercase ">Me + my principles</h3>
                </div>
                <div className="flex space-x-[80px]">
                  <div className="space-y-[40px]">
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock4 }}
                    >
                      <h4 className="color-blue">01. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock5 }}
                    >
                      <h4 className="color-blue">02. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                  </div>
                  <div className="space-y-[40px]">
                  <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock6 }}
                    >
                      <h4 className="color-blue">03. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock7 }}
                    >
                      <h4 className="color-blue">04. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock5 }}
          >
            <div className="space-y-[10px]">
              <div className="w-[230px] max-h-[360px] h-full">
                <img
                  className="w-[230px] w-full max-h-[360px] h-full object-cover"
                  src="src/assets/img/i2.png"
                  alt=""
                />
              </div>
              <div className="">
                <p>More lifestyle on my Instagram</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
