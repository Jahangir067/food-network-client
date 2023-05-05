import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// Footer section

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white mt-20 text-center py-5'>
            <h2 className='font-bold text-5xl text-center pt-5'>GOOD FOOD</h2>
            <ul className='flex justify-center mt-5'>
                <li className='md:px-2 px-1 md:font-bold'>HOME</li>
                <li className='md:px-2 px-1 md:font-bold'>RECIPES</li>
                <li className='md:px-2 px-1 md:font-bold'>ABOUT US</li>
                <li className='md:px-2 px-1 md:font-bold'>EVENT</li>
                <li className='md:px-2 px-1 md:font-bold'>CONTACT</li>
            </ul>

            <ul className='flex justify-center mt-5'>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaFacebook></FaFacebook>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaLinkedinIn></FaLinkedinIn>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaInstagram></FaInstagram>
                </li>
                <li className='px-2 text-2xl cursor-pointer'>
                    <FaTwitter></FaTwitter>
                </li>
            </ul>
        </div>
    );
};

export default Footer;