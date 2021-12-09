
import React, { useState } from "react"
import ProductCard from "./ProductCard"
import Search from "./Search";

function ProductView({allProducts, user}){

    const displayProduct = allProducts.map((product) => {
        return <ProductCard key={product.id} product = {product} user = {user}/>;
      });
    return (
        <div>
        
         {displayProduct}
        </div>
    )
}

export default ProductView;
