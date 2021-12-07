
import React, { useState, useEffect } from "react"
import ProductView from "./ProductView";
import Header from "./Header"
import { Switch,Route } from "react-router-dom";
import Category from "./Category";
import AddNewProduct from "./AddNewProduct";
import Cart from "./Cart";

function ProductContainer(){

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <div>
            <Switch>
                <Route exact path = "/products">
                  <ProductView allProducts = {allProducts} />
                </Route>
                <Route exact path = "/categories">
                  <Category />
                </Route>
                <Route path = "/addnewproduct">
                  <AddNewProduct />
                </Route>
                <Route path = "/cart">
                  <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default ProductContainer;