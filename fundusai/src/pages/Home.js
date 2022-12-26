import hero from "../images/hero.png";
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import hero4 from "../images/hero4.png";
import Hero from "./hero";

function Home() {
  return (
    <section>
      <div className="md:px-20 px-10 md:py-20 py-10 w-full md:flex ">
        <div className="w-full md:basis-8/12">
          <h1 className="text-[#0447b9] font-[poppins] font-bold text-[22px] md:text-[30px] lg:text-[45px] ">
            Preventing <span className="text-[#ff9839]">Blindness</span> in
            Diabetic Patients
          </h1>
          <p className=" font-[poppins] font-light w-full md:w-[90%] text-[16px] sm:text-[20px]  lg:text-[25px] pt-5">
            FundusAI offers an artificial intelligence diagnostic device for
            Diabetic Retinopathy, allowing doctors to diagnose more patients in
            less time to prevent blindness in diabetic patients.
          </p>
          <div className="py-12 flex flex-col gap-2 md:flex-row">
            <button className="bg-[#0447b9] text-[#ffffff] px-8 py-3 rounded-[12px]">
              Demo
            </button>
            <button className="bg-[#0447b9] text-[#ffffff] px-8 py-3 rounded-[12px]">
              Learn more
            </button>
          </div>
          <div className=" lg:grid gap-3 grid-cols-2 grid-rows-2">
            <div className="flex items-center py-2 gap-3">
              <img src={hero1} alt="hero-img" className="w-[40px]" />
              <span className="text-[15px] font-[poppins] font-semi-bold">
                State of the art Artificial Intelligence solution for accurate
                diagnosis.
              </span>
            </div>
            <div className="flex items-center py-2  gap-3">
              <img src={hero2} alt="hero-img" className="w-[40px]" />
              <span className="text-[15px] font-[poppins] font-semi-bold">
                Get diagnosis result in less than 2 seconds
              </span>
            </div>

            <div className="flex items-center py-2 gap-3">
              <img src={hero3} alt="hero-img" className="w-[40px]" />
              <span className="text-[15px] font-[poppins] font-semi-bold">
                Low cost and easy to use portable device for fundus image
                capturing
              </span>
            </div>
            <div className="flex items-center py-2 gap-3">
              <img src={hero4} alt="hero-img" className="w-[40px]" h />
              <span className="text-[15px] font-[poppins]  font-semi-bold">
                1000+ Patients Diagnosed
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:basis-2/5  ">
          <img src={hero} alt="logo" className="w-full pt-10 " />
        </div>
      </div>

      <Hero />
    </section>
  );
}

export default Home;
