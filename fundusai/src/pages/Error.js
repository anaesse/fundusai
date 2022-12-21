import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="text-center bg-red py-5 rounded-10">
      <h1 className="bg-black text-xl font-bold text-[#ff9839] py-4 mb-4">404 Error</h1>
      <p className="pt-4 pb-10">Page not found</p>
      <Link to="/" className="bg-[#0447b9] text-white  p-2  rounded-[8px]">back home</Link>
    </div>
  );
};

export default Error;
