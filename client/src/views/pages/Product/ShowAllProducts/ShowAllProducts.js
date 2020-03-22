import React, {useEffect} from "react";
import '../../../../css/showAllProducts.css'
import $ from 'jquery';

function ShowAllProducts(){

    var priceMax;
    var priceMin;


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


    getPrice();

function getPrice() {
    var rangeSlider = document.getElementsByClassName("price-range");
    var minamount = document.getElementById("minamount");
    var maxamount = document.getElementById("maxamount");
console.log(rangeSlider);
       var minPrice = rangeSlider.getAttribute('data-min');
       var maxPrice = rangeSlider.getAttribute('data-max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);

        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));
}











        return <>

                <div className="page-top-info" style={{height: '50px'}}>
                    <div className="container">
                        <h4>CAtegory PAge</h4>
                        <div className="site-pagination">
                            <a href="">Home</a> /
                            <a href="">Shop</a> /
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
                                <li><a href="#">Woman wear</a>
                                    <ul className="sub-menu">
                                        <li>Midi Dresses <span>(2)</span></li>
                                        <li>Maxi Dresses<span>(56)</span></li>
                                        <li>Prom Dresses<span>(36)</span></li>
                                        <li>Little Black Dresses <span>(27)</span></li>
                                        <li>Mini Dresses<span>(19)</span></li>
                                    </ul>
                                </li>
                                <li><a href="#">Man Wear</a>
                                    <ul className="sub-menu">
                                        <li>Midi Dresses <span>(2)</span></li>
                                        <li>Maxi Dresses<span>(56)</span></li>
                                        <li>Prom Dresses<span>(36)</span></li>
                                    </ul>
                                </li>
                                <li>Children</li>
                                <li>Bags & Purses</li>
                                <li>Eyewear</li>
                                <li>Footwear</li>
                            </ul>
                        </div>
                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">refine by</h2>
                            <div className="price-range-wrap">
                                <h4>Price</h4>
                                <div
                                    className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                    data-min="10" data-max="270">
                                    <div className="ui-slider-range ui-corner-all ui-widget-header"
                                         style={{left: '0%', width: '100%'}}></div>
                                    <span tabIndex="0"  className="ui-slider-handle ui-corner-all ui-state-default"
                                          style={{left: '0%'}}>
								</span>
                                    <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"
                                          style={{left:'100%'}}>
								</span>
                                </div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <input type="text" id="minamount"   value={priceMin} />
                                        <input type="text" id="maxamount" value={priceMax} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">color by</h2>
                            <div className="fw-color-choose">
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="gray-color"/>
                                    <label className="cs-gray" htmlFor="gray-color">
                                        <span>(3)</span>
                                    </label>
                                </div>
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="orange-color"/>
                                    <label className="cs-orange" htmlFor="orange-color">
                                        <span>(25)</span>
                                    </label>
                                </div>
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="yollow-color"/>
                                    <label className="cs-yollow" htmlFor="yollow-color">
                                        <span>(112)</span>
                                    </label>
                                </div>
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="green-color"/>
                                    <label className="cs-green" htmlFor="green-color">
                                        <span>(75)</span>
                                    </label>
                                </div>
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="purple-color"/>
                                    <label className="cs-purple" htmlFor="purple-color">
                                        <span>(9)</span>
                                    </label>
                                </div>
                                <div className="cs-item">
                                    <input type="radio" name="cs" id="blue-color" checked=""/>
                                    <label className="cs-blue" htmlFor="blue-color">
                                        <span>(29)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">Size</h2>
                            <div className="fw-size-choose">
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="xs-size"/>
                                    <label htmlFor="xs-size">XS</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="s-size"/>
                                    <label htmlFor="s-size">S</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="m-size" checked=""/>
                                    <label htmlFor="m-size">M</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="l-size"/>
                                    <label htmlFor="l-size">L</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="xl-size"/>
                                    <label htmlFor="xl-size">XL</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="sc" id="xxl-size"/>
                                    <label htmlFor="xxl-size">XXL</label>
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


                    <div className="col-lg-8  order-1 order-lg-2 mb-5 mb-lg-0" style={{'background-color': 'white',padding: '10px'}}>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/1.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/2.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/3.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>


                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/4.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>


                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/5.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="box1">
                                    <img src="images/product/5.jpg" className="item" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="topic">Topic Topic Topic Topic Topic Topic</h3>
                                <div className="grid">
                                    <div className="gbox1">
                                        <p className="price"><b>$100.00</b></p>
                                        <p className="shipping">$33 shipping</p>
                                        <p className="sold">424 sold</p>

                                    </div>
                                    <div className="gbox2">
                                        <span className="topRate"></span>
                                        <p>Top Rated Seller</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>


                    </div>
                </div>
            </div>
        </section>
            </>;


}
export default ShowAllProducts;