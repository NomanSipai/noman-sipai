import { Link } from "react-router-dom";
import Data from "../Data/Data";
const Projects = () => {
  const getData = async () => {
    await fetch("/src/Data/data.json").then((res) => res).then(())
  };
  getData();
  return (
    <div className="bg-slate-200 flex flex-wrap items-center justify-center me-auto ms-auto">
      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className="group my-10 mx-8 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#">
              <img
                className="peer absolute top-0 right-0 h-full w-full object-contain"
                src={`/src/assets/${item.name}.png`}
                alt={item.name}
              />
            </a>
            <div className="mt-4 px-5 pb-5">
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    {item.name}
                  </span>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  to={item.sourceCode}
                  target="_blank"
                  className="flex me-3 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className=" h-6 w-6 mr-2"
                    viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                  </svg>
                  Code
                </Link>
                <Link
                  to={item.appLink}
                  target="_blank"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 16 16">
                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8" />
                  </svg>
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
