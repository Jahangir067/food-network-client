import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/cooking.png'
import { AuthContext } from '../../Provider/AuthProvider';
import userImg from '../../../../public/person6.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error.message)
        })
    }
    
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

                    {
                        user && <div className="w-10 rounded-full mr-3">
                            <img title="Buffly Amrin" src={userImg} />
                        </div>
                    }

                    {
                        user ? <button onClick={handleLogOut} className="btn btn-active btn-primary">LogOut</button> :

                            <Link to="/login"><button className="btn btn-active btn-primary">Login</button></Link>
                    }



                </div>

            </div>

            {/* <Banner></Banner> */}
        </div>
    );
};

export default Navbar;