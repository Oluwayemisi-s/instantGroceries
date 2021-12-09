
import {Link} from "react-router-dom"
function NavBar( {count} ){
return(
    <div>
     <ul>
        <Link to="/products">Products </Link >
        <Link to = "/categories"> Categories</Link >
        <Link to = "/addnewproduct"> Add New Product</Link >
        <Link to = "/cart">🛒 {count} </Link > 
     </ul>
     <hr></hr>
    </div>
)
}

export default NavBar