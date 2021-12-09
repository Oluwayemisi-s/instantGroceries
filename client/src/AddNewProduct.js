import React, { useEffect, useState } from "react";
import Error from "./Errors";

function AddNewProduct({user}){
  const [errors, setErrors] = useState([])  
  const [formData, setFormData] = useState({
        name: "",
        category_id: "",
        product_description: "",
        image: "",
        price: "",
        stock: ""
      });
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories")
          .then((res) => res.json())
          .then((data) => {
              setCategories(data)
            });
    }, [])
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting form ...")
    
        const newProduct = { ...formData };
    
        fetch("/products/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }).then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              console.log(data);
            });
          } else {
            res.json().then((err) => {
              setErrors(err.errors);
            });
          }
        });
        setFormData({
            name: "",
            category_id: "",
            product_description: "",
            image: "",
            price: "",
            stock: ""
          })
      }

    const options = categories.map(category => <option key = {category.id} value={category.id}>{category.category_name}</option>)

    return(
        <div>
            <form className = "signup-login-form" onSubmit={handleSubmit}>
                <fieldset>
                <legend>Enter Product Details:</legend>

                {errors.map((err) => (<Error key={err}>{err}</Error>))}

                <label htmlFor="name:">Product Name:</label>
                <input
                    id="product-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <br/>

                <label htmlFor="Product-description">Product Description:</label>
                <input
                    id="product-description"
                    type="text"
                    name="product_description"
                    value={formData.product_description}
                    onChange={handleChange}
                />
                
                <br/>

                <label htmlFor="Product-category">Select Product Category:</label>
                <select
                    id="product-category"
                    name="category_id"
                    required
                    onChange={handleChange} >
                        <option value="">None</option>
                        {options}
                </select>

                <br/>

                <label htmlFor="image">Image Url:</label>
                
                <input
                    id="product-image"
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                
                <br/>

                <label htmlFor="stock">Stock Amount:</label>
                <input
                    className="stock-input"
                    type="number"
                    name="stock"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br/>

                <label htmlFor="product-price">Price:</label>
                <input
                    className="product-price-input"
                    type="float"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />

                <br/>

                <button type="submit">Add product</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AddNewProduct