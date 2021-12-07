import React, { useEffect, useState } from "react"
import LoginSignUp from "./LoginSignUp"
import ProductContainer from "./ProductContainer"
import Header from "./Header"
import NavBar from "./NavBar"


export default function Login () {
    const [user, setUser] = useState(null)
    // const [hideForm, setHideForm] = useState(false)

    useEffect(()=> {
        fetch("/me")
        .then((res) => res.json())
        .then((user) => {
                setUser(user);
              })
    }, [])

    if (!user) return <LoginSignUp setUser = {setUser} />

    return(
        <div>
            <Header user = {user} setUser = {setUser}/>
            <NavBar/>
            {
                user ? 
                <ProductContainer user = {user}/> : <LoginSignUp setUser = {setUser} />
            }
        </div>
    )

}
