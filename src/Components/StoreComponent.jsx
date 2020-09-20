import React, { Component } from 'react';
import { Col, Input, Label, Row, Button } from 'reactstrap';

class Store extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    item: "Buiscuit",
                    qty: 0,
                },
                {
                    id: 1,
                    item: "Chips",
                    qty: 0,
                },
                {
                    id: 2,
                    item: "Chocolates",
                    qty: 0,
                }
            ]
        }
    }

    addItem = (key) => {
        const itemIndex = this.state.items.findIndex((item) => item.id === key)
        let newState = [...this.state.items]
        newState[itemIndex] = {
            ...newState[itemIndex],
            qty: newState[itemIndex].qty + 1
        }
        this.setState({
            items: newState
        })
    }

    delItem = (key) => {
        const itemIndex = this.state.items.findIndex((item) => item.id === key)
        let newState = [...this.state.items]
        newState[itemIndex] = {
            ...newState[itemIndex],
            qty: newState[itemIndex].qty - 1
        }
        this.setState({
            items: newState
        })
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
                            <Col><Button type="submit" color="primary" onClick={() => this.delItem(item.id)}>-</Button></Col>
                            <Col><Label><Input placeholder={item.qty}></Input></Label></Col>
                            <Col><Button type="submit" color="primary" onClick={() => this.addItem(item.id)}>+</Button></Col>                          
                        </Row>
                    </Col>
                </Row>
            )
        })
        return (  
            <React.Fragment>
                <div className="container">
                    {item}
                    {console.log(this.state)} 
                </div>
            </React.Fragment>
        );
    }
}
 
export default Store;