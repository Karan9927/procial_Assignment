import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Organization from "./Organization";
import Assets from "./Assets";
import Trade from "./Trade";
import History from "./History";
import Wallet from "./Wallet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Organization" element={<Organization />} />
            <Route path="/Assets" element={<Assets />} />
            <Route path="/Trade" element={<Trade />} />
            <Route path="/History" element={<History />} />
            <Route path="/Wallet" element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
