import { useContext } from "react";

import { FaTimes } from "react-icons/fa"
import IpContext from "../context/IpContext";

function Alert() {
  const {alert, setAlert} = useContext(IpContext);

  const handleClick = () => {
      setAlert(null)
  }

  return !!alert && (
    <div className="alert">
        {alert}
        <button 
        className="button button-alert"
        onClick={handleClick}>
            <FaTimes />
        </button>
    </div>
  )
}

export default Alert