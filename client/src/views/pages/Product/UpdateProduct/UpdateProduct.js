import React,{Component} from "react";

import '../../../../css/updateProduct.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import {Checkbox, TextField} from "@material-ui/core";
import ShowError from "../ShowError";


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginImageResize,FilePondPluginFileValidateType,FilePondPluginImageValidateSize)


class UpdateProduct extends  Component{

constructor(props) {


    super(props);
    this.state={

        error:"",
        freeShipping:true,
        agree:false,
        addDiscount:false,
        proName:'',
        catogory:'',
        subCatogory:'',
        size:['false','false','false','false','false','false'],
        brand:'',
        quantity:'',
        condition:'',
        description:'',
        price:'',
        shipping:null,
        discount:null,
        check:false,
        sellerID:"001",
        files:  [ ],
        cImages:[],
        sSize:'',
        id:this.props.match.params.id,
        maxImages:6
    }



}
    componentDidMount(){
    axios({
            methode: 'GET',
            url:'http://localhost:3001/product/getProduct',
            params:{s:true,id:this.state.id}
        }).then(res=>{
            this.setState({
                data:res.data
            },()=>{this.setElemets()})
        }).catch(err=>console.log(err));
    }

    setElemets(){
    let pData=this.state.data[0];
    let imgArr=[];

    for (let i=0;i<pData.images.length;i++){
        let tarr={
            source: 'http://localhost:3001'+pData.images[i],
            options: {type: 'local'}
        }
        imgArr=[...imgArr,tarr];

    }
        console.log(imgArr);

    let isShippingFree,isDiscount;
    if (pData.shipping==""||pData.shipping==null){
        isShippingFree=true;
    }else{
        isShippingFree=false;
    }
    if (pData.discount==""||pData.discount==null){
        isDiscount=false;
    }else {
        isDiscount=true;
    }


    this.setState({
        freeShipping:isShippingFree,
        agree:false,
        addDiscount:isDiscount,
        proName:pData.proName,
        catogory:pData.catogory,
        subCatogory:pData.subCatogory,
        size:[pData.size[0],pData.size[1],pData.size[2],pData.size[3],pData.size[4],pData.size[5]],
        brand:pData.brand,
        quantity:pData.quantity,
        condition:pData.condition,
        description:pData.description,
        price:pData.price,
        shipping:pData.shipping,
        discount:pData.discount,
        check:false,
        sellerID:"001",
        files:[],
        cImages:pData.images,
        sSize:'',
        maxImages:(6-pData.images.length)
    })
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

 agreement=()=>{
        if (this.state.agree){
            this.setState({
                agree:true
            })
        }else{
            this.setState({
                agree:false
            })
        }
    }




    showShippingPrice(){
        if (!this.state.freeShipping){
            return <div> <br/><br/>
                <label htmlFor="validationCustom02">Shipping Price<span>*</span></label>
                <TextField type="number" name="shipping" value={this.state.shipping} onChange={this.changeHandler} className="form-control"
                       placeholder="5$" required/>
                <ShowError isShow={this.state.check} value={this.state.shipping} name={"Enter Shipping Price"} />
                <br/>

            </div>
        }
    }
    showDiscountPrice(){
        if (this.state.addDiscount){
            return <div>
                <label htmlFor="validationCustom04">Discount<span>*</span>  (%)</label>
                <TextField type="number" className="form-control" name="discount" value={this.state.discount}   onChange={this.changeHandler}
                       id="validationCustom06"    placeholder="10%"/>
                <ShowError isShow={this.state.check} value={this.state.discount} name={"Enter Discount Price"} />
                <br/>

            </div>
        }
    }
    handleInit() {
    console.log('FilePond instance has initialised', this.state.files);

    }
    setSize =e=>{
        var temp = this.state.size;

        if (this.state.size[e.target.value]=="false"){
            temp[e.target.value]=e.target.name;
        }else{
            temp[e.target.value]='false';
        }
        this.setState({
            size:temp
        })

       for (let i=0;i<6; i++){
            if(this.state.size[i]!='false'){
                this.setState({
                    sSize:"ok"
                })
                break;
            }else{
                this.setState({
                    sSize:""
                })
            }
        }

    }


    deleteImage=(image)=>{
       var tImage=this.state.cImages;
       tImage.splice(tImage.indexOf(image),1);
      this.setState({
          cImages:tImage,
          maxImages:(this.state.maxImages+1)
      })
        let sendData={
          id:this.state.id,
          img:image,
          uImages:tImage
        }
axios.post("http://localhost:3001/product/deleteImage",sendData)
    .then(res=>console.log("img delete res",res))
    .catch(err=>console.log("img delete err",err))

    }



showSubCatogory() {
    if (this.state.catogory === "Women") {

        return<div className="subctogory" >
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" required>
                <option value="">Choose</option>
                <option value="Midi Dresses">Midi Dresses</option>
                <option value="Maxi Dresses">Maxi Dresses</option>
                <option value="Prom Dresses">Prom Dresses</option>
                <option value="Mini Dresses">Mini Dresses</option>
                <option value="Shorts & Pants">Shorts & Pants</option>
                <option value="T-Shirt">T-Shirt</option>

            </select>
            <ShowError isShow={this.state.check} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Men") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" required>
                <option value="">Choose</option>
                <option value="Shorts & Pants">Shorts & Pants</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Shirts">Shirts</option>
                <option value="Ties">Ties</option>
                <option value="Belts">Belts</option>

            </select>
            <ShowError isShow={this.state.check} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Jewelry") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" required>
                <option value="" >Choose</option>
                <option value="Engagement & Wedding Jewelry">Engagement & Wedding Jewelry</option>
                <option value="Vintage & Antique Jewelry">Vintage & Antique Jewelry</option>
                <option value="Handcrafted & Artisan Jewelry">Handcrafted & Artisan Jewelry</option>
                <option value="Loose Diamonds & Gemstones">Loose Diamonds & Gemstones</option>

            </select>
            <ShowError isShow={this.state.check} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }else if (this.state.catogory === "Footwear") {

        return<div>
            <label htmlFor="validationCustom05">Sub Catagory<span>*</span></label>
            <select name="subCatogory" value={this.state.subCatogory} onChange={this.changeHandler} className="form-control" required>
                <option value="">Choose</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Sandals">Sandals</option>
                <option value="Formal Shoes">Formal Shoes</option>
                <option value="Boots">Boots</option>
                <option value="Flip Flops">Flip Flops</option>
            </select>
            <ShowError isShow={this.state.check} value={this.state.subCatogory} name={"Select Sub Cataogory"} />
            <br/>
        </div>;

    }

}






    submitHandler=e=>{
    e.preventDefault();
        if (this.state.proName===""||this.state.catogory===""||
            this.state.quantity===""||this.state.condition===""||
            this.state.price===""||(!this.state.freeShipping&&this.state.shipping==="")||
                (this.state.addDiscount&&this.state.discount ==="")||
            this.state.agree===""){
            this.setState({
                check:true
            })
        } else{
        this.setState({
            check:false
        })
        const  values=this.state;

        delete values.box;
        delete values.freeShipping;
        delete values.addDiscount;
        delete values.error;
        delete values.sucss1;
        delete values.sucss2;
        delete values.sucss3;
        delete values.agree;
        delete values.sSize;
        delete values.maxImages;

        delete  values.check;
        let imgs=[];


        try {
            const formData = new FormData();
            for (const key of Object.keys(this.state.files)) {
                formData.append('file', this.state.files[key])
                imgs=[this.state.files[key].name,...imgs]
            }
            var len=this.state.files.length;
            delete  values.files;
            delete  values.cImages;
            delete  values.data;

            values.proimages = imgs;
            console.log("form data",len)

            axios.post('http://localhost:3001/product/updateProduct',values)
                .then(response1=>{
                    console.log(response1.statusText);
                    if(len!=0){
                        axios.post('http://localhost:3001/product/uploadProduct',formData)
                            .then(response2=>{

                                console.log(response2.statusText);
                                this.setState({
                                    error:response2.statusText
                                });
                               window.location.replace('/oneProduct/'+response2.data);
                            })
                            .catch(error=>{
                                console.log(error);
                                this.setState({
                                    error:"Can not Upload the images"

                                });

                            });
                    }else{
                        window.location.replace('/oneProduct/'+response1.data);
                    }

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
                            <h2>Update Product {this.state.proName}</h2>
                            <div className="site-pagination">
                                Home / Shop / Update Product/{this.state.proName}
                            </div>
                            <h3 className="error">{this.state.error}</h3>

                        </div>
                    </div>

                            <form ref={form => this.formEl = form} className="needs-validation" onSubmit={this.submitHandler} encType="multipart/form-data"  >
                                <div className="container">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom01">Product Name<span>*</span></label><br/>
                                        <TextField text id="pname"  className="form-control"  placeholder="Product name" name="proName"
                                                   value={this.state.proName} onChange={this.changeHandler} required
                                                    /><br/><br/>
                                        <ShowError isShow={this.state.check} value={this.state.catogory} name={"Select Cataogory"} />
                                        <label htmlFor="validationCustom05">Catagory<span>*</span></label>
                                        <select name="catogory" value={this.state.catogory} onChange={this.changeHandler} className="form-control" required>
                                            <option value="" >Choose</option>
                                            <option value="Women">Women</option>
                                            <option value="Men">Men</option>
                                            <option value="Childern">Childern</option>
                                            <option value="Bags & Purses">Bags & Purses</option>
                                            <option value="Footwear">Footwear</option>
                                            <option value="Jewelry">Jewelry</option>

                                        </select>

                                        <ShowError isShow={this.state.check} value={this.state.catogory} name={"Select Cataogory"} />
                                        <br/>
                                        {this.showSubCatogory()}
                                        <label htmlFor="validationCustom05">SIZE<span>*</span></label>
                                        <div className="checkBox">
                                            <div className="a" >
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="XS"  value="0" checked={this.state.size[0]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />XS

                                                </label>
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="S"  value="1" checked={this.state.size[1]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />S


                                                </label>
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="M"  value="2" checked={this.state.size[2]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />M

                                                </label>
                                            </div>
                                            <div className="a" >
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="L"  value="3" checked={this.state.size[3]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />L

                                                </label>
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="XL"  value="4" checked={this.state.size[4]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />XL

                                                </label>
                                                <label className="checkContainer">
                                                    <Checkbox
                                                        name="XXL"  value="5" checked={this.state.size[5]!="false"} onClick={this.setSize}
                                                        color="blue"
                                                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                                                    />XXL

                                                </label>
                                            </div>
                                        </div>

                                        <ShowError isShow={this.state.check} value={this.state.sSize} name={"Select Size"} />
                                        <br/>
                                        <label htmlFor="validationCustom01">Brand<span>*</span></label>
                                        <TextField type="text" name="brand" value={this.state.brand}  onChange={this.changeHandler} className="form-control"
                                               placeholder="Brand name" required/>
                                        <ShowError isShow={this.state.check} value={this.state.brand} name={"Enter Brand"} />
                                        <br/>

                                        <label htmlFor="validationCustom01">Quantity<span>*</span></label>
                                        <TextField type="number" name="quantity" value={this.state.quantity}  onChange={this.changeHandler} className="form-control"
                                               placeholder="quantity" required/>
                                        <ShowError isShow={this.state.check} value={this.state.quantity} name={"Enter Quantity"} />
                                        <br/>
                                        <label htmlFor="validationCustom03">Condition<span>*</span></label>
                                        <select name="condition" value={this.state.condition} className="form-control"  onChange={this.changeHandler} required>
                                            <option value="">Choose</option>
                                            <option value="BarandNew">Barand New</option>
                                            <option value="Used">Used</option>
                                        </select>
                                        <ShowError isShow={this.state.check} value={this.state.condition} name={"Select Condition"} />
                                        <br/>



                                        <label htmlFor="validationCustom04">Descriprion</label>
                                        <TextField name="description" cols="30" rows="10" className="form-control"
                                                   multiline variant="outlined"
                                                  placeholder="Desctiption.." value={this.state.description} onChange={this.changeHandler} ></TextField>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                                        <label htmlFor="validationCustom02">Price<span>*</span></label>
                                        <TextField  type="number" className="form-control" placeholder="10$" name="price" value={this.state.price}
                                               onChange={this.changeHandler} required/>
                                        <ShowError isShow={this.state.check} value={this.state.price} name={"Enter Price"} />
                                        <br/><br/>

                                        <label htmlFor="validationCustom02">Free shipping</label>
                                        <Checkbox

                                            color="primary"
                                            onClick={()=>this.addShipping()}
                                            checked={this.state.freeShipping}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        {this.showShippingPrice()}<br/><br/>
                                        <label htmlFor="validationCustom02">Add Discount</label>
                                        <Checkbox
                                            color="primary"
                                            checked={this.state.addDiscount}
                                            onClick={()=>this.addDiscount()}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />

                                        <br/><br/>
                                        {this.showDiscountPrice()}

                                        <ShowError isShow={this.state.check} value={null} name={"Please add Product Images"} />
                                        <br/>
                                        <Checkbox
                                            required
                                            color="primary"
                                            value={this.agree}
                                            onClick={()=>this.agreement()}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />

                                        <label className="form-check-label"  onClick={()=>this.agreement()} htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <ShowError isShow={this.state.check} value={this.state.agree} name={" You must agree before submitting"} />


                                        <br/>

                                        <br/><br/>


                                        <button className="submit" type="submit">Add Product</button>
                                        <br/><br/><br/><br/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom01">Choose Images (max Images {this.state.maxImages})<span>*</span></label><br/>

                                        {this.state.cImages.map(image=>(


                                        <div className="imgconatinor" key={image}>
                                            <div >
                                                <img className="imgbox" src={"http://localhost:3001"+image} alt=""/>
                                                <i onClick={()=>this.deleteImage(image)} className="fa fa-close"></i>

                                            </div>
                                        </div>
                                        ))}

                                        <FilePond

                                            required={this.state.cImages.length<=0}
                                            ref={ref => this.pond = ref}
                                            files={this.state.files}
                                            allowMultiple={true}
                                            maxFiles={this.state.maxImages}
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

console.log(fileItems)


                                            }}


                                        >

                                        </FilePond>







                                    </div>
                                    </div>
                                </div>
                                </form>

                </div>;
    }


}
export default UpdateProduct;