import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TbBrandDiscord } from "react-icons/tb";
import call from "../images/vector1.svg";
import email from "../images/Vector2.svg";
import locate from "../images/Vector3.svg";
import "../App.css"
import Ellipse from "../images/Ellipse.png"
import Ellipse2 from "../images/Ellipse2.png"
const Contact = () => {
  return (
    <section>
      <div className="px-6 pt-6 pb-10 md:flex gap-2">

    <div className="bg-[#044789] md:px-12 px-7 rounded-[14.44px]  md:max-w-[480px] h-[540px] relative">
      <h3 className="text-white font-[poppins] font-semi-bold text-[30px] pt-8 pb-3 ">Stay connected with us</h3>
      <p className="text-white font-[poppins] text-[18px]">We love to hear from you!</p>
      <div className="py-20">

      <div className="flex items-center py-3   gap-4">
        <img src={call} alt="call-icon" className="w-[15px]" />
        <p className="text-white font-[poppins] text-[20px]">+234 9045 6789 62</p>
      </div>
      <div className="flex items-center py-4 gap-4">
        <img src={email} alt="email-icon" className="w-[15px]"/>
        <p className="text-white font-[poppins] text-[20px]">support@fundusai.com</p>
      </div>
      <div className="flex items-center py-3 gap-4">
        <img src={locate} alt="call-icon" className="w-[15px]"/>
        <p className="text-white font-[poppins] text-[20px]">132 Moshood Street Asokoro, FCT 02156 Nigeria</p>
      </div>
      </div>
      <div className="flex items-center text-white pt-6 pb-3  gap-4"> 
        <a href="/"><FiTwitter className="bg-black text-[18px] w-[30px] h-[30px] p-1 rounded-full"/></a>
        <a href="/"><BsInstagram className="bg-white text-black text-[18px] w-[30px] h-[30px] p-1 rounded-full" /></a>
        <a href="/"><TbBrandDiscord className="bg-black text-[18px] w-[30px] h-[30px] p-1 rounded-full"/></a>
      </div>
      <img src={Ellipse} alt="a Circle" className="absolute bottom-14 right-20 w-[120px] " />
      <img src={Ellipse2} alt="a ballon shape" className="absolute bottom-0 right-0 rounded-r-[10px]  w-[150px]" />
    </div>
    <div>
      <form className="px-7 py-12 md:basis-1/2">
        <div>
        <div className="flex items-center gap-20">
        <div className=" pb-3">
        <label className="text-[#8d8d8d] font-base font-[poppins] text-[17px]">First Name</label><br/>
        <input type="text" className="border-b-[1.44px] border-[#8d8d8d] pt-3"/>
        </div>
        <div className="pb-3">
        <label className="text-black font-base font-[poppins] text-[17px]">Last Name</label><br/>
        <input type="text" className="border-b-[1.44px] border-[#8d8d8d] pt-3"/>
        </div>
        </div>
        <div className="flex items-center gap-20">
        <div className="pt-5 ">
        <label className="text-[#8d8d8d] font-base font-[poppins] text-[17px]">Email</label><br/>
        <input type="email"className="border-b-[1.44px] border-[#8d8d8d] pt-3"/>
        </div>
        <div className="pt-5">
        <label className="text-black font-base font-[poppins] text-[17px]">Phone Number</label><br/>
        <input type="tel"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="border-b-[1.44px] border-[#8d8d8d] pt-3"></input>
        </div>
        </div>

        </div>
        <div className="pt-5 pb-3">
          <p className="text-[#0447b9] font-semi-bold font-[poppins] text-[18px] py-2">Select Subject?</p>
          <div className="flex items-center gap-4">
            <label className="Radio flex items-center gap-2" >
              {/* <div className="Radio--radio"></div> */}
              <input type="radio" name="subject"  className="Radio--input "/>
                General Inquiry</label>
          
            <label className="Radio flex items-center gap-2" >
            <input type="radio" name="subject"  />
              General Inquiry</label>
         
            <label className="Radio flex items-center gap-2" >
            <input type="radio" name="subject" />
              General Inquiry</label>
          
            <label className="Radio flex items-center gap-2" >
            <input type="radio" name="subject"  />
              General Inquiry</label>
          </div>
        </div>  
          <div className="pt-5 pb-3">
        <label className="text-[#8d8d8d] font-base font-[poppins] text-[17px]">Message</label><br/>
        <input type="textarea" placeholder="write your message..."  className="border-b-[1.44px] border-[#8d8d8d] py-1"/>
        </div>
        <div className="py-3 flex justify-end">
        <button type="submit" className="px-[60px] py-[20px] rounded-[7.22px] bg-[#ff9839] text-white text-[20px] font-base font-[poppins]">Send Message</button>
        </div>
      </form>
    </div>
      </div>

    </section>
  );
};

export default Contact;
