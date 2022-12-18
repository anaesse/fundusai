// import Abdulmalik from '../images/abdulmalik.jpg'
const AboutPageData = (props) => {
  return (
    <div className="md:flex gap-4 pt-5">
      <img
        src={props.img}
        alt="A person"
        className="max-w-full md:max-w-[298.97px] max-h-[310px]"
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
        <div className="md:flex items-center gap-2  text-[12px] pt-2">
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
        </div>
      </div>
    </div>
  );
};

export default AboutPageData;
