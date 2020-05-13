import React,{Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import '../../../../css/suggestions.css'

class Suggestions extends Component{

    constructor(props) {
        super(props);
        this.state={
            products:[],
            catogory:props.catogory,
            subCatogory:props.subCatogory,
            id:props.id,

        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.state.id!=nextProps.id){
            this.state.id=nextProps.id;
            this.state.products=[];
            this.filter();
        }

    }




    componentDidMount() {
        this.filter();
    }





    filter=()=> {

        axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProduct',
            params:{s:true,catogory:this.state.catogory,subCatogory: this.state.subCatogory},

        }).then(res=>{
            let data=res.data;
            var length=4;
            if(data.length<4){
                length=data.length;
            }
            for (var c=0;c<length;c++){
                if (data[c].id!=this.state.id){
                    this.setState({
                        products:[data[c],...this.state.products]
                    });

                }
            }

        }).catch(err=>{
            console.log(err);
        });



    }

    imgHover(id,image){
        document.getElementById(id).src='http://localhost:3001'+image;
    }


    render() {

        return <>
            <section className="related-product-section">
                <div className="container">
                    <div className="section-title">
                        {this.state.products.length==0?(
                            <></>
                        ):(
                            <h2>RELATED PRODUCTS</h2>
                        )
                        }

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.products.length==0?(
                            <></>
                        ):(
                            this.state.products.map(product => (
                                <>



                                    <div key={product.id}   className="product-item col-md-3">
                                        <Link to={"/oneProduct/"+product.id} >
                                            <div className="pi-pic">
                                                <img style={{height:'350px',width:'100%'}}
                                                     id={product.id}
                                                     src={'http://localhost:3001'+product.images[0]}
                                                     onMouseOut={()=>this.imgHover(product.id,product.images[0])}
                                                     onMouseMove={()=>this.imgHover(product.id,product.images[1])}
                                                     alt=""/>
                                                <div className="pi-links">
                                                    <a href="#" className="add-card"><i
                                                        className="flaticon-bag"></i><span>ADD TO CART</span></a>
                                                    <a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
                                                </div>
                                            </div>
                                            <div className="pi-text">
                                                <h6>{product.price}$</h6>
                                                <p>{product.proName}</p>
                                            </div>
                                        </Link>
                                    </div>

                                </>
                                ))
                        )}

                    </div>
                </div>


            </section>
        </>;

    }
}
export default  Suggestions;