
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
        <div>
            <h1>Welcome to Instant Grocery Shop!</h1>
            {user ? <button onClick = {handleLogout}>Logout!</button> : null}
            <hr></hr>
        </div>
    )

}
