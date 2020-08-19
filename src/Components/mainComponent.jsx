import React, { Component } from 'react';
import Home from './homeComponent';
import About from './aboutComponent';
import Login from './loginComponent';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Register from './registrationComponent';
import Header from './headerComponent';
import Footer from './footerComponent';

class Main extends Component {
    
    render() { 
        return (           
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}
 
export default Main;