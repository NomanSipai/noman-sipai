import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="p-3 m-3 text-orange-500 text-4xl cursor-pointer font-bold">
        <Link to="/">Noman</Link>
      </div>
      <div>
        <ul className="flex text-xl font-medium">
          <li className="p-3 m-3 hover:text-red-500 cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="p-3 m-3 cursor-pointer hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 m-3 cursor-pointer hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
