import React from 'react'
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <div className=" bg-blue-900 p-4 flex items-center justify-between ">
      <div>
        <h1 className="text-3xl font-semibold ">Media Search </h1>
        <h4 className="text-sm font-medium ml-2 mt-1 text-gray-300">
          Find Images and Videos
        </h4>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <Link
          className="border-2 p-2 rounded-xl hover:bg-black cursor-pointer active:scale-95"
          to={`/`}
        >
          Home
        </Link>
        <Link
          className="border-2 p-2 rounded-xl hover:bg-black cursor-pointer  active:scale-95"
          to={`/collection`}
        >
          Collection
        </Link>
      </div>
    </div>
  );
}

export default Navbar
