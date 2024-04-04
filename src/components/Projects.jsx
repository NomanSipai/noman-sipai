import { Link } from "react-router-dom";
import Data from "../Data/Data";
const Projects = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-3/4 me-auto ms-auto mt-24">
      {Data.map((item) => {
        return (
          <div key={item.id} className="w-full md:w-1/3  p-4 ">
            <div
              style={{ backgroundColor: "#e5eef3" }}
              className="max-w-md mx-auto rounded-xl overflow-hidden border border-gray-200 shadow shadow-amber-500">
              <div className="p-4 text-center font-bold text-3xl text-sky-500">
                {item.name}
              </div>
              <div>
                <img
                  className=" w-full h-56 object-contain pe-5 ps-5"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="flex justify-between p-4">
                <Link
                  to={item.sourceCode}
                  target="_blank"
                  className="border border-sky-400 rounded p-2 text-orange-400 hover:bg-sky-500 cursor-pointer hover:text-white text-base font-medium">
                  Source Code
                </Link>
                <Link
                  to={item.appLink}
                  target="_blank"
                  className="border border-sky-400 rounded p-2 text-orange-400 hover:bg-sky-500 cursor-pointer hover:text-white text-base font-medium">
                  Visit Page
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
