import React from "react";

const Signup = ({ onSignUpToggle }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 w-120 h-120 p-8 text-center bg-linear-to-t from-black/70 to-black/50">
      <span onClick={onSignUpToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-7 text-white cursor-pointer">
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <p className="p-4 mb-2 text-white text-2xl font-medium ">Sign Up</p>
      <form className="">
        <input
          className="text-white px-6 py-4 mb-4 border border-white rounded-sm"
          type="text"
          placeholder="Full Name"
        />
        <input className="text-white px-6 py-4 mb-4 border border-white rounded-sm" type="text" placeholder="Email" />
        <input
          className="text-white px-6 py-4 mb-4 border border-white rounded-sm"
          type="password"
          placeholder="Password"
        />
        <br />
        <button className="px-12 py-2 m-2 text-white text-lg bg-red-600 rounded-sm">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
