import { useContext } from "react";
import IPContext from "../context/IPContext";


function Search() {
   const {ip, setIP, fetchIP, setStatsAreHidden} = useContext(IPContext)
  
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
        onChange={handleChange}
        onFocus={() => {
          if (window.innerHeight < 250) {
            setStatsAreHidden(true);
            console.log("true")
          }
          console.log("true2")
        }}
        onBlur={() => {
          setStatsAreHidden(false);
        }}/>
        <button type="submit" className="button"><img src="./assets/icon-arrow.svg" alt="" /></button>
    </form>
  )
}

export default Search