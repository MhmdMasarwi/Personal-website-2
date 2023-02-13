import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import {  Link } from "react-router-dom";
import "./ProductPage.css";


function handleCategorySelect(category) {
  console.log(`Selected category: ${category}`);
}
const ImageSquareButtons = () => {
  return (
    <div className="button-container">
      <Link to="/">
        <Button
          onClick={() => handleCategorySelect("")}
          title=""
          className="Button"
        />
      </Link>
      <Link to="/">
        <Button
          onClick={() => handleCategorySelect("")}
          title=""
          className="ButtonB"
        />
      </Link>
      <Link to="/">
      <Button
        onClick={() => handleCategorySelect("")}
        title=""
        className="ButtonC"
      />
      </Link>
    </div>
  );
};

export default ImageSquareButtons;