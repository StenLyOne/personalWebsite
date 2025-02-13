import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    img: "src/assets/img/I.png",
    name: "John Doe",
    company: "Tech Inc.",
    text: "Awesome work!",
    title: "Short title",
    position: "top-10 left-10",
    path: "src/assets/testimonials/testimonials1.ogg",
  },
  {
    id: 2,
    img: "src/assets/img/I.png",
    name: "Jane Smith",
    company: "Startup X",
    text: "Highly recommend!",
    title: "Short title",
    position: "bottom-1/5 left-20",
    path: "src/assets/testimonials/testimonials1.ogg",
  },
  {
    id: 3,
    img: "src/assets/img/I.png",
    name: "Alice Johnson",
    company: "E-Shop",
    text: "Amazing results!",
    title: "Short title",
    position: "bottom-1/4 left-1/2",
    path: "src/assets/testimonials/testimonials1.ogg",
  },
  {
    id: 4,
    img: "src/assets/img/I.png",
    name: "Bob Brown",
    company: "Finance Pro",
    text: "Top-notch service!",
    title: "Short title",
    position: "bottom-10 right-10",
    path: "src/assets/testimonials/testimonials1.ogg",
  },
];

const services = [
  {
    id: 1,
    title: "Landing",
    terms: "4 days+",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    priceDesign: "300$",
    priceDesignDev: "500$",
    position: "top-0 left-10",
  },
  {
    id: 2,
    title: "Multi-page website",
    terms: "5 days+",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    priceDesign: "300$",
    priceDesignDev: "500$",
    position: "top-1/3 right-0",
  },
  {
    id: 3,
    title: "Branding",
    terms: "4 days+",
    description:
      "We make websites for any task: a product page, a special project, a promo or an online store. Nocode and speed",
    priceDesign: "300$",
    priceDesignDev: "500$",
    position: "bottom-10 left-10",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [duration, setDuration] = useState({});
  const audioRefs = useRef({});

  const handlePlay = (id) => {
    if (currentAudio && currentAudio !== audioRefs.current[id]) {
      currentAudio.pause();
    }

    const audio = audioRefs.current[id];
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setCurrentAudio(audio);
    } else {
      audio.pause();
      setCurrentAudio(null);
    }
  };

  const handleLoadedMetadata = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      setDuration((prev) => ({
        ...prev,
        [id]: Math.round(audio.duration), // Длительность в секундах
      }));
    }
  };

  // Контролируем скролл внутри секции
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Двигаем отзывы влево при скролле
  const xTransformTestimonials = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "-100%"]
  );
  const xTransformServices = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["100%", "-100%"]
  );

  const bgColor = useTransform(
    scrollYProgress,
    [0.4, 0.6, 1],
    ["#1E2EB8", "#C9CEF6", "#E8EDF6"]
  );

  const titleOpacity1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.5],
    [1, 0.2, 0]
  ); // Исчезает
  const titleOpacity2 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 1],
    [0, 0.6, 1, 0.1]
  ); // Появляется
  const titleY1 = useTransform(scrollYProgress, [0.4, 0.5], ["0%", "-50%"]); // Уходит вверх
  const titleY2 = useTransform(scrollYProgress, [0.5, 0.6], ["50%", "0%"]); // Появляется снизу

  return (
    <section ref={sectionRef} className="relative h-[1000vh] ">
      <div className="sticky inset-0 bottom-0 h-screen w-full flex items-center justify-center overflow-hidden  rounded-[10px]">
        {/* Блок фиксации, пока идет анимация */}
        <motion.div
          className="sticky inset-0 bottom-0 h-screen w-full flex items-center justify-center overflow-hidden  rounded-[10px]"
          style={{ backgroundColor: bgColor }}
        >
          {/* Заголовок */}
          <motion.h2
            className="absolute top-1/2 left-1/2 text-white text-5xl font-bold -translate-x-1/2 -translate-y-1/2 text-center"
            style={{
              opacity: titleOpacity1,
              y: titleY1,
              color: scrollYProgress,
            }}
          >
            WHAT MY CLIENTS SAY
          </motion.h2>

          {/* Второй заголовок */}
          <motion.h2
            className="absolute top-1/2 left-1/2 text-black text-5xl font-bold -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ opacity: titleOpacity2, y: titleY2 }}
          >
            WHAT SERVICES DO I PROVIDE?
          </motion.h2>

          {/* Горизонтальный скролл отзывов */}
          <motion.div
            className="absolute w-full h-full flex items-center space-x-10 px-10"
            style={{ x: xTransformTestimonials }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`absolute rounded-lg space-y-[10px] ${testimonial.position}`}
              >
                <div className="flex items-center gap-[8px]">
                  <div className="w-[60px] h-[60px] rounded-[100px] border border-white">
                    <img src={testimonial.img} alt="" />
                  </div>
                  <div className="space-y-2">
                    <p className="manrope color-white font-bold">
                      {testimonial.name}
                    </p>
                    <p className="manrope color-bg font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-[231px] bg-white py-[9px] px-[14px] rounded-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="relative w-[12px] h-[12px]">
                      <audio
                        ref={(el) => (audioRefs.current[testimonial.id] = el)}
                        src={testimonial.path}
                        onLoadedMetadata={() =>
                          handleLoadedMetadata(testimonial.id)
                        }
                      />
                      <button
                        className="absolute "
                        onClick={() => handlePlay(testimonial.id)}
                      >
                        <img
                          className="w-[12px] h-[12px]"
                          src={
                            currentAudio === audioRefs.current[testimonial.id]
                              ? "src/assets/img/pause.svg"
                              : "src/assets/img/play.svg"
                          }
                          alt=""
                        />
                      </button>
                    </div>
                    <div>
                      <p className="color-blue">Short title</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <span>
                      <img
                        src={
                          currentAudio === audioRefs.current[testimonial.id]
                            ? "src/assets/img/sound.svg"
                            : "src/assets/img/sound2.svg"
                        }
                        alt=""
                      />
                    </span>
                    {duration[testimonial.id] && (
                      <p className="color-blue">
                        00:{duration[testimonial.id]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="absolute left-[0px] w-full h-[200%] flex items-center space-x-10 px-10"
            style={{ y: xTransformServices }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col justify-between absolute bg-blue p-[30px] rounded-lg shadow-lg max-w-[340px] w-[100%] max-h-[424px] h-[100%] ${service.position}`}
              >
                <div className="flex items-center justify-between">
                  <div className="bg-white rounded-[10px] py-[4px] px-[10px]">
                    <p className="color-blue font-medium">
                      Terms: {service.terms}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      <span className="color-white">0{service.id}</span>
                      <span style={{ color: "#707BDA" }}>
                        / 0{services.length + 1}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="space-y-[40px]">
                  <div className="space-y-[10px]">
                    <h3 className="color-white uppercase">{service.title}</h3>
                    <p className="font-medium color-white">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="space-y-[4px]">
                      <p className="font-medium" style={{ color: "#707BDA" }}>
                        Design only:
                      </p>
                      <p className="color-white">from {service.priceDesign}</p>
                    </div>
                    <div className="space-y-[4px]">
                      <p className="font-medium" style={{ color: "#707BDA" }}>
                        Design+Dev:
                      </p>
                      <p className="color-white">from {service.priceDesign}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="absolute bottom-[20px]">
          <p className="" style={{ color: "#E8EDF6" }}>
            Keep scrolling
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
