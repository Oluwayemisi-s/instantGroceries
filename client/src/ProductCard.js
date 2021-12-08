
import React, { useState } from "react";

function ProductCard({product, user}){   
    //console.log(user)
    const [errors, setErrors] = useState([])
    
    const [cartItem, setCartItem] = useState({
        product_id: product.id,
        user_id: user.id,
        quantity: ""
    })

    function handleChange(e){
        setCartItem({...cartItem, [e.target.name]: e.target.value})    
    }
 
    function handleAddToCart(){
        console.log("adding...")
        console.log(cartItem)
        const newStock = product.stock - cartItem.quantity
        if (cartItem.quantity > product.stock){

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
              });
            } else {
              res.json().then((err) => {
                setErrors(err.errors);
              });
            }
          })};

          fetch(`/products/${product.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...product, stock: newStock}),
          }).then((res) => {
            if (res.ok) {
              res.json().then((data) => {
                console.log("Updated");
              });
            } else {
              res.json().then((err) => {
                setErrors(err.errors);
                console.log(err.errors)
              });
            }
          })};
    
    return (
        <div>
            <img src = {product.image} alt = "product" width = "200px"/>
            <h3>{product.name}</h3>
            <details>
                <summary>Details</summary>
                <small>{product.product_description}</small>
            </details>
            <h4>Price:${product.price}</h4>
            <h4>In Stock:{product.stock}</h4>
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
            <button onClick = {handleAddToCart}>{product.stock > 0 ? "Add To Cart" : "Out of Stock"}</button>
        </div>
    )
}

export default ProductCard;