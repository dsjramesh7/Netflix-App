import React, { useEffect } from "react";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/about",
      element: <Browse />,
    },
    {
      path: "/contact",
      element: <Browse />,
    },
  ]);

  // because I want to do this once
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        //for sign out
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
