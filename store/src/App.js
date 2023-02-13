import "./App.css";
// import ProductPage from "./Component/ProductPage";
import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import HomePage from "./Pages/HomePage";
import Categorys from "./Categorys.JS";
function HomePag() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePag />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/categorys" element={<Categorys />} />
      </Routes>
    </div>
  );
}
export default App;
