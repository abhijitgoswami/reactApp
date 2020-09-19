import React, { Component } from 'react';
import {NavbarBrand} from 'reactstrap';
import '../styles/footer.css';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
    render() { 
        return (  
            <footer >
                <div id="footer" className="container">
                    <div className="row">
                        <div id="company" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <h5>Company</h5>
                            <p><NavLink to="/home">Home</NavLink></p>
                            <p><NavLink to="/about">About us</NavLink></p>
                        </div>

                        <div id="contact" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <h5>Contact</h5>
                            <p><NavLink to="/contact">Contact Us</NavLink></p>
                            <p><NavLink to="/help">Help and Support</NavLink></p>
                            <p><NavLink to="/vendorregistration">Partner with us</NavLink></p>
                        </div>

                        <div id="legal" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <h5>Legal</h5>
                            <p><NavLink to="/contact">Terms &amp; Condition</NavLink></p>
                            <p><NavLink to="/help">Refund &amp; Cancellation</NavLink></p>
                            <p><NavLink to="/contact">Privacy Policy</NavLink></p>
                            <p><NavLink to="/help">Cookies Policy</NavLink></p>
                            <p><NavLink to="/help">Offer Terms</NavLink></p>
                        </div>

                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 align-self-center">
                                <div className="text-center">
                                    <a className='btn btn-social-icon btn-google mr-2' href="http://google.com/+">
                                        <i className='fa fa-google-plus'></i>
                                    </a>
                                    <a className='btn btn-social-icon btn-facebook mr-2' href="http://www.facebook.com/profile.php?id=">
                                        <i className='fa fa-facebook'></i>
                                    </a>
                                    <a className='btn btn-social-icon btn-linkedin mr-2' href="http://www.linkedin.com/in/">
                                        <i className='fa fa-linkedin'></i>
                                    </a>
                                    <a className='btn btn-social-icon btn-twitter mr-2' href="http://twitter.com/">
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                    <a className='btn btn-social-icon btn-google mr-2' href="http://youtube.com/">
                                        <i className='fa fa-google'></i>
                                    </a>
                                    <a className='btn btn-social-icon btn-mailto mr-2' href="mailto:">
                                        <i className='fa fa-google-mailto'></i>
                                    </a>
                                </div>
                            </div>
                    </div>

                    <hr/>
                   
                    <div className="container">
                        <div className="row">
                            <div id="copyright" className="col-12">
                                <h5>&copy; 2020 Brand Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;