import React from "react"
import './styles.css';
import ReactLogo from './assets/reactlogo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={ReactLogo} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}