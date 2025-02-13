import './Button.css'

const Button = ({ children }) => {
  return (
    <button className="bg-blue color-white p-[11px] px-[15px] rounded-[10px]">
      {children}
    </button>
  );
};

export default Button;
