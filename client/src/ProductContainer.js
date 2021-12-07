
import React, { useState, useEffect } from "react"
import ProductView from "./ProductView";
import Header from "./Header"

function ProductContainer(){

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <div>
            <Header />
            <ProductView allProducts = {allProducts}/>
        </div>
    )
}

export default ProductContainer;