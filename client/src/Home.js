import React, { useEffect, useState } from "react"
import LoginSignUp from "./LoginSignUp"
import ProductContainer from "./ProductContainer"
import Header from "./Header"
import NavBar from "./NavBar"


export default function Login () {
    const [user, setUser] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(()=> {
        fetch("/me")
        .then((res) => res.json())
        .then((user) => {
                setUser(user);
              })
    }, [])

    useEffect(() => {
        fetch("/cartitems")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.length)
            setCount(data.length) 
      });
    }, [])

    if (!user) return <LoginSignUp setUser = {setUser} />


    return(
        <div>
            <Header user = {user} setUser = {setUser} setCount = {setCount} count = {count}/>
            <NavBar count = {count}/>
            {
                user ? 
                <ProductContainer user = {user} setCount = {setCount}/> : <LoginSignUp setUser = {setUser} />
            }
        </div>
    )

}
