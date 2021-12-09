import CategoryCard from "./CategoryCard";
// import Search from "./Search";

function CategoryView({allCategories, user, setSearch, search, setCount}){


  
    const displayCategory = allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} user = {user} search={search} setSearch={setSearch} setCount = {setCount}/>;
      });

    return (
        <div>
          {displayCategory}
        </div>
    )
}
export default CategoryView;