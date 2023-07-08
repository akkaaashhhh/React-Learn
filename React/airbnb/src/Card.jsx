import React from "react"
import "./index.css"
import Katiepic from './assets/katie.png'
import Star from './assets/star.png'
import './index.css'

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={props.img} className="card--image" />    
            <div className="card--stats">
                <img src={Star} alt="" className="card--star"/>    
                <span className="gray">{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) </span>
                <span>{props.country}</span>
            </div>        
            <p>{props.title}</p>
            <p><span className="bold">from {props.price}</span>/person</p>
        </div>
    )
}