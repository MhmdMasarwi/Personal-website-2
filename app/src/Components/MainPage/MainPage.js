import React from "react";
import "./MainPage.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
function ListItem({ text }) {
  return (
    <div className="list__item">
      <p>{text}</p>
      <KeyboardDoubleArrowDownIcon />
    </div>
  );
}
function MainPage() {
  return (
    <div className="mainpage">
    </div>
  );
}

export default MainPage;
