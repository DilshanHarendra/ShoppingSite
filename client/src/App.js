import React, { Component } from 'react';
import { HashRouter, Route, Switch ,BrowserRouter as Router} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

import DefaultFooter from "./containers/DefaultLayout/DefaultFooter";
import DefaultHeader from "./containers/DefaultLayout/DefaultHeader";
import AddProduct from "./views/pages/Product/AddProduct/AddProduct";
import {DefaultLayout} from "./containers";
import ShowAllProducts from "./views/pages/Product/ShowAllProducts/ShowAllProducts";
import ShowOneProduct from "./views/pages/Product/ShowOneProduct/ShowOneProduct";
import Home from "./views/pages/HomePage";
import Register from "./views/pages/Register"
import UpdateProduct from "./views/pages/Product/UpdateProduct/UpdateProduct";
import MyShop from "./views/pages/Product/MyShop/MyShop";
import AdminDashbord from "./views/pages/AdminPages/admindashbord";
import fakeAuth from "../src/views/pages/fakeAuth"
import Login from "../../client/src/views/pages/Login"
import ProductCategory from "./views/pages/AdminPages/ProductCategory/createcategoryPanal";
import StoreManagerPanal from "./views/pages/AdminPages/StoreManagerRegister/StoremanagerPanal";
import registerVerify from "./views/pages/registerVerify";

//=========================PAYMENT PAGES==================================
import PaymentMain from "./views/pages/Payment/PaymentMain";
import cardPayment from "./views/pages/Payment/cardPayment";
import receiptPayment from "./views/pages/Payment/receiptPayment";
import payConfirm from "./views/pages/Payment/payConfirm";
import payAdmin from "./views/pages/Payment/payAdmin";
import refundPayment from "./views/pages/Payment/refundPayment";
import emailConfirm from "./views/pages/Payment/emailConfirm";
import refundRequest from "./views/pages/Payment/refundRequest";
import paymentSuccess from "./views/pages/Payment/PaymentSuccess";
import payment from "./views/pages/Payment/Payment";
import viewAllPayments from "./views/pages/Payment/viewAllPayments";
import payAdminCard from "./views/pages/Payment/payAdminCard";
import payAdminReceipt from "./views/pages/Payment/payAdminReceipt";
import payAdminRefund from "./views/pages/Payment/payAdminRefund";
import payInvoice from "./views/pages/Payment/PaymentInvoice";

//=========================CART===========================================
// import Cart from "./views/pages/Cart/CartItems"
import Cart2 from "./views/pages/Cart/Cart"
import SearchResults from "./views/pages/Product/SearchResults/SearchResults";


// import Cart from "./views/pages/Cart/Cart"

//========================================================================
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;








// Containers
//const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//         }} />
//   )} />
// )


class App extends Component {

  render() {
    return (
        <Router>

            <div className="App">
                <DefaultHeader/>
                <Switch>
                    <Route  path="/" exact   component={Home} />
                    
                    {/* <Route path="/login1" exact component={Login}/> */}
                    
                    <Route path="/allProducts/:id" exact component={ShowAllProducts} />
                    <Route path="/oneProduct/:id" exact component={ShowOneProduct} />
                    <Route path="/Myshop" exact component={MyShop} />
                    <Route path="/Myshop/addProduct" component={AddProduct} />
                    <Route path="/Myshop/UpdateProduct/:id" exact component={UpdateProduct} />
                    <Route path="/search/:key" exact component={SearchResults}/>

                    
                    {/* StoreManager */} 
                    <Route path="/adminDashboard" component={AdminDashbord}/>
                    <Route path="/productcategory" component={ProductCategory}/>
                    <Route path="/storeManager" component={StoreManagerPanal}/>


                    {/* User */}
                    <Route path="/login" exact component={Login}/>
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/RegisterConfirm" component={registerVerify}/>

                    {/* PAYMENT */}
                    <Route path="/paymentMain" component={PaymentMain} />
                    <Route path="/cardPayment" component={cardPayment} />
                    <Route path="/receiptPayment" component={receiptPayment} />
                    <Route path="/payConfirm" component={payConfirm} />
                    <Route path="/payAdmin" component={payAdmin} />
                    <Route path="/refundPayment" component={refundPayment} />
                    <Route path="/emailConfirm" component={emailConfirm} />
                    <Route path="/refundRequest" component={refundRequest} />
                    <Route path="/paymentSuccess" component={paymentSuccess} />
                    <Route path="/payment" component={payment} />
                    <Route path="/allPayments" component={viewAllPayments} />
                    <Route path="/payAdminCard" component={payAdminCard} />
                    <Route path="/payAdminReceipt" component={payAdminReceipt} />
                    <Route path="/payAdminRefund" component={payAdminRefund} />
                    
                    {/*CART*/}
                    {/*<Route path="/cart" component={Cart}/>*/}
                    <Route path="/cart" component={Cart2}/>

                </Switch>
                <DefaultFooter/>
                
            </div>
        </Router>
    );
  }

}

export default App;
