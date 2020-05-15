import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StoreManagerForm from './storemanagerform';
import StoreManagerTable from './storemanagertable'
export default class StoremanagerPanal extends Component {
    render() {
        return (
    <Container style={divStyle}>
            <Row>
                <Col  style={colStyleheder}>
                    <h2>Admin Dashboard</h2>
                </Col>
            </Row>
            <Row xs="auto">
                <Col  style={colStyle}>
                    <StoreManagerForm/>
                </Col>
                <Col  style={colStyle}>
                    <StoreManagerTable/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>3</p>
                </Col>
            </Row>
    </Container>
        )
    }
}


const divStyle={
    width:'100%',
    backgroundColor:'#F6F6F6'
}

const colStyle={
    padding:'5px'
}

const colStyleheder={
    backgroundColor:"white",
    padding: '10px',
    borderRadius:'10px'
}