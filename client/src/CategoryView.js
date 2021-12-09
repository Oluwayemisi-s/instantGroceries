import CategoryCard from "./CategoryCard";
// import Search from "./Search";

function CategoryView({allCategories, user, setSearch, search}){


  
    const displayCategory = allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} user = {user} search={search} setSearch={setSearch}/>;
      });

    return (
        <div>
          {/* <Search search={search} setSearch={setSearch} />  */}
          {displayCategory}
        </div>
    )
}
export default CategoryView;