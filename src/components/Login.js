import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isToggleSignIn, setIsToggleSignIn] = useState(true);

  const handleToggleSignInForm = () => {
    setIsToggleSignIn(!isToggleSignIn);
  };
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[80vh]">
        <div className="flex flex-col text-white mb-12 py-12 px-16 bg-black bg-opacity-80">
          <form action="" className="w-[319px]">
            <h2 className="font-bold text-4xl mb-7">
              {isToggleSignIn ? "Sign In" : "Sign Up"}
            </h2>
            <div className="flex flex-col gap-8">
              {!isToggleSignIn && (
                <input
                  className="p-4 outline-none bg-gray-700"
                  type="text"
                  placeholder="Full Name"
                />
              )}
              <input
                className="p-4 outline-none bg-gray-700"
                type="text"
                placeholder="Email or phone number"
              />
              <input
                className="p-4 outline-none bg-gray-700"
                type="text"
                placeholder="password"
              />
              <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md">
                {isToggleSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <p className="py-4 cursor-pointer" onClick={handleToggleSignInForm}>
              {isToggleSignIn
                ? "New to Netflix? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
