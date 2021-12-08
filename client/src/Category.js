import React, { useState, useEffect } from "react"
import CategoryView from "./CategoryView";


function Category({user}){

    const [allCategories, setCategories] = useState([]);
    //const [search, setSearch] = useState("");
    useEffect(() => {
        fetch("/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);

    return(
        <div>
           <CategoryView allCategories={allCategories} user = {user} />
        </div>
    )
}
export default Category