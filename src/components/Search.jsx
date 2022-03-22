import { useContext } from "react";
import IPContext from "../context/IPContext";
import checkIfDomainOrIp from "../utils/checkIfDomainOrIp";
import Alert from "./Alert";


function Search() {
   const {address, setAddress, fetchIP, setStatsAreHidden, setAlert} = useContext(IPContext)
  
    const handleChange = (e) => {
       setAddress(e.target.value)
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

        if (address === "") {
          setAlert("Please enter something")
        } else if (!checkIfDomainOrIp(address)) {
            setAlert("Please enter a valid IP or domain address")
          } else {fetchIP()}     
    }

  return (
    <>
      <form className="search-container" onSubmit={handleSubmit}>
          <input
          type="text"
          className="search-input"
          placeholder="Search for any IP address or domain"
          value={address}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
          <button type="submit" className="button button-search"><img src="./assets/icon-arrow.svg" alt="" /></button>
      
      </form>
      <Alert />
    </>
  )
}

export default Search