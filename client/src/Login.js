import React, { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import ProductContainer from "./ProductContainer"
import Header from "./Header"
import NavBar from "./NavBar"


export default function Login () {
    const [user, setUser] = useState(null)

    return(
        <div>
            <Header />
            <LoginForm setUser = {setUser}/>
            <SignUpForm setUser = {setUser}/>
            <NavBar/>
            {
                user ? 
                <ProductContainer user = {user}/> : null
            }
        </div>
    )

}
