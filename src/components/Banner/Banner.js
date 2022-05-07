import React from 'react';
import main from '../../Images/main1 (2).jpg'

const Banner = () => {
    return (
        <div className='mb-5'>
            <img style={{width: '100%', objectFit:'cover'}} src={main}  alt='' />
        </div>
    );
};

export default Banner;