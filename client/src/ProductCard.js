
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
          <label htmlFor="Qty">Qty:</label>
          <select name="quantity" id="quantity" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
           <button>Add To Cart</button>

        </div>
    )
}

export default ProductCard;