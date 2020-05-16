import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import InfiniteCarousel from 'react-leaf-carousel';


class Home extends Component{


    constructor(props) {

        super(props);
        this.state={
            latestProduct:[],
            product:[],
            popularProduct:[],
            catogory:[],
            isLoadmore:true,
            next:0,
            limit:4

        }
    }

    componentDidMount(){
       const script = document.createElement("script");
        script.src = "../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);


      console.log(localStorage.getItem('id'))
        this.getData();


        if (window.performance) {
            if (window.performance.navigation.type == 1) {
                console.log("refresh")
                document.body.scrollTop = 0;
                document.documentElement.scrollTop=0;
                this.setState({
                    next:0,
                    isLoadmore:true
                })


            }
        }
        var scrollPos = 0;
        window.onscroll = ()=>{

            try {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var productBoxEle=document.getElementById('productBox');
                var productBox=productBoxEle.scrollHeight*(80/100); //  box height 80%
                if(winScroll>(productBoxEle.offsetTop+productBox-400) &&((document.body.getBoundingClientRect()).top < scrollPos)){


                    if (this.state.isLoadmore){
                        this.state.next+=this.state.limit;
                        this.loadmore();
                    }

                }

                scrollPos = (document.body.getBoundingClientRect()).top;
            }catch (e) {

            }

        };
    }

    /*
    *  {this.state.product.slice(0, 6).map(product=>(
                        <div className="product-item">
                            <div className="pi-pic">
                                <img style={{height:"350px",width:'100%'}} src={'http://localhost:3001'+product.images[0]} alt=""/>
                                <div className="pi-links">
                                    <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                    <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                </div>
                            </div>
                            <div className="pi-text">
                                <h6>${product.price}</h6>
                                <p>{product.proName} </p>
                            </div>
                        </div>
                    ))}
    * */


    loadmore=async ()=>{
        await axios({
            methode: 'GET',
            url:global.backend+'/product/getAllProduct',
            params:{s:true,sets:this.state.next,limit:this.state.limit}

        }).then(res=>{
            // console.log(res.data.length);
            if (res.data.length!=0){
                this.setState({
                    product:[...this.state.product,...res.data]
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

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    getData=async () =>{
        try {
            await axios({
                methode: 'GET',
                url:global.backend+'/product/letestProduct',
                params:{s:true}
            }).then(res=>{
                // this.state.product=res.data.sort((a,b)=>( a.addDate>b.addDate?-1:1) );
               //this.state.latestProduct=res.data.sort((a,b)=>a.totClicks>b.totClicks?-1:1);
                this.setState({
                    latestProduct:res.data
                })
                ;
                console.log(this.state.latestProduct);
                axios({
                    methode: 'GET',
                    url:global.backend+"/productCategory",

                }).then(res=>{
                    this.state.catogory=res.data;
                    axios({
                        methode: 'GET',
                        url:global.backend+"/product/getAllProduct",
                        params:{s:true,sets:this.state.next,limit:this.state.limit}
                    }).then(res=>{
                        this.setState({
                            product:res.data
                        },()=>{

                            document.getElementById('preloder').style.display="none";
                        })
                    }).catch(err=>{
                        console.log(err);
                    });
                }).catch(err=>{
                    console.log(err);
                });
            }).catch(err=>{
                console.log(err);
            });
        }catch (e) {

        }
    }
    getimages=()=>{
      return   this.state.latestProduct.map(product=>(
            <div>
                <img

                    alt=''
                    src={global.backend+product.images[0]}
                />
            </div>

        ))
    }


    render() {
        return (<>
                <div id="preloder">
                    <div className="loader"></div>
                </div>
                <section className="hero-section">
                    <div className="hero-slider owl-carousel">
                        <div className="hs-item set-bg" data-setbg="images/bg.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 text-white">
                                        <span>New Arrivals</span>
                                        <h2>denim jackets</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices
                                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        <a href="#" className="site-btn sb-line">DISCOVER</a>
                                        <a href="#" className="site-btn sb-white">ADD TO CART</a>
                                    </div>
                                </div>
                                <div className="offer-card text-white">
                                    <span>from</span>
                                    <h2>$29</h2>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-item set-bg" data-setbg="images/bg-2.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 text-white">
                                        <span>New Arrivals</span>
                                        <h2>denim jackets</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices
                                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        <a href="#" className="site-btn sb-line">DISCOVER</a>
                                        <a href="#" className="site-btn sb-white">ADD TO CART</a>
                                    </div>
                                </div>
                                <div className="offer-card text-white">
                                    <span>from</span>
                                    <h2>$29</h2>
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="slide-num-holder" id="snh-1"></div>
                    </div>
                </section>





                <section className="features-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="./images/icons/1.png" alt="/"/>
                                    </div>
                                    <h2>Fast Secure Payments</h2>
                                </div>
                            </div>
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="images/icons/2.png" alt="/"/>
                                    </div>
                                    <h2>Premium Products</h2>
                                </div>
                            </div>
                            <div className="col-md-4 p-0 feature">
                                <div className="feature-inner">
                                    <div className="feature-icon">
                                        <img src="images/icons/3.png" alt="/"/>
                                    </div>
                                    <h2>Free & fast Delivery</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="top-letest-product-section">
                    <div className="container">
                        <div className="section-title" >
                            <h2>LATEST PRODUCTS</h2>
                        </div>


                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                            ]}
                            dots={true}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={4}
                            slidesToShow={4}
                            scrollOnDevice={true}
                            lazyLoad={true}
                            animationDuration={200}
                            animationDuration={true}
                            incrementalSides={true}

                        >
                            {this.getimages()}



                        </InfiniteCarousel>





                    </div>
                </section>

                <section className="banner-section" >
                    <div className="container">
                        <div className="banner set-bg" data-setbg="images/banner-bg.jpg">
                            <div className="tag-new">NEW</div>
                            <span>New Arrivals</span>
                            <h2>STRIPED SHIRTS</h2>
                            <a href="/" className="site-btn">SHOP NOW</a>
                        </div>
                    </div>
                </section>


                <section className="product-filter-section">
                    <div className="container">
                        <div className="section-title" >
                            <h2>BROWSE TOP SELLING PRODUCTS</h2>
                        </div>
                        <ul className="product-filter-menu" >

                            {this.state.catogory.map(catogory=>(
                                <>
                                    {(catogory.subCategory.length>0)?(
                                        <>
                                            {(catogory.subCategory.slice(0,5).map(subCategory=>(
                                                <li><Link to={"/allProducts/"+catogory.categoryName+"~"+subCategory}>{subCategory}</Link></li>
                                            )))}

                                        </>

                                    ):(
                                        <></>
                                    )}




                                </>
                            ))}


                        </ul>
                        <div className="row" id="productBox">

                            {this.state.product.map(product=>(
                                <div key={product.id} className="col-lg-3 col-sm-6">
                                    <Link to={"/oneProduct/"+product.id}><ProductCard data={product} /></Link>
                                </div>

                            ))}
                        </div>



                    </div>
                </section>





            </>
        );
    }
}
export default Home;