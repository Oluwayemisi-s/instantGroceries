import { useState } from "react"
import ProductView from "./ProductView";
function CategoryCard({category}){
    
    const [showProducts, setshowProducts ] = useState(false)
    const [productsInCategory,setProductInCategory] = useState([])
    
        
      function handleClick(){
          setshowProducts((showProducts) => !(showProducts))
          fetch(`/categories/${category.id}`)
          .then((res) => res.json())
          .then((data) => {
              setProductInCategory(data)
            });
      }
     return(
        <div>
            <h3  onClick = {handleClick}>{category.category_name}</h3>
            {showProducts ? 
                <ProductView allProducts =  {productsInCategory}/>: null
            }

        </div>
    )
}

export default CategoryCard