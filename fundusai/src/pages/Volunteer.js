import React from 'react'
import pic from "../images/step-one.JPG"
import VolunteerMission from '../components/VolunteerMission'
import { motion } from "framer-motion";
function Volunteer() {
  return (
    <section className="md:px-20 px-10 py-8 min-h-screen " id="volunteer">
      
    <h1 className="font-[poppins] text-[#0447b9] text-[24px] sm-text-[28px] md:text-[50] lg:text-[55px] text-center font-semi-bold pt-4 pb-8">
      {" "}
      Volunteer with Us
    </h1>
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <motion.p
      initial ={{opacity:0, y:-10}}
      whileInView= {{opacity:1, y:0}}
      transition={{ duration: 1.5}}
       className="font-[poppins] font-light text-[15px] md:text-[18px] text-justify w-full py-3 lg:text-[24px] sm:max-w-[360px]  lg:max-w-[600px]">
      Ready to Make a Difference with Fundus AI? <br /> <br />
      At Fundus AI, we deeply value the commitment and generosity of our volunteer team. Join us in our mission to combat diabetic retinopathy and revolutionize diabetes care. Your dedication can make a significant impact on global health.
      </motion.p>
      <motion.div
      initial ={{opacity:0, y:-10}}
      whileInView= {{opacity:1, y:0}}
      transition={{ duration: 1.5}}
       className=" w-full h-[50vh] lg:w-[500px] lg:h-[350px] bg-cover bg-center bg-no-repeat bg-local "
      style={{ backgroundImage: `url(${pic})` }}
      >
      </motion.div>
    </div>
    <VolunteerMission />
    <motion.div 
    initial ={{opacity:0, y:-100}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 1.5}}
    className="pt-3 pb-6"
    >
      <p className="font-[poppins] font-light text-[20px] md:text-[30px] text-[#0447b9]">
      What Skills are Required to Become a Volunteer:
      </p>
      <ul className='font-semi-bold text-[18px] text-[#160647] py-2 md:text-justify '>
      <motion.li
      initial ={{opacity:0, x:-5}}
      whileInView= {{opacity:1, x:0}}
      transition={{ duration: 1.5}}
      className='py-1'
      > <span className='text-[#ff9839] font-bold text-[20px]'>Reliable:</span> Being reliable is paramount, at Fundus AI that means constantly contributing your time and efforts. This commitment is crucial to our mission, fostering trust within our organization and the communities we aim to serve.</motion.li>
      <motion.li
      initial ={{opacity:0, x:5}}
      whileInView= {{opacity:1, x:0}}
      transition={{ duration: 1.5}}
      className='py-1'
      ><span className='text-[#ff9839] font-bold text-[20px]'>Proactive Initiative:</span> Taking initiative to identify opportunities for improvement, suggesting innovative solutions, and actively contributing to the growth of Fundus AI's initiatives.</motion.li>
      <motion.li
      initial ={{opacity:0, x:-5}}
      whileInView= {{opacity:1, x:0}}
      transition={{ duration: 1.5}}
      className='py-1'
      ><span className='text-[#ff9839] font-bold text-[20px]'>Interpersonal Traits:</span> Excellent interpersonal skills are essential for effectively engaging with individuals and healthcare professionals.</motion.li>
      <motion.li
      initial ={{opacity:0, x:5}}
      whileInView= {{opacity:1, x:0}}
      transition={{ duration: 1.5}}
      className='py-1'
      ><span className='text-[#ff9839] font-bold text-[20px]'>Adaptability and Flexibility:</span> Embracing change and adapting to evolving project requirements, ensuring agility in navigating dynamic tasks and challenges.</motion.li>
      <motion.li
      initial ={{opacity:0, x:-5}}
      whileInView= {{opacity:1, x:0}}
      transition={{ duration: 1.5}}
      className='py-1'
      ><span className='text-[#ff9839] font-bold text-[20px]'>Problem Solving:</span> Problem-solving skills and the ability to propose innovative strategies are vital contributions to our organization.</motion.li>
      </ul>
    </motion.div>
    <div className='flex flex-col items-center justify-center gap-y-2 w-full'>
    <div class="animate-bounce w-8 h-8 bg-[#0447b9] rounded-full flex justify-center items-center">👇</div>
    <div className='flex items-center justify-center bg-[#FF9839] rounded-lg p-4 mb-12 shadow-lg shadow-orange-600 w-[200px]'>
    <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfQhsxOgYruS3V2nLs8hAsTDXyq7NAoJNgIkQQvXHbbEuyl3g/viewform?usp=sf_link " rel="noreferrer" className=' text-white text-[20px] font-semibold'>Apply Now</a> 
    </div>
    </div>
  </section>
  )
}

export default Volunteer
