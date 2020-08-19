import React, { Component } from 'react';
import '../styles/home.css';
import {NavbarBrand, Card, CardTitle, CardBody, CardDeck} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() { 
        return (  
            <React.Fragment>          
                <div id="home-body" >                
                    <div id="home-top" className="row">                  
                        <Card id="brand" className="col-lg-6 col-md-6 col-sm-12">   
                            <div id="logo">
                                <NavbarBrand className="mr-auto">
                                    <NavLink to="/home">Brand Name</NavLink>
                                </NavbarBrand> 
                            
                                <div id="log-reg">
                                    <div id="log" className="float-left">
                                        <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                                    </div>
                                    <div id="reg" className="float-left">
                                        <NavLink className="nav-link" to="/register">SIGN UP</NavLink>
                                    </div>
                                </div>  
                            </div>    

                            <div id="search-food">
                                <h3>Unexpected Guest?</h3>
                                <p>Order groceries from favourite grocery store near you!</p>
                                <div id="search">
                                    <input type="text"/>
                                    <button>Find</button>
                                </div>
                            </div>                                                                                 
                        </Card>

                        <Card id="image" className="col-lg-6 col-md-6 col-sm-12">
                            <img src={require('../Images/groceries.jpg')} alt="img"/>
                        </Card>                 
                    </div>                             
                </div>
                <div id="home-middle" >
                    <CardDeck>
                        <Card >
                            <CardTitle>
                                <h3>No Minimum Order</h3>
                            </CardTitle>
                            <CardBody>
                                <p>Order in for yourself or for the group, with no restrictions on order value</p>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardTitle>
                                <h3>Live Order Tracking</h3>
                            </CardTitle> 
                            <CardBody>
                                <p>Know where your order is at all times, from the restaurant to your doorstep</p>
                            </CardBody>
                        </Card>
                        <Card >
                            <CardTitle>
                                <h3>Fast Home Delivery</h3>
                            </CardTitle>
                            <CardBody>
                                <p>Experience Swiggy's superfast delivery for food delivered fresh &amp; on time</p>
                            </CardBody>
                            
                        </Card>
                    </CardDeck>
                </div>
            </React.Fragment>
                
            
        );
    }
}
 
export default Home;