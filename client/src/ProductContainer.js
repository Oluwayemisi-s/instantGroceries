
import React, { useState, useEffect } from "react"
import ProductView from "./ProductView";
import { Switch,Route } from "react-router-dom";
import Category from "./Category";
import AddNewProduct from "./AddNewProduct";
import Cart from "./Cart";
import Search from "./Search";

function ProductContainer({user, setCount}){

    const [allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState("");
   
    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then((data) => setAllProducts(data));
      }, []);


      const filterProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) 
      ); //to search products
      
    return (   
        <div>
          <Search search={search} setSearch={setSearch} /> 
            <Switch>
                <Route exact path = "/products">
                  <ProductView allProducts = {filterProducts} search={search} setSearch = {setSearch} setCount = {setCount} user = {user} setAllProducts = {setAllProducts}/>
                </Route>
                <Route exact path = "/categories">
                  <Category user = {user} search={search} setSearch={setSearch} setCount = {setCount}/>
                </Route>
                <Route path = "/addnewproduct">
                  <AddNewProduct user = {user}/>
                </Route>
                <Route path = "/cart">
                  <Cart user = {user} setCount = {setCount}/>
                </Route>
            </Switch>
            <hr/>
            <footer>Your number 1 online grocery store!</footer>
        </div>
    )
}

export default ProductContainer;