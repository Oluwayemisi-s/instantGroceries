import React, {useState} from "react"

export default function LoginForm ( {setUser} ) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
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
    
        fetch("/login", {
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
            username: "",
            password: "",
          })
      }
    
      return (
        <form className = "signup-login-form" onSubmit={handleSubmit}>
          
          <label htmlFor="username">Username:</label>
          <input
            id="username-login-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password-login-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign In</button>
        </form>
      );

}