import React, {Component, useEffect} from "react";
import '../../../../css/showAllProducts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import axios from 'axios';
import {Link} from "react-router-dom";
import $ from 'jquery'

class ShowAllProducts extends Component{

    constructor(props) {
        super();
        this.state={
            subCatogory:null,
            mCatogory:props.history.location.pathname.split("/")[2],
            size:null,
            data:[],
            products:[],
            length:0,
            price:[0,1000],
            pageloading:'block'
        };



    }



/*
*  if (Object.keys(temp ).length!=0){
                    Object.keys(temp).forEach(key=>{
                        if (key=="price"||key=="shipping"||key=="discount"){
                            searchkeys[key]= { $lt:  parseInt(temp[key]) }
                        }else {
                            console.log("typeof temp[key] "+typeof temp[key]+temp[key]);
                            searchkeys[key] = new RegExp(temp[key],'i');
                        }
                    });
            }
*
* */
    componentWillMount() {

    }



    componentDidMount(){
        console.log("componentDidMount")
        const script = document.createElement("script");
        script.src = "../../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);


        this.getData();
            this.props.history.listen((location, action) => {
                this.clearSize();
                this.setState({
                    mCatogory:this.props.history.location.pathname.split("/")[2],
                    minPrice:0,
                    maxPrice:10000,
                    size:null,
                },()=>{this.getData();});
                window.location.reload();
            });
        window.onscroll = function(){
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            console.log(scrolled);
    };

    }




    getData =()=>{
        let cancel;
        axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProducts',
            params:{s:true,catogory:this.state.mCatogory,minprice:this.state.price[0],maxprice:this.state.price[1],size:this.state.size ,subCatogory:this.state.subCatogory },

        }).then(res=>{
            this.setState({
                data:res.data
            },()=>{

                setTimeout(()=>{
                    document.getElementById('preloder').style.display="none";
                },400);
            });
        }).catch(err=>{

            console.log(err);
        });



}

clearSize(){
    var tags=document.getElementsByName("size");
    var i=0;
    while (i<tags.length){
        tags[i].checked=false;
        i++;

    }

}

    setCatogories(mc,s){
        this.setState({
            subCatogory:s,
            mCatogory:mc
        },()=>this.getData());

    }
    setSize =e=>{

       var clicked=document.getElementById(e);
       clicked.checked=true;
        this.setState({
            size:clicked.id
        },()=>this.getData());
    }

    setPrice=(e,values)=>{
        console.log("price change")
       this.setState({
            price:values
        });

    }

    getDataByPrice=()=>{
        this.getData();
    }




    imgHover(id,image){

        document.getElementById(id).src='http://localhost:3001'+image;
    }


    setActive(x){

      document.getElementById(x).setAttribute("class","active");
    }
    removeActive(x){
        document.getElementById(x).setAttribute("class","");
    }
