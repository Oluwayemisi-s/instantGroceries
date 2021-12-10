import { useState } from "react"
import ProductView from "./ProductView";
function CategoryCard({category, user, search, setCount}){
    
    const [showProducts, setshowProducts ] = useState(false)
    const [productsInCategory,setProductInCategory] = useState([])
    
    const filteredProducts = productsInCategory.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

      function handleClick(){
          setshowProducts((showProducts) => !(showProducts))
          fetch(`/categories/${category.id}`)
          .then((res) => res.json())
          .then((data) => {
              setProductInCategory(data)
            });
      }

     return(
        <>
        <div className = "category-card">
            <h3  onClick = {handleClick}>{category.category_name}</h3>
            </div>
            {showProducts ? 
                <ProductView allProducts = {filteredProducts} user = {user} setCount = {setCount}/>: null
            }
        </>
    )
}

export default CategoryCard