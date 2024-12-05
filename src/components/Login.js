import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidDate } from "../utils/validate";

const Login = () => {
  const [isToggleSignIn, setIsToggleSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleToggleSignInForm = () => {
    setIsToggleSignIn(!isToggleSignIn);
  };

  const handleSubmitLogin = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidDate(
      email.current.value,
      password.current.value,
      fullName.current.value
    );
    // console.log(message);
    setErrorMessage(message);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[80vh]">
        <div className="flex flex-col text-white mb-12 py-12 px-16 bg-black bg-opacity-80">
          <form
            onSubmit={(e) => e.preventDefault()}
            action=""
            className="w-[319px]"
          >
            <h2 className="font-bold text-4xl mb-7">
              {isToggleSignIn ? "Sign In" : "Sign Up"}
            </h2>
            <div className="flex flex-col gap-8">
              {!isToggleSignIn && (
                <input
                  ref={fullName}
                  className="p-4 outline-none bg-gray-700"
                  type="text"
                  placeholder="Full Name"
                />
              )}
              <input
                ref={email}
                className="p-4 outline-none bg-gray-700"
                type="text"
                placeholder="Email or phone number"
              />
              <input
                ref={password}
                className="p-4 outline-none bg-gray-700"
                type="text"
                placeholder="password"
              />
              <p className="text-red-500 font-bold text-lg py-2">
                {errorMessage}
              </p>
              <button
                onClick={handleSubmitLogin}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-md"
              >
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
