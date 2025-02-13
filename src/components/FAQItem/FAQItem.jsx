import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ id, question, answer, isOpen, setOpen }) => {
  const toggleFAQ = () => {
    setOpen(isOpen === id ? null : id);
  };
  return (
    <div
      className="w-full flex justify-between space-x-[120px] py-[20px] items-center"
      onClick={toggleFAQ}
    >
      <div>
        <p className="color-black">0{id}</p>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="">
          <h4>{question}</h4>
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen === id ? "auto" : 0,
              opacity: isOpen === id ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="color-grey mt-[14px]">{answer}</p>
          </motion.div>
        </div>
        <button className="bg-blue w-[26px] h-[26px] rounded-full flex items-center justify-center">
          <span>
            {isOpen === id ? (
              <FaMinus className="color-white" />
            ) : (
              <FaPlus className="color-white" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQItem;
