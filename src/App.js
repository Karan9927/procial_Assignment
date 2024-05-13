import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main";
import Sidebar from "./Components/Sidebar";
import Organization from "./Pages/Organization";
import Assets from "./Pages/Assets";
import Trade from "./Pages/Trade";
import History from "./Pages/History";
import Wallet from "./Pages/Wallet";

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
