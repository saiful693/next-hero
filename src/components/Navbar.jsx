import Link from 'next/link';
import React from 'react';

const Navbar = () => {


    const links = [
        {
            title: "Posts",
            path: '/posts',
        },
        {
            title: "Meals",
            path: "/meals",
        },
        {
            title: "Gallery",
            path: "/gallery"
        },
        {
            title: "About",
            path: "/about"
        }
    ]

    return (
        <nav className='flex justify-between items-center px-20 py-5 bg-cyan-200'>
            <h3 className='text-3xl font-bold text-amber-800'>Next<span className='text-cyan-700'>Meal</span></h3>
            <ul className='space-x-4'>
                {
                    links?.map((link) => (
                        <Link key={link.path} href={link.path}>{link.title}</Link>
                    ))
                }
            </ul>
            <button className='p-3 rounded-lg bg-amber-800'>
                <Link href='/login'>Login</Link>
            </button>
        </nav>
    );
};

export default Navbar;