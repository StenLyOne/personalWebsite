const Header = () => {
  const handleSmoothScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;

      // Скроллим так, чтобы блок оказался в середине экрана
      window.scrollTo({
        top: targetPosition - windowHeight / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full h-auto">
      <div className="p-5 md:p-[30px] space-y-[100px]">
        <div>
          <h4 className="color-blue">Vladislav.TheCreator</h4>
        </div>
        <div className="hidden"> 
          <ul className="flex flex-col gap-[5px]">
            <a href="#home">
              <li className="hover-link">Home</li>
            </a>
            <a href="#cases">
              <li className="hover-link">Cases</li>
            </a>
            <a href="#testimonials">
              <li className="hover-link">Testimonials</li>
            </a>
            <a onClick={() => handleSmoothScroll("services")}>
              <li className="hover-link">Services</li>
            </a>
            <a href="#about">
              <li className="hover-link">About me</li>
            </a>
            <a href="#faq">
              <li className="hover-link">FAQ</li>
            </a>
            <a href="#contact">
              <li className="hover-link">Contacts</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
