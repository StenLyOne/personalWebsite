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
    <section
      className="md:pr-[30px] md:pb-[305px] md:pt-[90px] px-[16px] pb-[80px] space-y-[20px]"
      id="cases"
    >
      <div>
        <p>My works</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-x-[20px] gap-y-[80px] md:gap-y-[150px]">
        {worksData.map((works, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setShowCard(index)}
            onMouseLeave={() => setShowCard(null)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`transition-shadow duration-300 rounded-[10px] h-auto ${
              index % 2 !== 0 ? "md:translate-y-[125px]" : ""
            } ${
              showCard === index ? "shadow-[0px_1px_50px_rgba(0,0,0,0.15)]" : ""
            }`}
          >
            <div className="relative overflow-hidden">
              <div className="h-[355px] md:h-[355px] xl:h-auto">
                <img
                  className="rounded-t-[10px] w-full h-full object-cover"
                  src={works.img}
                  alt={works.title}
                />
              </div>
              <div
                className={`color-white bg-blue absolute transition-all duration-300 w-full h-full left-[0px] px-[15px] py-[20px] flex flex-col items-start justify-center rounded-t-[10px] ${
                  showCard === index
                    ? "top-[0px] opacity-100"
                    : "top-full opacity-100"
                } space-y-[20px]`}
              >
                <div className="space-y-[10px]">
                  <h4>What I did:</h4>
                  <div className="space-y-[5px]">
                    {works.did.map((work, index) => (
                      <p key={index} className="flex items-start gap-[8px]">
                        <span className="text-[14px]">●</span> {work}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-[10px]">
                  <h4>Results:</h4>
                  <div className="space-y-[5px]">
                    {works.results.map((result, index) => (
                      <p key={index} className="flex items-start gap-[8px]">
                        <span className="text-[14px]">●</span> {result}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-[15px] space-y-[20px]">
              <div className="space-y-[10px]">
                <h3>{works.title}</h3>
                <p>{works.description}</p>
                <div className="flex justify-end">
                  <a href={works.url}>
                    <p className="color-blue font-12">(Go to website)</p>
                  </a>
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
