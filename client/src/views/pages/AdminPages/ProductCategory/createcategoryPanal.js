import React, { Component } from 'react';
import { Container, Row, Col,Alert } from 'reactstrap';
import ProductCategoryForm from './productcategoryform';
import ProductCategoryTable from './productcategorytable';



export default class Createcategory extends Component {
    render() {
        return (
            <Container style={divStyle}>
               
            <Row>
                <Col style={colStyleheder}>
                   <ProductCategoryForm></ProductCategoryForm>
                </Col>
            </Row>
            <Row>
                <Col style={colStyle}>
                 
                </Col>
                <Col xs="auto" style={colStyle}>
                <h>11</h>
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