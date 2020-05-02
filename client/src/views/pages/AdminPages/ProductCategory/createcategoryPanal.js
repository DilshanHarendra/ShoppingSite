import React, { Component } from 'react';
import { Container, Row, Col,Alert } from 'reactstrap';
import ProductCategoryForm from './productcategoryform';
import ProductCategoryTable from './productcategorytable';



export default class Createcategory extends Component {
    render() {
        return (
            <Container style={divStyle}>
                    <Row xs="2">
                        <Col><h1>Product Category</h1></Col>
                    </Row>
                    <Row xs="2">
                        <Col ><ProductCategoryForm></ProductCategoryForm></Col>
                        <Col><ProductCategoryTable></ProductCategoryTable></Col>
                        
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