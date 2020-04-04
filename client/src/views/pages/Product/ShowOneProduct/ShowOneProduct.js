import React,{Component} from "react";
import '../../../../css/showOneProduct.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
class ShowOneProduct extends Component{

    constructor(props) {
        super(props);

        this.state={
            id:this.props.match.params.id,
            data:[]
        }

    }
    componentDidMount(){

        const script = document.createElement("script");
        script.src = "../../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);

        const scrip2 = document.createElement("script");
        scrip2.src = "../../../../js/owl.carousel.min.js";
        scrip2.async = true;
        document.body.appendChild(scrip2);



        axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProduct',
            params:{s:true,id:this.state.id}
        }).then(res=>{
            this.setState({
                data:res.data
            },()=>{this.setElemets()})
        }).catch(err=>console.log(err));
    }


    setElemets(){
            var arr=this.state.data[0].images;
            for (var i=0;i<arr.length;i++){

                var iDiv = document.createElement("div");
                if (i==0){
                    iDiv.setAttribute("class",'pt active');
                }else {
                    iDiv.setAttribute("class",'pt');
                }
                iDiv.setAttribute("data-imgbigurl",'http://localhost:3001'+arr[i]);
                var iImage=document.createElement('img');
                iImage.setAttribute("src",'http://localhost:3001'+arr[i]);

                iDiv.appendChild(iImage);
                document.getElementById("images").appendChild(iDiv);
            }


            var sizearr=this.state.data[0].size;

            var labels  =["XS","S","M","L","XL","XXL"];
        for (var j=0;j<sizearr.length;j++){
                var iDiv = document.createElement("div");
                var ilabel = document.createElement("label");
                ilabel.innerHTML=labels[j];
                ilabel.setAttribute("for",labels[j]+'-size');

                var iInput = document.createElement("input");
                iInput.setAttribute("type",'radio');
                iInput.setAttribute("name",'size');
                iInput.setAttribute("value",labels[j]);
                iInput.setAttribute("id",labels[j]+'-size');

               if (sizearr[j]!="false"){
                   iDiv.setAttribute("class",'sc-item');
               }else{
                   iDiv.setAttribute("class",'sc-item disable');
                   iInput.setAttribute("disable",false);
               }
               iDiv.appendChild(iInput);
               iDiv.appendChild(ilabel);
               document.getElementById("sizeContainor").appendChild(iDiv);

        }








    }



    render() {



        return <div>

            {this.state.data.map(product=>(
            <section className="product-section" key={product.id} >
                <div className="container">
                    <div className="back-link">
                        <div style={{cursor:'pointer'}} onClick={()=>{window.history.back()}} > &lt;&lt; Back to Category</div>
                    </div>
                    <div className="row">



                        <div className="col-lg-6">
                            <div className="product-pic-zoom">
                                <img className="product-big-img" src={'http://localhost:3001'+product.images[0]} alt="" alt=""/>
                            </div>
                            <div className="product-thumbs pthumbs" tabIndex="1" >
                                <div className="product-thumbs-track" id="images">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 product-details">
                            <h2 className="p-title">{product.proName}</h2>
                            <h5 style={{'color':'gray'}} className="p-title"><span>CATEGORY </span>{product.catogory+" "+product.subCatogory}</h5>
                            <h2 style={{'color':'gray'}} className="p-title"><span>BRAND </span>{product.brand}</h2>
                            <h3 className="p-price">{product.price} $</h3>
                            <h4 className="p-stock">Available: <span>In Stock</span></h4>
                            <div className="p-rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o fa-fade"></i>
                            </div>
                            <div className="p-review">
                                <a href="">3 reviews</a>|<a href="">Add your review</a>
                            </div>
                            <div className="fw-size-choose" id="sizeContainor">
                                <p>Size</p>






                            </div>
                            <div className="quantity">
                                <p>Quantity</p>
                                <div className="pro-qty"><input type="text" value="1"/></div>
                            </div>
                            <a href="#" className="site-btn">SHOP NOW</a>
                            <div id="accordion" className="accordion-area">
                                <div className="panel">
                                    <div className="panel-header" id="headingOne">
                                        <button className="panel-link active" data-toggle="collapse"
                                                data-target="#collapse1" aria-expanded="true"
                                                aria-controls="collapse1">information
                                        </button>
                                    </div>
                                    <div id="collapse1" className="collapse show" aria-labelledby="headingOne"
                                         data-parent="#accordion">
                                        <div className="panel-body">
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingTwo">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse2"
                                                aria-expanded="false" aria-controls="collapse2">care details
                                        </button>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordion">
                                        <div className="panel-body">
                                            <img src="./images/cards.png" alt=""/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                                    pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer
                                                    bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non
                                                    scelerisque nulla euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header" id="headingThree">
                                        <button className="panel-link" data-toggle="collapse" data-target="#collapse3"
                                                aria-expanded="false" aria-controls="collapse3">shipping & Returns
                                        </button>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordion">
                                        <div className="panel-body">
                                            <h4>7 Days Returns</h4>
                                            <p>Cash on Delivery Available<br/>Home Delivery <span>3 - 4 days</span></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra
                                                tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum
                                                sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla
                                                euismod nec.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="social-sharing">
                                <a href=""><i className="fa fa-google-plus"></i></a>
                                <a href=""><i className="fa fa-pinterest"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>


                    </div>





                </div>
            </section>

            ))}
        </div> ;
    }
}
export default ShowOneProduct;