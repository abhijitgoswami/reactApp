import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class VendorReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            address: '',
            mob: '',
            email: '',
            password: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    render() { 
        return (  
            <React.Fragment>
                <div id="register-box" className="container col-12 col-md-9">
                    <div style={{textAlign:"center", marginBottom:50, marginTop:20}} className="container">
                        <h3>Partner with us</h3>
                    </div>
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup row>
                            <Label  htmlFor="fname" md={2}>First Name*</Label>
                            <Col md={9}>
                                <Input type="text" id="fname" name="fname" placeholder="First Name" value={this.state.fname}
                                 onChange={this.handleInputChange} required/>
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="lname" md={2}>Last Name*</Label>
                            <Col md={9}>
                                <Input type="text" id="lname" name="lname" placeholder="Last Name" value={this.state.lname}
                                onChange={this.handleInputChange} required/>              
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="address" md={2}>Address*</Label>
                            <Col md={9}>
                                <Input type="textarea" id="address" name="address" placeholder="Address" 
                                value={this.state.address} onChange={this.handleInputChange} required/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="mob" md={{size:2, offset:1}}>Mobile*</Label>
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

                        <FormGroup row>
                            <Label htmlFor="password" md={2}>Password*</Label>
                            <Col md={9}>
                                <Input type="password" id="password" name="password" placeholder="Password" 
                                value={this.state.password}
                                onChange={this.handleInputChange} required/>              
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="cnfpassword" md={2}>Confirm password*</Label>
                            <Col md={9}>
                                <Input type="password" id="cnfpassword" name="cnfpassword" placeholder="Confirm password" value={this.state.lname}
                                onChange={this.handleInputChange} required/>              
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col id="reg-button" style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit"  color="primary" >Register</Button>
                            </Col>
                        </FormGroup>  
                    </Form>

                    <NavLink className="nav-link" to="/vendorprofile">Vendor Profile</NavLink>
                    
                    <div id="reg-footer">
                        <strong>Already have account ?</strong>{" "}
                        <strong><Button onClick={this.toggleModal}>SIGN IN</Button></strong>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}
 
export default VendorReg;
