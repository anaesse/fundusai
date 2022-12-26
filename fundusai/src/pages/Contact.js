import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TbBrandDiscord } from "react-icons/tb";
import call from "../images/vector1.svg";
import email from "../images/Vector2.svg";
import locate from "../images/Vector3.svg";
import "../App.css";
import Ellipse from "../images/Ellipse.png";
import Ellipse2 from "../images/Ellipse2.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cvcuilh', 'template_6ssw8v5', form.current, 'uyCcDaOXdOBqn-nKE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section>
      <div className="px-6 pt-6 pb-10 md:flex gap-10">
        <div className="bg-[#044789] md:px-12 px-7 rounded-[14.44px]  md:max-w-[480px] h-[530px] relative">
          <h3 className="text-white font-[poppins] font-semi-bold text-[30px] pt-8 pb-3 ">
            Stay connected with us
          </h3>
          <p className="text-white font-[poppins] text-[18px]">
            We love to hear from you!
          </p>
          <div className="py-16">
            <div className="flex items-center py-3   gap-4">
              <img src={call} alt="call-icon" className="w-[15px]" />
              <p className="text-white font-[poppins] text-[20px]">
                +234 9045 6789 62
              </p>
            </div>
            <div className="flex items-center py-4 gap-4">
              <img src={email} alt="email-icon" className="w-[15px]" />
              <p className="text-white font-[poppins] text-[20px]">
                support@fundusai.com
              </p>
            </div>
            <div className="flex items-center py-3 gap-4">
              <img src={locate} alt="call-icon" className="w-[15px]" />
              <p className="text-white font-[poppins] text-[20px]">
                132 Moshood Street Asokoro, FCT 02156 Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-center text-white pt-6 pb-3  gap-4">
            <a href="/">
              <FiTwitter className="bg-black text-[18px] w-[30px] h-[30px] p-1 rounded-full" />
            </a>
            <a href="/">
              <BsInstagram className="bg-white text-black text-[18px] w-[30px] h-[30px] p-1 rounded-full" />
            </a>
            <a href="/">
              <TbBrandDiscord className="bg-black text-[18px] w-[30px] h-[30px] p-1 rounded-full" />
            </a>
          </div>
          <img
            src={Ellipse}
            alt="a Circle"
            className="absolute bottom-14 right-20 w-[120px] "
          />
          <img
            src={Ellipse2}
            alt="a ballon shape"
            className="absolute bottom-0 right-0 rounded-r-[10px]  w-[150px]"
          />
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="px-7 py-12 md:basis-1/2">
            <div>
              <div className="flex items-center gap-10">
                <div className=" pb-3 basis-2/4">
                  <label className="text-[#8d8d8d] font-base font-[poppins] text-[17px]">
                    First Name
                  </label>
                  <br />
                  <input
                    type="text" name="first_name"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                </div>
                <div className="pb-3 basis-2/4">
                  <label className="text-black font-base font-[poppins] text-[17px]">
                    Last Name
                  </label>
                  <br />
                  <input
                    type="text" name="last_name"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="pt-5  basis-2/4">
                  <label className="text-[#8d8d8d] font-base font-[poppins] text-[17px]">
                    Email
                  </label>
                  <br />
                  <input
                    type="email" name="user_email"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                </div>
                <div className="pt-5  basis-2/4">
                  <label className="text-black font-base font-[poppins] text-[17px]">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="tel" name="user_number"
                    id="floating_standard"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
                    placeholder=" "
                  />
                </div>
              </div>
            </div>
            <div className="pt-5 pb-3">
              <p className="text-[#0447b9] font-semi-bold font-[poppins] text-[18px] py-2">
                Select Subject?
              </p>
              <div className="flex items-center gap-4">
                <label className="Radio flex items-center gap-2">
                  <input
                    id="orange-radio"
                    type="radio"
                    value=""
                    name="subject"
                    className="w-4 h-4 text-[#ff9839] bg-gray-100 border-gray-300 focus:ring-[#ff9839]"
                  />
                  General Inquiry
                </label>

                <label className="Radio flex items-center gap-2">
                  <input
                    id="orange-radio"
                    type="radio"
                    value=""
                    name="subject"
                    className="w-4 h-4 text-[#ff9839] bg-gray-100 border-gray-300 focus:ring-[#ff9839]"
                  />
                  In-person appointment
                </label>

                <label className="Radio flex items-center gap-2">
                  <input
                    id="orange-radio"
                    type="radio"
                    value=""
                    name="subject"
                    className="w-4 h-4 text-[#ff9839] bg-gray-100 border-gray-300 focus:ring-[#ff9839]"
                  />
                  Sponsorship
                </label>
              </div>
            </div>
            <div className="pt-5 pb-3">
              <textarea
                className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                name="message"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="py-3 flex justify-end">
              <button
                type="submit"
                className="px-[60px] py-[20px] rounded-[7.22px] bg-[#ff9839] text-white text-[20px] font-base font-[poppins]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
