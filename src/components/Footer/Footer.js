import React from 'react';
import './Footer.css';

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
                                    <p> If you have ever been inside a grocery store, you have probably noticed the produce section. Mountains of lemons, piles of tomatoes, rows of cucumbers, several kinds of apples, and more. Some of these items you might know as fruits, and others as vegetables. But what is the difference between a fruit and a vegetable? When you eat an apple, strawberry, or peach, what part of the plant are you eating? Please explores our knowledge of fruits and how to properly identify them.. </p>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Latest News</a></li>
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
                        </div>
                    </div>
                    <div className="copyright-text text-center p-3">
                        <p>Copyright &copy; {year}, All Right Reserved</p>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;