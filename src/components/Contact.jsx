import { Link } from "react-router-dom";
import EmailIcon from "../assets/envelope.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";

const Contact = () => {
  return (
    <div className="flex items-center justify-center mt-40">
      <Link>
        <img className=" w-10 m-10" src={EmailIcon} alt="email" />
      </Link>
      <Link>
        <img className="w-10 m-10" src={GithubIcon} alt="github" />
      </Link>
      <Link>
        <img className="w-10 m-10" src={LinkedinIcon} alt="linkedin" />
      </Link>
    </div>
  );
};

export default Contact;
