import { useState, useEffect } from "react";
import FAQItem from "../../components/FAQItem/FAQItem";

const faqData = [
  {
    id: 1,
    question: "How do you work on projects?",
    answer:
      "Рабочий процесс состоит из нескольких этапов, каждый из которых включает согласование с клиентом...",
  },
  {
    id: 2,
    question: "What if I don’t like the outcome?",
    answer:
      "Мы всегда работаем с клиентом, чтобы достичь наилучшего результата. Если что-то не нравится, мы готовы внести правки.",
  },
  {
    id: 3,
    question: "What should I do if I don’t have ready-made text?",
    answer:
      "Мы можем помочь вам с копирайтингом и подготовить качественные тексты для вашего проекта.",
  },
  {
    id: 4,
    question: "Do I need to have brand identity for website creation?",
    answer:
      "Желательно, но не обязательно. Мы можем разработать айдентику с нуля.",
  },
];

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="space-y-[30px] mt-[100px] md:mt-[180px] md:mr-[30px]" id="faq">
      {!isMobile ? (
        <h2 className="uppercase">
          Questions and <br />
          Answers
        </h2>
      ) : (
        <h2 className="uppercase px-[16px] md:px-[0px]">FAQ</h2>
      )}
      <div
        className={`${
          !isMobile ? "bg-bg" : ""
        } md:py-[50px] px-[16px] md:px-[40px] flex flex-col rounded-[10px]`}
      >
        {faqData.map((faq, index) => (
          <div key={faq.id} className="cursor-pointer">
            <FAQItem
              key={faq.id}
              id={faq.id}
              answer={faq.answer}
              question={faq.question}
              isOpen={openFAQ}
              setOpen={setOpenFAQ}
            />
            {index !== faqData.length - 1 && (
              <div className="h-[1px] w-full bg-stroke" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
