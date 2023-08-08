import React from "react"
import Logo from "./assets/headerlogo.png"
import './styles.css'

export default function Header(){
    return (
        <>
        <header className="header"> 
            <img src={Logo} alt=""  className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React course - Project 3</h3>
        </header>
        </>
    )
}