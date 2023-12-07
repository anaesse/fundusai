import { motion } from "framer-motion";
const AboutPageData = (props) => {
  return (
    <motion.div
    initial ={{opacity:0, x:100}}
    whileInView= {{opacity:1, y:0}}
    transition={{ duration: 0.75, delay:0.4 }}

     className="flex flex-col md:flex-row gap-6  py-10">
      <img
        src={props.img}
        alt="A person"
        className="w-full max-h-[400px] md:max-w-[298.97px] lg:max-h-[310px]"
      />
      <div>
        <h1 className="font-[poppins] font-semi-bold md:text-[24px]">
          {props.name}
        </h1>
        <p className="font-[poppins] text-[10px] text-[#0447b9]">
          {props.title}
        </p>
        <p className="max-w-[600px] text-[12px] font-light font-[poppins] py-3">
          {props.descriptionOne}
        </p>
        <p className="max-w-[600px] text-[12px] font-light font-[poppins] py-3">
          {props.descriptionTwo}
        </p>
        <p className="max-w-[600px] text-[12px] font-light font-[poppins] py-3">
          {props.descriptionThree}
        </p>
        {/* <div className="md:flex items-center gap-2  text-[12px] pt-2">
          <a href="/" className="flex items-center gap-1">
            <ion-icon name="mail" className="bg-black w-2 h-2 p-3"></ion-icon>
            <span>{props.email}</span>
          </a>
          <a href="/" className="flex items-center gap-1">
            <ion-icon name="logo-twitter"></ion-icon>
            <span>{props.twitter}</span>
          </a>
          <a href="/" className="flex items-center gap-1">
            <ion-icon name="logo-instagram"></ion-icon>
            <span>{props.instagram}</span>
          </a>
          <a href="/" className="flex items-center gap-1">
            {" "}
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>{props.linkedIn}</span>
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

export default AboutPageData;
