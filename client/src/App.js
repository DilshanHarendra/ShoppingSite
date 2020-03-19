<<<<<<< HEAD
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import  Header from './Componnent/Header';
import Footer from "./Componnent/Footer";
import AddProduct from "./Componnent/Product/AddProduct/AddProduct";
import ShowAllProducts from "./Componnent/Product/ShowAllProducts/ShowAllProducts";
import ShowOneProduct from "./Componnent/Product/ShowOneProduct/ShowOneProduct";

function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
        <Switch>
            <Route path="/" exact component={ShowAllProducts} />
            <Route path="/allProducts" exact component={ShowAllProducts} />
            <Route path="/oneProduct" exact component={ShowOneProduct} />
            <Route path="/Myshop/addProduct" component={AddProduct} />
        </Switch>
      <Footer/>
    </div>
      </Router>
  );
=======
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              
            {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route  path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
>>>>>>> 630598c7488c7295a39112f0711ce3d6047950d3
}

export default App;
