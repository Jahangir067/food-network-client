import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/cooking.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="md:flex items-center py-2 justify-between bg-slate-900 text-white md:px-10 px-4">
                <div className='flex items-center justify-between'>
                    <img className='w-12 rounded-full' src={logo} alt="" />
                    <a className=" md:font-bold text-2xl mx-2">The Food Network</a>


                    <div onClick={() => setOpen(!open)} className='md:hidden mt-1'>
                        <p>
                            {open === true ? <XMarkIcon className="h-6 w-6 text-white" />
                                : <Bars3Icon className="h-6 w-6 text-white" />}
                        </p>
                    </div>

                </div>

                {/* heroicon toggle start*/}


                {/* heroicon toggle end */}

                <div className={`md:block ${open ? 'block' : 'hidden'}`}>
                    <div className='my-2 md:my-0'>
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-semibold block lg:inline' : 'px-2 font-semibold block lg:inline')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-semibold block lg:inline' : 'px-2 font-semibold block lg:inline')} to="/blog">Blog</NavLink>
                       
                    </div>
                </div>

                <div className={`md:block ${open ? 'block' : 'hidden'}`}>
                    <div className='flex'>

                        {
                            user && <div
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Hello world!"
                                data-tooltip-place="top"

                                className="w-10 rounded-full mr-3">
                                <img title={user && user.displayName} className="w-12 my-2 rounded-full" src={user.photoURL} />
                            </div>
                        }

                        {
                            user ? <button onClick={handleLogOut} className="btn btn-active btn-primary">LogOut</button> :

                                <Link to="/login"><button className="btn btn-active btn-primary">Login</button></Link>
                        }



                    </div>

                </div>


            </div>

            {/* <Banner></Banner> */}
        </div>
    );
};

export default Navbar;