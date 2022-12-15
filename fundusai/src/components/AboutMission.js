const AboutMission = () => {
    return (
            <div className="lg:flex gap-4 items-center py-[150px]">
                <div className="bg-[#0447B9] max-w-[100vh] min-h-[100vh] sm:w-[800px]   lg:h-[700px] px-8 py-8 md:py-14  mb-4">
                    <h1 className="font-[poppins] font-base text-[40px] lg:text-[50px] text-white text-center py-4">Our Mission</h1>
                    <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-4 text-white">Our mission is to speed up the diagnosis process to allow more patients to be diagnosed in less time in order to prevent blindness from diabetic retinopathy.</p>
                    <ul className="px-3">
                        <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-2 text-white">We aim to do this by;</p>
                        <li className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] text-white py-2">-Creating awareness of diabetes retinopathy in Nigeria.</li>
                        <li className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] text-white py-2">-Building an easy-to-use automated diagnostic device, that works without the intervention of an eye specialist.</li>
                        <li className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] text-white py-2">-Diagnose 1 Million+ diabetic patients in a year.</li>
                    </ul>
                </div>
                <div className="bg-[#ff9839] max-w-[100vh] min-h-[100vh] sm:w-[800px] lg:h-[700px]  px-8 py-8 md:py-14 mb-4">
                <h1 className="font-[poppins] font-base text-[40px] md:text-[50px] text-white text-center py-4">Our Vision</h1>
                    <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-4 text-white">We envision diagnosing 5 million patients yearly. By 2027, we will</p>
                    <ul className="px-3">
                        <p className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] py-2 text-white">- Be able to diagnose 5 different vision loss causing diseases, such as Diabetic Retinopathy, Glaucoma, Cataract, and macula degeneration</p>
                        <li className="font-[poppins] font-base text-[12px] sm:text-[16px] lg:text-[20px] text-white py-2">- Be the leading provider of easy to use automated diagnostic system</li>
                    </ul>
                </div>
            </div>
    );
  };
  
  export default AboutMission;
  