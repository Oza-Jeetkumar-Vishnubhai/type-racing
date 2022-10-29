import React from "react";
import Car_svg from "../assets/Images/Car_svg";
import "../CSS/track.css";

const Track = ({ cnt }) => {
  if (cnt < 0) {
    cnt = 0;
  }
  return (
    <div className="center trackContainer">
      <div className="me rev">
        <div className="left-car" style={{ bottom: `${cnt}px`,alignSelf:"center" }}>
          <Car_svg />
        </div>
      </div>
      <div className="friend"></div>
    </div>
  );
};

export default Track;
