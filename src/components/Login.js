import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidDate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [isToggleSignIn, setIsToggleSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleToggleSignInForm = () => {
    setIsToggleSignIn(!isToggleSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmitLogin = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(fullName.current.value);

    const message = checkValidDate(
      email.current.value,
      password.current.value
      // name.current.value
    );
    // console.log(message);
    setErrorMessage(message);

    if (message) return;
    if (!isToggleSignIn) {
      //sign Up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current?.value || "Guest",
            // photoURL: "https://avatars.githubusercontent.com/u/84655307?v=4",
          })
            .then(() => {
              console.log("navigate after update");
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          // console.log(error.code + " - " + error.message);
        });
    } else {
      // sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          // console.log(error.code + "  -  " + error.message);
          setErrorMessage("User Not Found");
        });
    }
  };

  return (
    <div
      className="h-screen w-full"
      style={{
        background:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg)",
      }}
    >
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
                  ref={name}
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
    </div>
  );
};

export default Login;
