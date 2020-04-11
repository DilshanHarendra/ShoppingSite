import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import StoreManagerForm from './StoreManagerRegister/storemanagerform';
import StoreManagerTable from './StoreManagerRegister/storemanagerview';



export default class admindashbord extends Component {
    render() {
        return (
            <Container style={divStyle}>
            <Row>
                <Col   style={colStyle}>
                    <StoreManagerForm/>
                </Col>
                <Col xs="auto" style={colStyle}>
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
    backgroundColor:'#f5ebeb'
}

const colStyle={
    padding:'5px'
}