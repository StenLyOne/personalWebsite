import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../components/Button/Button";

const About = () => {
  const sectionRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [hobbies, setHobbies] = useState(1);
  const images = {
    1: "src/assets/img/i1.png",
    2: "src/assets/img/what.png",
    3: "src/assets/img/what2.png",
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
      setTimeout(() => {
        sectionRef.current.style.height = `${window.innerHeight * 7}px`;
      }, 50);
    };

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const yTransformH2 = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["50vw", "-100vw"]
  );

  const yTransformPc = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["50vw", "-35vw"]
  );
  const xTransformPc = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["0vw", "-100vw"]
  );

  const xTransform = useTransform(scrollYProgress, [0, 1], ["40%", "-85%"]);

  const opacityIndicators1 = useTransform(
    scrollYProgress,
    [0.39, 0.41],
    [0, 1]
  );
  const opacityIndicators2 = useTransform(
    scrollYProgress,
    [0.41, 0.43],
    [0, 1]
  );
  const opacityIndicators3 = useTransform(
    scrollYProgress,
    [0.43, 0.45],
    [0, 1]
  );
  const opacityIndicators4 = useTransform(
    scrollYProgress,
    [0.45, 0.47],
    [0, 1]
  );

  const xTransformBlock1 = useTransform(
    scrollYProgress,
    [0.5, 0.53],
    ["50vw", "0vw"]
  );
  const xTransformBlock2 = useTransform(
    scrollYProgress,
    [0.52, 0.55],
    ["50vw", "0vw"]
  );
  const xTransformBlock3 = useTransform(
    scrollYProgress,
    [0.54, 0.57],
    ["50vw", "0vw"]
  );

  const colorBlock1 = useTransform(
    scrollYProgress,
    [0.53, 0.55], // Большее расстояние
    ["#7988A3", "#1E2EB8"]
  );
  const colorBlock2 = useTransform(
    scrollYProgress,
    [0.55, 0.57], // Плавнее изменение
    ["#7988A3", "#1E2EB8"]
  );
  const colorBlock3 = useTransform(
    scrollYProgress,
    [0.57, 0.59], // Ещё плавнее
    ["#7988A3", "#1E2EB8"]
  );

  const xOpacityBlockH3 = useTransform(
    scrollYProgress,
    [0.8, 0.85],
    ["0", "1"]
  );

  const xTransformBlock4 = useTransform(
    scrollYProgress,
    [0.75, 0.82],
    ["50vw", "0vw"]
  );
  const xTransformBlock5 = useTransform(
    scrollYProgress,
    [0.77, 0.83],
    ["50vw", "0vw"]
  );
  const xTransformBlock6 = useTransform(
    scrollYProgress,
    [0.79, 0.84],
    ["50vw", "0vw"]
  );
  const xTransformBlock7 = useTransform(
    scrollYProgress,
    [0.81, 0.85],
    ["50vw", "0vw"]
  );

  const opacityBlock4 = useTransform(scrollYProgress, [0.66, 0.72], [0, 1]);
  const opacityBlock5 = useTransform(scrollYProgress, [0.68, 0.74], [0, 1]);
  const opacityBlock6 = useTransform(scrollYProgress, [0.7, 0.76], [0, 1]);
  const opacityBlock7 = useTransform(scrollYProgress, [0.72, 0.78], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full rounded-[10px]"
      // style={{ height: `${screenHeight * 8}px` }}
      id="about"
    >
      <div className="md:sticky top-0 md:h-screen w-auto overflow-hidden ">
        <motion.div
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center flex-col space-y-[30px]"
          style={{ y: yTransformH2 }}
        >
          <h2 className="uppercase text-center">
            start to <br />
            work now
          </h2>
          <Button>Contact us</Button>
        </motion.div>
        <motion.div
          className="md:absolute md:h-screen w-full md:top-[120%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[10]"
          style={
            isMobile
              ? { y: yTransformPc }
              : { y: yTransformPc, x: xTransformPc }
          }
        >
          <img src="src\assets\img\pc.png" alt="" />
        </motion.div>
        <motion.div
          className="relative md:px-[0px] flex flex-col md:flex-row inline-flex h-full justify-start items-start md:items-center bg-bg min-w-full z-[11]"
          style={isMobile ? "" : { x: xTransform }}
        >
          <div className="relative w-[100vw] h-full px-[16px] md:pt-[0px] pt-[40px] md:px-[0px] flex flex-col md:flex-row justify-end items-center z-10">
            <div className="text-center md:translate-x-1/5 space-y-[15px]">
              <p className="color-blue">Hi there!</p>
              {!isMobile ? <h2 className="uppercase">
                I&apos;m Vladislav, and <br />
                here&apos;s my story
              </h2> : <h3 className="uppercase">
                I&apos;m Vladislav, and <br />
                here&apos;s my story
              </h3>}
            </div>
            <div className="py-[20px] md:w-[40vw] w-full h-[530px] md:h-full flex justify-center">
              <img
                className="w-full h-full object-cover rounded-[10px]"
                src="src/assets/img/i2.png"
                alt=""
              />
            </div>
          </div>
          <div className="space-y-[40px] md:space-y-[80px] px-[16px] my-[100px] md:my-[0px] md:mx-[400px] ">
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators1 }}
            >
              <h2>6</h2>
              <p>Years in digital design</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators2 }}
            >
              <h2>110+</h2>
              <p>Successfully completed projects</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators3 }}
            >
              <h2>10</h2>
              <p>International design awards</p>
            </motion.div>
            <motion.div
              className="space-y-[8px] color-blue"
              style={{ opacity: opacityIndicators4 }}
            >
              <h2>$900K</h2>
              <p>Total valuation of my clientele</p>
            </motion.div>
          </div>
          <div
            className="flex flex-col justify-center items-start px-[16px] md:px-[0px] md:items-center z-0 w-[100vw]"
            // style={{ x: xTransformBlock2 }}
          >
            <div className="text-start space-y-[40px] md:space-y-[60px]">
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
                  style={{ x: xTransformBlock1, color: colorBlock1 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock1 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">01</p>
                    <p className="">
                      We create products that fuel business growth and attract
                      new clients
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock2, color: colorBlock2 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock2 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">02</p>
                    <p className="">
                      Our design philosophy values functional aesthetics, and we
                      always keep the end-user in mind
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="max-w-[360px] space-y-[20px]"
                  style={{ x: xTransformBlock3, color: colorBlock3 }}
                >
                  <motion.div
                    className="max-w-[360px] w-full h-[1px]"
                    style={{ backgroundColor: colorBlock3 }}
                  ></motion.div>
                  <div className="space-x-[39px] flex">
                    <p className="">03</p>
                    <p className="">
                      By seamlessly blending form and function, we strive to
                      deliver solutions that captivate and resonate
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center px-[16px] my-[120px] md:my-[0px] md:px-[0px] items-start md:items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock3 }}
          >
            <div className="space-y-[30px]">
              <div className="w-full md:w-[430px] h-[460px] md:h-[480px] ">
                <motion.img
                  key={hobbies}
                  className="w-[430px] w-full max-h-[480px] h-full object-cover"
                  src={images[hobbies]}
                  alt=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
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
                  <div className="flex items-start gap-[8px] cursor-pointer">
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(1)}
                    >
                      Practice yoga and meditation
                    </p>
                  </div>
                  <div className="flex items-start gap-[8px] cursor-pointer">
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(3)}
                    >
                      Travel extensively around the world
                    </p>
                  </div>
                  <div className="flex items-start gap-[8px] cursor-pointer">
                    <span className="flex items-start color-blue leading-[0.9]">
                      ●
                    </span>
                    <p
                      className="flex items-start gap-[8px] cursor-pointer hover-link"
                      onMouseEnter={() => setHobbies(2)}
                    >
                      Practice yoga and meditation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center px-[16px] md:px-[0px] items-start md:items-center z-[0] w-[100vw]"
            // style={{ x: xTransformBlock4 }}
          >
            <div className="space-y-[30px]">
              <div className="space-y-[50px]">
                <div className="relative">
                  <motion.h3
                    className="uppercase"
                    style={{ opacity: xOpacityBlockH3 }}
                  >
                    Me + my principles
                  </motion.h3>
                </div>
                <div className="block md:flex space-x-[80px]">
                  <div className="space-y-[40px]">
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock4, opacity: opacityBlock4 }}
                    >
                      <h4 className="color-blue">01. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock5, opacity: opacityBlock5 }}
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
                      style={{ x: xTransformBlock6, opacity: opacityBlock6 }}
                    >
                      <h4 className="color-blue">03. Customized Solutions</h4>
                      <p className="color-grey">
                        Crafting tailored solutions that align with the unique
                        needs of companies worldwide.
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-[10px] w-[271px]"
                      style={{ x: xTransformBlock7, opacity: opacityBlock7 }}
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
            className="flex flex-col justify-center items-center py-[120px] md:py-[0px] z-[0] w-[100vw]"
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
