import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import  Header from './Componnent/Header';
import Footer from "./Componnent/Footer";
import AddProduct from "./Componnent/Product/AddProduct/AddProduct";
import ShowAllProducts from "./Componnent/Product/ShowAllProducts";
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
}

export default App;
