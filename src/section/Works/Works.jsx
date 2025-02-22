import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Villa",
    description:
      "A workspace optimized for eco-friendly energy use and maximum comfort.",
    img: "src/assets/img/villa2.jpg",
    imgMob: "src/assets/img/ittconMob.png",
    did: [
      "Designed an intuitive layout for effortless information access",
      "Developed a professional, minimalistic aesthetic",
      "Enhanced mobile responsiveness and speed optimization",
    ],
    results: [
      "Faster load times for a smoother user experience",
      "+40% improvement in mobile usability",
      "A polished, corporate identity that aligns with the brand’s mission",
    ],
  },
  {
    title: "ITTCON",
    description: "Sustainable Forestry & Green Investments",
    categoty: "Corporate",
    img: "src/assets/img/ittcon.png",
    imgMob: "src/assets/img/ittconMob.jpg",
    did: [
      "Complete redesign and development from scratch, creating a modern and intuitive website",
      "A design that fully represents the company’s values and strengthens its visual identity",
      "Thoughtfully structured UX/UI for seamless navigation and a better user experience",
    ],
    results: [
      "[+37%] increase in inquiries due to improved usability and engagement",
      "[Stronger brand trust], leading to higher user interaction and credibility",
      "[23%] more investors and partnerships thanks to a professional and compelling online presence.",
    ],
  },
  {
    title: "EcoHome",
    description: "A sustainable and energy-efficient home design.",
    img: "src/assets/img/smartscape.png",
    imgMob: "src/assets/img/ittconMob.png",
    did: [
      "Designed an intuitive layout for effortless information access",
      "Developed a professional, minimalistic aesthetic",
      "Enhanced mobile responsiveness and speed optimization",
    ],
    results: [
      "Faster load times for a smoother user experience",
      "+40% improvement in mobile usability",
      "A polished, corporate identity that aligns with the brand’s mission",
    ],
  },
  {
    title: "EcoHome",
    description: "A sustainable and energy-efficient home design.",
    img: "src/assets/img/smartscape.png",
    imgMob: "src/assets/img/ittconMob.png",
    did: [
      "Designed an intuitive layout for effortless information access",
      "Developed a professional, minimalistic aesthetic",
      "Enhanced mobile responsiveness and speed optimization",
    ],
    results: [
      "Faster load times for a smoother user experience",
      "+40% improvement in mobile usability",
      "A polished, corporate identity that aligns with the brand’s mission",
    ],
  },
  {
    title: "EcoHome",
    description: "A sustainable and energy-efficient home design.",
    img: "src/assets/img/smartscape.png",
    imgMob: "src/assets/img/ittconMob.png",
    did: [
      "Designed an intuitive layout for effortless information access",
      "Developed a professional, minimalistic aesthetic",
      "Enhanced mobile responsiveness and speed optimization",
    ],
    results: [
      "Faster load times for a smoother user experience",
      "+40% improvement in mobile usability",
      "A polished, corporate identity that aligns with the brand’s mission",
    ],
  },
  {
    title: "EcoHome",
    description: "A sustainable and energy-efficient home design.",
    img: "src/assets/img/smartscape.png",
    imgMob: "src/assets/img/ittconMob.png",
    did: [
      "Designed an intuitive layout for effortless information access",
      "Developed a professional, minimalistic aesthetic",
      "Enhanced mobile responsiveness and speed optimization",
    ],
    results: [
      "Faster load times for a smoother user experience",
      "+40% improvement in mobile usability",
      "A polished, corporate identity that aligns with the brand’s mission",
    ],
  },
];

const Works = () => {
  const [showCard, setShowCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="md:pr-[30px] md:pb-[305px] md:pt-[90px] px-[16px] pb-[80px] space-y-[20px]"
      id="cases"
    >
      <div>
        <p>My works</p>
      </div>
      <div className="grid max-[1280px]:grid-cols-1 min-[1280px]:grid-cols-2 grid-rows-auto gap-x-[20px] gap-y-[80px] md:gap-y-[150px]">
        {worksData.map((works, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setShowCard(index)}
            onMouseLeave={() => setShowCard(null)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: !isMobile ? index * 0.1 : 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`transition-shadow duration-300 rounded-[10px] h-auto ${
              index % 2 !== 0 ? "min-[1280px]:translate-y-[125px]" : ""
            } ${
              showCard === index ? "shadow-[0px_1px_50px_rgba(0,0,0,0.15)]" : ""
            }`}
          >
            <div className="relative overflow-hidden">
              <div
                className={`h-full md:h-[500px] md:min-h-[400px] xl:h-auto xl:min-h-full 2xl::h-auto `}
              >
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src={!isMobile ? works.img : works.imgMob}
                  alt={works.title}
                />
              </div>
              <div
                className={`color-white bg-white absolute transition-all duration-300 w-full h-full left-[0px] px-[15px] py-[20px] flex flex-col items-start justify-center rounded-t-[10px] border-b border-black ${
                  showCard === index
                    ? "top-[0px] opacity-100"
                    : "top-full opacity-100"
                } space-y-[20px]`}
              >
                <div className="space-y-[10px] color-blue">
                  <h4>What I did:</h4>
                  <div className="space-y-[5px]">
                    {works.did.map((work, index) => (
                      <p key={index} className="flex items-start gap-[8px]">
                        <span className="text-[14px]">●</span> {work}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-[10px] color-blue">
                  <h4>Results:</h4>
                  <div className="space-y-[5px]">
                    {works.results.map((result, index) => (
                      <p key={index} className="flex items-start gap-[8px]">
                        <span className="text-[14px]">●</span> {result}
                      </p>
                    ))}
                  </div>
                </div>
                {isMobile ? (
                  <a
                    className="ml-auto color-white font-18 ml-auto font-bold"
                    href=""
                  >
                    (Go to website)
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="relative p-[15px] space-y-[20px]">
              <div className="space-y-[10px]">
                <h3>{works.title}</h3>
                <p>{works.description}</p>
                <div className="flex justify-end">
                  <div href={works.url}>
                    {!isMobile ? (
                      <a href="" className="color-blue font-18 font-bold">
                        (Go to website)
                      </a>
                    ) : (
                      <div className="color-blue font-18 font-bold">
                        (Tap here to learn more)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
