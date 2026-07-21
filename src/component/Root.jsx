import React from 'react';
import Navbar from '../Fixed/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Fixed/Footer';


const Root = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;