import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-red-100">
      <Link to="mailto:nomansipai7@gmail.com">
        <i className="bi bi-envelope text-5xl m-10 text-sky-700"></i>
      </Link>
      <Link to="https://github.com/nomansipai" target="_blank">
        <i className="bi bi-github text-5xl m-10 text-sky-700"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/nomansipai/" target="_blank">
        <i className="bi bi-linkedin text-5xl m-10 text-sky-700"></i>
      </Link>
    </div>
  );
};

export default Contact;
