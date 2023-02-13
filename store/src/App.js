import "./App.css";
// import ProductPage from "./Component/ProductPage";
import { Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return <div>this is home page</div>;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
