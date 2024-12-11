import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log("user", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // dispatch(removeUser()); no need because of auth change
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorPage");
      });
  };
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black h-[10vh] flex justify-between">
      <img
        className=" w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      <div className="flex gap-2 items-center">
        <img
          className="h-12 w-12"
          alt="user-logo"
          src="https://avatars.githubusercontent.com/u/84655307?v=4"
        />
        <p>{user.displayName}</p>
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
