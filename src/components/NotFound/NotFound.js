import React from 'react';
import notFound from '../../Images/ErrorPage404-04.jpg';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img style={{width: '65%'}} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;