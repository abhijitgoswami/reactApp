import React, { Component } from 'react';
import Home from './homeComponent';
import About from './aboutComponent';
import Login from './loginComponent';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Register from './registrationComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import VendorReg from './VendorRegComponent';
import VendorProfile from './VendorProfile';
import ContactUs from './ContactComponent';
import Store from './StoreComponent';

class Main extends Component {
    
    render() { 
        return (           
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/shop" component={Store}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="/vendorregistration" component={VendorReg}/>
                    <Route path="/vendorprofile" component={VendorProfile}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}
 
export default Main;