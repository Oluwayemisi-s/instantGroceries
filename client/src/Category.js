import React, { useState, useEffect } from "react"
import CategoryView from "./CategoryView";
import Error from "./Errors";


function Category({user, search, setSearch, setCount}){

    const [allCategories, setCategories] = useState([]);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/categories")
          .then((res) => {
            if (res.ok) {
              res.json().then((data) => setCategories(data));
            } else {
              res.json().then((err) => setErrors(err.errors));
            }
          })    
      }, []);

      

    return(
        <div>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
           <CategoryView allCategories={allCategories} user = {user} search={search} setSearch={setSearch} setCount = {setCount}/>
        </div>
    )
}
export default Category