import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("Telegram");

  const budgetOptions = [
    "$300-800",
    "$800-1200",
    "$1200-2000",
    "$2000-3000",
    "3000+",
  ];
  const contactMethods = ["Telegram", "Gmail", "WhatsApp"];

  return (
    <div className="max-w-[800px] mx-auto mt-[180px] mb-[90px]">
      {/* Заголовок */}
      <h1 className="text-5xl font-bold text-center mb-8">CONTACT</h1>

      {/* Форма */}
      <div className="space-y-6">
        {/* Поля ввода */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-600 font-10">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none text-lg py-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 font-10">
              Where you can be contacted
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none text-lg py-1"
            />
          </div>
        </div>

        {/* Выбор бюджета */}
        <div>
          <p className="text-lg font-medium">Choose your budget:</p>
          <div className="flex space-x-2 mt-2">
            {budgetOptions.map((option) => (
              <button
                key={option}
                onClick={() => setBudget(option)}
                className={`px-4 py-2 border rounded-full ${
                  budget === option
                    ? "border-blue-600 text-blue-600 font-semibold"
                    : "border-gray-400 text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Сообщение */}
        <div>
          <p className="text-lg font-medium">
            A few words about the project{" "}
            <span className="text-blue-600">(Optional)</span>
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-b-2 border-gray-300 focus:border-black outline-none text-lg py-1 mt-2"
            rows="3"
          ></textarea>
        </div>

        {/* Кнопка */}
        <button className="bg-black text-white px-6 py-2 rounded-md">
          Contact us
        </button>

        {/* Способы связи */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <p>You can contact me on</p>
          <div className="flex space-x-2">
            {contactMethods.map((method) => (
              <button
                key={method}
                onClick={() => setContactMethod(method)}
                className={`px-3 py-1 border rounded-full ${
                  contactMethod === method
                    ? "border-blue-600 text-blue-600 font-semibold"
                    : "border-gray-400"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
