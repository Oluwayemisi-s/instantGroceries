import CategoryCard from "./CategoryCard";
function CategoryView({allCategories}){
    const displayCategory = allCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      });

    return (
        <div>
          {displayCategory}
        </div>
    )
}
export default CategoryView;