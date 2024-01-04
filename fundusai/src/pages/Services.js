import ServiceData from "../components/ServiceData";
import worksData from "../components/worksData";
import Review from "./Review";

// import HowItWorks from '../images/how-it-works.jpg'
const Services = () => {
  const serviceCard = worksData.map((data) => {
    return <ServiceData key={data.id} {...data} />;
  });

  return (
    <section id="service" className="min-h-screen">
      <div className="md:px-20  px-10 py-8">
        <h1
          className="font-[poppins] text-[#0447b9] text-[40px] font-light text-center pt-4
          pb-8"
        >
          How it Works
        </h1>
        {serviceCard}
      </div>
      <Review />
    </section>
  );
};

export default Services;
