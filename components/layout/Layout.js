import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {

    return (
        <>
            <header className='flex justify-center items-center text-center '>
                <Link href="/"
                    className='bg-green-600 w-60 p-2 m-1 rounded-sm'
                >
                    <h2 className='text-2xl text-teal-50
                    mb-1 border-b-2 
                    '>BOTOCAR</h2>
                    <p className='text-white
                    
                    '>choose and buy a car</p>
                </Link>
            </header>

            <div className='w-1/2 my-8 mx-auto h-auto'>
                {children}
            </div>

            <footer className='text-white bg-green-600
            p-2 text-center
            '>
                This Project Is By Next.js &copy;
            </footer>
        </>
    );
};

export default Layout;