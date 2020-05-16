import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Login from "../../views/pages/Login"
import Register from "../../views/pages/Register"
import '../../css/animate.css';
import '../../css/bootstrap.min.css';
import '../../css/flaticon.css';
import '../../css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/slicknav.min.css';
import '../../css/style.css';
import axios from "axios";



const propTypes = {
    children: PropTypes.node,
  };


  const defaultProps = {};

class DefaultHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  modal: false,
		  large: false,
		  small: false,
		  primary: false,
		  success: false,
		  warning: false,
		  danger: false,
		  info: false,
          skeyWord:'',
          getCatogorys:[]
		};

	
		this.toggleLarge = this.toggleLarge.bind(this);
		
	  }

	toggleLarge() {
		this.setState({
		  large: !this.state.large,
		});
	  }
    componentDidMount(){
       axios.get(global.backend+"/productCategory")
            .then(result=> {

                this.setState({
                    getCatogorys:result.data,
                });

            }).catch(err=>console.log(err));
    }
    getKeyWord=e=>{

	    this.setState({
            skeyWord:e.target.value
        })
    }
    search=e=>{
        e.preventDefault();
        window.location.replace('/search/'+this.state.skeyWord);

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
                                    <img src="/images/logo.png" alt=""/>
                                </Link>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <form className="header-search-form" onSubmit={this.search}>
                                    <input type="text" onChange={this.getKeyWord} value={this.skeyWord} placeholder="Search on divisima ...."/>
                                    <button><i className="flaticon-search"></i></button>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-5">

                            <div className="user-panel">
                        
                                    <div className="up-item">
                                        <div className="shopping-card">
                                            <i className="flaticon-bag"></i>
											
                                            <span>0</span>
                                        </div>
										
                                        <Link to="/">Shopping Cart</Link>
                                    </div>


                                    <div className="up-item">
                              {localStorage.getItem("AccessToken")===null?
                              
                              <a onClick={this.toggleLarge}> <i className="flaticon-profile"></i>
                              <Link to="/">Sign</Link> In or <Link to="/">Create Account</Link></a>:
                            <button onClick={()=>{localStorage.clear(); window.location.href="/"}}>Logout</button>
                            
                            }  
                               
                            
                                       
										<Modal isOpen={this.state.large} toggle={this.toggleLarge}
                       className={'modal-lg ' + this.props.className}>
                  
                  <ModalBody>
                   <Login toggle={this.toggleLarge}/>
                  </ModalBody>
                  {/* <ModalFooter>
					  <Link to="/Register">
                    <Button color="primary" onClick={this.toggleLarge}>Sign Up!</Button>{' '}
					</Link>
                    <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                  </ModalFooter> */}
                </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul className="main-menu">
                            <li><Link to="/">Home   <span className="new">New</span></Link></li>


                                {this.state.getCatogorys.map(catogory=>(
                                    <li><Link to={"/allProducts/"+catogory.categoryName}  >{catogory.categoryName}</Link>
                                        {(catogory.subCategory.length>0)?(
                                            <ul className="sub-menu">
                                                {(catogory.subCategory.map(subCategory=>(
                                                    <li><Link to={"/allProducts/"+catogory.categoryName+"~"+subCategory}>{subCategory}</Link></li>
                                                )))}


                                            </ul>
                                        ):(
                                            <></>
                                        )}




                                    </li>
                                ))}
                            <li><Link to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Product Page</Link></li>
                                    <li><Link to="/">Category Page</Link></li>
                                    <li><Link to="/">Cart Page</Link></li>
                                    <li><Link to="/">Checkout Page</Link></li>
                                    <li><Link to="/">Contact Page</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Myshop">My Shop</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/Myshop">My Shop</Link></li>
                                    <li><Link  to="/Myshop/addProduct">Add Product</Link></li>

                                </ul>
                            </li>
                            <li>
                                <NavLink to="/adminDashboard" className="nav-link" >Dashboard</NavLink>
                            </li>

                            <li>
                                <Link to="/payment" className="nav-link">Payment</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


  </React.Fragment>
        );
    }

}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
 
export default DefaultHeader;