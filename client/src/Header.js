//import { useState } from "react"
//import Cart from "./Cart"

export default function Header ( {user, setUser} ) {

    function handleLogout(){
        console.log("Logging out")
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
    }

    return(
        <div className = "header">
            <h1>The Instant Grocery Shop!</h1>
            <div className = "inside-header">
            {user ? <button onClick = {handleLogout}>Logout!</button> : null}
            {/* <h3> 🛒 {count}</h3>   */}
            </div>  
        </div>
    )

}
