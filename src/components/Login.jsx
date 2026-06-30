import React, { useState, useRef } from "react";
import Header from "./Header";
import Signup from "./Signup";
import { validateFormDetails } from "../../utils/validate";

const Login = () => {
  const [signUpToggle, setSignUpToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUpToggle = () => {
    setSignUpToggle(!signUpToggle);
  };

  //onclick event when login
  const handleOnLogInEvent = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    const message = validateFormDetails({ email: emailValue, password: passwordValue });
    setErrorMessage(message);
    if (message) return;
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="absolute top-0 left-0 min-h-screen w-full">
        <img
          className="relative w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
          alt="Banner_img"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30"></div>
      </div>
      <Header onSignUpToggle={handleSignUpToggle} />
      {signUpToggle ? (
        <Signup onSignUpToggle={handleSignUpToggle} />
      ) : (
        <LoginContent
          onSignUpToggle={() => setSignUpToggle(!signUpToggle)}
          onSubmit={handleOnLogInEvent}
          emailRef={emailRef}
          passwordRef={passwordRef}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

const LoginContent = ({ onSignUpToggle, onSubmit, emailRef, passwordRef, errorMessage }) => {
  return (
    <>
      <div className="relative px-12 flex-1 flex flex-col justify-center items-center">
        <h1 className="mb-4 font-bold text-6xl text-white max-w-lg text-center">Unlimited movies, shows, and more</h1>
        <p className="mb-6 font-medium text-xl text-white">Starts at ₹149. Cancel at any time.</p>
        <p className="mb-4 font-normal text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={onSubmit} className="flex justify-center items-center gap-4">
          <input
            ref={emailRef}
            className="px-6 py-3 border border-white text-white w-100 rounded-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={passwordRef}
            className="px-6 py-3 border border-white text-white w-100 rounded-sm"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-red-600 text-2xl font-semibold text-white rounded-sm cursor-pointer flex gap-3">
            <span>Get Started</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-8">
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </form>
        <div>
          <p className="mt-6 font-light text-sm text-white">
            Not a member. Please{" "}
            <span className="cursor-pointer hover:text-blue-500" onClick={onSignUpToggle}>
              Sign up
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-1/6 left-[10%]">
        {errorMessage && <p className="text-red-700">* {errorMessage}</p>}
      </div>
    </>
  );
};

export default Login;
