import React from 'react';
import Navbar from './assets/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
         <div className=' min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 '>
              <Outlet></Outlet> 
         </div>
        </div>
    );
};

export default Root;