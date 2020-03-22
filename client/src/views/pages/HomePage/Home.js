import React, { Component } from "react";



class Home extends Component{



    componentDidMount(){
        const script = document.createElement("script");
        script.src = "../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);

    }



    render() {
        return (<>
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
                    <div className="product-slider owl-carousel">
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./images/product/1.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <div className="tag-new">New</div>
                                <img src="./images/product/2.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Black and White Stripes Dress</p>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./images/product/3.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./images/product/4.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="pi-pic">
                                <img src="./images/product/6.jpg" alt=""/>
                                    <div className="pi-links">
                                        <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                        <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                    </div>
                            </div>
                            <div className="pi-text">
                                <h6>$35,00</h6>
                                <p>Flamboyant Pink Top </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="product-filter-section">
                <div className="container">
                    <div className="section-title" >
                        <h2>BROWSE TOP SELLING PRODUCTS</h2>
                    </div>
                    <ul className="product-filter-menu">
                        <li><a href="/">TOPS</a></li>
                        <li><a href="/">JUMPSUITS</a></li>
                        <li><a href="/">LINGERIE</a></li>
                        <li><a href="/">JEANS</a></li>
                        <li><a href="/">DRESSES</a></li>
                        <li><a href="/">COATS</a></li>
                        <li><a href="/">JUMPERS</a></li>
                        <li><a href="/">LEGGINGS</a></li>
                    </ul>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/5.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <div className="tag-sale">ON SALE</div>
                                    <img src="./images/product/6.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Black and White Stripes Dress</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/7.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/8.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/9.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/10.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Black and White Stripes Dress</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/11.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="product-item">
                                <div className="pi-pic">
                                    <img src="./images/product/12.jpg" alt=""/>
                                        <div className="pi-links">
                                            <a href="/" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                            <a href="/" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                        </div>
                                </div>
                                <div className="pi-text">
                                    <h6>$35,00</h6>
                                    <p>Flamboyant Pink Top </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-5" >
                        <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                    </div>
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
        </>
    );
  }
}
export default Home;
