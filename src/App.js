import "./index.css";
import Header from "./components/Header";
import IPData from "./components/IpData";
import Map from "./components/Map";
import { IpProvider } from "./context/IpContext";

function App() {
  return (
    <IpProvider>
      <div className="app-container">
        <Header title="IP Address Tracker" />
        <IPData />
        <Map />
      </div>
    </IpProvider>
  );
}

export default App;
