import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="text-center bg-red py-5 rounded-10">
      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default Error;
