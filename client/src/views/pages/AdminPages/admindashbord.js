import React, { useState } from 'react';
import{ TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import StoreManagerPanal from './StoreManagerRegister/StoremanagerPanal';
import ProductCategoryPanal from './ProductCategory/createcategoryPanal';
import classnames from 'classnames';


export default function Admindashbord() {
   
    const [activeTab, setActiveTab] = useState('1');

   
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }

    return (
        <div className="container" style={divStyle}>
        <Nav tabs >
          <NavItem  >
            <NavLink 
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Store Manager
            </NavLink>
          </NavItem>
          <NavItem    >
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Product Catergory
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} >
          <TabPane tabId="1" >
            <Row>
              <Col sm="12">
                  <br></br>
                <StoreManagerPanal></StoreManagerPanal>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
              <ProductCategoryPanal></ProductCategoryPanal>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
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





