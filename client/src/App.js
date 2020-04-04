import React, { Component } from 'react';
import { HashRouter, Route, Switch ,BrowserRouter as Router,Redirect} from 'react-router-dom';
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
import Login from "././views/pages/Login"
import PaymentMain from "./views/pages/Payment/PaymentMain"
import cardPayment from "./views/pages/Payment/cardPayment"
import receiptPayment from "./views/pages/Payment/receiptPayment"
import payConfirm from "./views/pages/Payment/payConfirm"
import fakeAuth from "../src/views/pages/fakeAuth"

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
//const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

class App extends Component {




  render() {
    return (
        <Router>

            <div className="App">
                <DefaultHeader/>
                <Switch>
                    <Route  path="/" exact   component={Home} />
                    <Route path="/login" component={Login}/>
                    <Route exact path="/Register" component={Register} />
                    <PrivateRoute path="/allProducts/:id" exact component={ShowAllProducts} />
                    <PrivateRoute path="/oneProduct/:id" exact component={ShowOneProduct} />
                    <PrivateRoute path="/Myshop/addProduct" component={AddProduct} />
                    <PrivateRoute path="/paymentMain" component={PaymentMain} />
                    <PrivateRoute path="/cardPayment" component={cardPayment} />
                    <PrivateRoute path="/receiptPayment" component={receiptPayment} />
                    <PrivateRoute path="/payConfirm" component={payConfirm} />
                </Switch>
                <DefaultFooter/>
                
            </div>
        </Router>
    );
  }

}

export default App;
