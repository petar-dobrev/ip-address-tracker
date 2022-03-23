import { useContext } from "react";
import IpContext from "../context/IpContext";

function IpData() {

  const {ipData, hideStats} = useContext(IpContext)
  
  const locationCity = ipData?.location?.city || "";
  const locationCountry = ipData?.location?.country || "";
  
  const locationValue = `${locationCity} ${locationCountry}`
  const ipAddressValue = ipData?.ip || "";
  const timezoneValue = ipData?.location?.timezone || "";
  const ispValue = ipData?.isp || "";

  const composeStats = (statLabel, statValue) => {
      return (
        <div className="ip-data-stat">
            <h2 className="ip-data-stat-label">{statLabel}</h2>
            <h3 className="ip-data-stat-value">{statValue}</h3>
        </div>
      )
  } 
  
      return hideStats === false && (
    <div className="ip-data-container">
        <div className="ip-data-stats">
            {composeStats("IP ADDRESS", ipAddressValue)}
            {composeStats("LOCATION", locationValue)}
            {composeStats("TIMEZONE", timezoneValue)}
            {composeStats("ISP", ispValue)}
        </div>
    </div>
  )
}

export default IpData