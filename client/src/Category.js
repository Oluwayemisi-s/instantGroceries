import React, { useState, useEffect } from "react"
import CategoryView from "./CategoryView";
function Category(){

    const [allCategories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
    return(
        <div>
           <CategoryView allCategories={allCategories}/>
        </div>
    )
}
export default Category