import { motion } from "framer-motion";

const FAQItem = ({ id, question, answer, isOpen, setOpen }) => {
  const toggleFAQ = () => {
    setOpen(isOpen === id ? null : id);
  };

  return (
    <div
      className="w-full  justify-between py-[20px] items-center"
      onClick={toggleFAQ}
    >
      <div>
        <div className="flex w-full justify-between w-full items-center">
          <div>
            <p className="color-black">0{id}</p>
          </div>
          <div className="flex justify-between w-full">
            <h4 className='ml-[120px]'>{question}</h4>
            <button className="relative w-[26px] h-[26px] rounded-full flex items-start justify-center overflow-hidden">
              <motion.span className={`relative transfor transition-all duration-300 ${isOpen === id ? 'top-[-100%]' : 'top-[0%]'}`}>
                <span className="w-[26px] h-[26px] bg-stroke flex rounded-full items-center justify-center">
                  <img className="w-[10px]" src="src/assets/img/plus.svg" alt="" />
                </span>
                <span className="w-[26px] h-[26px] bg-blue flex rounded-full items-center justify-center">
                  <img className="w-[10px]" src="src/assets/img/plus.svg" alt="" />
                </span>
              </motion.span>
            </button>
          </div>
        </div>  
      </div>
      <motion.div
              className="overflow-hidden ml-[133.5px] max-w-[500px]"
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
  );
};

export default FAQItem;
