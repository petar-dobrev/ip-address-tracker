import "./index.css";
import Header from "./components/Header";
import IPData from "./components/IPData";
import Map from "./components/Map";

function App() {
  return (
    <div className="app-container">
      <Header />
      <IPData />
      <Map />
    </div>
  );
}

export default App;
