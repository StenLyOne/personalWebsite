import { useState, useEffect } from "react";
import FAQItem from "../../components/FAQItem/FAQItem";

const faqData = [
  {
    id: 1,
    question: "How do you work on projects?",
    answer:
      "I follow a structured process: research, wireframing, design, and development. You’re involved at every stage to ensure the final result aligns with your vision.",
  },
  {
    id: 2,
    question: "What if I don’t like the outcome?",
    answer:
      "I always ensure we’re aligned before finalizing any design. We go through structured revisions, making adjustments based on your feedback until you're satisfied.",
  },
  {
    id: 3,
    question: "Can you also develop the website?",
    answer:
      "Yes! I handle both design and development, using Webflow, React, or WordPress to deliver fully functional and optimized websites.",
  },
  {
    id: 4,
    question: "How long does a project take?",
    answer:
      "Timelines vary by project. A simple landing page takes 4-7 days, while multi-page websites usually require 10+ days.",
  },
  {
    id: 5,
    question: "What if I don’t have branding or content?",
    answer:
      "No problem! I can help define your brand identity and create compelling content that aligns with your business goals.",
  },
  {
    id: 6,
    question: "Will my website be mobile-friendly and fast?",
    answer:
      "Absolutely. Every site is fully responsive, optimized for speed, and built with best SEO practices in mind.",
  },
  {
    id: 7,
    question: "What happens after the project is done?",
    answer:
      "I offer post-launch support, updates, and improvements to ensure your website remains effective and up-to-date.",
  },
  {
    id: 8,
    question: "Why should I work with you instead of an agency?",
    answer:
      "I provide a more personal, flexible, and detail-oriented approach, ensuring your project gets the attention it deserves—without agency overhead costs.",
  },
];

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="space-y-[30px] mt-[100px] md:mt-[180px] md:mr-[30px]"
      id="faq"
    >
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
