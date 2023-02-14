import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductPage.css";

function handleCategorySelect(category) {
  console.log(`Selected category: ${category}`);
}
const ImageSquareButtons = () => {
  return (
    <div className="button-container">
      <Link to="/category/category1">
        <Button
          onClick={() => handleCategorySelect("")}
          title=""
          className="Button"
        >
          category 1
        </Button>
      </Link>
      <Link to="/category/category2">
        <Button
          onClick={() => handleCategorySelect("")}
          title=""
          className="ButtonB"
        >
          category 2
        </Button>
      </Link>
      <Link to="/category/category3">
        <Button
          onClick={() => handleCategorySelect("")}
          title=""
          className="ButtonC"
        >
          category 3
        </Button>
      </Link>
      <Link to="/additem">
        <button>add product</button>
      </Link>
    </div>
  );
};

export default ImageSquareButtons;
