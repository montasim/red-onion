import React from 'react';
import e404 from '../../Media/Images/404.png';

const NotFound = () => {
    return (
        <div className='m-5'>
            <a className='row items-center' href="/home">
                <img src={e404} alt="" />
            </a>
        </div>
    );
};

export default NotFound;