import "./index.css";
import Header from "./components/Header";
import IPData from "./components/IPData";
import Map from "./components/Map";
import { IPProvider } from "./context/IPContext";

function App() {
  return (
    <IPProvider>
      <div className="app-container">
        <Header title="IP Address Tracker" />
        <IPData />
        <Map />
      </div>
    </IPProvider>
  );
}

export default App;
