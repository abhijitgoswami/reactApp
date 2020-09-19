import React, { Component } from 'react';
import {Button, Label, Col, Row} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Modal, ModalBody, ModalHeader} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            login: false
        }
        this.tooglelogin = this.tooglelogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    tooglelogin(){
        this.setState({login: !this.state.login})
    }
    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() { 
        return (     
            <React.Fragment>
            <Button color="primary" onClick={this.tooglelogin}>Login</Button>
            <Modal isOpen={this.state.login} toggle={this.tooglelogin}>
                <ModalHeader toggle={this.tooglelogin}>Login</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}> 
                        <Row className="form-group">
                            <Label htmlFor="username" md={2}>Username</Label>
                            <Col md={10}>
                                <Control.text model=".username" id="username" name="username" placeholder="Username"
                                className="form-control"/>
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Label htmlFor="password" md={2}>Password</Label>
                            <Col md={10}>
                                <Control.password model=".password" id="password" name="password" placeholder="Password"
                                className="form-control"/>
                            </Col>
                        </Row> 

                        <Row className="form-group">
                            <Col md={{size: 8, offset: 4}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input"
                                        />
                                        <strong>Remember me</strong>
                                    </Label>
                                </div>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col style={{textAlign: "center"}} md={{size: 4, offset:4}}>
                                <Button type="submit" color="primary" >Login</Button>
                            </Col>
                        </Row> 

                        <Row >
                            <Col md={{size: 8, offset: 4}}>
                                <strong>Not have Account?</strong>
                            </Col>
                        </Row>
                        <Col md={{size: 4, offset: 4}} style={{textAlign:"center"}}>
                            <strong><NavLink className="nav-link" to="/register">SIGN Up</NavLink></strong>
                        </Col>
                    </LocalForm>
                </ModalBody>      
            </Modal>
            </React.Fragment>
        );
    }
}
 
export default Login;