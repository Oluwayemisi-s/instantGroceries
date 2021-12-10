function Search({ search, setSearch }){
    

    return (
        <div className = "search">
         <form className="searchbar" >
          <div className="ui input">
            <label>Search for a product:</label>
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        </div>
    )

}
export default Search;