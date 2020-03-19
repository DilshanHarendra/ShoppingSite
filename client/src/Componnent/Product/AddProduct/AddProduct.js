import React,{Component} from "react";
import ShowError from "./ShowError";
import '../../../css/addProduct.css'

import axios from 'axios'

class AddProduct extends  Component{

constructor(props) {


    super(props);
    this.state={

        error:"",
        img1:'/images/cammera.png',
        img2:'/images/cammera.png',
        img3:'/images/cammera.png',
        img4:'/images/cammera.png',
        img5:'/images/cammera.png',
        img6:'/images/cammera.png',
        box:1,
        freeShipping:true,
        agree:"click",
        addDiscount:false,
        proName:'',
        catogory:'',
        quantity:'',
        condition:'',
        description:'',
        price:'',
        shipping:null,
        discount:null,
        sucss1:false,
        sucss2:false,
        sucss3:false,

    }



}
componentDidMount() {
   // fetch('/product/getProducts').then(data=>data.json()).then(data=>console.log(data)).catch(err=>console.log(err));


}

    goBack(){
        this.setState({
            box:this.state.box-1
        })
    }

    goForward(){
    if (this.state.box===1){
        if (this.state.proName===""||this.state.catogory===""||this.state.quantity===""||this.state.condition===""){
            this.setState({
                sucss1:true
            })
        }else{
            this.setState({
                sucss1:false,
                box:this.state.box+1
            })
        }
    }else if(this.state.box===2){
        if (this.state.price===""){
            this.setState({
                sucss2:true
            })
        }else if (!this.state.freeShipping&&this.state.shipping===""){
            this.setState({
                sucss2:true
            })
        }else if (this.state.addDiscount&&this.state.discount ==="") {
            this.setState({
                sucss2: true
            })
        }else{
            this.setState({
                sucss2: false,
                box:this.state.box+1

            })
        }

    }


    }

    addShipping(){
    if (this.state.freeShipping){
        this.setState({
            freeShipping:false
        })
    }else{
            this.setState({
                freeShipping:true
            })
        }
    }

    addDiscount(){
        if (this.state.addDiscount){
            this.setState({
                addDiscount:false
            })
        }else{
            this.setState({
                addDiscount:true
            })
        }
    }

    agreement(){
        if (this.state.agree===""){
            this.setState({
                agree:"click"
            })
        }else{
            this.setState({
                agree:""
            })
        }
    }

    showShippingPrice(){
        if (!this.state.freeShipping){
            return <div>
                <label htmlFor="validationCustom02">Shipping Price<span>*</span></label>
                <input type="number" name="shipping" value={this.state.shipping} onChange={this.changeHandler} className="form-control"
                       placeholder="5$" required/>
                <ShowError isShow={this.state.sucss2} value={this.state.shipping} name={"Enter Shipping Price"} />
                <br/>

            </div>
        }
    }
    showDiscountPrice(){
        if (this.state.addDiscount){
            return <div>
                <label htmlFor="validationCustom04">Discount<span>*</span></label>
                <input type="number" className="form-control" name="discount" value={this.state.discount}   onChange={this.changeHandler}
                       id="validationCustom06"    placeholder="1$"/>
                <ShowError isShow={this.state.sucss2} value={this.state.discount} name={"Enter Discount Price"} />
                <br/>

            </div>
        }
    }





