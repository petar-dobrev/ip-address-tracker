import { createContext, useState } from "react";
import { isValidDomain } from "../utils/isValidAddress";

const IpContext = createContext();
const IPIFY_URL = "https://geo.ipify.org/api/v2/country,city";
const IPIFY_API_KEY = "at_TkVUYo7jNxQubECoy6MYj4NBM691U";

export const IpProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [ipData, setIPData] = useState({});
  const [locationCoordinates, setLocationCoordinates] = useState([40.73, -73.93]);
  const [hideStats, setHideStats] = useState(false);
  const [alert, setAlert] = useState(null);

  let lookFor = "&ipAddress=";

  const fetchIp = async () => {
    if (isValidDomain(address)) {
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
    <IpContext.Provider
      value={{
        address,
        ipData,
        locationCoordinates,
        hideStats,
        alert,
        setAddress,
        setHideStats,
        fetchIp,
        setAlert,
      }}
    >
      {children}
    </IpContext.Provider>
  );
};

export default IpContext;
