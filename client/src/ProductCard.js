
import React, { useState } from "react";
import Error from "./Errors";

function ProductCard({product, user, setCount, onDelete}){   
    
    const [errors, setErrors] = useState([])
    
    const [cartItem, setCartItem] = useState({
        product_id: product.id,
        user_id: user.id,
        quantity: ""
    })

    function handleChange(e){
        setCartItem({...cartItem, [e.target.name]: e.target.value})    
    }

    function handleDelete(){
      
      fetch(`/products/${product.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then (res => {
        if (res.ok){
          onDelete(product)
        } else {
          res.json().then((err) => {
            setErrors(err.errors);
          });
        }
      })
    }
 
    function handleAddToCart(){
        
        // const newStock = product.stock - cartItem.quantity
        if (cartItem.quantity > product.stock){
            return "Quantity is more than what is available in stock"
        } else {
        fetch("/carts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
          }).then((res) => {
            if (res.ok) {
              res.json().then((data) => {
                console.log("Posted");
                fetch("/cartitems")
                .then((res) => res.json())
                .then((data) => {
                console.log(data.length)
                setCount(data.length) 
              });
              });
            } else {
              res.json().then((err) => {
                setErrors(err.errors);
              });
            }
          })
        
        }
      };
    
    return (
      <div class="card-form">
        <div class="card-form-group">
          {errors.map((err) => (<Error key={err}>{err}</Error>))}
            <img src = {product.image} alt = "product" width = "200px"/>
            <h3>{product.name}</h3>
            <details>
                <summary>Product details</summary>
                <small>{product.product_description}</small>
            </details>
            <h5>Price:${product.price}</h5>
            <h5>In Stock:{product.stock}</h5>
            <label htmlFor="Qty">Qty:</label>
            <select onChange = {handleChange} name="quantity" id="quantity" required>
                <option value="">select</option>
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
            <button onClick = {handleAddToCart}>{product.stock > 0 ? "Add 🛒" : "Out of Stock"}</button>
            <br/>
            <button onClick = {handleDelete}>Delete Product</button>
        </div>
        </div>
    )
}

export default ProductCard;