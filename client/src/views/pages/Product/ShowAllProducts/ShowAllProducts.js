import React, {Component, useEffect} from "react";
import '../../../../css/showAllProducts.css'
import axios from 'axios';
import {Link} from "react-router-dom";

class ShowAllProducts extends Component{

    constructor(props) {
        super();
        this.state={
            womanCount:0,
            manCount:0,
            childenCount:0,
            minPrice:0,
            maxPrice:10000,
            size:[false,false,false,false,false,false],
            data:[]

        }



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
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "../../../../js/main.js";
        script.async = true;
        document.body.appendChild(script);

        this.getData(this.cCatogory);
            this.props.history.listen((location, action) => {
                this.getData();
            });


    }

    getData =()=>{

        let mnPrice=0;
        let mxPrice=10000;
        if (this.state.minPrice!=""){
            mnPrice=this.state.minPrice;
        }
        if(this.state.maxPrice!=""){
            mxPrice=this.state.maxPrice;
        }
        console.log("mnPrice"+mnPrice)
        let catogory=this.props.history.location.pathname.split("/")[2]
        axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProducts',
            params:{s:true,catogory:catogory,size:this.state.size,minprice:mnPrice,maxprice:mxPrice  },
        }).then(res=>{
            this.setState({
                data:res.data
            },()=>console.log(this.state.data))
        }).catch(err=>console.log(err));
}




    setSize =e=>{
        var temp = this.state.size;
        if (this.state.size[e.target.value]){
            temp[e.target.value]=false;
        }else{
            temp[e.target.value]=true;
        }
        this.setState({
            size:temp
        })
    }

    setPrice=e=>{
        this.setState({
            [e.target.name]:e.target.value
        },()=>this.getData())

    }





render() {


    return <>

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
                                <li><Link to="/allProducts/Woman" >Woman</Link>
                                    <ul className="sub-menu">
                                        <li>Midi Dresses <span>(2)</span></li>
                                        <li>Maxi Dresses<span>(56)</span></li>
                                        <li>Prom Dresses<span>(36)</span></li>
                                        <li>Little Black Dresses <span>(27)</span></li>
                                        <li>Mini Dresses<span>(19)</span></li>
                                    </ul>
                                </li>
                                <li><Link to="/allProducts/Men" >Man</Link>
                                    <ul className="sub-menu">
                                        <li>Shorts & Pants <span>(10)</span> </li>
                                        <li>T-Shirt <span>(10)</span></li>
                                        <li>Shirts <span>(10)</span></li>
                                        <li>Ties <span>(10)</span></li>
                                        <li>Belts <span>(10)</span></li>
                                    </ul>
                                </li>
                                <li><Link to="/allProducts/Children">Children</Link></li>
                                <li><Link to="/allProducts/BP">Bags & Purses</Link></li>
                                <li><Link to="/allProducts/Jewelry">Jewelry</Link></li>
                                <li><Link to="/allProducts/Footwear">Footwear</Link></li>
                            </ul>
                        </div>
                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">refine by</h2>
                            <div className="price-range-wrap">
                                <h4>Price</h4>

                                    <div className="priceinput">
                                        <div>
                                            <label htmlFor="">min Price</label>
                                            <input type="number" name="minPrice" onChange={this.setPrice} value={this.state.minPrice} id="minamount"/>
                                        </div>
                                        <div style={{'margin-left':'50px'}} >
                                            <label htmlFor="">max Price</label>
                                            <input type="number" name="maxPrice" onChange={this.setPrice} value={this.state.maxPrice} id="maxamount"/>
                                        </div>


                                    </div>


                            </div>
                        </div>

                        <div className="filter-widget mb-0">
                            <h2 className="fw-title">Size</h2>
                            <div className="fw-size-choose">
                                <div className="sc-item">
                                    <input type="radio" name="size" value="0" checked={this.state.size[0]} onClick={this.setSize} />
                                    <label htmlFor="xs-size" onClick={()=>this.selectSize('XS')}>XS</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" value="1" checked={this.state.size[1]} onClick={this.setSize} />
                                    <label htmlFor="s-size" onClick={()=>this.selectSize('S')}>S</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" value="2" checked={this.state.size[2]} onClick={this.setSize} />
                                    <label htmlFor="m-size" onClick={()=>this.selectSize('M')}>M</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" value="3" checked={this.state.size[3]} onClick={this.setSize} />
                                    <label htmlFor="l-size" onClick={()=>this.selectSize('L')}>L</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" value="4" checked={this.state.size[4]} onClick={this.setSize} />
                                    <label htmlFor="xl-size" onClick={()=>this.selectSize('XL')}>XL</label>
                                </div>
                                <div className="sc-item">
                                    <input type="radio" name="size" value="5" checked={this.state.size[5]} onClick={this.setSize} />
                                    <label htmlFor="xxl-size" onClick={()=>this.selectSize('XXL')}>XXL</label>
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


                    <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                        <div className="row">
                            {this.state.data.map(oneRow=>(
                                <div className="col-lg-4 col-sm-6" key={oneRow.id}>
                                    <Link to={"/oneProduct/"+oneRow.id} >
                                    <div className="product-item">
                                        <div className="pi-pic">

                                                { oneRow.discount!=null?(
                                                    <div className="tag-sale" style={{'font-size':12}}>{oneRow.discount}% off</div>
                                                ):(<></>)}


                                            <img src={'http://localhost:3001'+oneRow.images[0]} alt={oneRow.images[0]} style={{width:'350px',height:'400px'}} />
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

                            ))}









                            <div className="text-center w-100 pt-3">
                                <button className="site-btn sb-line sb-dark">LOAD MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;

}

}
export default ShowAllProducts;