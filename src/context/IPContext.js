import { createContext, useState } from "react";

const IPContext = createContext();
const IPIFY_URL = "https://geo.ipify.org/api/v2/country,city";
const IPIFY_API_KEY = "at_TkVUYo7jNxQubECoy6MYj4NBM691U";

export const IPProvider = ({ children }) => {
  const [ip, setIP] = useState("");
  const [ipData, setIPData] = useState({});
  const [locationCoordinates, setLocationCoordinates] = useState([40.73, -73.93]);
  const [statsAreHidden, setStatsAreHidden] = useState(false);

  const fetchIP = async () => {
    const response = await fetch(`${IPIFY_URL}?apiKey=${IPIFY_API_KEY}&ipAddress=${ip}`);
    const data = await response.json();
    setIPData(data);
    setLocationCoordinates([data.location.lat, data.location.lng]);
  };

  return (
    <IPContext.Provider
      value={{
        ip,
        ipData,
        locationCoordinates,
        statsAreHidden,
        setIP,
        setStatsAreHidden,
        fetchIP,
      }}
    >
      {children}
    </IPContext.Provider>
  );
};

export default IPContext;
