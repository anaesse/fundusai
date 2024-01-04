import React from 'react'
import pic from "../images/step-one.JPG"
function Volunteer() {
  return (
    <section className="min-h-screen bg-[#FF9839] my-14 " id="volunteer">
        <div
        className=" md:bg-cover h-[50vh] bg-center bg-no-repeat bg-local flex align-center justify-center py-7 md:py-36 mb-12 "
        style={{ backgroundImage: `url(${pic})` }}
      > 
      <div>
      <h1 className="font-[poppins] text-[#FF9839] text-[36px] md:text-[50] lg:text-[55px] text-center font-bold drop-shadow-2xl  ">
           Volunteer with Us
          </h1>
          <p className=" text-slate-100 text-base text-justify md:text-xl md:font-bold md:leading-10 leading-8 md:w-[750px] md:pt-6 px-4 drop-shadow-2xl shadow-lg shadow-gray-500  ">
          Ready to Make a Difference with Fundus AI? <br />
          At Fundus AI, we deeply value the commitment and generosity of our volunteer team. Join us in our mission to combat diabetic retinopathy and revolutionize diabetes care. Your dedication can make a significant impact on global health.

          </p> 
      </div>
      </div>
         <div className='py-4 md:px-20 px-10 pt-36 pb-24  w-full ' > 
      <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-8  pb-8'>

          <div >
            <h2 className='font-[poppins] font-bold text-[20px] text-slate-100'>Become a Volunteer</h2>
            <p className='font-semi-bold text-white py-2  md:text-justify'>Volunteering with Fundus AI is a fulfilling journey where you contribute your time, talent, and energy to benefit individuals affected by diabetes, especially in low-and-middle-income countries.</p>
          </div> 
          <div >
            <h2 className='font-[poppins] font-bold  text-[#160647]'>What Does Volunteering Entail?</h2>
            <p className='font-semi-bold text-[18px] text-[#160647] py-2 md:text-justify '>Volunteers at Fundus AI play a pivotal role in advancing our mission. Your ability to relate to those we aim to help, coupled with understanding and empathy, forms the foundation of impactful volunteerism.</p>
          </div> 
      </div>
          <div className='drop-shadow-2xl shadow-lg shadow-orange-500  p-4 rounded-md'>
            <h2 className='font-[poppins] font-bold text-[20px] text-[#160647]'>What Skills are Required to Become a Volunteer:</h2>
            <ul className='font-semi-bold text-[18px] text-[#160647] py-2 text-justify '>
              <li> <span className='text-[#160647] font-bold text-[20px]'>Reliable:</span> Being reliable is paramount, at Fundus AI that means constantly contributing your time and efforts. This commitment is crucial to our mission, fostering trust within our organization and the communities we aim to serve.</li>
              <li><span className='text-[#160647] font-bold text-[20px]'>Proactive Initiative:</span> Taking initiative to identify opportunities for improvement, suggesting innovative solutions, and actively contributing to the growth of Fundus AI's initiatives.</li>
              <li><span className='text-[#160647] font-bold text-[20px]'>Interpersonal Traits:</span> Excellent interpersonal skills are essential for effectively engaging with individuals and healthcare professionals.</li>
              <li><span className='text-[#160647] font-bold text-[20px]'>Adaptability and Flexibility:</span> Embracing change and adapting to evolving project requirements, ensuring agility in navigating dynamic tasks and challenges.</li>
              <li><span className='text-[#160647] font-bold text-[20px]'>Problem Solving:</span> Problem-solving skills and the ability to propose innovative strategies are vital contributions to our organization.</li>
            </ul>
          </div> 
          <p className='font-semi-bold text-[18px] text-[#160647] py-8 text-justify '>In roles crucial to advancing Fundus AI's mission, including UI/UX Designers, Frontend and Backend Engineers, Data Scientists, and Machine Learning Engineers, should bring relevant technical skills to contribute effectively. This includes proficiency in design tools for UI/UX Designers, expertise in web development technologies for Frontend and Backend Engineers, strong programming skills for Data Scientists, and familiarity with machine learning frameworks for Machine Learning Engineers.</p>
          <div className='drop-shadow-2xl shadow-lg shadow-orange-500  p-4 rounded-md'>
            <h2 className='font-[poppins] font-bold text-[20px] text-[#160647]'>Ready to Volunteer? Follow These Steps:</h2>
            <ul className='font-semi-bold text-[18px] text-[#160647] py-2 md-text-justify '>
              <li>Choose the areas or fields you are passionate about.</li>
              <li>Determine the expertise and knowledge you can contribute.</li>
              <li>Craft a resume showcasing your skills and experience.</li>
              <li>Decide on the frequency of your volunteerism.</li>
              <li>Obtain all necessary information about the volunteer position.</li>
            </ul>
          </div>
          <p className='font-semi-bold text-[18px] text-[#160647] py-8 md:text-justify'>After considering the above, <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQhsxOgYruS3V2nLs8hAsTDXyq7NAoJNgIkQQvXHbbEuyl3g/viewform?usp=sf_link">click here</a>  to fill out the volunteer application form or contact us via email at info.fundusai@gmail.com if you have any questions or concerns.</p>
        </div> 
      
    </section>
  )
}

export default Volunteer
