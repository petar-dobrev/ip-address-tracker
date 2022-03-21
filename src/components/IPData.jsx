import { useContext } from "react";
import IPContext from "../context/IPContext";

function IPData() {

  const {ipData} = useContext(IPContext)
      
  return (
    <div className="ip-data-container">
        <div className="ip-data-stats">
            <div className="ip-data-stat">
                <h2 className="ip-data-stat-label">IP ADDRESS</h2>
                <h3 className="ip-data-stat-value">{ipData.ip ? ipData.ip : ""}</h3>
            </div>
            <div className="ip-data-stat">
                <h2 className="ip-data-stat-label">LOCATION</h2>
                <h3 className="ip-data-stat-value">{ipData.location ? `${ipData.location.city}, ${ipData.location.country}` : ""}</h3>
            </div>
            <div className="ip-data-stat">
                <h2 className="ip-data-stat-label">TIMEZONE</h2>
                <h3 className="ip-data-stat-value">{ipData.location ? ipData.location.timezone : ""}</h3>
            </div>
            <div className="ip-data-stat">
                <h2 className="ip-data-stat-label">ISP</h2>
                <h3 className="ip-data-stat-value">{ipData.isp ? ipData.isp : ""}</h3>
            </div>
        </div>
    </div>
  )
}

export default IPData