import React, { Component } from 'react'
import { Container, Row, Col, Table, Input, Form, Button, FormGroup, Label, ButtonGroup, Badge } from 'reactstrap'
import axios from 'axios'
import { TiDeleteOutline } from "react-icons/ti";

import OrderPlaced from './OrderPlaced';


class CartList extends Component{
    
    render(){
        return(
           <tr style={this.props.product_data.isOrder?{display:"none"}:{display:"table-row"} }>
            <td>
                <p>{this.props.product_data.products.proName}</p>
                <p><img src={this.props.product_data.products.images[0]}/></p>
                
            </td>
            <td>
                <p>{this.props.product_data.products.description} </p>
                <p><Badge color="warning"> {this.props.product_data.products.subCatogory} </Badge></p>
                
                
                </td>
            <td><p>{this.props.product_data.products.price}</p></td>
            <td>
                <p>{this.props.product_data.quntity}</p>
                <p style={((this.props.qtyedite)&&(this.props.selectedEditeIds==this.props.product_data.products._id))?{display:"inherit"}:{display:"none"}  }> <  input type="number" id="quantity"
                         name="quantity" min="1" max="50"                       
                         
                         ></input></p>
            </td>
            <td>
                <p><this.props.delete_icon color="red" size="2em" onClick={()=>{this.props.deleteItem(this.props.product_data._id)}} >Delete</this.props.delete_icon></p>
                <p><Button onClick={()=>this.props.toggaleQuntityEdite(this.props.product_data._id)}>Add New Quntity</Button></p>
                <p><Button color="primary" onClick={()=>this.props.onchangeQuntity(this.props.product_data._id)}>Change quntity</Button></p>
            </td>
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
            cart_id:'',
            qtyedite:false,
            selectedEditeId:''
           
        };

        this.loadProductListData=this.loadProductListData.bind(this);
        this.categoryList=this.categoryList.bind(this);
        this.notloaddata=this.notloaddata.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.onchangeQuntity=this.onchangeQuntity.bind(this);

        this.toggaleQuntityEdite=this.toggaleQuntityEdite.bind(this);

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

            let noOrderedItems=this.state.PrdouctList.filter(Items=>{
                return Items.isOrder==false
            })

            console.log(noOrderedItems);
            this.setState({
                PrdouctList:noOrderedItems
            })
            
            this.state.PrdouctList.map(el=>console.log(el.products.proName)) 
            // console.log(this.state.PrdouctList[0]._id);
            
            this.setState({dataload:true})
        //  this.setState({cart_id:this.state.PrdouctList[0]._id})           
            // console.log(this.state.PrdouctList[0].products[0]);
            // console.log(this.state.PrdouctList[0].products);
           
            let i;
            let totalPrice=0;
            let itemlist= this.state.PrdouctList;
            let totalNumberOfItems=this.state.PrdouctList.length;

            // this.setState({TotalNumberOfProduct:itemlist.length})
            // this.setState({ItemList:itemlist})

            for(i=0;i<itemlist.length;i++){
                totalPrice+=itemlist[i].products.price*itemlist[i].quntity
             }
            this.setState({TotalPrice:totalPrice}) 
            this.setState({TotalNumberOfProduct:totalNumberOfItems})
            console.log(this.state.TotalPrice);
            console.log(totalNumberOfItems);
            
         
            // //  let j;
            // //  let TotalQuntity=0;

            // //  for(j=0;i<itemlist.length;j++){
            // //     Total+=itemlist[j].product.price
            // //  }
           
                   
            
            // console.log(Total);
            
            
            
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
       
    }
    
    deleteItem(id){
        axios.delete('http://localhost:3001/cart/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            PrdouctList:this.state.PrdouctList.filter(el=>el._id!==id)
        })

        window.location.href="/cart"
    }

    onchangeQuntity(id){
        let itemqty=document.getElementById('quantity').value;
            console.log(id);
            console.log(itemqty);
            
            
    }

    toggaleQuntityEdite(editeId){
        
       
        this.setState({
            selectedEditeId:editeId
        })

        this.editmodeToggle()

        console.log(this.state.selectedEditeId);
        console.log(this.state.qtyedite);
        
    }

    editmodeToggle(){
        this.setState({
            qtyedite:!this.state.qtyedite
           
        })
    }  

    categoryList(){    
     
        return this.state.PrdouctList.map(product_ele=>{
            return <CartList 
                            delete_icon={TiDeleteOutline}
                            deleteItem={this.deleteItem}

                            onchangeQuntity={this.onchangeQuntity}
                            toggaleQuntityEdite={this.toggaleQuntityEdite}

                            qtyedite ={this.state.qtyedite}
                            selectedEditeIds={this.state.selectedEditeId}

                            product_data={product_ele}
                             key={product_ele.products.id}   
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
                                <th> Description </th>
                                <th> price </th>
                                <th> qunitity </th>
                                <th> actions </th>
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
                            productsList={this.state.PrdouctList} 
                            userId={this.state.user_id}
                            
                          
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