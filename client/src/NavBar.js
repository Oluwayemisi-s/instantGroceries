

import { Link} from "react-router-dom"

function NavBar({count}){
return(
    <div className = "navbar">
     <ul>

        <Link to="/products"> Products </Link >
        <Link to = "/categories"> Categories</Link >
        <Link to = "/addnewproduct"> Add New Product</Link >
        <Link to ="/cart">🛒 {count} Cart </Link > 
     </ul>
   
    </div>
)
}

export default NavBar

// const StyledNavContainer = styled.ul`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap
//   font-family: "Zen Antique", serif;
//   justify-content: center;
  
  
// `;
// const StyledLinks = styled.li`
//   display: flex;
//   font-size: 2em;
//   justify-content: space-around;
//   margin: 100px;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   font-family: "Zen Antique", serif;
//   justify-content: center;
//   text-decoration:none;
// `;

// const TestNavLinkStyle = styled(NavLink)`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   font-family: "Zen Antique", serif;
// `;