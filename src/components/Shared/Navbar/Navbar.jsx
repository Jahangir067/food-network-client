import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/cooking.png'
import Banner from '../../Banner/Banner';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-900 text-white px-10">
                <div className="flex-1">
                    <img className='w-12 rounded-full' src={logo} alt="" />
                    <a className="btn btn-ghost font-bold normal-case text-2xl">The Food Network</a>
                </div>

                <div className="flex-none gap-2">
                    <div className='mr-96'>
                        <Link className='px-2 font-semibold' to="/">Home</Link>
                        <Link className='px-2 font-semibold' to="/blog">Blog</Link>
                        <Link className='px-2 font-semibold' to="/service">Service</Link>
                    </div>

                    <div className="w-10 rounded-full mr-3">
                        <img src={logo} />
                    </div>

                    <button className="btn btn-active btn-primary">Login</button>
                </div>

            </div>

            {/* <Banner></Banner> */}
        </div>
    );
};

export default Navbar;