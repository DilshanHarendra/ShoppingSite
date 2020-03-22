import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';


import '../../css/animate.css';
import '../../css/bootstrap.min.css';
import '../../css/flaticon.css';
import '../../css/font-awesome.min.css';


import '../../css/slicknav.min.css';
import '../../css/style.css';


const propTypes = {
    children: PropTypes.node,
  };


  const defaultProps = {};

class DefaultHeader extends Component {


    componentDidMount(){

    }
    state = {  }
    render() { 
        return ( <React.Fragment>



            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 text-center text-lg-left">
                                <Link to="/" className="site-logo">
                                    <img src="images/logo.png" alt=""/>
                                </Link>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <form className="header-search-form">
                                    <input type="text" placeholder="Search on divisima ...."/>
                                    <button><i className="flaticon-search"></i></button>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="user-panel">
                                    <div className="up-item">
                                        <i className="flaticon-profile"></i>
                                        <Link to="/">Sign</Link> In or <Link to="/">Create Account</Link>
                                    </div>
                                    <div className="up-item">
                                        <div className="shopping-card">
                                            <i className="flaticon-bag"></i>
                                            <span>0</span>
                                        </div>
                                        <Link to="/">Shopping Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul className="main-menu">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/allProducts">Women</Link></li>
                            <li><Link to="/allProducts">Men</Link></li>
                            <li><Link to="/allProducts">Jewelry
                                <span className="new">New</span>
                            </Link></li>
                            <li><Link to="/allProducts">Shoes</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Sneakers</Link></li>
                                    <li><Link to="/">Sandals</Link></li>
                                    <li><Link to="/">Formal Shoes</Link></li>
                                    <li><Link to="/">Boots</Link></li>
                                    <li><Link to="/">Flip Flops</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Product Page</Link></li>
                                    <li><Link to="/">Category Page</Link></li>
                                    <li><Link to="/">Cart Page</Link></li>
                                    <li><Link to="/">Checkout Page</Link></li>
                                    <li><Link to="/">Contact Page</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">My Shop</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/Myshop/addProduct">Add Product</Link></li>

                                </ul>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
                            </li>
                            <li>
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            <li>
                                <NavLink to="#" className="nav-link">Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </React.Fragment> );
    }

}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
 
export default DefaultHeader;