import hero from './images/hero.png'
import hero1 from './images/hero1.png'
import hero2 from './images/hero2.png'
import hero3 from './images/hero3.png'
import hero4 from './images/hero4.png'

function Hero() {
  return (
    <section className='Hero'>

        <div className='px-20 py-10 w-full flex '>
          <div className='basis-[56%]'>
            <h1 className='text-[#0447b9] text-[65px] font-bold leading-[90px]'>Preventing <span className='text-[#ff9839]'>Blindness</span> in Diabetic Patients</h1>
            <p className='text-[25px] font-light py-5 w-[90%]'>FundusAI offers an artificial intelligence diagnostic device for Diabetic Retinopathy, allowing doctors to diagnose more patients in less time to prevent blindness in diabetic patients.</p>
            <div className='py-5'>
              <button className='bg-[#0447b9] text-[#ffffff] px-8 py-3 rounded-[12px]'>Demo</button>
              <button  className='bg-[#0447b9] text-[#ffffff] px-8 py-3 rounded-[12px] ml-4'>Learn more</button>
            </div>
            <div className='flex items-center gap-5 py-5'>
              <div>
                <div className='flex items-center gap-2 pb-4'>
                  <img src={hero1}/>
                  <span className='text-[15px] font-semi-bold'>State of the art Artificial Intelligence solution for accurate diagnosis.</span>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                <img src={hero3}/>
                  <span className='text-[15px] font-semi-bold'>Low cost and easy to use portable device for fundus image capturing
</span>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-3 pb-4'>
                    <img src={hero2}/>
                    <span className='text-[15px] font-semi-bold'>Get diagnosis result in less than 2 seconds</span>
                  </div>
                  <div className='flex items-center gap-3 pt-4'>
                  <img src={hero4}/>
                    <span className='text-[15px] font-semi-bold'>1000+ Patients Diagnosed</span>
                  </div>
              </div>
            </div>
          </div>
          <div className='basis-[40%] '>
            <img src={hero} alt='logo' className='w-full pt-14'/>
          </div>
            
        </div>
    </section>
  );
}

export default Hero;