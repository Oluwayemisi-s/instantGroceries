
import React from "react"
import ProductCard from "./ProductCard"

function ProductView({allProducts, user, setCount}){

    const displayProduct = allProducts.map((product) => {
        return <ProductCard key={product.id} product = {product} user = {user} setCount = {setCount}/>;
      });

    return (
        <div>
         {displayProduct}
        </div>
    )
}

export default ProductView;
