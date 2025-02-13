const Header = () => {
  return (
    <header className="fixed">
      <div className="p-5 md:p-[30px] space-y-[100px]">
        <div>
          <h4>Vladislav.TheCreator</h4>
        </div>
        <div>
          <ul className="flex flex-col gap-[5px]">
            <li>Home</li>
            <li>Cases</li>
            <li>Testimonials</li>
            <li>Services</li>
            <li>About me</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
