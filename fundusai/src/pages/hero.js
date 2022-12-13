import quote from '../images/quote.svg'
const Hero= () => {
   
    return (
      <div className="bg-black">
          <div className='md:px-20 px-10 md:py-20 py-10'>
              <div>

          <h1 className="font-[poppins] text-[45px] md:text-[70px] text-[#044789] font-bold">What is <br/> Diabetes Retinopathy (DR)</h1>
          <img src={quote} alt='Quote' className='py-5 w-[65px]'/>
          <p className='font-base font-[poppins] text-[15px] md:text-[20px] lg:text-[30px]  text-white'>Diabetic retinopathy is a complication of diabetes, caused by high blood sugar levels damaging the back of the eye (retina). It can cause blindness if left undiagnosed and untreated. It usually takes several years for diabetic retinopathy to reach a stage where it could threaten your sight. However an early diagnosis helps in preventing the looming danger of blindness.</p>
          <p className='pl-3 py-3 text-[#ffffff] text-[20px]'>- <i>WIKIPEDIA</i></p>
              </div>
          </div>
      </div>
    )
  }
  
  export default Hero