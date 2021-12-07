function Search({ search, setSearch }){
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submitted");
      }
    return (
        <div>
         <form className="searchbar" onSubmit={handleSubmit}>
          <div className="ui input">
            <input
              type="text"
              placeholder="Search Recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <hr></hr>
          </div>
          <button type="submit">🔍</button>
        </form>
        </div>
    )

}
export default Search;