import { useContext } from "react";
import IPContext from "../context/IPContext";

function IPData() {

  const {ipData, statsAreHidden} = useContext(IPContext)
  
  const locationCity = ipData?.location?.city || "";
  const locationCountry = ipData?.location?.country || "";
  
  const locationValue = `${locationCity} ${locationCountry}`
  const ipAddressValue = ipData?.ip || "";
  const timezoneValue = ipData?.location?.timezone || "";
  const ispValue = ipData?.isp || "";

  const generateStats = (statLabel, statValue) => {
      return (
        <div className="ip-data-stat">
            <h2 className="ip-data-stat-label">{statLabel}</h2>
            <h3 className="ip-data-stat-value">{statValue}</h3>
        </div>
      )
  } 
  
      return statsAreHidden === false && (
    <div className="ip-data-container">
        <div className="ip-data-stats">
            {generateStats("IP ADDRESS", ipAddressValue)}
            {generateStats("LOCATION", locationValue)}
            {generateStats("TIMEZONE", timezoneValue)}
            {generateStats("ISP", ispValue)}
        </div>
    </div>
  )
}

export default IPData