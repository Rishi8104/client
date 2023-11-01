import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Navigationbar from "./component/Navigationbar";
import Home from "./page/Home";
import Ragister from "./page/Ragister";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Ragister" element={<Ragister />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