    showBox(){
        switch (this.state.box) {
            case 1:return  <div>
                <div className="box">
                    <label htmlFor="validationCustom01">Product Name <span>*</span> </label>

                        <input type="text" className="form-control"
                               placeholder="Product name" name="proName"  value={this.state.proName} onChange={this.changeHandler} />
                        <ShowError isShow={this.state.sucss1} value={this.state.proName} name={"Enter Product Name"} />

                    <br/>

                    <label htmlFor="validationCustom05">Catagory<span>*</span></label>
                    <select name="catogory" value={this.state.catogory} onChange={this.changeHandler} className="form-control" >
                        <option >Choose</option>
                        <option value="Woman">Woman</option>
                        <option value="Men">Men</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Health">Health</option>
                    </select>
                    <ShowError isShow={this.state.sucss1} value={this.state.catogory} name={"Select Cataogory"} />
                    <br/>
                    <label htmlFor="validationCustom01">Quantity<span>*</span></label>
                    <input type="number" name="quantity" value={this.state.quantity}  onChange={this.changeHandler} className="form-control"
                           placeholder="quantity" required/>
                    <ShowError isShow={this.state.sucss1} value={this.state.quantity} name={"Enter Quantity"} />
                    <br/>
                    <label htmlFor="validationCustom03">Condition<span>*</span></label>
                    <select name="condition" value={this.state.condtion} className="form-control"  onChange={this.changeHandler} required>
                        <option value="">Choose</option>
                        <option value="BarandNew">Barand New</option>
                        <option value="Used">Used</option>
                    </select>
                    <ShowError isShow={this.state.sucss1} value={this.state.condition} name={"Select Condition"} />
                    <br/>
                    <label htmlFor="validationCustom04">Descriprion</label>
                    <textarea name="description" cols="30" rows="10" className="form-control"
                               placeholder="Desctiption.." value={this.state.description} onChange={this.changeHandler} ></textarea>

                    <br/>
                    <div className="btnbgroup">
                        <div className="back" onClick={()=>this.goBack()} >Back</div>
                        <div className="forward" onClick={()=>this.goForward()} >Next</div>
                    </div>
                </div>
            </div>;


            case 2: return <div>
                <div className="box">
                    <label htmlFor="validationCustom02">Price<span>*</span></label>
                    <input type="text" className="form-control" placeholder="10$" name="price" value={this.state.price}
                           onChange={this.changeHandler} required/>
                    <ShowError isShow={this.state.sucss2} value={this.state.price} name={"Enter Price"} />
                    <br/>
                    <label htmlFor="validationCustom02">Free shipping</label>
                    <input type="checkbox"  onClick={()=>this.addShipping()}  checked={this.state.freeShipping} />
                    <br/><br/>
                    {this.showShippingPrice()}
                    <label htmlFor="validationCustom02">Add Discount</label>
                    <input type="checkbox" checked={this.state.addDiscount} onClick={()=>this.addDiscount()} />
                    <br/><br/>
                    {this.showDiscountPrice()}
                    <div className="btnbgroup">
                        <div className="back" onClick={()=>this.goBack()} >Back</div>
                        <div className="forward" onClick={()=>this.goForward()} >Next</div>
                    </div>
                </div>
            </div>;



            case 3: return <div>
                <div className="box">
                    <label htmlFor="validationCustom01">Choose Images<span>*</span></label><br/>

                    <div className="upload-btn-wrapper">
                        <button className="ubtn">Upload a file</button>
                        <input type="file" id="mainBgImage" onChange={this.previewImage} multiple required/>
                        <ShowError isShow={this.state.sucss3} value={this.state.files} name={"Select Images"} />
                    </div>

                    <div className="imgContainor">

                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img1} alt=""/>
                        </div>
                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img2} alt=""/>
                        </div>
                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img3} alt=""/>
                        </div>
                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img4} alt=""/>
                        </div>
                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img5} alt=""/>
                        </div>
                        <div className="imgBox" >
                            <img className="product" ref="img1" src={this.state.img6} alt=""/>
                        </div>

                    </div>
                    <br/>
                    <input type="checkbox"  onClick={()=>this.agreement()} defaultChecked="false"  />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <ShowError isShow={this.state.sucss3} value={this.state.agree} name={" You must agree before submitting"} />


                    <br/>

                    <br/><br/>
                    <div className="btnbgroup">
                        <div className="back" onClick={()=>this.goBack()} >Back</div>
                        <button className="submit" type="submit">Add Product</button>
                    </div>
                </div>
            </div>;
            default :return null;

        }
    }

    submitHandler=e=>{
    e.preventDefault();

    if (this.state.files==null){
        this.setState({
            sucss3:true
        })
    }else if (this.state.agree===""){
        this.setState({
            sucss3:true
        })
    } else{
        this.setState({
            sucss3:false
        })
        const  values=this.state;
        delete values.box;
        delete values.freeShipping;
        delete values.addDiscount;
        delete values.img1;
        delete values.img2;
        delete values.img3;
        delete values.img4;
        delete values.img5;
        delete values.img6;
        delete values.error;
        delete values.sucss1;
        delete values.sucss2;
        delete values.sucss3;
        delete  values.agree;




        try {
            const formData = new FormData();
            for (const key of Object.keys(this.state.files)) {
                formData.append('file', this.state.files[key])
            }
            axios.post('/product/addProduct',values)
                .then(response1=>{
                    console.log(response1.statusText);
                    axios.post('/product/uploadProduct',formData)
                        .then(response2=>{

                            console.log(response2.statusText);
                            this.setState({
                                error:response2.statusText
                            });
                            this.props.history.push('/oneProduct?'+response2.data);
                        })
                        .catch(error=>{
                            console.log(error);
                            this.setState({
                                error:"Can not Upload the images"
                            });
                        });
                })
                .catch(error=>{
                    console.log(error);
                    this.setState({
                        error:"Can not Add the Product"
                    });
                });

        }catch (e) {
            console.log(e);
        }

    }

}





    changeHandler=e=> {
       const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    previewImage=(e)=> {
        try{
            var file;
            var reader;
            this.setState({
                files:e.target.files
            })
            console.log(e.target.files);
            for (var i=0;i<e.target.files.length;i++){
                file = e.target.files[i];
                if (file.type.startsWith("image")){
                    reader = new FileReader();
                    var name="img"+(i+1);
                    reader.readAsDataURL(file);

                    this.setState({
                        [name]:URL.createObjectURL(file),
                    });

                }else{
                    this.setState({
                        error:"Unsuuported File Type Please Select jpg/png/jpeg images"
                    });
                }


            }
        }catch (e) {
            console.error("err"+e);
        }

    }




    render() {

        return<div className="mainBox" >

                    <div className="page-top-info">
                        <div className="container">
                            <h2>Add New Product</h2>
                            <div className="site-pagination">
                                <a href="index.html">Home</a> /
                                <a href="index.html">Shop</a>
                            </div>
                            <h3 className="error">{this.state.error}</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <form ref={form => this.formEl = form} className="needs-validation" encType="multipart/form-data" onSubmit={this.submitHandler} noValidate>
                                    {this.showBox()}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>;
    }


}
export default AddProduct;