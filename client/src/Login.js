import React, { useState } from "react"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"
import ProductContainer from "./ProductContainer"
import Header from "./Header"


export default function Login () {
    const [user, setUser] = useState(null)

    return(
        <div>
            <Header />
            <LoginForm setUser = {setUser}/>
            <SignUpForm setUser = {setUser}/>
            {
                user ? 
                <ProductContainer user = {user}/> : null
            }
        </div>
    )

}
