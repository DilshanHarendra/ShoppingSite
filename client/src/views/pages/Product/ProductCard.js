import React,{Component} from 'react';
import {Link} from "react-router-dom";

class ProductCard extends Component{

   constructor(props) {
       super(props);
       this.state={
           product:props.data
       }
   }
    imgHover(id,image){
        document.getElementById(id).src=global.backend+image;
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
                       <Link to="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></Link>
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