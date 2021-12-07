
export default function Header ( {setUser} ) {

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
            <h1>Welcome to your favorite grocery store!</h1>
            <button onClick = {handleLogout}>Logout!</button>
        </div>
    )

}
