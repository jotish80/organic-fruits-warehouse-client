import React from 'react';
import './Farmer.css';

const Farmers = () => {
    return (
        <div>
            <h1 className='text-center mb-3 mt-5'>Our Farmers</h1>
            <p className='text-center mb-5'>Our goal is to produce more organic fruits and vegetables for future generation to keep healthy.</p>
            <div className="card-deck container mb-3">
                <div className="card border-0 farmer">
                    <img  style={{width:'100%', height:'400px', borderRadius:'50%', objectFit:'cover'}} src="https://i.ibb.co/x32zB6N/julio-deras-voiy0l-DEBOE-unsplash.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Mark</h5>
                         <p className='text-center'>Organic Farmer</p>
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height: '400px', borderRadius:'50%', objectFit:'cover'}} src='https://i.ibb.co/sbSfjgH/gregory-hayes-QFm-NQXLPb-Zc-unsplash.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">John</h5>
                        <p className='text-center'>Organic Farmer</p>
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height:'400px', borderRadius:'50%', objectFit:'cover'}} src="https://i.ibb.co/1dnJVFT/zoe-schaeffer-si-D6uuf-Cyt8-unsplash.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Robert</h5>
                        <p className='text-center'>Organic Farmer</p>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default Farmers;