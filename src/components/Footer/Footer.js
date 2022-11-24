import React from 'react';
import './Footer.css';
import { GrFacebook } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { TiSocialYoutube, TiSocialLinkedin } from 'react-icons/ti';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
         <footer className="footer-section mt-5">
            <div className="container">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Our Opinion</h3>
                                </div>
                                <div className="footer-text">
                                    <p> If you have ever been inside a grocery store, you have probably noticed the produce section. Mountains of lemons, piles of tomatoes, rows of cucumbers, several kinds of apples, and more. Some of these items you might know as fruits, and others as vegetables.We should know the difference between a fruit and a vegetable </p>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a className='btn btn-link'>Home</a></li>
                                    <li><a className='btn btn-link'>about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a className='btn btn-link'>portfolio</a></li>
                                    <li><a className='btn btn-link'>Contact</a></li>
                                    <li><a className='btn btn-link'>About us</a></li>
                                    <li><a className='btn btn-link'>Our Services</a></li>
                                    <li><a className='btn btn-link'>Expert Team</a></li>
                                    <li><a className='btn btn-link'>Contact us</a></li>
                                    <li><a className='btn btn-link'>Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Dont miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                                
                            </div>
                            <div className='mt-3'>
                                <GrFacebook style={{color:'white', marginRight:'50px'}} /><FiTwitter style={{color:'white', marginRight:'50px'}} /> <SiInstagram style={{color:'white', marginRight:'50px'}} /> <TiSocialYoutube style={{color:'white', marginRight:'50px'}} /> <TiSocialLinkedin  style={{color:'white', marginRight:'50px'}}/> <FaGoogle style={{color:'white', marginRight:'50px'}} />
                            </div>
                        </div>
                    </div>
                    <div className=" text-center p-3">
                        <p className='text-white'>Copyright &copy; {year}, All Right Reserved</p>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;