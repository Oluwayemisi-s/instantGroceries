
import React, { useState, useEffect } from "react"
import ProductView from "./ProductView";
import { Switch,Route } from "react-router-dom";
import Category from "./Category";
import AddNewProduct from "./AddNewProduct";
import Cart from "./Cart";
import Search from "./Search";
import Error from "./Errors";

function ProductContainer({user, setCount}){

    const [allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [errors, setErrors] = useState([])
   
    useEffect(() => {
        fetch("/products")
          .then((res) => {
            if (res.ok) {
              res.json().then((data) => setAllProducts(data));
            } else {
              res.json().then((err) => setErrors(err.errors));
            }
          })          
      }, []);


      const filterProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) 
      ); //to search products
      
    return (   
        <div className = "product-container">
           {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
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
            
        </div>
    )
}

export default ProductContainer;