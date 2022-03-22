import { useContext } from "react";
import IPContext from "../context/IPContext";


function Search() {
   const {ip, setIP, fetchIP, setStatsAreHidden} = useContext(IPContext)
  
    const handleChange = (e) => {
       setIP(e.target.value)
    }

    const handleFocus = () => {
      if (window.innerHeight < 250) {
        setStatsAreHidden(true);
        } 
      }

    const handleBlur = () => {
      setStatsAreHidden(false);
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
        <button type="submit" className="button"><img src="./assets/icon-arrow.svg" alt="" /></button>
    </form>
  )
}

export default Search