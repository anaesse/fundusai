import stepOne from "../images/step-one.JPG"
import stepTwo from "../images/step-two.png"

var worksData = [
  {
    id: 1,
    title: "Capture a Fundus Image",
    num: 1,
    img: stepOne,
    list: ["If you are using an existing image, ensure it is of a good quality."],
    description:
      "Take a picture of the fundus using our all in one device or you can use an existing fundus image",
  },
  {
    id: 2,
    title: "Upload the Image to the FundusAI Software",
    num: 2,
    img: stepTwo,
    list: ["Our system will check the quality of the uploaded image.", "If the image passes the quality test, then a diagnosis is carried out.", "The system will request for a new image if the uploaded one fails the quality test.", ],
    description:
      "Upload the fundus image onto our AI-Powered diagnostic software and get your diagnosis result in less than 3 seconds.",
  },
  // {
  //   id: 3,
  //   title: "Diagnosis",
  //   num: 3,
  //   img: ImageThree,
  //   listOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   listTwo: "Quam duis viverra amet, ultrices risus quis integer nec nulla.",
  //   listThree: "Tortor turpis nibh viverra nunc bibendum.",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra est purus eu tempor tincidunt commodo.",
  // },
];

export default worksData;
