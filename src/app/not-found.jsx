import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-4'>
            <h1 className='font-bold text-5xl text-purple-500'>
                This page is not found
            </h1>
            <Link href={'/'}>
                <button className='btn bg-purple-500 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Notfound;