render() {


    return <>
        <div id="preloder">
            <div className="loader"></div>
        </div>
        <div className="page-top-info" style={{height: '50px'}}>
            <div className="container">
                <h4>CAtegory PAge</h4>
                <div className="site-pagination">
                    <Link to="/">Home</Link> /
                    <Link >Shop</Link> /
                </div>
            </div>
        </div>
        <section className="category-section spad" style={{'padding-top': '50px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 order-2 order-lg-1">
                        <div className="filter-widget">
                            <h2 className="fw-title">Categories</h2>
                            <ul className="category-menu">
                                <li id="c1" onMouseOver={()=>this.setActive("c1")} onMouseOut={()=>this.removeActive("c1")} ><Link to="/allProducts/Women"  >Women</Link>
                                    <ul className="sub-menu">
                                        <li  onClick={()=>this.setCatogories("Women","Midi Dresses")} >Midi Dresses </li>
                                        <li onClick={()=>this.setCatogories("Women", "Maxi Dresses")}>Maxi Dresses</li>
                                        <li onClick={()=>this.setCatogories("Women", "Prom Dresses")}>Prom Dresses</li>
                                        <li onClick={()=>this.setCatogories("Women", "Little Black Dresses")}>Little Black Dresses</li>
                                        <li onClick={()=>this.setCatogories("Women", "Mini Dresses")}>Mini Dresses</li>
                                        <li onClick={()=>this.setCatogories("Women", "Coats")}>Coats</li>
                                        <li onClick={()=>this.setCatogories("Women", "Jeans")}>Jeans</li>

                                    </ul>
                                </li>
                                <li id="c2" onMouseOver={()=>this.setActive("c2")} onMouseOut={()=>this.removeActive("c2")} ><Link to="/allProducts/Men" >Man</Link>
                                    <ul className="sub-menu">
                                        <li  onClick={()=>this.setCatogories("Men","Shorts & Pants")}>Shorts & Pants  </li>
                                        <li  onClick={()=>this.setCatogories("Men", "T-Shirt")}>T-Shirt </li>
                                        <li  onClick={()=>this.setCatogories("Men", "Shirts")}>Shirts </li>
                                        <li  onClick={()=>this.setCatogories("Men", "Ties")}>Ties </li>
                                        <li  onClick={()=>this.setCatogories("Men", "Belts")}>Belts </li>
                                    </ul>
                                </li>
                                <li id="c3" onMouseOver={()=>this.setActive("c3")} onMouseOut={()=>this.removeActive("c3")} ><Link to="/allProducts/Children">Children</Link></li>
                                <li id="c4" onMouseOver={()=>this.setActive("c4")} onMouseOut={()=>this.removeActive("c4")}><Link to="/allProducts/BP">Bags & Purses</Link></li>
                                <li id="c5" onMouseOver={()=>this.setActive("c5")} onMouseOut={()=>this.removeActive("c5")}><Link to="/allProducts/Jewelry">Jewelry</Link>
                                    <ul className="sub-menu">
                                        <li  onClick={()=>this.setCatogories("Jewelry","Engagement & Wedding Jewelry")}>Engagement & Wedding Jewelry  </li>
                                        <li  onClick={()=>this.setCatogories("Jewelry", "Vintage & Antique Jewelry")}>Vintage & Antique Jewelry </li>
                                        <li  onClick={()=>this.setCatogories("Jewelry", "Handcrafted & Artisan Jewelry")}>Handcrafted & Artisan Jewelry </li>
                                        <li  onClick={()=>this.setCatogories("Jewelry", "Loose Diamonds & Gemstones")}>Loose Diamonds & Gemstones </li>

                                    </ul>

                                </li>
                                <li id="c6" onMouseOver={()=>this.setActive("c6")} onMouseOut={()=>this.removeActive("c6")}><Link to="/allProducts/Footwear">Footwear</Link>
                                    <ul className="sub-menu">
                                        <li  onClick={()=>this.setCatogories("Footwear","Sneakers")}>Sneakers  </li>
                                        <li  onClick={()=>this.setCatogories("Footwear", "Sandals")}>Sandals </li>
                                        <li  onClick={()=>this.setCatogories("Footwear", "Formal Shoes")}>Formal Shoes </li>
                                        <li  onClick={()=>this.setCatogories("Footwear", "Boots")}>Boots </li>
                                        <li  onClick={()=>this.setCatogories("Footwear", "Flip Flops")}>Flip Flops </li>
                                    </ul>

                                </li>
                            </ul>
                        </div>
                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">refine by</h2>
                            <div className="price-range-wrap">
                                <h4>Price</h4>
                                <Slider
                                    value={this.state.price}
                                    onChange={this.setPrice}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    style={{width:"250px"}}
                                    max={1000}
                                    onClick={this.getDataByPrice}



                                />
                                    <div className="priceinput">
                                        <div >
                                            <label htmlFor="">{this.state.price[0]}</label>
                                            <label style={{width:'70px'}} htmlFor="">min Price</label>

                                        </div>
                                        <div style={{'margin-left':'120px'}} >
                                            <label htmlFor="">{this.state.price[1]}</label>
                                            <label style={{width:'70px'}}htmlFor="">max Price</label>

                                        </div>


                                    </div>


                            </div>
                        </div>

                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">Size</h2>
                            <div className="fw-size-choose">
                                <div className="sc-item">
                                    <input type="radio" name="size" id="XS"   />
                                    <label htmlFor="xs-size" onClick={()=>this.setSize('XS')}>XS</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" id="S"  />
                                    <label htmlFor="s-size" onClick={()=>this.setSize('S')}>S</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" id="M"    />
                                    <label htmlFor="m-size" onClick={()=>this.setSize('M')}>M</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" id="L"   />
                                    <label htmlFor="l-size" onClick={()=>this.setSize('L')}>L</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" id="XL"   />
                                    <label htmlFor="xl-size" onClick={()=>this.setSize('XL')}>XL</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" id="XXL"    />
                                    <label htmlFor="xxl-size" onClick={()=>this.setSize('XXL')}>XXL</label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-widget">
                            <h2 className="fw-title">Brand</h2>
                            <ul className="category-menu">
                                <li>Abercrombie & Fitch <span>(2)</span></li>
                                <li>Asos<span>(56)</span></li>
                                <li>Bershka<span>(36)</span></li>
                                <li>Missguided<span>(27)</span></li>
                                <li>Zara<span>(19)</span></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0" id="products">
                        <div className="row">
                            {this.state.data.length==0?(
                                <h1>No Results Found</h1>
                            ):(this.state.data.map(oneRow=>(
                                <div className="col-lg-4 col-sm-6" key={oneRow.id}>
                                    <Link to={"/oneProduct/"+oneRow.id} >
                                    <div className="product-item">
                                        <div className="pi-pic">

                                                { oneRow.discount!=null?(
                                                    <div className="tag-sale" style={{'font-size':12}}>{oneRow.discount}% off</div>
                                                ):(<></>)}
                                            {oneRow.images[1]!=null?(
                                                <img src={'http://localhost:3001'+oneRow.images[0]} id={oneRow.id} alt={oneRow.images[0]}
                                                     onMouseOut={()=>this.imgHover(oneRow.id,oneRow.images[0])}
                                                     onMouseMove={()=>this.imgHover(oneRow.id,oneRow.images[1])}
                                                     className="Pimage"  />
                                            ):(
                                                <img src={'http://localhost:3001'+oneRow.images[0]} id={oneRow.id} alt={oneRow.images[0]} className="Pimage"  />
                                            )

                                            }



                                            <div className="pi-links">
                                                <Link to="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></Link>
                                                <Link to="#"  className="wishlist-btn"><i className="flaticon-heart"></i></Link>
                                            </div>
                                        </div>
                                        <div className="pi-text">
                                            <h6>{oneRow.price}$  </h6>
                                            <p>{oneRow.proName}</p>
                                        </div>

                                    </div>
                                    </Link>
                                </div>

                            ))
                            )}

                            {this.state.data.length==0?(
                                <></>
                            ):(
                                <div className="text-center w-100 pt-3">
                                    <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                                </div>
                                )}







                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;

}

}
export default ShowAllProducts;