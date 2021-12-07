
import React from "react";


function ProductCard({product: { name, product_description,image, price, stock }}){   

    
    return (
        <div>

          <img src = {image} alt = "product" width = "200px"/>
          <h3>{name}</h3>
          <details>
              <summary>Details</summary>
            <small>{product_description}</small>
          </details>
          <h4>Price:${price}</h4>
          <h4>In Stock:{stock}</h4>
           <button>Add To Cart</button>

        </div>
    )
}

export default ProductCard;