import React,{Component} from "react";
import ShowError from "./ShowError";
import '../../../../css/addProduct.css'

import axios from 'axios'
import {BrowserRouter as Router, Link} from "react-router-dom";



import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginImageResize,FilePondPluginFileValidateType,FilePondPluginImageValidateSize)


class AddProduct extends  Component{

constructor(props) {


    super(props);
    this.state={

        error:"",
        box:1,
        freeShipping:true,
        agree:"click",
        addDiscount:false,
        proName:'',
        catogory:'',
        subCatogory:'',
        size:[false,false,false,false,false,false],
        brand:'',
        quantity:'',
        condition:'',
        description:'',
        price:'',
        shipping:null,
        discount:null,
        sucss1:false,
        sucss2:false,
        sucss3:false,
        sellerID:"001",
        files: [],
        sSize:''
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
                <label htmlFor="validationCustom04">Discount<span>*</span>  (%)</label>
                <input type="number" className="form-control" name="discount" value={this.state.discount}   onChange={this.changeHandler}
                       id="validationCustom06"    placeholder="10%"/>
                <ShowError isShow={this.state.sucss2} value={this.state.discount} name={"Enter Discount Price"} />
                <br/>

            </div>
        }
    }
    handleInit() {
    //console.log('FilePond instance has initialised', this.state.files);

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

        for (let i=0;i<6; i++){
            if(this.state.size[i]){
                this.setState({
                    sSize:"Ok"
                })
                break;
            }else{
                this.setState({
                    sSize:""
                })
            }
        }

    }






showSubCatogory() {
    if (this.state.catogory === "Woman") {

        return<div className="subctogory" >
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" >
                <option >Choose</option>
                <option value="Midi Dresses">Midi Dresses</option>
                <option value="Maxi Dresses">Maxi Dresses</option>
                <option value="Prom Dresses">Prom Dresses</option>
                <option value="Mini Dresses">Mini Dresses</option>
                <option value="Shorts & Pants">Shorts & Pants</option>
                <option value="T-Shirt">T-Shirt</option>

            </select>
            <ShowError isShow={this.state.sucss1} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Men") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" >
                <option >Choose</option>
                <option value="Shorts & Pants">Shorts & Pants</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Shirts">Shirts</option>
                <option value="Ties">Ties</option>
                <option value="Belts">Belts</option>

            </select>
            <ShowError isShow={this.state.sucss1} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Jewelry") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" >
                <option >Choose</option>
                <option value="Engagement & Wedding Jewelry">Engagement & Wedding Jewelry</option>
                <option value="Vintage & Antique Jewelry">Vintage & Antique Jewelry</option>
                <option value="Handcrafted & Artisan Jewelry">Handcrafted & Artisan Jewelry</option>
                <option value="Loose Diamonds & Gemstones">Loose Diamonds & Gemstones</option>

            </select>
            <ShowError isShow={this.state.sucss1} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Footwear") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" >
                <option >Choose</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Sandals">Sandals</option>
                <option value="Formal Shoes">Formal Shoes</option>
                <option value="Boots">Boots</option>
                <option value="Flip Flops">Flip Flops</option>
            </select>
            <ShowError isShow={this.state.sucss1} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

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
                        <option className="opt" value="Woman">Woman</option>
                        <option value="Men">Men</option>
                        <option value="Childern">Childern</option>
                        <option value="Bags & Purses">Bags & Purses</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Jewelry">Jewelry</option>

                    </select>
                    <ShowError isShow={this.state.sucss1} value={this.state.catogory} name={"Select Cataogory"} />
                    <br/>
                    {this.showSubCatogory()}
                    <label htmlFor="validationCustom05">SIZE<span>*</span></label>

                    <div className="checkBox">
                        <div className="a" >
                            <label className="checkContainer">XS
                                <input type="checkbox" name="size"  value="0" checked={this.state.size[0]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="checkContainer">S
                                <input type="checkbox" name="size"  value="1" checked={this.state.size[1]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="checkContainer">M
                                <input type="checkbox" name="size"  value="2" checked={this.state.size[2]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="a" >
                            <label className="checkContainer">L
                                <input type="checkbox" name="size"  value="3" checked={this.state.size[3]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="checkContainer">XL
                                <input type="checkbox" name="size"  value="4" checked={this.state.size[4]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="checkContainer">XXL
                                <input type="checkbox" name="size"  value="5" checked={this.state.size[5]} onClick={this.setSize} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                </div>

                    <ShowError isShow={this.state.sucss1} value={this.state.sSize} name={"Select Size"} />
                    <br/>
                    <label htmlFor="validationCustom01">Brand<span>*</span></label>
                    <input type="text" name="brand" value={this.state.brand}  onChange={this.changeHandler} className="form-control"
                           placeholder="Brand name" required/>
                    <ShowError isShow={this.state.sucss1} value={this.state.brand} name={"Enter Brand"} />
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


                    <FilePond
                        required={true}
                        ref={ref => this.pond = ref}
                        files={this.state.files}
                        allowMultiple={true}
                        maxFiles={6}
                        labelIdle='Drag & Drop your Product Images or <span class="filepond--label-action"> Browse </span>'
                        acceptedFileTypes={['image/*']}
                        labelFileTypeNotAllowed={"Invalid file"}
                        imageResizeMode={'cover'}
                        imagePreviewMaxHeight={400}
                        imageResizeTargetWidth={500}
                        imageResizeTargetHeight={775}
                        imageValidateSizeMinHeight={200}
                        imageValidateSizeMinWidth={200}
                        oninit={() => this.handleInit() }
                        onupdatefiles={(fileItems) => {
                            this.setState({
                                files: fileItems.map(fileItem => fileItem.file)

                            });

                            if (this.state.files!=null||this.state.files.length!=0) {
                                this.setState({
                                    sucss3: false
                                })
                            }




                        }}


                    >

                    </FilePond>

                    <ShowError isShow={this.state.sucss3} value={null} name={"Please add Product Images"} />
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

    ResetPage=()=>{
        if (this.state.error==="Can not Upload the images"||this.state.error==="Can not Add the Product"){
            return <div style={{cursor:'pointer'}} onClick={()=>{window.history.back()}} ><div className="site-btn sb-line sb-dark" >Go Back</div>
                <button className="site-btn sb-line sb-dark" style={{"margin-left":"15px"}} type="submit">Try Again</button>
                <br/><br/><br/>
            </div>;
        }
    }
    submitHandler=e=>{
    e.preventDefault();

    if (this.state.files==null||this.state.files.length===0){
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
        delete values.error;
        delete values.sucss1;
        delete values.sucss2;
        delete values.sucss3;
        delete  values.agree;
        delete  values.sSize;

        let imgs=[];


        try {
            const formData = new FormData();
            for (const key of Object.keys(this.state.files)) {
                formData.append('file', this.state.files[key])
                imgs=[this.state.files[key].name,...imgs]
            }
            delete  values.files;
            values.proimages = imgs;

            axios.post('http://localhost:3001/product/addProduct',values)
                .then(response1=>{
                    console.log(response1.statusText);
                    axios.post('http://localhost:3001/product/uploadProduct',formData)
                        .then(response2=>{

                            console.log(response2.statusText);
                            this.setState({
                                error:response2.statusText
                            });
                            this.props.history.push('/oneProduct/'+response2.data);
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
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <form ref={form => this.formEl = form} className="needs-validation" encType="multipart/form-data" onSubmit={this.submitHandler} noValidate>
                                    {this.showBox()}
                                    {this.ResetPage()}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>;
    }


}
export default AddProduct;