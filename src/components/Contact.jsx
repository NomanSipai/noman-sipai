import { Link } from "react-router-dom";
import EmailIcon from "../assets/envelope.svg";
import GithubIcon from "../assets/github.svg";
import LinkdinIcon from "../assets/linkedin.svg";

const Contact = () => {
  return (
    <div>
      <Link>
        <img src={EmailIcon} alt="email" />
      </Link>
      <Link>
        <img src={GithubIcon} alt="github" />
      </Link>
      <Link>
        <img src={LinkdinIcon} alt="linkedin" />
      </Link>
    </div>
  );
};

export default Contact;
