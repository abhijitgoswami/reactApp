import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

class VendorProfile extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <div style={{textAlign:"center"}} className="container">
                    <h1>Welcome Vendor</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <Card>
                            <CardImg src={require("../Images/demoUser.jpg")} alt="profile"/>
                        </Card>
                        <Card>
                            <CardTitle >Abhijit Goswami</CardTitle>
                            <CardBody>
                                <p>Address: Rajosmita Cottage, 10/A K P Banerjee lane, konnagar</p>
                                <p>Mobile: 8409279455</p>
                                <p>Email: abhijeetgoswami@gmail.com</p>
                                <p>Shops: shop1, shop2, shop3</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="container">
                        <Button className="col-12 col-md-3 mr-5 mt-3">Edit info</Button>
                        <Button className="col-12 col-md-3 mr-5 mt-3">Edit Stock</Button>
                        <Button className="col-12 col-md-3 mr-5 mt-3">Add shop</Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default VendorProfile;