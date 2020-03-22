import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem,Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css";
const propTypes = {
    children: PropTypes.node,
  };
  
  const defaultProps = {};

class DefaultHeader extends Component {
    state = {  }
    render() { 
        return (
          <div>
           <header className="header-section">
		
		<div className="header-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 text-center text-lg-left">
					
						<a href="./index.html" className="site-logo">
							<img src="img/logo.png" alt=""/>
						</a>
					</div>
					<div className="col-xl-6 col-lg-5">
						<Form className="header-search-form">
							<input type="text" placeholder="Search on divisima ...."/>
							<button><i className="fa fa-scribd fa-lg mt-4"></i></button>
						</Form>
					</div>
					<div className="col-xl-4 col-lg-5">
						<div className="user-panel">
							<div className="up-item">
								<i className="flaticon-profile"></i>
								<a href="#">Sign</a> In or <a href="#">Create Account</a>
							</div>
							<div className="up-item">
								<div className="shopping-card">
									<i className="icon-user icons font-2xl d-block mt-4"></i>
									<span>0</span>
								</div>
								<a href="#">Shopping Cart</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Nav className="main-navbar">
			<div className="container">
      
				<ul className="main-menu">
        <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Home</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Women</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >men</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >jewellery</NavLink>
          </NavItem>
					
					
					
					<li>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Shoes</NavLink>
          </NavItem>
						<ul className="sub-menu">
            <NavItem >
            <NavLink to="/dashboard" className="nav-link" >sneakers</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Sandals</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Formal shoes</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Boots</NavLink>
          </NavItem>
          <NavItem >
            <NavLink to="/dashboard" className="nav-link" >Flip flops</NavLink>
          </NavItem>

						</ul>
					</li>
					<li><a href="#">Pages</a>
						<ul className="sub-menu">
							<li><a href="./product.html">Product Page</a></li>
							<li><a href="./category.html">Category Page</a></li>
							<li><a href="./cart.html">Cart Page</a></li>
							<li><a href="./checkout.html">Checkout Page</a></li>
							<li><a href="./contact.html">Contact Page</a></li>
						</ul>
					</li>
					<li><a href="#">Blog</a></li>
				</ul>
			</div>
		</Nav>
	</header>
  </div>
        );
    }

}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
 
export default DefaultHeader;