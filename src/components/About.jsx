const About = () => {
  return (
    <div>
      <div className="w-3/5 mt-7 me-auto ms-auto">
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
        <ul className=" font-mono text-lg">
          <li className="mb-3">React</li>
          <li className="mb-3">JavaScript</li>
          <li className="mb-3">Bootstrap</li>
          <li className="mb-3">CSS</li>
          <li className="mb-3">HTML</li>
          <li className="mb-3">tailwind</li>
          <li className="mb-3">Git</li>
          <li className="mb-3">GitHub</li>
        </ul>
      </div>
      <div className="w-3/5 mt-7 mb-20 me-auto ms-auto">
        <hr />
      </div>
    </div>
  );
};

export default About;
