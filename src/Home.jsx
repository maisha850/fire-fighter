import React from 'react';
import { toast } from 'react-toastify';

const Home = () => {
    const handleBtn=()=>{
        toast('🎉 You’ll be notified when the homepage is ready!',{
            position:"top-center",
            autoClose: 3000,
            theme: "colored"
        })
    }
    return (
        <div className='w-11/12 mx-auto text-white flex justify-center items-center flex-col pt-[calc(100vh-400px)]'>
           <h1 className='lg:text-5xl text-3xl font-bold animate-bounce'> 🚀 Homepage is Coming Soon</h1>
           <p className='mt-5 animate-pulse'> Stay tuned! We’re crafting something amazing for you ✨</p>
           <button onClick={handleBtn}  className="btn mt-5 btn-outline btn-accent animate-[pulse_2s_infinite]">Notify me</button>
        </div>
    );
};

export default Home;