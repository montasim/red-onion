import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 bg-dark text-white items-center'>
            <p className='py-5 text-center'>Red Onion &copy; {year} <span className='items-right'><FiFacebook /><AiFillGithub /> <AiFillLinkedin /></span></p>
        </div>
    );
};

export default Footer;