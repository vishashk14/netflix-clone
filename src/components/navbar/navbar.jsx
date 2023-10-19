import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row  justify-between mx-auto items-center px-4 py-4 z-[100] absolute top-0">
      {/* <Link to="./"> */}
      <h1 className="text-red-600 text-3xl font-bold uppercase">Netflix</h1>
      {/* </Link> */}

      <div className="flex items-center gap-4 text-sm text-white font-medium tracking-wide ">
        <Link to="./login">
          <p>Sign In</p>
        </Link>

        <Link to="/create-user">
          <p className="text-white bg-red-600 px-4 py-2 rounded ">
            Create Account
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
