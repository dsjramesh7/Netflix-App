import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { COMPANY_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearchButton = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  // console.log("user", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorPage");
      });
  };

  const isLoginPage = location.pathname === "/";

  // because I want to do this once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user", user);
        //for sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //for sign out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This will unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black h-[10vh] flex justify-between">
      <img className=" w-44" src={COMPANY_LOGO} alt="netflix-logo" />
      {!isLoginPage && (
        <div className="flex gap-2 items-center">
          <button
            onClick={handleGPTSearchClick}
            className="bg-blue-400 px-4 py-2 m-2 rounded-lg text-white"
          >
            {gptSearchButton ? "HomePage" : "GPT Search"}
          </button>
          <img className="h-12 w-12" alt="user-logo" src={user?.photoURL} />
          <p>{user?.displayName}</p>
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
