import React from "react";
import { useNavigate } from "react-router-dom";
import Car_svg from "../assets/Images/Car_svg";
import "../CSS/track.css";

var al=false;
var winner="..."
const Track = ({ cnt, opcnt,myId,oppId }) => {
  // const [winner,setWinner] = useState("...")
  const navigate = useNavigate();
  if (cnt < 0) {
    cnt = 0;
  }
  if (opcnt < 0) {
    opcnt = 0;
  }
  if(cnt==120 && !al)
  {
    console.log(myId,"won")
    // alert(myId + "won")
    winner=myId
    navigate(`./winner/${myId}`)
    al=true;
  }
  al=false;
  if(opcnt==115)
  {
    console.log(oppId,"won")
    // alert(oppId + "won").
    navigate(`./looser/${oppId}`)
    winner=oppId
    al=true;
  }

  return (
    <>
    <div className="center trackContainer">
      <div className="me rev">
        <div
          className="left-car"
          style={{ bottom: `${cnt*5}px`, alignSelf: "center" }}
        >
          <Car_svg />
        </div>
      </div>
      <div className="friend rev">
        <div
          className="right-car"
          style={{ bottom: `${(opcnt+1)*5}px`, alignSelf: "center" }}
        >
            <Car_svg />
        </div>
      </div>
    </div>
    </>
  );
};

export default Track;
