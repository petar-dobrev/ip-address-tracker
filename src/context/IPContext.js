import { createContext, useState } from "react";
import checkIfDomain from "../utils/checkIfDomain";

const IPContext = createContext();
const IPIFY_URL = "https://geo.ipify.org/api/v2/country,city";
const IPIFY_API_KEY = "at_TkVUYo7jNxQubECoy6MYj4NBM691U";

export const IPProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [ipData, setIPData] = useState({});
  const [locationCoordinates, setLocationCoordinates] = useState([40.73, -73.93]);
  const [statsAreHidden, setStatsAreHidden] = useState(false);
  const [alert, setAlert] = useState(null);

  let lookFor = "&ipAddress=";

  const fetchIP = async () => {
    if (checkIfDomain(address)) {
      lookFor = "&domain=";
    }

    const response = await fetch(`${IPIFY_URL}?apiKey=${IPIFY_API_KEY}${lookFor}${address}`);
    if (!response.ok) {
      if (response.status === 400 || response.status === 422) {
        setAlert("Something went wrong. Are you sure you entered a valid IP or domain address?");
      }
    }
    const data = await response.json();
    setIPData(data);
    setLocationCoordinates([data.location.lat, data.location.lng]);
    setAlert(null);
  };

  return (
    <IPContext.Provider
      value={{
        address,
        ipData,
        locationCoordinates,
        statsAreHidden,
        alert,
        setAddress,
        setStatsAreHidden,
        fetchIP,
        setAlert,
      }}
    >
      {children}
    </IPContext.Provider>
  );
};

export default IPContext;
