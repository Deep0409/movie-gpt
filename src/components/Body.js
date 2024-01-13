import React from 'react'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../utils/userSlice';
const Body = () => {
    const dispatch=useDispatch();

    const approuter=createBrowserRouter([
        {
          path: "/",
          element:<Login/>
        },
    
        {
          path: "browse",
          element:<Browse/>
        }
    ])

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    } else {
      // User is signed out
      dispatch(removeuser());
    }
  });
}, [])


  return (
    <div>
          <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
