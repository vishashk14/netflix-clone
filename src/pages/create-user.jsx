import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function CreateUserID() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="relative ">
        <div className="w-full h-full radial-gradient absolute top-0 left-0" />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="w-full h-screen bg-cover object-cover"
          alt="bg"
        />

        <div className="absolute rounded w-[340px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 px-4 py-10">
          <h4 className="text-center font-bold text-3xl ">Create A Account</h4>
          <p className="text-xs text-center mt-1 tracking-wide">
            {" "}
            Want to watch latest show! sing up now
          </p>

          {/* -- Email -- */}
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="email" className="">
              Email{" "}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="px-2 rounded py-2 w-full text-sm font-normal mt-1 text-gray-900"
            />

            {/* -- Password -- */}
            <div className="mt-4">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="px-2 rounded py-2 w-full text-sm font-normal mt-1 text-gray-900"
              />
            </div>

            <button
              type="submit"
              className="mt-6 mb-1 rounded px-4 py-2 w-full bg-red-700 text-white text-base font-bold"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-2 items-center text-sm">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <p className="text-sm text-red-500 cursor-pointer">Need Help? </p>
          </div>
          <div className="flex items-center justify-center text-center text-gray-400 text-sm gap-2 mt-2">
            <p>Already Sign Up click here!</p>
            <Link to="/login" className="cursor-pointer text-red-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUserID;
