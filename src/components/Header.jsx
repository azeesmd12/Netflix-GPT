import React from "react";

const Header = ({ onSignUpToggle }) => {
  return (
    <div className="relative top-0 left-0 w-full z-10 bg-linear-to-b from-black to-black/10">
      <div className="relative p-2 w-4/5 mx-auto flex justify-between items-center">
        <img
          className="w-46"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix_logo"
        />
        <div className="flex gap-3">
          <div className="flex items-center">
            <select name="Language Select" className="px-4 py-2 border border-white text-white rounded-sm">
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>
          <button
            className="px-2 py-1 ml-2 mr-4 rounded-sm bg-red-600 text-white font-medium cursor-pointer"
            onClick={onSignUpToggle}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
