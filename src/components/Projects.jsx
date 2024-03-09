import Data from "../Data/Data";
const Projects = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-3/4 me-auto ms-auto mt-24">
      {Data.map((item) => {
        return (
          <div key={item.id} className="w-full md:w-1/3  p-4">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden border border-gray-200 shadow">
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
                <a className="border border-sky-400 rounded p-2 text-orange-400 hover:bg-sky-500 cursor-pointer hover:text-white text-base font-medium">
                  Source Code
                </a>
                <a className="border border-sky-400 rounded p-2 text-orange-400 hover:bg-sky-500 cursor-pointer hover:text-white text-base font-medium">
                  Visit Page
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
