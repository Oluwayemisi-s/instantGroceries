import React, { useState } from "react";

export default function SignupForm( {setUser} ) {
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
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
    setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      })
  }

  return (
    <form className = "signup-login-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name-signup-input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="username">Username:</label>
      <input
        id="username-signup-input"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email-signup-input"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        className="password-signup-input"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        className="password-signup-input"
        type="password"
        name="password_confirmation"
        value={formData.password_confirmation}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};