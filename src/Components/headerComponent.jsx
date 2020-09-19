import React, { Component } from 'react';
import '../styles/header.css';
import {Nav, Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler} from 'reactstrap';
import { Row } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() { 
        return (  
            <React.Fragment>
                <header>
                    <Navbar id="header" expand="md" className="navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                        
                            <NavbarToggler id="hamburger" onClick={this.toggleNav}/>

                            <NavbarBrand className="mr-auto" href="/home">
                                <span>Brand Name</span>
                            </NavbarBrand>
                            
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav className="ml-auto" onClick={this.toggleNav}>                               
                                    <NavItem style={{textAlign:"center"}} className="col-md-3">
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-md">Home</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-3">
                                        <NavLink className="nav-link" to="/shop">
                                            <span className="fas fa-store-alt fa-md">Shop</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-3">
                                        <NavLink className="nav-link" to="/about">
                                            <span className="fa fa-info fa-md">About</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{textAlign:"center"}} className="col-md-3">
                                        <NavLink className="nav-link" to="/contact">
                                            <span className="fa fa-address-book fa-md">Contact</span>
                                        </NavLink>
                                    </NavItem>                                
                                </Nav>
                            </Collapse> 

                            <Row bsPrefix="d-block d-lg-none d-md-none">
                                <div className="container">
                                    <div id="mobile" >
                                        <span>8409279455</span>
                                    </div>
                                </div>
                            </Row>                       
                        </div>

                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Header;