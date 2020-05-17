import React, { Component } from 'react'
import { Container, Row, Col, Table, Input, Form, Button, FormGroup, Label, ButtonGroup } from 'reactstrap'
import axios from 'axios'
import Axios from 'axios'

import OrderPlaced from './OrderPlaced';


class CartList extends Component{
    render(){
        return(
           <tr>
            <td>
                <p>{this.props.product_data.product.proName}</p>
                <p><img src={this.props.product_data.product.images[0]}/></p>
                
            </td>
            <td><p>{this.props.product_data.product.price}</p></td>
            <td><p>{this.props.product_data.quntity}</p></td>
           </tr> 
        )
    }
}







export default class Cart extends Component {

    constructor(props){
        super(props)      

        this.state={
            PrdouctList:[],
            temproductlist:[],
            ItemList:[],
            TotalPrice:0,
            TotalNumberOfProduct:'',
            Order_id:'',
            dataload:false,
            user_id:'',
            cart_id:''
           
        };

        this.loadProductListData=this.loadProductListData.bind(this);
        this.categoryList=this.categoryList.bind(this);
        this.notloaddata=this.notloaddata.bind(this);
        // this.countTotalPrice=this.countTotalPrice(this);
        // this.onCretateOrder=this.onCretateOrder(this);
       
        

    }

     componentDidMount(){
      this.loadProductListData()
      this.setState({user_id:localStorage.getItem('id')})
      console.log("user id"+localStorage.getItem('id'));
      
      
    }

   async loadProductListData(){
        axios.get('http://localhost:3001/cart/'+this.state.user_id)
        .then(async ressopns=>{
            console.log(ressopns.data);
         this.setState({PrdouctList:ressopns.data}) 
            console.log(this.state.PrdouctList[0]._id);
            
         this.setState({dataload:true})
         this.setState({cart_id:this.state.PrdouctList[0]._id})
         
         this.state.PrdouctList[0].products.map(el=>console.log(el.product.proName)) 
            console.log(this.state.PrdouctList[0].products[0]);
            console.log(this.state.PrdouctList[0].products);
           
            let i;
            let Total=0;
            let itemlist= this.state.PrdouctList[0].products

            this.setState({TotalNumberOfProduct:itemlist.length})
            this.setState({ItemList:itemlist})

            for(i=0;i<itemlist.length;i++){
                Total+=itemlist[i].product.price*itemlist[i].quntity
             }
            this.setState({TotalPrice:Total}) 
         
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
    

    categoryList(){    
     
        return this.state.PrdouctList[0].products.map(product_ele=>{
            return <CartList product_data={product_ele}
                             key={product_ele.product.id}   
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
                    <Col  xs="3">
                    <h3>  Order Summery  </h3>
                        <OrderPlaced
                            totalPrice={this.state.TotalPrice}
                            totalNumberOfProduct={this.state.TotalNumberOfProduct}
                            productsList={this.state.ItemList} 
                            userId={this.state.user_id}
                            cart_id={this.state.cart_id}
                            />                        
                    </Col>
                </Row>
            </Container>
        )
    }
}


const cartsumeryStyle={
    background: 'lavender',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px'
}