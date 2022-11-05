import React, { useEffect, useState } from "react";
import "../CSS/home.css";
import $ from "jquery";
import Track from "./Track";
import Peer from "peerjs";
import conAudio from "../assets/Music/connected.mp3";

var peer;
var conn;
const Home = () => {
  const [randomText, setRandomText] = useState("");
  const [preRandomText, setPreRandomText] = useState("");
  const [inp, setInp] = useState("");
  const [cnt, setCnt] = useState(0);
  const [opcnt, setOpcnt] = useState(0);
  const [ptr, setPtr] = useState(0);
  const [bcolor, setBcolor] = useState("green");
  const [connected, setConnected] = useState(false);
  const [conn, setConnect] = useState({});
  const [myId, setMyId] = useState("");
  const [p, setP] = useState({});
  const [oppId, setOppId] = useState("");

  const conMusic = new Audio(conAudio);

  const fetchSentence = async () => {
    const sentence = await fetch(
      "https://random-word-api.herokuapp.com/word?number=5"
    );
    const parsedSentence = await sentence.json();
    const words = parsedSentence.join(" ");
    setPreRandomText(words);
    return words;
  };

  const send = () => {
    // const conn = p.connect(oppId);
    // conn.on('open', () => {
    // console.log(p);
    console.log(conn);
    conn.send(cnt);
    // });
  };

  const inpHandler = async () => {
    let newInp = $("#inp").val();
    if (newInp.length - 1 < ptr) {
    }
    if (
      newInp[newInp.length - 1].toUpperCase() == randomText[ptr].toUpperCase()
    ) {
      setInp(newInp);
      setCnt((cnt) => cnt + 1);
      setPtr((ptr) => ptr + 1);
      setBcolor("green");
    } else {
      setInp(inp);
      cnt ? setCnt((cnt) => cnt - 1) : setCnt(0);
      setBcolor("red");
    }
    if (randomText.length - 1 - 10 == ptr) {
      const rt = await fetchSentence();
      setPreRandomText(rt);
    }
    if (randomText.length - 1 == ptr) {
      setInp("");
      setPtr(0);
      setRandomText(preRandomText);
    }
    send();
  };

  // const navigate = useNavigate();

  const changeHandler = () => {
    setOppId($("#oppId").val());
  };
  const connect = () => {
    const conn = p.connect(oppId);
    setConnect(conn);
    conn.on("open", () => {
      conn.send("connected");
      setConnected(true);
      conMusic.play();
    });
    console.log(p);
    console.log(typeof p);
    // navigate(`/racing/${myId}`,{state:{myId:myId,oppId:oppId,peer:p}});
    // myId:myId,oppId:oppId
  };

  useEffect(() => {
    const fun = async () => {
      const rt = await fetchSentence();
      setRandomText(rt);
    };
    fun();
    const peer = new Peer();
    console.log(peer);
    peer.on("open", (id) => {
      setMyId(id);
      console.log(id);
      setP(peer);
    });
    peer.on("connection", (conn) => {
      conn.on("data", (data) => {
        console.log(data);
        setOpcnt(data);
      });
      console.log("connected");
    });
    peer.on("data", (data) => {
      console.log("received msg = ", data);
    });
  }, []);

  return (
    <>
      <div className="center">
        connect peer
        <br />
        {myId}
        <input type="text" name="peerId" id="oppId" onChange={changeHandler} />
        <button onClick={connect}>Ok</button>
        <span style={{ display: connected ? "" : "none" }}>&#9989;</span>
      </div>

      <div className="center sticky-top">
        <div
          className="input-text"
          data-highlightword={randomText.substring(0, ptr)}
          style={{ border: `4px solid ${bcolor}` }}
        >
          {randomText}
        </div>
      </div>
      <Track cnt={cnt} peer={peer} opcnt={opcnt} myId={myId} oppId={oppId} />

      <div className="center sticky-bottom" id="typing-pad">
        <div className="typing-pad">
          <input
            type="text"
            name="typing-pad"
            value={inp}
            onChange={inpHandler}
            id="inp"
          />
          {/* <Status />
          {inp.length!=""?()=>(<img src="" alt={status} />):()=>(<></>)} */}
        </div>
      </div>
    </>
  );
};

export default Home;
