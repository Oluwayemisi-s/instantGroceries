
import { NavLink } from "react-router-dom"
import styled from "styled-components";
function NavBar(){
return(
    <div>
     <ul>
         <StyledNavContainer>
             <StyledLinks>
        <TestNavLinkStyle to="/products"> Products </TestNavLinkStyle >
        </StyledLinks>
        <StyledLinks>
        <TestNavLinkStyle to = "/categories"> Categories</TestNavLinkStyle >
        </StyledLinks>
        <StyledLinks>
        <TestNavLinkStyle to = "/addnewproduct"> Add New Product</TestNavLinkStyle >
        </StyledLinks>
        <StyledLinks>
        <TestNavLinkStyle to = "/cart"> Cart </TestNavLinkStyle > 
        </StyledLinks>
        </StyledNavContainer>
     </ul>
    
    </div>
)
}

export default NavBar

const StyledNavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
  font-family: "Zen Antique", serif;
  justify-content: center;
`;
const StyledLinks = styled.li`
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Zen Antique", serif;
  justify-content: center;
`;

const TestNavLinkStyle = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Zen Antique", serif;
`;