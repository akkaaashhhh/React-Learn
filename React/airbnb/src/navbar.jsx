import React from "react"
import airLogo from "./assets/airbnb.png"

export default function Navbar(){
    return(
        <nav>
            <img src={airLogo} alt="" className="nav--logo"/>
        </nav>
        
    )
}