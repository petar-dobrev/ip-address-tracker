import { useContext, useEffect } from "react";
import IpContext from "../context/IpContext";
import { isValidAddress } from "../utils/isValidAddress";
import Alert from "./Alert";

function Search() {
   const {address, setAddress, fetchIp, setHideStats, setAlert} = useContext(IpContext)

    useEffect(() => {
      fetchIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleChange = (e) => {
       setAddress(e.target.value)
    }

    const handleFocus = () => {
      const minHeightFullApp = 250;

      if (window.innerHeight < minHeightFullApp) {
        setHideStats(true);
        } 
      }

    const handleBlur = () => {
      setHideStats(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (address === "") {
          setAlert("Please enter something")
        } else if (!isValidAddress(address)) {
            setAlert("Please enter a valid IP or domain address")
          } else {fetchIp()}     
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