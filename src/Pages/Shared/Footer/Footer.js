import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 bg-dark text-center text-white'>
            <p className='py-5'>Red Onion &copy; {year}</p>
        </div>
    );
};

export default Footer;