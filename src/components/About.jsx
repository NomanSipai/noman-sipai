import data from "../aboutData.json";

const About = () => {
  const bg = [
    "#00d8ff",
    "#3178c6",
    "#f7df1e",
    "#161d2d",
    "#7509f6",
    "#f16524",
    "#111214",
    "#f05033",
  ];
  return (
    <div className="min-h-screen">
      <div className=" w-3/5 me-auto ms-auto">
        <hr className=" border border-gray-400" />
      </div>
      <div className="w-3/4 mt-7 me-auto ms-auto text-center text-xl">
        <p className="mb-2">
          My name is Noman. I am a <strong>Frontend Developer.</strong> I love
          creating beautiful, useful websites. I am always open to learn new
        </p>
        <p className="mb-2">
          technologies. I always try to expand my tech stack. I also have an
          extra interest in CSS. Playing with CSS is always fun
        </p>
        <p className="mb-5 ">and it has no borders.</p>
        <p className=" underline underline-offset-1 mb-5 font-medium text-sky-600">
          Some languages and tools that I use:
        </p>
        <div className="grid grid-cols-3 gap-20 p-4">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div
                  className={` relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-80`}
                  style={{ backgroundColor: `${item.bg}` }}>
                  <img src={item.img} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item.tech}
                  </h4>
                </div>
                <div className="flex justify-center p-6 pt-2 gap-7">
                  <a
                    href="#facebook"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i className="fab fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    href="#twitter"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href="#instagram"
                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* <ul className=" font-mono text-lg">
          <li className="mb-3">React</li>
          <li className="mb-3">JavaScript</li>
          <li className="mb-3">Bootstrap</li>
          <li className="mb-3">CSS</li>
          <li className="mb-3">HTML</li>
          <li className="mb-3">tailwind</li>
          <li className="mb-3">Git</li>
          <li className="mb-3">GitHub</li>
        </ul> */}
      </div>
      <div className="w-3/5 mt-7 mb-20 me-auto ms-auto">
        <hr />
      </div>
    </div>
  );
};

export default About;
