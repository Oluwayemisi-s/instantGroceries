import React, { useState } from "react";
import ProductCard from "./ProductCard";


function ProductView({allProducts}){
    const displayProduct = allProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      });
    

    return (
        <div>
         {displayProduct}
        </div>
    )
}

export default ProductView;

// // const displayProduct = allProducts.map((product) => {
//     return <ProductView key={product.id} product={product} />;
// });
// return (
//   <div>
//      {displayProduct}
//   </div>
// )