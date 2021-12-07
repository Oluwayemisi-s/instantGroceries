function Search({ search, setSearch }){
    

    return (
        <div>
         <form className="searchbar" >
          <div className="ui input">
            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        <hr></hr>
        </div>
    )

}
export default Search;