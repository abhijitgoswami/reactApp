import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
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
            touched: {
                fname: false,
                mob: false,
                email: false,
                lname: false,
                dob: false,
                acctype: false,
                shopname: false,
                shopaddress: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getShopDetails = this.getShopDetails.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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

    handleBlur = (field) => (evt) => {
        this.setState({
           touched: {...this.state.touched, [field]: true} 
        });
    }

    validate(fname, lname, dob, mob, email, acctype, shopname, shopaddress){
        const errors = {
            fname: '', 
            lname: '', 
            dob: '', 
            mob: '', 
            email: '',
            acctype: '', 
            shopname: '', 
            shopaddress: ''
        };

        if(this.state.touched.fname && fname.length === 0)
            errors.fname = "First name cann't be empty";
        if(this.state.touched.lname && lname.length === 0)
            errors.lname = "Last name cann't be empty";
        if(this.state.touched.dob && dob.length === 0)
            errors.dob = "Date of birth cann't be empty";  

        const reg = /^\d+$/;
        if(this.state.touched.mob && !reg.test(mob))
            errors.mob = "Field shpuld contain only numbers";
        if(this.state.touched.email && email.split('').filter(x => x ==='@').length !== 1)
            errors.email = "Invalid Email!";
        if(this.state.touched.shopname && shopname.length === 0)
            errors.shopname = "Shop name cann't be empty";
        if(this.state.touched.shopaddress &&  shopaddress.length === 0)
            errors.shopaddress = "Shop address cann't be empty";

        return errors;
    }

    getShopDetails(errors){
        if(this.state.acctype === 'vendor'){
            return(
                <React.Fragment>
                    <FormGroup row>
                        <Label htmlFor="shopname" md={{size:2, offset:1}}>Shop name</Label>
                        <Col md={9}>
                            <Input type="text" id="shopname" name="shopname" placeholder="Shopname" value={this.state.shopname} onChange={this.handleInputChange} onBlur={this.handleBlur('shopname')}
                            valid={errors.shopname === ''} invalid={errors.shopname !== ''}/>
                            <FormFeedback>{errors.shopname}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="shopaddress" md={{size:2, offset:1}}>Shopaddress</Label>
                        <Col md={9}>
                            <Input type="text" id="shopaddress" name="shopaddress" placeholder="Shopaddress" 
                            value={this.state.shopaddress} onChange={this.handleInputChange} 
                            onBlur={this.handleBlur('shopaddress')} valid={errors.shopaddress === ''} 
                            invalid={errors.shopaddress !== ''}/>
                            <FormFeedback>{errors.shopaddress}</FormFeedback>
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
        const errors = this.validate(this.state.fname, this.state.lname, this.state.dob, this.state.mob, this.state.email, 
            this.state.acctype, this.state.shopname, this.state.shopaddress)
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
                                valid={errors.fname === ''} invalid={errors.fname !== ''} 
                                onChange={this.handleInputChange} onBlur={this.handleBlur('fname')}/>
                                <FormFeedback>{errors.fname}</FormFeedback>
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="lname" md={2}>Last Name</Label>
                            <Col md={9}>
                                <Input type="text" id="lname" name="lname" placeholder="Last Name" value={this.state.lname}
                                valid={errors.lname === ''} invalid={errors.lname !== ''} 
                                onChange={this.handleInputChange} onBlur={this.handleBlur('lname')}/>
                                <FormFeedback>{errors.lname}</FormFeedback>
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Label htmlFor="dob" md={2}>Date of birth</Label>
                            <Col md={9}>
                                <Input type="date" id="dob" name="dob" placeholder="DOB" value={this.state.dob} 
                                valid={errors.dob === ''} invalid={errors.dob !== ''}
                                onChange={this.handleInputChange} onBlur={this.handleBlur('dob')}/>
                                <FormFeedback>{errors.dob}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="mob" md={{size:2, offset:1}}>Mobile</Label>
                            <Col md={9}>
                                <Input type="tel" id="mob" name="mob" placeholder="Mobile" value={this.state.mob} 
                                onChange={this.handleInputChange} onBlur={this.handleBlur('mob')} 
                                valid={errors.mob === ''} invalid={errors.mob !== ''}/>
                                <FormFeedback>{errors.mob}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="email" md={{size:2, offset:1}}>Email</Label>
                            <Col md={9}>
                                <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                                valid={errors.email === ''} invalid={errors.email !== ''} 
                                onChange={this.handleInputChange} onBlur={this.handleBlur('email')}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row id="cust-type">
                            <Label htmlFor="acctype" md={{size:3, offset:1}}>Account type</Label>
                            <Col  md={{size: 3, offset:1}}>                                                      
                                <Input type="radio" name="acctype" value='customer' onChange={this.handleInputChange} 
                                onBlur={this.handleBlur('acctype')}/>{' '}
                                    <p>Customer</p>                                                                
                            </Col>     
                            <Col md={{size: 3, offset:1}}>                           
                                <Input type="radio" name="acctype" value='vendor' onChange={this.handleInputChange}
                                onBlur={this.handleBlur('acctype')}/>{' '}
                                    <p>Vendor</p>                             
                            </Col>
                        </FormGroup>

                        {this.getShopDetails(errors)}

                        <FormGroup row>
                            <Col id="reg-button" style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit" color="primary" >Register</Button>
                            </Col>
                        </FormGroup>  
                    </Form>
                    <div id="reg-footer">
                        <strong>Already have account ?</strong>{" "}
                        <strong><NavLink className="nav-link" to="/login">SIGN IN</NavLink></strong>
                    </div>
                </div> 
            </React.Fragment>            
        );
    }
}
 
export default Register;