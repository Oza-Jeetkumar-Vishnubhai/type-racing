import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import "../CSS/winner.css"
import winningAudio from "../assets/Music/winner.mp3"

const Winner = () => {
    const location = useLocation();
    useEffect(()=>{
      const gameover = new Audio(winningAudio);
      gameover.play()
    },[])
  return (
    <div className="winner">
      {location.pathname.split('/')[2]} won the match
    </div>
  )
}

export default Winner
