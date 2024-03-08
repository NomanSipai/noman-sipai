const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="p-3 m-3 text-orange-500 text-4xl cursor-pointer font-bold">
        emre
      </div>
      <div>
        <ul className="flex text-xl font-medium">
          <li className="p-3 m-3 hover:text-red-500 cursor-pointer">
            Projects
          </li>
          <li className="p-3 m-3 cursor-pointer hover:text-red-500">About</li>
          <li className="p-3 m-3 cursor-pointer hover:text-red-500">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
