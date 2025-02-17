import { useState } from "react";

const PopUp = ({ close }) => {
  const [focused, setFocused] = useState({
    name: { value: "", bullet: false },
    contact: { value: "", bullet: false },
    budget: { value: "" },
    message: { value: "" },
  });

  const [valid, setValid] = useState({
    name: true,
    contact: true,
  });

  const budgetOptions = [
    "$300-800",
    "$800-1200",
    "$1200-2000",
    "$2000-3000",
    "$3000+",
  ];
  const contactMethods = ["Telegram", "Gmail", "WhatsApp"];

  const handleSubmit = () => {
    let isValid = true;
    let newValidState = { ...valid };

    if (focused.name.value.trim() === "") {
      newValidState.name = false;
      isValid = false;
    } else {
      newValidState.name = true;
    }

    if (focused.contact.value.trim() === "") {
      newValidState.contact = false;
      isValid = false;
    } else {
      newValidState.contact = true;
    }

    setValid(newValidState);

    if (isValid) {
      alert("Form submitted successfully!");
      setFocused((prev) => ({
        ...prev,
        name: { value: "" },
        contact: { value: "" },
        budget: { value: "" },
        message: { value: "" },
      }));
    }
  };

  return (
    <section className="m-[30px] h-[100vh] w-full flex flex-col justify-end space-y-[20px]">
      <button
        className="color-white w-auto flex justify-end items-center gap-[8px]"
        style={{ fontSize: "14px" }}
        onClick={() => close()}
      >
        Close
        <span>
          <img src="src\assets\img\close.svg" alt="" />
        </span>
      </button>
      <div className="flex justify-between w-full p-[40px] rounded-[10px] bg-white">
        <h1 className="text-5xl font-bold text-center mb-[100px]">CONTACT</h1>

        <div className="max-w-[800px] w-full">
          {/* Поля ввода */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative">
              <label
                className={`absolute font-bold pointer-events-none transition-all duration-200
                ${
                  focused.name.bullet || focused.name.value
                    ? "text-[10px] text-gray-500 -top-3"
                    : "text-[18px] text-black top-1/2 -translate-y-1/2"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                value={focused.name.value}
                onChange={(e) =>
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, value: e.target.value },
                  }))
                }
                onFocus={() => {
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, bullet: true },
                  }));
                  setValid((prev) => ({
                    ...prev,
                    name: true,
                  }));
                }}
                onBlur={() =>
                  setFocused((prev) => ({
                    ...prev,
                    name: { ...prev.name, bullet: false },
                  }))
                }
                className={`w-full h-[43px] border-b-2 outline-none text-lg py-[10px] transition-all duration-200 
                ${
                  focused.name.value !== "" ? "border-black" : "border-gray-300"
                } 
                ${!valid.name ? "border-red-500" : ""}`}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-[0px] w-[14px] h-[14px] rounded-full flex justify-center items-center ${
                  valid.name === false ? "bg-red" : "bg-bg"
                }`}
              >
                <img
                  src={
                    valid.name === true && focused.name.value !== ""
                      ? "src/assets/img/valid.svg"
                      : "src/assets/img/invalid.svg"
                  }
                  alt=""
                />
              </div>
              {!valid.name && (
                <p className="absolute left-[0px] bottom-[-20px] text-red-500">
                  Name is required.
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="relative">
              <label
                className={`absolute font-bold pointer-events-none transition-all duration-200
                ${
                  focused.contact.bullet || focused.contact.value
                    ? "text-[10px] text-gray-500 -top-3"
                    : "text-[18px] text-black top-1/2 -translate-y-1/2"
                }`}
              >
                Where you can be contacted
              </label>
              <input
                type="text"
                value={focused.contact.value}
                onChange={(e) =>
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, value: e.target.value },
                  }))
                }
                onFocus={() => {
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, bullet: true },
                  }));
                  setValid((prev) => ({
                    ...prev,
                    contact: true,
                  }));
                }}
                onBlur={() => {
                  setFocused((prev) => ({
                    ...prev,
                    contact: { ...prev.contact, bullet: false },
                  }));
                }}
                className={`w-full h-[43px] border-b-2 outline-none text-lg py-[10px] transition-all duration-200 
                ${
                  focused.contact.value !== ""
                    ? "border-black"
                    : "border-gray-300"
                } 
                ${!valid.contact ? "border-red-500" : ""}`}
              />
              <div
                className={`absolute top-1/2 -translate-y-1/2 right-[0px] w-[14px] h-[14px] rounded-full flex justify-center items-center ${
                  valid.name === false ? "bg-red" : "bg-bg"
                }`}
              >
                <img
                  src={
                    valid.contact === true && focused.contact.value !== ""
                      ? "src/assets/img/valid.svg"
                      : "src/assets/img/invalid.svg"
                  }
                  alt=""
                />
              </div>
              {!valid.contact && (
                <p className="absolute left-[0px] bottom-[-20px] text-red-500">
                  Contact is required
                </p>
              )}
            </div>
          </div>

          {/* Выбор бюджета */}
          <div className="my-[30px]">
            <h4 className="text-lg font-medium mb-[10px]">
              Choose your budget:
            </h4>
            <div className="flex">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  onClick={() =>
                    setFocused((prev) => ({
                      ...prev,
                      budget: { value: option },
                    }))
                  }
                  className={`px-[12px] py-[6px] md:px-[10px] md:py-[4px] border rounded-full transition-all duration-200 
                  ${
                    focused.budget.value === option
                      ? "border-blue-800 text-blue-800 font-semibold"
                      : "border-gray-300 text-black hover:border-gray-500 font-semibold"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Сообщение */}
          <div className="mb-[30px]">
            <h4 className="text-lg font-medium">
              A few words about the project{" "}
              <span className="color-grey">(Optional)</span>
            </h4>
            <textarea
              value={focused.message.value}
              onChange={(e) =>
                setFocused((prev) => ({
                  ...prev,
                  message: { value: e.target.value },
                }))
              }
              className={`w-full border-b-2 focus:border-black outline-none text-lg py-[10px] pr-[10px] transition-all duration-200 
              ${
                focused.message.value !== ""
                  ? "border-black"
                  : "border-gray-300"
              }`}
              rows="3"
            ></textarea>
          </div>

          {/* Кнопка */}
          <button
            onClick={handleSubmit}
            className="bg-blue text-white px-[26px] py-[9px] rounded-[10px]"
          >
            Contact us
          </button>
        </div>
      </div>
      {/* Способы связи */}
      <div className="flex items-center w-full mb-[60px] px-[40px] py-[20px] rounded-[10px] bg-white">
        {/* Левая часть */}
        <div className="flex items-center space-x-[10px] min-w-max">
          <p>You can contact me on</p>
          <button className="px-[12px] py-[6px] md:px-[10px] md:py-[4px] border rounded-full transition-all duration-200 border-blue-800 text-blue-800 hover:border-black hover:text-black">
            Up Work
          </button>
        </div>

        {/* Разделительная линия */}
        <div className="flex-grow flex items-center px-[20px]">
          <div className="flex-1 h-[1px] bg-stroke"></div>
          <p className="color-stroke mx-[10px]">or</p>
          <div className="flex-1 h-[1px] bg-stroke"></div>
        </div>

        {/* Правая часть */}
        <div className="flex min-w-max">
          {contactMethods.map((method) => (
            <button
              key={method}
              className="px-[12px] py-[6px] md:px-[10px] md:py-[4px] border rounded-full transition-all duration-200 hover:border-blue-800 hover:text-blue-800"
            >
              {method}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopUp;
