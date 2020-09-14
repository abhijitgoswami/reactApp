import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../styles/register.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            mob: '',
            email: '',
            lname: '',
            dob: '',
            acctype: '',
            shopname: '',
            shopaddress: '',
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getShopDetails = this.getShopDetails.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    getShopDetails(){
        if(this.state.acctype === 'vendor'){
            return(
                <React.Fragment>
                    <FormGroup row>
                        <Label htmlFor="shopname" md={{size:2, offset:1}}>Shop name</Label>
                        <Col md={9}>
                            <Input type="text" id="shopname" name="shopname" placeholder="Shopname" value={this.state.shopname} onChange={this.handleInputChange}/>                          
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="shopaddress" md={{size:2, offset:1}}>Shopaddress</Label>
                        <Col md={9}>
                            <Input type="text" id="shopaddress" name="shopaddress" placeholder="Shopaddress" 
                            value={this.state.shopaddress} onChange={this.handleInputChange} />                
                        </Col>
                    </FormGroup>
                </React.Fragment>
            )
        }
        else{
            return null
        }
    }

    render() { 
        return (  
            <React.Fragment>
                <div id="register-box" className="container col-12 col-md-9">
                    <div id="reg-title" className="container">
                        <h3>Register</h3>
                    </div>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup row>
                            <Label  htmlFor="fname" md={2}>First Name</Label>
                            <Col md={9}>
                                <Input type="text" id="fname" name="fname" placeholder="First Name" value={this.state.fname}
                                 onChange={this.handleInputChange} required/>
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="lname" md={2}>Last Name</Label>
                            <Col md={9}>
                                <Input type="text" id="lname" name="lname" placeholder="Last Name" value={this.state.lname}
                                onChange={this.handleInputChange} required/>              
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="dob" md={2}>Date of birth</Label>
                            <Col md={9}>
                                <Input type="date" id="dob" name="dob" placeholder="DOB" value={this.state.dob}              onChange={this.handleInputChange} required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="mob" md={{size:2, offset:1}}>Mobile</Label>
                            <Col md={9}>
                                <Input type="tel" id="mob" name="mob" placeholder="Mobile" value={this.state.mob} 
                                onChange={this.handleInputChange} pattern = "[0-9]{10}" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="email" md={{size:2, offset:1}}>Email</Label>
                            <Col md={9}>
                                <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                                onChange={this.handleInputChange}/> 
                            </Col>
                        </FormGroup>

                        <FormGroup row id="cust-type">
                            <Label htmlFor="acctype" md={{size:3, offset:1}}>Account type</Label>
                            <Col  md={{size: 3, offset:1}}>                                                      
                                <Input type="radio" name="acctype" value='customer' onChange={this.handleInputChange} 
                                required/>{' '}
                                    <p>Customer</p>                                                                
                            </Col>     
                            <Col md={{size: 3, offset:1}}>                           
                                <Input type="radio" name="acctype" value='vendor' onChange={this.handleInputChange}
                                required/>{' '}
                                    <p>Vendor</p>                             
                            </Col>
                        </FormGroup>

                        {this.getShopDetails()}

                        <FormGroup row>
                            <Col id="reg-button" style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit" color="primary" >Register</Button>
                            </Col>
                        </FormGroup>  
                    </Form>
                    <div id="reg-footer">
                        <strong>Already have account ?</strong>{" "}
                        <strong><Button onClick={this.toggleModal}>SIGN IN</Button></strong>
                    </div>
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
 
export default Register;