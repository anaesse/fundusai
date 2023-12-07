import AboutPageData from "../components/AboutPageData";
import AboutUsData from "../components/AboutUsData";
import AboutMission from "../components/AboutMission";
import play from "../images/play.svg";


// import HowItWorks from '../images/how-it-works.jpg'
const About = () => {
  const AboutCard = AboutUsData.map((data) => {
    return <AboutPageData key={data.id} {...data} />;
  });

  return (
    <section className="md:px-20 px-10 py-8 min-h-screen " id="about">
      
      <h1 className="font-[poppins] text-[#0447b9] text-[30px] md:text-[50] lg:text-[55px] text-center font-semi-bold pt-4 pb-8">
        {" "}
        Get to know Us
      </h1>
      <div className="sm:flex  justify-between">
        <p className="font-[poppins] font-light text-[15px] md:text-[20px] w-full py-3 lg:text-[30px] sm:max-w-[360px]  lg:max-w-[600px]">
          FundusAI offers an artificial intelligence diagnostic device for
          Diabetic Retinopathy, allowing doctors to diagnose more patients in
          less time in order to prevent blindness in diabetic patients.
        </p>
        <div className="min-h-[150px] sm:w-[350px] sm:h-[200px]  lg:w-[500px] lg:h-[350px] bg-black flex justify-center items-center">
          <span className="w-[100px] h-[100px] bg-[#7a8994] rounded-full flex justify-center items-center">
            <a href="https://youtu.be/pMI5nYiGssc">
              <img src={play} alt="A play button" />
            </a>
          </span>
        </div>
      </div>
      <AboutMission />
      <div className="py-3">
        <p className="font-[poppins] font-light text-[20px] md:text-[30px] text-[#0447b9]">
          MEET THE TEAM
        </p>
        <p className="font-[poppins] font-base text-[38px] md:text-[50px] text-[#ff9839]">
          BEHIND THE TECHNOLOGY
        </p>
      </div>
      {AboutCard}
    </section>
  );
};

export default About;
