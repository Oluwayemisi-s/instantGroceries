import React, { useState } from "react";
import Error from "./Errors";

export default function SignupForm( {setUser, handleFormDisplay} ) {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting form ...")

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setFormData({
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
          })
        });
      } else {
        res.json()
        .then((err) => setErrors(err.errors));
      }
    });

  }

  return (
     <div>
        <form className = "signup-login-form" onSubmit={handleSubmit}>
        <fieldset>
        <legend>Sign up for an account:</legend>

        {errors.map((err) => (<Error key={err}>{err}</Error>))}

            <label htmlFor="name">Name:</label>
            <input
                id="name-signup-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="username">Username:</label>
            <input
                id="username-signup-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
                id="email-signup-input"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
                className="password-signup-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                className="password-signup-input"
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
            />
            <br/>
            <button type="submit">Sign Up</button>
        </fieldset>
        </form>
        <h3>Already have an account? <button onClick = {handleFormDisplay}>Log In Now!</button></h3>
    </div> 
  );
};