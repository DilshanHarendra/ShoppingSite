import React, { Component } from 'react'
import { Container, Input, Table, Badge } from 'reactstrap'
import Axios from 'axios';
// Student id :IT18045840
//Name :S.D.S.L Dissanayake

class OderDetails extends Component{
    render(){
        return(
            <tr>
                <td><p> {this.props.order._id}</p></td>
                <td> <p> {this.props.order.totalAmaount} </p> </td>
                <td> <p> {this.props.order.user_id} </p> </td>
                <td><p> {this.props.order.numberOfItem} </p>  </td>
                <td> <p>{this.props.order.orderCreateDate}</p> </td>
            </tr>
        )
    }
}





export default class orderPanal extends Component {

    constructor(props){
        super(props)


        this.state={
            orderList:{},
            dataload:false,
        }

        this.loadOrderData=this.loadOrderData.bind(this);
        this.orderManagmetList=this.orderManagmetList.bind(this);
        this.datanotLoad=this.datanotLoad.bind(this);
        this.handleSearch=this.handleSearch.bind(this);

    }

    componentDidMount(){
          this.loadOrderData()
    }

    loadOrderData(){
        Axios.get('http://localhost:3001/order')
        .then(ressopns=>{
            
                this.setState({orderList:ressopns.data,dataload:true})
                     

                            
        })
        .catch((error)=>{
            console.log('error :'+error);
        })
    }

    orderManagmetList(){
        return this.state.orderList.map(currentorder=>{
             return <OderDetails order={currentorder} key={currentorder._id} ></OderDetails>
        })
    }

    datanotLoad(){
        return <h3>Data not loading...</h3>
    }

    handleSearch(event){
        let orderkeyword=event.target.value.trim().toLowerCase();
        if(orderkeyword.length>0){
            this.setState({
                orderList:this.state.orderList.filter(element=>{
                    return(
                        element.totalAmaount.toLowerCase().match(event.target.value)||
                        element.numberOfItem.toLowerCase().match(event.target.value)||
                        element.orderCreateDate.toLowerCase().match(event.target.value)||
                        element.user_id.toLowerCase().match(event.target.value)||
                        element._id.toLowerCase().match(event.target.value)



                    )
                })
            })
        }else{
            this.loadOrderData()
        }
    }

    render() {
        return (
            <Container style={Styles.regTablePlanal}>
            <h4 style={Styles.regHeadertext}>Order Managemet</h4>
                <Input type="text" onChange={this.handleSearch} placeholder="Search hear"></Input>
                <Table  responsive   >
                    <thead>
                          <tr>
                            <th>OrderID</th>
                            {/* <th>Product List</th> */}
                            <th>Total Amount</th>
                            <th>User ID</th>
                            <th>Number of Items</th> 
                            <th>Order Create date</th>     
                         </tr>
                    </thead>
                        <tbody>
                            { this.state.dataload? this.orderManagmetList() :'not load' }
                        </tbody>
                </Table>
    </Container>      
        )
    }
}


const Styles={
    regHeadertext:{
        padding: '10px',
    },
    regTablePlanal:{
        backgroundColor:"white",
        padding: '10px',
        borderRadius:'10px'
    },

}