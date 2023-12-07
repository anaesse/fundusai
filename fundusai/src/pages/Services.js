import ServiceData from "../components/ServiceData";
import worksData from "../components/worksData";
import Review from "./Review";
import { motion } from "framer-motion";
// import HowItWorks from '../images/how-it-works.jpg'
const Services = () => {
  const serviceCard = worksData.map((data) => {
    return <ServiceData key={data.id} {...data} />;
  });

  return (
    <section id="service" className="min-h-screen">
      <motion.div
        
        initial ={{opacity:0, x:85}}
        whileInView= {{opacity:1, x:0}}
        transition={{ duration: 0.5, delay:0.5 }}
      
    
      className="md:px-20  px-10 py-8">
        <h1
          className="font-[poppins] text-[#0447b9] text-[40px] font-light text-center pt-4
          pb-8"
        >
          How it Works
        </h1>
        {serviceCard}
      </motion.div>
      <Review />
    </section>
  );
};

export default Services;
