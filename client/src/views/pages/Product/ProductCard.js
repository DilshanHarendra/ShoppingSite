import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import '../../../css/prosuctCard.css'
class ProductCard extends Component{

   constructor(props) {
       super(props);
       this.state={
           product:props.data,
           uid:localStorage.getItem('id'),
           qty:1,
           pid:props.data.id

       }
   }
    imgHover(id,image){
        document.getElementById(id).src=global.backend+image;
    }

    addToCart=()=>{
       if (this.state.uid==null){

       }else {
           console.log("add to cart")
           let data={user:this.state.uid,products:this.state.pid,qty:this.state.qty}
           axios.post(global.backend+'/cart/add',data)
               .then(res=>{
                   window.location.replace('/cart');
                       console.log(res.data)
               }

               ).catch(err=>
               console.log(err)
           );
       }

    }

   render() {
       return <>

           <div className="product-item">
               <div className="pi-pic" >

                   { this.state.product.discount!=null?(
                       <div className="tag-sale" style={{'font-size':12}}>{this.state.product.discount}% off</div>
                   ):(<></>)}
                   {this.state.product.images[1]!=null?(
                       <img src={global.backend+this.state.product.images[0]} id={this.state.product.id} alt={this.state.product.images[0]}
                            onMouseOut={()=>this.imgHover(this.state.product.id,this.state.product.images[0])}
                            onMouseMove={()=>this.imgHover(this.state.product.id,this.state.product.images[1])}
                            className="Pimage"  />
                   ):(
                       <img src={global.backend+this.state.product.images[0]} id={this.state.product.id} alt={this.state.product.images[0]} className="Pimage"  />
                   )

                   }



                   <div className="pi-links">
                       <div onClick={()=>this.addToCart()} className="addToCart"><i className="flaticon-bag"></i><span>ADD TO CART</span></div>
                       <Link to="#"  className="wishlist-btn"><i className="flaticon-heart"></i></Link>
                   </div>
               </div>
               <div className="pi-text">
                   <h6>{this.state.product.price}$  </h6>
                   <p>{this.state.product.proName}</p>
               </div>

           </div>

       </>;
   }


}
export default ProductCard;