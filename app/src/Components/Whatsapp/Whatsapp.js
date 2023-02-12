import React from "react";
import "./Whatsapp.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";

function Whatsapp() {
  return (
    <div className="container">
      <a href="https://web.whatsapp.com/send?phone=972502922600" target="blank">
         <IconButton className="iconbutton">
            <WhatsAppIcon fontSize="large" />
         </IconButton>
      </a>
    </div>
  );
}

export default Whatsapp;
