import quote from '../images/quote.svg'
import '../App.css'

const Hero= () => {
   
    return (
      <div className="bg-black rings relative">
          <div className='md:px-20 px-10 md:py-20 py-10 lg:flex h-[100%] '>
              <div className='w-full lg:basis-2/3 z-50'>

          <h1 className="font-[poppins] text-[25px] md:text-[40px]  text-[#044789] font-bold ">What is <br/> Diabetes Retinopathy (DR)</h1>
          <img src={quote} alt='Quote' className='py-5 w-[50px]'/>
          <p className='font-base font-[poppins] text-[12px] sm:text-[15px] md:text-[20px] text-white py-3'>Diabetic retinopathy is a complication of diabetes, caused by high blood sugar levels damaging the back of the eye (retina). It can cause blindness if left undiagnosed and untreated. It usually takes several years for diabetic retinopathy to reach a stage where it could threaten your sight. However an early diagnosis helps in preventing the looming danger of blindness.</p>
          <p className='pl-3 py-3 text-[#ffffff] text-[20px]'>- <i>WIKIPEDIA</i></p>
              </div>
              <div className='circles lg:basis-1/3'>
                  <p className=' w-[230px] h-[230px]  p-2 rounded-full flex items-center justify-center text-center bg-[#0447b9] text-white  font-[poppins] text-[20px] leading-[35px] absolute right-[120px] top-[90px]'>35.4% <br/> of diabetic patients <br/> have DR</p>
                  <p className=' w-[170px] h-[170px]  p-2 rounded-full flex items-center justify-center text-center bg-white text-[#0447b9]  font-[poppins] text-[16px] leading-[25px] absolute right-[190px] top-[330px]'>55.6% <br/>of diabetic patients are expected to have DR by 2024 </p>
                  

              </div>
          </div>
      </div>
    )
  }
  
  export default Hero