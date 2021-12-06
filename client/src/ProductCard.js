
import React from "react";
import ProductView from "./ProductView";

function ProductCard({product: { name, product_description,image, price, stock }}){   

    
    return (
        <div>
          <img>{image}</img>
          <h3>{name}</h3>
          <small>{product_description}</small>
          
          <h4>{price}</h4>
          <h4>{stock}</h4>
           
        </div>
    )
}

export default ProductCard;