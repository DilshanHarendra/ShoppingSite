import React,{Component} from "react";
import '../../../../css/showOneProduct.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
//npm install react-responsive-carousel --save
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class ShowOneProduct extends Component{

    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            id:this.props.match.params.id,
            pcatgory:'',
            data:[],
            isAdmin:true,
            isDelete:false
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
                data:res.data,
                pcatgory:res.data.catogory
            },()=>{this.setElemets()})
        }).catch(err=>console.log(err));
    }

    setImages(){
        let c=1;
        return <Carousel showArrows={true}
                         interval={3000}
                         autoPlay={true}
                         infiniteLoop={true}
                         showThumbs={true}
                         showIndicators={true}

                         centerMode={true}
                         centerSlidePercentage={100}
                         dynamicHeight={true}
                         useKeyboardArrows={true}
                         emulateTouch={true}
                         width={450}

        >
            { this.state.data[0].images.map(image=>(
                <div key={c} >
                    <img className="productImage"  src={'http://localhost:3001'+image} alt=""/>
                    {c++}
                </div>

            ))}

        </Carousel>
    }

    setElemets(){
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


    handleDialogue=(x)=>{
        if (x){

                 let query={
                     'isDelete':true,
                     'id':this.state.id
                 }
                 console.log(query);
                 axios.post('http://localhost:3001/product/deleteProduct',query)
                 .then(res=>{
                     this.setState({
                         isDelete:false
                     })
                     window.location.replace('/allProducts/'+this.state.pcatgory);

                 })
                 .catch(err=>console.log(err))


        }else {
            this.setState({
                isDelete:false
            })
        }

    }
    showAdminPannel(id){
            if (this.state.isAdmin){
                return <>
                <div className="btnGroup">
                    <h2>Admin pannel</h2><br/>
                    <Link to={"/Myshop/UpdateProduct/"+id}><button class="btn btn-success">Update</button></Link>
                    <button class="btn btn-danger" onClick={()=>{this.setState({
                        isDelete:true
                    })}} >Delete</button>

                </div>
                </>
            }
    }



    render() {

        return <>


            {this.state.data.map(product=>(

                <section className="product-section" key={product.id} >

                    <div className="container">
                        <div className="back-link">
                            <div style={{cursor:'pointer'}} onClick={()=>{window.history.back()}} > &lt;&lt; Back to Category</div>
                        </div>
                        <div className="row">



                            <div className="col-lg-6" >
                                {this.setImages()}


                            </div>
                            <div className="col-lg-6 product-details">
                                {this.showAdminPannel(product.id)}
                                <Dialog
                                    open={this.state.isDelete}

                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                           Are you sure you want to delete {product.proName} ?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <button onClick={()=>this.handleDialogue(false)} class="btn btn-secondary">
                                            Cancel
                                        </button>
                                        <button onClick={()=>this.handleDialogue(true)} class="btn btn-danger" autoFocus>
                                            Delete
                                        </button>
                                    </DialogActions>
                                </Dialog>










                                <h2 className="p-title">{product.proName}</h2>
                                <h5 style={{'color':'gray'}} className="p-title"><span className="tag">CATEGORY </span>{product.catogory+" "+product.subCatogory}</h5>
                                <h2 style={{'color':'gray'}} className="p-title"><span className="tag">BRAND </span>{product.brand}</h2>
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
                                    <Link to=""><i className="fa fa-google-plus"></i></Link>
                                    <Link to=""><i className="fa fa-pinterest"></i></Link>
                                    <Link to=""><i className="fa fa-facebook"></i></Link>
                                    <Link to=""><i className="fa fa-twitter"></i></Link>
                                    <Link to=""><i className="fa fa-youtube"></i></Link>
                                </div>
                            </div>


                        </div>





                    </div>
                </section>

            ))}
        </> ;
    }
}
export default ShowOneProduct;