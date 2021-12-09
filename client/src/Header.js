//import { useState } from "react"
//import Cart from "./Cart"

export default function Header ( {user, setUser, count, setCount} ) {

    function handleLogout(){
        console.log("Logging out")
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
    }

    return(
        <div>
            <h1>Welcome to Instant Grocery Shop!</h1>
            {user ? <button onClick = {handleLogout}>Logout!</button> : null}
            <h3> 🛒 {count}</h3>
            <hr></hr>
        </div>
    )

}
