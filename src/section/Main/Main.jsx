import Button from "../../components/Button/Button";

const Main = () => {
  return (
    <main className="pt-[16px] pb-[90px] md:pt-[30px] pb-[80px] relative">
      <div className="main-container">
        <div className="space-y-[80px]">
          <div>
            <p>/ / Avaliable for freelance work</p>
          </div>
          <div className="space-y-[240px]">
            <div className="flex items-center gap-[20px]">
              <div>
                <p className="color-blue brackets">(</p>
              </div>
              <div className="w-[80px] h-[80px] rounded-[100px] overflow-hidden">
                <img src="src\assets\img\I.png" alt="" />
              </div>
              <div className="">
                <p className="color-blue font-semibold">Human being</p>
                <p className="color-blue font-semibold">UX/UI designer</p>
                <p className="color-blue font-semibold">Full-stack developer</p>
              </div>
              <div>
                <p className="color-blue brackets">)</p>
              </div>
            </div>
            <div className="space-y-[50px]">
              <div>
                <h1 className="uppercase">I create websites for</h1>
                <h1 className="uppercase">businesses that help to</h1>
                <h1 className="uppercase">become market leaders.</h1>
              </div>
              <div className="flex gap-[5px]">
                <Button>Get a website that works as a business tool</Button>
                <Button>
                  <img src="src\assets\img\arrow.svg" alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default Main;
