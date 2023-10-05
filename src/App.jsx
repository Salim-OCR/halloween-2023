import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import SideBar from "./components/sideBar";

import Home from "./pages/Home";
import Mask from "./pages/Mask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mask" element={<Mask/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
