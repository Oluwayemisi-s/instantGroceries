
import React from "react";
import ProductView from "./ProductView";

function ProductCard({product: { name, product_description,image, price, stock }}){   

    
    return (
        <div>

          <img src = {image} alt = "product" width = "200px"/>
          <h3>{name}</h3>
          <small>{product_description}</small>
          <h4>${price}</h4>
          <h4>In stock: {stock}</h4>
           
        </div>
    )
}

export default ProductCard;