import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_functions/handleGetProduct";
import Card from "./Card";
function Category3() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category3" });
    data.then((obj) => {
      setObjData([...obj]);
    });
  }, []);
  return (
    <div className="card-container">
      {objData.map((item, index) => {
        return (
          <div className="product-card" key={index}>
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Category3;
