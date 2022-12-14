import ServiceData from "../components/ServiceData";
import worksData from "../components/worksData";

// import HowItWorks from '../images/how-it-works.jpg'
const Services = () => {
  const serviceCard = worksData.map((data) => {
    return <ServiceData key={data.id} {...data} />;
  });

  return (
    <section className="md:px-20 px-10 md:py-12 py-10 ">
      <h1
        className="font-[poppins] text-[#0447b9] text-[40px] font-light text-center
          pb-14"
      >
        How it Works
      </h1>
      {serviceCard}
    </section>
  );
};

export default Services;
