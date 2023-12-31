import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
       <Header/>
       <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Movie-Gpt Logo'></img>
       </div >
       <form className='absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
       { !isSignInForm&&
        <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"></input>
        }
        <input type="text" placeholder="Email address" className="p-2 my-4 w-full bg-gray-700"></input>
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"></input>
        <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In": "Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm?"New to Movie-Gpt ? Sign Up Now":"Already a User Sign In Now."}</p>
       </form>
    
    </div>
  )
}

export default Login
