
import React, { useState } from "react"
import ProductCard from "./ProductCard"
import Search from "./Search";

function ProductView({allProducts,search,setSearch, user}){

    const displayProduct = allProducts.map((product) => {
        return <ProductCard key={product.id} product={product} user = {user}/>;
      });
    return (
        <div>
             <Search search={search} setSearch={setSearch} /> 
         {displayProduct}
        </div>
    )
}

export default ProductView;
