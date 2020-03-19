import React, {Component} from "react";
import '../../../css/showAllProducts.css'
import SideBar from "./SideBar";
import ProductResults from "./ProductResults";
class ShowAllProducts extends Component{

    render() {
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
                    <SideBar/>
                    <ProductResults/>
                </div>
            </div>
        </section>
            </>;
    }

}
export default ShowAllProducts;