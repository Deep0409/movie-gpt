import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import Header from './Header'
import { auth } from '../utils/firebase';
import { getAuth, updateProfile } from "firebase/auth";
import { adduser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from 'react-redux';

const Login = () => {
    const email=useRef(null);
    const password=useRef(null);
    const dispatch = useDispatch();
    const name=useRef(null);
    const navigate =useNavigate();
    const [error_message,setErrorMessage]=useState(null);
    const [isSignInForm,setIsSignInForm]=useState(true);

    const handleButtonclick=()=>{
       const message= checkValidData(email.current.value,password.current.value);
       console.log(message);
       setErrorMessage(message);

       if(message){
        return;
       }

       if(!isSignInForm){

        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
         const user = userCredential.user;
        
         updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = user;
            dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
            // ...
          });

         console.log(user);
         navigate("/browse");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" -" + errorMessage);
        });
    }

    else {

        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
                
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" -" + errorMessage);
});


    }

       
}


    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
       <Header/>
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Movie-Gpt Logo'></img>
       </div >

       <form  className='absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
       onClick={(e)=>e.preventDefault()}>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
       { !isSignInForm&&
        <input  ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"></input>
        }
        <input ref={email} type="text" placeholder="Email address" className="p-2 my-4 w-full bg-gray-700"></input>
        <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"></input>

        <p className='text-red-500 font-bold text-lg py-2'>{error_message}</p>

        <button className='p-2 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonclick}>{isSignInForm? "Sign In": "Sign Up"}</button>

        <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm?"New to Movie-Gpt ? Sign Up Now":"Already a User Sign In Now."}</p>
       </form>
    
    </div>
  )
}

export default Login
