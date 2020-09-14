import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class LoginModel extends Component {
    constructor(props){
        super(props);

        this.state ={

        }
    }

    render() { 
        
            return (  
                <Modal isOpen={true} >
                    <ModalHeader >Login</ModalHeader>
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
        );
    }
}
 
export default LoginModel;
