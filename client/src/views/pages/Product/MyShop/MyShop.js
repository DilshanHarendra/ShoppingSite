import React,{Component} from "react";
import '../../../../css/myShop.css'
import {Link} from "react-router-dom";
import '../../../../css/showAllProducts.css'
import axios from "axios";





class MyShop extends  Component{

constructor(props) {


    super(props);
    this.state={
        uid:'001',
        data:[]
    }



}
componentDidMount() {
   // fetch('/product/getProducts').then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log(err));
    axios({
        methode: 'GET',
        url:'http://localhost:3001/product/getProduct',
        params:{s:true,id:this.state.id,sellerID:this.state.uid}
    }).then(res=>{
        this.setState({
            data:res.data,

        },()=>{console.log(this.state.data)})
    }).catch(err=>console.log(err));
}
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }




    render() {

        return <>
            <div className="hbox">
                <h4>My shop</h4>
                <div className="site-pagination">
                    <Link to="/">Home</Link> /
                    <Link to="Myshop">My Shop</Link> /
                </div>
            </div>
            <br/><br/>
            <div className="container">
            <table>
                <tr>
                    <th style={{'max-width':'450px'}} >Product</th>
                    <th>Orders</th>
                    <th style={{'width':'110px'}}>Total Clicks</th>
                    <th>price ($)</th>
                    <th>Shipping ($)</th>
                    <th>Discount (%)</th>
                    <th>Modify Date</th>
                    <th>View</th>

                </tr>
                {this.state.data.map(item=>(
                    <tr key={item.id} >
                    <td><img className="pImage" src={'http://localhost:3001'+item.images[0]} alt=""/>
                    <br/>
                    <h4>{item.proName}</h4>
                    </td>
                    <td></td>
                        <td>{item.totClicks}</td>
                     <td>{item.price}</td>
                     <td>{item.shipping==null?(
                         0
                     ):(
                         item.shipping
                     )}</td>
                        <td>{item.discount==null?(
                            0
                        ):(
                            item.discount
                        )}</td>
                        <td>{this.formatDate(item.addDate) }</td>
                    <td><Link to={"/oneProduct/"+item.id}> <button class="btn btn-info" >Show</button></Link></td>

                </tr>
                ))}
            </table>
            </div></>
    }


}
export default MyShop;