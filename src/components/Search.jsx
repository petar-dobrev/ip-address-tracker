import { useContext } from "react";
import IPContext from "../context/IPContext";


function Search() {
   const {ip, setIP, fetchIP} = useContext(IPContext)
  
    const handleChange = (e) => {
       setIP(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            fetchIP()
    }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="search-input"
        placeholder="Search for any IP address or domain"
        value={ip}
        onChange={handleChange}/>
        <button type="submit" className="button"><img src="./assets/icon-arrow.svg" alt="" /></button>
    </form>
  )
}

export default Search