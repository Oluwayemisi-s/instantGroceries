import React, {useState} from "react"

export default function LoginForm ( {setUser, handleFormDisplay} ) {
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
        <div>
            <form className = "signup-login-form" onSubmit={handleSubmit}>
            <fieldset>
            <legend>Log into your account:</legend>
            <label htmlFor="username">Username:</label>
            <input
                id="username-login-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
                id="password-login-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
             <br/>
            <button type="submit">Sign In</button>
            </fieldset>
            </form>
            <h3>Don't have an account yet? <button onClick = {handleFormDisplay}>Sign Up Now!</button></h3>
        </div>
      );

}