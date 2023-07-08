import React from "react"
import Collage from "./assets/Collage.png"
import "./index.css"

export default function Hero(){
    return(
        <section className="Hero">
            <img src={Collage} alt="" className="hero--image"/>
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}