import React, { useEffect, useState } from "react";
import "../CSS/home.css";
import $ from "jquery";
import Track from "./Track";

const Home = () => {
  const [randomText, setRandomText] = useState("");
  const [preRandomText, setPreRandomText] = useState("");
  const [inp, setInp] = useState("");
  const [cnt, setCnt] = useState(0);
  const [ptr, setPtr] = useState(0);
  const [bcolor, setBcolor] = useState("green");

  // const genVib = () => {

  // };

  const fetchSentence = async () => {
    const sentence = await fetch(
      "https://random-word-api.herokuapp.com/word?number=5"
    );
    const parsedSentence = await sentence.json();
    const words = parsedSentence.join(" ");
    setPreRandomText(words);
    return words;
    // setRandomText(parsedSentence[0].word)
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
  };

  useEffect(() => {
    const fun = async () => {
      const rt = await fetchSentence();
      console.log(rt);
      setRandomText(rt);
    };
    fun();
  }, []);

  return (
    <>
      <div className="center sticky-top">
        <div
          className="input-text"
          data-highlightword={randomText.substring(0, ptr)}
          style={{ border: `4px solid ${bcolor}` }}
        >
          {randomText}
        </div>
      </div>
      {cnt}
      <Track cnt={cnt} />

      <div className="center sticky-bottom" id="typing-pad">
        <div className="typing-pad">
          <input
            type="text"
            name="typing-pad"
            value={inp}
            onChange={inpHandler}
            id="inp"
          />
          {/* <Status /> */}
          {/* {inp.length!=""?()=>(<img src="" alt={status} />):()=>(<></>)} */}
        </div>
      </div>
    </>
  );
};

export default Home;
