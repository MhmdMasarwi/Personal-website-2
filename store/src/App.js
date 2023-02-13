import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import HomePage from "./Pages/HomePage";
import Category from "./Pages/Category";
import ProductPage from "./Pages/ProductPage";
function HomePag() {
  return (
    <div>
      <HomePage />
      <ProductPage />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePag />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/category/:type" element={<Category />} />
      </Routes>
    </div>
  );
}
export default App;
