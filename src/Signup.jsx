import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router';
import { auth } from './firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup = () => {

       const [show, setShow]=useState(false)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value
        const pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
         if(!pattern.test(password)){
            toast.error("Password must contain at least 6 characters, including uppercase, lowercase, number, and special character.")
            return
        }
       
        createUserWithEmailAndPassword(auth, email , password)
        .then((res)=>{
console.log(res.user)
toast.success("Sign up successfully")
        })
        .catch((err)=>{
      if(err.code==='auth/email-already-in-use'){
        toast.error('this account is already used')

          if (e.code === "auth/email-already-in-use") {
    toast.error("This email is already registered. Please log in instead.");
  } 
  else if (e.code === "auth/invalid-email") {
    toast.error("Invalid email format. Please enter a valid email.");
  } 
  else if (e.code === "auth/operation-not-allowed") {
    toast.error("This sign-in method is not allowed. Please contact support.");
  } 
  else if (e.code === "auth/weak-password") {
    toast.error("Password must be at least 6 characters long.");
  } 
  else if (e.code === "auth/user-disabled") {
    toast.error("Your account has been disabled. Please contact support.");
  } 
  else if (e.code === "auth/user-not-found") {
    toast.error("No account found with this email. Please sign up first.");
  } 
  else if (e.code === "auth/wrong-password") {
    toast.error("Incorrect password. Please try again.");
  } 
  else if (e.code === "auth/too-many-requests") {
    toast.error("Too many login attempts. Please try again later.");
  } 
  else if (e.code === "auth/network-request-failed") {
    toast.error("Network error. Please check your internet connection.");
  } 
  else if (e.code === "auth/missing-email") {
    toast.error("Please enter your email address.");
  } 
  else if (e.code === "auth/invalid-credential") {
    toast.error("Your login credentials are invalid or expired.");
  } 
  else if (e.code === "auth/account-exists-with-different-credential") {
    toast.error("Account exists with another sign-in method.");
  } 
  else if (e.code === "auth/invalid-verification-code") {
    toast.error("Invalid verification code. Please try again.");
  } 
  else if (e.code === "auth/invalid-verification-id") {
    toast.error("Verification failed. Please request a new code.");
  } 
  else if (e.code === "auth/missing-verification-code") {
    toast.error("Please enter the verification code.");
  } 
  else if (e.code === "auth/requires-recent-login") {
    toast.error("Please log in again to continue this action.");
  } 
  else if (e.code === "auth/popup-closed-by-user") {
    toast.error("Sign-in canceled. Please try again.");
  } 
  else if (e.code === "auth/cancelled-popup-request") {
    toast.error("Please finish the current sign-in before starting a new one.");
  } 
  else if (e.code === "auth/expired-action-code") {
    toast.error("This link has expired. Please request a new one.");
  } 
  else if (e.code === "auth/invalid-action-code") {
    toast.error("Invalid or expired link. Please try again.");
  } 
  else {
    toast.error(e.message || "An unexpected error occurred. Please try again.");
  }
        
      
      }
        })
       

    }
    return (
         <div className='lg:flex justify-between items-center w-10/12 mx-auto  lg:pt-[calc(100vh-500px)] py-25'>
            <div className="max-w-lg text-center lg:text-left mb-5 ">
            <h1 className="text-5xl font-extrabold drop-shadow-lg text-white">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>
         <div className="card bg-white/10 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleSignUp}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input bg-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Email" />
          <label className="label">Password</label>
         <div className='relative'>
                      <input type={show ? 'text' : 'password'} name='password' className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Password" />
                      <button onClick={()=>setShow(!show)} className='absolute top-3 right-3' >{show ?  <FaEye size={20} ></FaEye> : <FaEyeSlash size={20} ></FaEyeSlash> }</button>
                   </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign up</button>
        </fieldset>
        <p className='text-white/80'> Already have an account?{" "} <Link to="/signin"  className="text-pink-300 hover:text-white underline" >Sign In</Link> </p>

   
       </form>
      </div>
    </div>
          </div>
    );
};

export default Signup;