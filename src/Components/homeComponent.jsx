import React, { Component } from 'react';
import '../styles/home.css';
import {Card, CardTitle, CardBody, CardDeck, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() { 
        return (  
            <React.Fragment>          
                <div id="home-body" >                
                    <div id="home-top" className="row">                  
                        <Card id="brand" className="col-lg-6 col-md-6 col-sm-12">   
                            <div id="logo">
                                <div id="navbrand" className="mr-auto">
                                    <NavLink to="/home">Brand Name</NavLink>
                                </div> 
                            
                                <div id="log-reg">
                                    <div id="log" className="float-left">
                                        <Button outline onClick={this.toggleModal}>LOGIN</Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}> 
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username" placeholder="Username" value={this.state.username}
                                    onChange={this.handleInputChange} required/>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                                    onChange={this.handleInputChange} required/>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                    <FormGroup style={{paddingLeft:0}} check>
                                        <Label  check>
                                            <Input  type="checkbox" name="remember" defaultChecked={this.state.remember} 
                                            onChange={this.handleInputChange}/>{' '}
                                                <strong style={{marginLeft:20}}>Remember me</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                    <Button type="submit" color="primary" >Login</Button>
                                </Col>
                            </FormGroup> 

                            <div id="log-footer">
                                <strong>Not have an account ?</strong>{" "}
                                <strong><NavLink className="nav-link" to="/register">SIGN Up</NavLink></strong>
                            </div> 
                            
                        </Form>
                    </ModalBody>      
                </Modal>
            </React.Fragment>
                
            
        );
    }
}
 
export default Home;

// <Nav className="ml-auto" navbar>
//     <NavItem>
//         <Button outline onClick={this.toggleModal}>
//             <span className="fa fa-sign-in fa-lg"></span>Login
//         </Button>
//     </NavItem>
// </Nav>