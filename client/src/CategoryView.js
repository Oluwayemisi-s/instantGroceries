import CategoryCard from "./CategoryCard";
// import Search from "./Search";
function CategoryView({allCategories}){
    const displayCategory = allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      });

    return (
        <div>
          {/* <Search search={search} setSearch={setSearch} />  */}
          {displayCategory}
        </div>
    )
}
export default CategoryView;