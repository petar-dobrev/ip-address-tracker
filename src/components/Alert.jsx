import { useContext } from "react";

import { FaTimes } from "react-icons/fa"
import IPContext from "../context/IPContext";

function Alert() {
  const {alert, setAlert} = useContext(IPContext);

  const handleClick = () => {
      setAlert(null)
  }

  return alert !== null && (
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