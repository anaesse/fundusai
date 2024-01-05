import { motion } from "framer-motion";
const VolunteerMission = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-0 gap-4 items-center py-16 ">
        <motion.div
    initial ={{opacity:0, y:-70}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 1.2 }}
       className="bg-[#0447B9] max-w-[100vh] h-[350px] sm:w-[600px]   lg:h-[400px] px-8 py-8 md:py-14 lg:py-12  mb-4">
        <h1 className="font-[poppins] font-base text-[18px] sm:text-[28px] lg:text-[32px] text-white text-center py-4">
        Become a Volunteer
        </h1>
        <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-4 text-white text-justify">
        Volunteering with Fundus AI is a fulfilling journey where you contribute your time, talent, and energy to benefit individuals affected by diabetes, especially in low-and-middle-income countries.
        </p>
      </motion.div>
      <motion.div
    initial ={{opacity:0, y:-70}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 0.7, delay:0.75 }}className="bg-[#ff9839] max-w-[100vh] h-[350px] sm:w-[600px] lg:h-[400px]  px-8 py-8 md:py-14 lg:py-12 mb-4">
        <h1 className="font-[poppins] font-base text-[18px] sm:text-[28px] md:text-[32px] text-white text-center py-4">
        What Does Volunteering Entail?
        </h1>
        <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-4 text-white text-justify">
        Volunteers at Fundus AI play a pivotal role in advancing our mission. Your ability to relate to those we aim to help, coupled with understanding and empathy, forms the foundation of impactful volunteerism.
        </p>
      </motion.div>
    </div>
  );
};

export default VolunteerMission;
