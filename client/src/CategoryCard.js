function CategoryCard({category: {category_name}}){
    return(
        <div>
           <li>
               <h3>{category_name}</h3>
           </li>
        </div>
    )
}

export default CategoryCard