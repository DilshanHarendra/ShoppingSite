import React, { Component } from 'react'
import { Container, Row, Col, Table, Input, Form, Button, FormGroup, Label, ButtonGroup } from 'reactstrap'
import axios from 'axios'
import { element } from 'prop-types'

class CartList extends Component{
    render(){
        return(
           <tr>
            <td>{this.props.product_data.product.proName}</td>
            <td>{this.props.product_data.product.price}</td>
            <td>{this.props.product_data.qunitity}</td>
           </tr> 
        )
    }
}







export default class Cart extends Component {

    constructor(props){
        super(props)

        this.loadProductListData=this.loadProductListData.bind(this);
        this.categoryList=this.categoryList.bind(this);
        this.notloaddata=this.notloaddata.bind(this);
        this.countTotalPrice=this.countTotalPrice(this);
       

        this.state={
            PrdouctList:[],
            temproductlist:[],
            ItemList:[],
            TotalPrice:'',
            TotalNumberOfProduct:'',
            Order_id:'',
            dataload:false,
            user_id:'6326565444555'
           
        };

       
        

    }

     componentDidMount(){
      this.loadProductListData()
      
    }

   async loadProductListData(){
        axios.get('http://localhost:3001/cart/'+this.state.user_id)
        .then(async ressopns=>{
            console.log(ressopns);
         this.setState({PrdouctList:ressopns.data}) 
         this.setState({dataload:true})
         this.state.PrdouctList[0].products.map(el=>console.log(el.product.proName)) 
            console.log(this.state.PrdouctList[0].products[1].qunitity);
            console.log(this.state.PrdouctList[0].products);
           
            let i;
            let Total=0;
            let itemlist= this.state.PrdouctList[0].products
            for(i=0;i<itemlist.length;i++){
                Total+=itemlist[i].product.price*itemlist[i].qunitity
             }
            this.setState({TotalPrice:Total}) 
            this.setState({TotalNumberOfProduct:itemlist.length})
            this.setState({ItemList:itemlist})
            //  let j;
            //  let TotalQuntity=0;

            //  for(j=0;i<itemlist.length;j++){
            //     Total+=itemlist[j].product.price
            //  }
           
            console.log(Total);
            
            
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
       
    }
    countTotalPrice(){
       
       
       
    }

    categoryList(){    
     
        return this.state.PrdouctList[0].products.map(product_ele=>{
            return <CartList product_data={product_ele}
                             key={product_ele.product._id}   
            />
            }
            
        )

    }

    notloaddata(){
        return <h2>Data not load</h2>
    }


    render() {
        return (
            <Container >

                <Row >
                    <Col>
                    <h3>  Product List  </h3>
                        <Table responsive>
                        <thead>
                            <tr>
                                <th> Product </th>
                                <th> price </th>
                                <th> qunitity </th>
                            </tr>
                        </thead>   
                        <tbody> 
                            
                          {this.state.dataload? this.categoryList():this.notloaddata()}
                        </tbody> 
                        </Table>
                    
                    </Col>
                    <Col>
                        <h3>Product Total</h3>
                        <Container fluid>
                            {/* <h3>Total Price :<span>5224.00</span> </h3>
                            <h3>Total Number Of Item :<span>25</span> </h3>
                            <h3>Total Number Of Item :<span>25</span> </h3>
                            <Button color="danger">Cancel</Button>
                            <Button color="primary">Checkout</Button> */}


                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <h4 for="exampleEmail">Total Price</h4>
                             </FormGroup>
                         </Col>
                        <Col md={6}>
                            <FormGroup>
                                <h4 for="examplePassword">{this.state.TotalPrice}   </h4> 
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <h4 for="exampleEmail">Number of Item</h4>
                             </FormGroup>
                         </Col>
                        <Col md={6}>
                            <FormGroup>
                                <h4 for="examplePassword">{this.state.TotalNumberOfProduct} </h4> 
                            </FormGroup>
                        </Col>                     
                                     
                        </Row>
                        <Row>
                            <Col>
                                <Button color="primary">Checkout</Button>
                            </Col>
                            <Col>
                                <Button color="danger">Cancel</Button>
                            </Col>
                        </Row>


                        </Container>
                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

