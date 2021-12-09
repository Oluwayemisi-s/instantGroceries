
import React from "react"
import ProductCard from "./ProductCard"

function ProductView({allProducts, user, setCount, setAllProducts}){

    function onDelete (deleted){
        const filteredProduct = allProducts.filter(product => product.id !== deleted.id )
        setAllProducts(filteredProduct)
    }

    const displayProduct = allProducts.map((product) => {
        return <ProductCard key={product.id} product = {product} user = {user} setCount = {setCount} onDelete = {onDelete}/>;
      });

    return (
        <div>
         {displayProduct}
        </div>
    )
}

export default ProductView;
