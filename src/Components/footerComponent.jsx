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
                        </div>

                        <div id="legal" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <h5>Legal</h5>
                            <p><NavLink to="/contact">Terms &amp; Condition</NavLink></p>
                            <p><NavLink to="/help">Refund &amp; Cancellation</NavLink></p>
                            <p><NavLink to="/contact">Privacy Policy</NavLink></p>
                            <p><NavLink to="/help">Cookies Policy</NavLink></p>
                            <p><NavLink to="/help">Offer Terms</NavLink></p>
                        </div>
                    </div>

                    <hr/>
                   
                    <div className="container">
                        <div className="row">
                            <div id="fotter-brand" className="col-lg-6 col-sm-12 col-xs-12">
                                <NavbarBrand className="mr-auto" href="/home">
                                    <span>Brand Name</span>
                                </NavbarBrand>
                            </div>

                            <div id="copyright" className="col-lg-6 col-sm-12 col-xs-12">
                                <h5>&copy; 2020 Brand Name</h5>
                            </div>

                            <div id="social-network">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;