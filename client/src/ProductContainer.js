
import React, { useState, useEffect } from "react"
import ProductView from "./ProductView";
import { Switch,Route } from "react-router-dom";
import Category from "./Category";
import AddNewProduct from "./AddNewProduct";
import Cart from "./Cart";
import Search from "./Search";

function ProductContainer({user}){

    const [allProducts, setProducts] = useState([]);
    const [search, setSearch] = useState("");
   
    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);

      

      const filterProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) 
      ); //to search products
      
    return (   
        <div>
            <Switch>
                <Route exact path = "/products">
                  <ProductView allProducts = {filterProducts} search={search} setSearch = {setSearch} user = {user}/>
                </Route>
                <Route exact path = "/categories">
                  <Category user = {user}/>
                </Route>
                <Route path = "/addnewproduct">
                  <AddNewProduct user = {user}/>
                </Route>
                <Route path = "/cart">
                  <Cart user = {user}/>
                </Route>
            </Switch>
          
        </div>
    )
}

export default ProductContainer;