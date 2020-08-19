import React, { Component } from 'react';
import {Form, Button, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../styles/login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            remember: false,
            password: ''
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
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() { 
        return (     
            <div id="login-box" className="container col-12 col-md-9">
                <div id="log-title" className="container">
                    <h3>Login</h3>
                </div>
                <Form onSubmit={this.handleSubmit}> 
                    <FormGroup row>
                        <Label htmlFor="username" md={2}>Username</Label>
                        <Col md={10}>
                            <Input type="text" id="username" name="username" placeholder="Username" value={this.state.username}
                            onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup> 
                    <FormGroup row>
                        <Label htmlFor="password" md={2}>Password</Label>
                        <Col md={10}>
                            <Input type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                            onChange={this.handleInputChange}/>
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
                        <strong><NavLink to="/register">SIGN UP</NavLink></strong>
                    </div> 
                    
                </Form>
            </div> 
        );
    }
}
 
export default Login;