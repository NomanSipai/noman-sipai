import Data from "../Data/Data";
const Projects = () => {
  return (
    <div className=" flex ">
      <div className=" bg-gray-100  flex flex-col items-center justify-center">
        <div className=" text-3xl font-medium text-sky-600 mb-5">
          {Data[0].name}
        </div>
        <div>
          <img
            className=" w-1/4 object-contain block me-auto ms-auto"
            src={Data[0].img}
            alt=""
          />
        </div>
        <div className="mt-8 text-orange-300">
          <a className="me-20 border border-sky-600 font-medium p-2 cursor-pointer bg-white rounded">
            Source Code
          </a>
          <a className=" border border-sky-600 font-medium p-2 cursor-pointer bg-white rounded">
            Visit Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
