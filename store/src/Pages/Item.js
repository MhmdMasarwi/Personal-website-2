import React from "react";
import "./Item.css";
function Item({ data }) {
  console.log(data.data());
  return (
    <div className="item__container">
      <h5>{data.data().name}</h5>
      <img src={data.data().imgUrl} />
      <h6>price: {data.data().price}</h6>
      <h6>category: {data.data().category}</h6>
      <h6>IsIn: {data.data().inventory}</h6>
      <div className="action__buttons">
        <button className="action__buton">delete</button>
        <button className="action__buton">Update</button>
        <button className="action__buton">View Item</button>
      </div>
    </div>
  );
}

export default Item;
