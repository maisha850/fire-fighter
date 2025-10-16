import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from './firebase.config';
import { FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const googleprovider= new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [show, setShow]=useState(false)
    const handleSignIn=(e)=>{
 e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value
        signInWithEmailAndPassword(auth, email ,password)
        .then((res)=>{
            setUser(res.user)
console.log(res.user)
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    const signInWithGoogle=(e)=>{
         e.preventDefault()

        signInWithPopup(auth, googleprovider)
         .then((res)=>{
            setUser(res.user)
console.log(res.user)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
          <div className='lg:flex justify-between items-center w-10/12 mx-auto lg:pt-[calc(100vh-500px)] py-25'>
            <div className="max-w-lg mb-5 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg text-white">
          Sign In
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>
         <div className="card bg-white/10 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      {user ? <>
      <img  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-20 w-20 rounded-full mx-auto"
                  alt="" />
      <h3 className='text-white text-center'>{user.displayName}</h3>
      <p className='text-white/80 text-center'>{user.email}</p>
      <button onClick={handleSignOut} className='btn btn-neutral mt-4'>Sign Out</button>
      </>:  <form onSubmit={handleSignIn}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Email" />
          <label className="label">Password</label>
          <div className='relative'>
             <input type={show ? 'text' : 'password'} name='password' className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Password" />
             <button onClick={()=>setShow(!show)} className='absolute top-3 right-3' >{show ?  <FaEye size={20} ></FaEye> : <FaEyeSlash size={20} ></FaEyeSlash> }</button>
          </div>
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </fieldset>
                  <button onClick={signInWithGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        <p className='text-white/80'> Don’t have an account?{" "} <Link to="/signup"  className="text-pink-300 hover:text-white underline" >Sign Up</Link> </p>
   
       </form>}
      </div>
    </div>
          </div>
    );
};

export default SignIn;