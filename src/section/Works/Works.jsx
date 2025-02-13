import { useState } from "react";
import { motion } from "framer-motion";

const worksData = [
  {
    title: "Smartscape",
    description:
      "A workspace optimized for eco-friendly energy use and maximum comfort.",
    img: "src/assets/img/smartscape.png",
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

  return (
    <section className="pr-[30px] pb-[180px] md:pt-[90px] pb-[80px]">
      <div>
        <p>My works</p>
      </div>
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
        {worksData.map((works, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setShowCard(index)}
            onMouseLeave={() => setShowCard(null)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={` transition-shadow duration-300 rounded-[10px] h-auto${
              index % 2 !== 0 ? "mt-[200px] " : ""
            } ${showCard === index ? "card-shadow" : ""}`}
          >
            <div>
              <img
                className="rounded-t-[10px]"
                src={works.img}
                alt={works.title}
              />
            </div>
            <div className="relative pt-[10px] pl-[15px] pr-[15px] space-y-[20px]">
              <div className=" space-y-[10px]">
                <h3>{works.title}</h3>
                <p>{works.description}</p>
              </div>
              <div
                className={`absolute top-full bg-white transition-opacity duration-200 w-full left-[0px] px-[15px] py-[20px] rounded-b-[10px] shadow-[0px_20px_12px_rgba(0,0,0,0.15)] ${
                  showCard === index
                    ? "bot-0 opacity-100"
                    : "bot-full opacity-0"
                }  space-y-[20px]`}
              >
                <div className="space-y-[10px]">
                  <h4>What i did:</h4>
                  <div className="space-y-[5px]">
                    {works.did.map((work, index) => (
                      <p key={index}>{work}</p>
                    ))}
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <h4>Results:</h4>
                  <div className="space-y-[5px]">
                    {works.results.map((result, index) => (
                      <p key={index}>{result}</p>
                    ))}
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
