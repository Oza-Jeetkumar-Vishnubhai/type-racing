import React from 'react'
import { useEffect } from 'react'
import loosingAudio from '../assets/Music/looser.mp3'

import "../CSS/winner.css"
const Looser = () => {
    const looser = new Audio(loosingAudio);
    useEffect(()=>{
        looser.play();
    },[])
  return (
    <div className="winner">
        Better Luck Next Time
    </div>
  )
}

export default Looser
