import Data from "../Data/Data";
const Projects = () => {
  return (
    <div>
      <div className=" bg-slate-50">
        <div className=" text-3xl font-medium text-sky-600">{Data[0].name}</div>
        <div>
          <img className=" w-1/6 object-contain" src={Data[0].img} alt="" />
        </div>
        <div>
          <a href="">Source Code</a>
          <a href="">Visit Page</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
