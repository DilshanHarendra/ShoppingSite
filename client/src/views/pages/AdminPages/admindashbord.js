import React, { useState } from 'react';
import{ TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import StoreManagerPanal from './StoreManagerRegister/StoremanagerPanal';
import ProductCategoryPanal from './ProductCategory/createcategoryPanal';
import classnames from 'classnames';
import { GiTShirt } from "react-icons/gi";
import {GrUserManager} from "react-icons/gr";


const handleStoreManager=()=>{
  window.location='http://localhost:3000/storeManager';

}

const handleProductCategory=()=>{
  window.location='http://localhost:3000/productcategory';

}

export default function Admindashbord() {
    
    return (
      <Container>
        <Row>
        <Col><h3>Admin Dashbord</h3></Col>
      </Row>
      <Row style={iconpanalStyle}>
        <Col style={storeManagerColor} onClick={handleStoreManager}>
          <h2>Store Manager</h2>
          <GrUserManager size="3em" color="balck" />
        </Col>
        <Col style={productCategoryanagerColor} onClick={handleProductCategory}>
          <h2>Product Category </h2>
          <GiTShirt size="3em" color="black"/>



         
          </Col>
        <Col style={col3}> </Col>
        <Col  style={col4}>.col</Col>
      </Row>
      </Container>
     
    )
  }




const iconpanalStyle={
    padding: '10px',
    borderRadius: '8px',
    minHeight: '80px'
}

const storeManagerColor={
  backgroundImage: 'linear-gradient(to right top, #ee35ee, #cf2ff3, #aa2ff7, #7c32fa, #2d36fd)',
  borderRadius: '8px',
  margin: '4px',
  padding: '10px'
}

const productCategoryanagerColor={
  backgroundImage: 'linear-gradient(to right top, #ee3535, #ff1158, #ff0080, #ff00ab, #fd2dd9)',
  borderRadius: '8px',
  margin: '4px',
  padding: '10px'
}

const col3={
  backgroundImage: 'linear-gradient(to right top, #eec635, #f6a819, #fc870f, #fe621c, #fd2d2d)',
  borderRadius: '8px',
  margin: '4px',
  padding: '10px'
}

const col4={
  backgroundImage: 'linear-gradient(to right top, #35ee8d, #6cf477, #95f860, #bcfc48, #e2fd2d)',
  borderRadius: '8px',
  margin: '4px',
  padding: '10px'
}




