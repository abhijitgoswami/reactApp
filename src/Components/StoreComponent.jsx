import React, { Component } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';
import {Button} from 'react-bootstrap';

class Store extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    item: "Buiscuit",
                    qty: 10,
                },
                {
                    id: 1,
                    item: "Chips",
                    qty: 3,
                },
                {
                    id: 2,
                    item: "Chocolates",
                    qty: 10,
                }
            ]
        }
    }

    render() { 
        let item = this.state.items.map((item) => {
            return(
                <Row key={item.id}>
                    <Col style={{textAlign:"center"}}>
                        <strong>{item.item}</strong>
                    </Col>
                    <Col style={{textAlign:"center"}}>
                        <Row >
                            <Col><Button >-</Button></Col>
                            <Col><Label><Input placeholder={item.qty}></Input></Label></Col>
                            <Col><Button >+</Button></Col>                           
                        </Row>
                    </Col>
                </Row>
            )
        })
        return (  
            <React.Fragment>
                
                <div className="container">
                    {item}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Store;