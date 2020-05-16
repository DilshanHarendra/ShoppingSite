import React, { Component } from 'react'
import { Container, Row ,FormGroup, Label, Input, Form, Col, Button} from 'reactstrap'
import Axios from 'axios'

export default class OrderPlaced extends Component {

    constructor(props){
        super(props)
        this.state={
          order_id:''
        }
        

    }


    onCreateOrder(){

        let TotalPrice= this.props.totalPrice;
        let numberOfItem =this.props.totalNumberOfProduct;
        let userID= this.props.userId;
        let productList=this.props.productsList;
        
        
        let newOrder={

            totalAmaount:TotalPrice,
            user_id:userID,
            products:productList,
            numberOfItem:numberOfItem


        }
        Axios.post('http://localhost:3001/order/add',newOrder)
            .then(res=>{
                console.log("Order create");
                  console.log(res.data);
                  this.setState({order_id:res.data})
                  let order_idsend=res.data
                  window.location.href= "http://localhost:3000/paymentMain?order_id="+order_idsend;
                
                
            })
            .catch(err=>console.log('Error in create order'+err)
            )
            
                            //navigate to payment
                            // this.props.history.push({
                            //   pathname: '/adminDashboard',
                            //   state: {
                            //     order_id: this.state.order_id,
                            //     total_amount: TotalPrice,
                            //     numberof_items:numberOfItem,
                            //     products_list:productList
            
                            //   }
                            // })

    }





    render() {
        return (
    <Container style={oderStyle}>
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <h5 for="exampleEmail">Total Price</h5>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
        <h5>{this.props.totalPrice}</h5>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <h5 for="exampleEmail">Number of Items</h5>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <h5>{this.props.totalNumberOfProduct}</h5>
          </FormGroup>
        </Col>
      </Row>
      <Row>
          <Col>
            <Button style={ButtonStyle} onClick={()=>{this.onCreateOrder()}} color="primary">Check out</Button>
            <Button style={ButtonStyle} color="danger">Cancel</Button>
        </Col>
      </Row>
    </Form>
               
            </Container>
        )
    }
}


const ButtonStyle={
    margin: '5px',
    padding:'5px',
    bottom: '5%',
}

const oderStyle={
   
    padding: '10px',
    background: 'aliceblue',
    borderRadius: '10px',
    margin:'10px'
    
}

