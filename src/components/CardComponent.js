import React from 'react'
import './style.scss'
import defaultPic from './defaultPic.png'

const CardComponent = () => {
    return (
        <div className="card">
            <img className="cardImg" src={defaultPic}></img>
            <div>
                <h4 className="title">Title of Card</h4>
                <p className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <button className="btn">Button</button>
            </div>
        </div>
    )
}

export default CardComponent