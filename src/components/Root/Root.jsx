import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='border-2 rounded-2xl border-amber-500 p-10 space-y-20'>
            <Header></Header>
            <div className='border-2  border-green-600 p-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;