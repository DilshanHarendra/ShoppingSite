import React, {Component, useEffect} from "react";
import '../../../../css/showAllProducts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import axios from 'axios';
import {Link} from "react-router-dom";
import $ from 'jquery'

class SearchResults extends Component{

    constructor(props) {
        super();
        this.state={
            subCatogory:null,
            skey:props.history.location.pathname.split("/")[2],
            size:null,
            data:[],
            products:[],
            length:0,
            price:[0,1000],
            pageloading:'block',
            next:0,
            getCatogorys:[],
            catogory:'',
            isLoadmore:true,
            limit:3
        };
        this.loadCatogories();


    }




    componentDidMount(){


        const script = document.createElement("script");
        script.src = "../../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);








        this.props.history.listen((location, action) => {
           document.getElementById('preloder').style.display="block";
            this.clearSize();

            this.state.next=0;

            this.state.minPrice=0;
            this.state.maxPrice=10000;
            this.state.size=null;
            this.setState({
                skey:location.pathname.split("/")[2]
            },()=>this.getData());
        });




        var scrollPos = 0;
        window.onscroll = ()=>{

            try {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var ditection= window.pageYOffset|| document.documentElement.scrollTop;

                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

                var productBox=document.getElementById('productBox').scrollHeight*(0.5); //  box height 80%
                //  var scrolled = (winScroll / height) * 100-productBox;
                var scrolled =winScroll;
                //console.log(scrolled+" "+productBox);
                if(scrolled>productBox &&((document.body.getBoundingClientRect()).top < scrollPos)){
                    this.state.next+=3;
                   // console.log(scrolled+" "+productBox);
                    if (this.state.isLoadmore){
                        this.loadmore();
                    }

                }

                scrollPos = (document.body.getBoundingClientRect()).top;

            }catch (e) {

            }



        };

    }

    loadCatogories=async ()=>{

        await axios.get("http://localhost:3001/productCategory")
            .then(result=> {
                this.setState({
                    getCatogorys:result.data,
                },()=>{
                    this.getData();
                });

            }).catch(err=>console.log(err));


    }



    loadmore=async ()=>{
        await axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProducts',
            params:{s:true,key:this.state.skey,minprice:this.state.price[0],maxprice:this.state.price[1],size:this.state.size ,sets:this.state.next,limit:this.state.limit },

        }).then(res=>{
            if (res.data.length!=0){
                this.setState({
                    data:[...this.state.data,...res.data]
                },()=>{

                    setTimeout(()=>{
                        document.getElementById('preloder').style.display="none";
                    },200);
                });
            }else {
                this.state.isLoadmore=false;
            }

        }).catch(err=>{
            console.log(err);
        });
    }



    getData  =async ()=>{

        await axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getSearchProduct',
            params:{s:true,key:this.state.skey,minprice:this.state.price[0],maxprice:this.state.price[1],size:this.state.size ,sets:this.state.next,limit:this.state.limit },


        }).then(res=>{
            this.setState({
                data:[...res.data]
            },()=>{
                setTimeout(()=>{
                    document.getElementById('preloder').style.display="none";
                },200);
            });
        }).catch(err=>{

            console.log(err);
        });



    }

    clearSize(){
        this.state.next=0;
        var tags=document.getElementsByName("size");
        var i=0;
        while (i<tags.length){
            tags[i].checked=false;
            i++;

        }

    }


    setSize =e=>{
        this.state.next=0;
        this.state.isLoadmore=true;
        var clicked=document.getElementById(e);
        clicked.checked=true;
        this.setState({
            size:clicked.id
        },()=>this.getData());
    }

    setPrice=(e,values)=>{
        this.state.next=0;
        this.state.isLoadmore=true;
       // console.log("price change")
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
                    <h4><span style={{color:'gray','font-size':'25px'}} >Search Result : </span>{this.state.skey}</h4>

                </div>
            </div>
            <section className="category-section spad" style={{'padding-top': '50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <div className="filter-widget">
                                <h2 className="fw-title">Categories</h2>
                                <ul className="category-menu">
                                    {this.state.getCatogorys.map(catogory=>(
                                        <li key={catogory._id} id={catogory._id} onMouseOver={()=>this.setActive(catogory._id)} onMouseOut={()=>this.removeActive(catogory._id)}><Link to={"/allProducts/"+catogory.categoryName}  >{catogory.categoryName}</Link>
                                            {(catogory.subCategory.length>0)?(
                                                <ul className="sub-menu">
                                                    {(catogory.subCategory.map(subCategory=>(
                                                        <li key={subCategory} ><Link to={"/allProducts/"+catogory.categoryName+"~"+subCategory}  >{subCategory}</Link></li>
                                                    )))}


                                                </ul>
                                            ):(
                                                <></>
                                            )}




                                        </li>
                                    ))}



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
                            <div className="row" id="productBox">
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
                                    <></>
                                )}







                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>;

    }

}
export default SearchResults;