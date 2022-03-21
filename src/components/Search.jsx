function Search() {
  return (
    <form className="search-container">
        <input 
        type="text" 
        className="search-input"
        placeholder="Search for any IP address or domain"/>
        <button type="submit" className="button"><img src="./assets/icon-arrow.svg" alt="" /></button>
    </form>
  )
}

export default Search