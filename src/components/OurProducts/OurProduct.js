import React from 'react';
import './OurProduct.css';

const OurProduct = () => {
    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>Our Other Stock</h1>
            <div className="card-deck container mb-3">
                <div className="card border-0 farmer">
                    <img style={{width:'100%'}} src="https://i.ibb.co/1q2WB2t/giorgio-trovato-fcz-Cr7-Md-E7-U-unsplash.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Bananas</h5>
                         
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height: '400px'}} src='https://i.ibb.co/9Tbdt3c/nica-cn-1z-Otkv3h-J9s-unsplash.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Oranges</h5>
                        
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height:'400px'}} src="https://i.ibb.co/9Y7tnpL/zach-inglis-t0-A2-NCMh-XRQ-unsplash.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Red Berries</h5>
                    </div>
                     
                </div>
            </div>
            <div className="card-deck container">
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height:'400px'}} src="https://i.ibb.co/fv8hTHh/asso-myron-Tsgxg-SVL61s-unsplash.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Pineapples</h5>
                         
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height: '400px'}} src='https://i.ibb.co/FYTHg8v/albicoca.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Apricots</h5>
                        
                    </div>
                     
                </div>
                <div className="card border-0 farmer">
                    <img style={{width:'100%', height:'400px'}} src="https://i.ibb.co/B6HChJT/avocado.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Avocados</h5>
                    </div>
                     
                </div>
            </div>
        </div>
    );
};

export default OurProduct;