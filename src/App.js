import "./index.css";
import { IpProvider } from "./context/IpContext";
import Header from "./components/Header";
import IPData from "./components/IpData";
import Map from "./components/Map";

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
