import React from 'react'
import img from '../images/Troll-Face.png';

export default function Header () {
  return (
    <header className="header">
      <img src={img} alt="troll face" width="80" className="header--img"/>
      <div className="header--container">
        <h2 className="header--title">Meme Generator</h2>
        <p className="header--desc">React Course - Project 3</p>
      </div>
    </header>
  )
}
